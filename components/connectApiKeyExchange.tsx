import { ExclamationIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { BransferApiClient } from '../lib/bransferApiClients';
import TokenService from '../lib/TokenService';
import { Exchange } from '../Models/Exchange';
import SubmitButton from './buttons/submitButton';

type Props = {
    exchange: Exchange,
    onClose: () => void
}

const ConnectApiKeyExchange: FC<Props> = ({ exchange, onClose }) => {
    const [key, setKey] = useState("")
    const [secret, setSecret] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const router = useRouter();
    const [keyphrase, setKeyphrase] = useState("")

    useEffect(() => {
        setLoading(false)
    }, [exchange])

    const handleKeyChange = (e) => {
        setKey(e?.target?.value)
    }
    const handleSecretChange = (e) => {
        setSecret(e?.target?.value)
    }
    const handleKeyphraseChange = (e) => {
        setKeyphrase(e?.target?.value)
    }

    const connect = useCallback(async () => {
        try {
            const { access_token } = TokenService.getAuthData() || {};
            setLoading(true)
            const bransferApiClient = new BransferApiClient();

            const res = await bransferApiClient.ConnectExchangeApiKeys({ exchange: exchange?.internal_name, api_key: key, api_secret: secret, keyphrase: keyphrase }, access_token)
            if (res.is_success)
                onClose()
            //TODO handle error
        }
        catch (e) {
            toast.error(e.message)
        }
        finally {
            setLoading(false)
        }
    }, [key, secret, keyphrase, exchange])

    const dataIsValid = secret && key && (exchange?.has_keyphrase ? keyphrase : true)

    return (
        <>
            <div className="w-full grid grid-flow-row text-left">
                <div>
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-pink-primary mr-2.5" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <label className="block text-lg font-medium leading-6 text-white"> Why </label>
                    </div>
                    <div className="flex items-center">
                        <label className="block text-lg font-normal leading-6 text-pink-primary-300"> Layerswap uses your API keys to access your withrawal history and verify your payments. </label>
                    </div>
                    <div className="flex items-center mt-5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2.5 stroke-pink-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <label className="block text-lg font-medium leading-6 text-white"> Note </label>
                    </div>
                    <div className="flex items-center">
                        <label className="block text-lg font-normal leading-6 text-pink-primary-300"> Read-only API keys can't used to initiate withrawal or place a trade. </label>
                    </div>
                    <div className="flex items-center mt-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-pink-primary mr-2.5" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        <label className="block text-lg font-medium leading-6 text-white"> How to get API keys </label>
                    </div>
                    <div className="flex items-center">
                        <label className="block text-lg font-normal leading-6 text-pink-primary-300"> Follow this <Link key="userGuide" href="/userguide"><a className="font-lighter text-darkblue underline hover:cursor-pointer">Step by step guide</a></Link> to generate your API keys. </label>
                    </div>
                </div>
                <div className='mt-10'>
                    <label htmlFor="apiKey" className="block font-normal text-pink-primary-300 text-sm">
                        API Key
                    </label>
                    <div className="relative rounded-md shadow-sm mt-1 mb-5 md:mb-4">
                        <input
                            autoComplete="off"
                            placeholder="Your API Key"
                            autoCorrect="off"
                            type="text"
                            name="apiKey"
                            id="apiKey"
                            onChange={handleKeyChange}
                            className="h-12 pb-1 pt-0 text-white focus:ring-pink-primary focus:border-pink-primary border-darkblue-100 pr-36 block
                            placeholder:text-pink-primary-300 placeholder:text-sm placeholder:font-normal placeholder:opacity-50 bg-darkblue-600 w-full font-semibold rounded-md placeholder-gray-400"
                        />
                    </div>
                    <label htmlFor="withdrawlAmount" className="block font-normal text-pink-primary-300 text-sm">
                        API Secret
                    </label>
                    <div className="relative rounded-md shadow-sm mt-1 mb-5 md:mb-4">
                        <input
                            autoComplete="off"
                            placeholder="Your API Secret"
                            autoCorrect="off"
                            type="text"
                            name="apiSecret"
                            id="apiSecret"
                            onChange={handleSecretChange}
                            className="h-12 pb-1 pt-0 text-white focus:ring-pink-primary focus:border-pink-primary border-darkblue-100 pr-36 block
                            placeholder:text-pink-primary-300 placeholder:text-sm placeholder:font-normal placeholder:opacity-50 bg-darkblue-600 w-full font-semibold rounded-md placeholder-gray-400"
                        />
                    </div>
                    {
                        exchange?.has_keyphrase &&
                        <>
                            <label htmlFor="apiKey" className="block font-normal text-pink-primary-300 text-sm">
                                {exchange?.keyphrase_display_name}
                            </label>
                            <div className="relative rounded-md shadow-sm mt-1 mb-5 md:mb-4">
                                <input
                                    autoComplete="off"
                                    placeholder={`Your ${exchange?.keyphrase_display_name}`}
                                    autoCorrect="off"
                                    type="text"
                                    name="apiKey"
                                    onChange={handleKeyphraseChange}
                                    id="apiKey"
                                    className="h-12 pb-1 pt-0 text-white focus:ring-pink-primary focus:border-pink-primary border-darkblue-100 pr-36 block
                            placeholder:text-pink-primary-300 placeholder:text-sm placeholder:font-normal placeholder:opacity-50 bg-darkblue-600 w-full font-semibold rounded-md placeholder-gray-400"
                                />
                            </div>
                        </>
                    }
                </div>
                <div className="text-white text-base mt-3">
                    <SubmitButton isDisabled={!dataIsValid || loading} icon="" isSubmitting={loading} onClick={connect}>
                        Connect
                    </SubmitButton>
                </div>
            </div>
        </>
    )
}

export default ConnectApiKeyExchange;