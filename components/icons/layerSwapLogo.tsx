import * as React from 'react'

const LayerSwapLogo = (props) => (
    <>
        <svg  {...props} viewBox="0 0 175 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M57.1516 32.3981C56.8084 32.3981 56.5303 32.1172 56.5303 31.7706V16.1664C56.5303 15.8198 56.8084 15.5388 57.1516 15.5388H59.5788C59.9219 15.5388 60.2001 15.8198 60.2001 16.1664V29.2654H67.2973C67.6404 29.2654 67.9186 29.5463 67.9186 29.8929V31.7706C67.9186 32.1172 67.6404 32.3981 67.2973 32.3981H57.1516Z" fill="white" />
            <path d="M73.7251 32.6612C72.8569 32.6612 72.0914 32.4938 71.4284 32.159C70.7655 31.8242 70.2367 31.3698 69.8421 30.7959C69.4633 30.222 69.2739 29.5763 69.2739 28.8589C69.2739 28.0139 69.4949 27.3363 69.9368 26.8262C70.3788 26.316 71.097 25.9573 72.0914 25.7501C73.0858 25.5269 74.4038 25.4153 76.0453 25.4153H76.4952C76.7175 25.4153 76.8977 25.2332 76.8977 25.0087C76.8977 24.3072 76.7399 23.813 76.4242 23.5261C76.1085 23.2232 75.5718 23.0717 74.8142 23.0717C74.1828 23.0717 73.512 23.1753 72.8017 23.3826C72.3164 23.5163 71.8311 23.7005 71.3458 23.9354C71.0072 24.0993 70.5928 23.9556 70.4516 23.6043L69.9398 22.3307C69.828 22.0527 69.9257 21.7312 70.1872 21.5888C70.4992 21.4188 70.8499 21.2595 71.239 21.1108C71.8388 20.8876 72.4623 20.7202 73.1095 20.6086C73.7566 20.481 74.3722 20.4173 74.9562 20.4173C76.7556 20.4173 78.0973 20.8318 78.9812 21.6608C79.8651 22.4738 80.3071 23.7413 80.3071 25.4631V31.7706C80.3071 32.1172 80.0289 32.3981 79.6858 32.3981H77.59C77.2469 32.3981 76.9687 32.1172 76.9687 31.7706V30.6285C76.732 31.2502 76.3295 31.7445 75.7612 32.1111C75.2088 32.4778 74.5301 32.6612 73.7251 32.6612ZM74.5301 30.2459C75.193 30.2459 75.7533 30.0147 76.2111 29.5524C76.6688 29.09 76.8977 28.4922 76.8977 27.7588C76.8977 27.4947 76.6857 27.2805 76.4242 27.2805H76.069C74.8536 27.2805 73.9934 27.3921 73.4883 27.6153C72.9832 27.8226 72.7307 28.1893 72.7307 28.7154C72.7307 29.1618 72.8806 29.5284 73.1805 29.8154C73.4962 30.1024 73.946 30.2459 74.5301 30.2459Z" fill="white" />
            <path d="M84.7226 36.7026C84.2708 36.7026 83.9701 36.2311 84.1569 35.8156L85.9837 31.7524L81.5795 21.5344C81.4009 21.1199 81.7016 20.6564 82.1492 20.6564H84.5427C84.7979 20.6564 85.0271 20.814 85.1207 21.0538L87.8778 28.1175L90.7271 21.0473C90.8224 20.811 91.0499 20.6564 91.3026 20.6564H93.4817C93.9309 20.6564 94.2317 21.123 94.0499 21.5379L87.568 36.3291C87.4685 36.5562 87.2457 36.7026 86.9998 36.7026H84.7226Z" fill="white" />
            <path d="M101.243 32.6612C99.8695 32.6612 98.6857 32.4141 97.6913 31.9198C96.7127 31.4097 95.955 30.7002 95.4184 29.7915C94.8975 28.8668 94.637 27.7827 94.637 26.5392C94.637 25.3276 94.8896 24.2674 95.3947 23.3587C95.9156 22.434 96.618 21.7166 97.5019 21.2064C98.4016 20.6803 99.4355 20.4173 100.603 20.4173C102.292 20.4173 103.634 20.9593 104.628 22.0434C105.623 23.1116 106.12 24.5623 106.12 26.3957V26.6769C106.12 27.0235 105.842 27.3045 105.499 27.3045H98.0464C98.1727 28.2291 98.5042 28.9067 99.0408 29.3371C99.5933 29.7516 100.351 29.9589 101.314 29.9589C101.945 29.9589 102.584 29.8632 103.232 29.6719C103.608 29.5607 103.963 29.4144 104.296 29.2331C104.658 29.0364 105.133 29.169 105.285 29.555L105.757 30.7589C105.86 31.021 105.778 31.323 105.542 31.4737C105.037 31.7965 104.448 32.0648 103.776 32.2785C102.94 32.5336 102.095 32.6612 101.243 32.6612ZM100.746 22.8086C99.9879 22.8086 99.3723 23.0398 98.8988 23.5021C98.441 23.9645 98.1569 24.6102 98.0464 25.4392H103.161C103.066 23.6855 102.261 22.8086 100.746 22.8086Z" fill="white" />
            <path d="M108.821 32.3981C108.478 32.3981 108.2 32.1172 108.2 31.7706V21.2839C108.2 20.9373 108.478 20.6564 108.821 20.6564H111.082C111.425 20.6564 111.704 20.9373 111.704 21.2839V22.6891C112.256 21.318 113.44 20.5607 115.255 20.4173L115.679 20.3881C116.02 20.3646 116.316 20.6247 116.341 20.9698L116.468 22.778C116.491 23.1152 116.246 23.4108 115.913 23.4464L114.497 23.5978C112.73 23.7732 111.846 24.6819 111.846 26.324V31.7706C111.846 32.1172 111.568 32.3981 111.224 32.3981H108.821Z" fill="white" />
            <path d="M122.292 32.6612C121.266 32.6612 120.311 32.5416 119.428 32.3025C118.736 32.1154 118.136 31.8747 117.628 31.5803C117.384 31.4388 117.293 31.1363 117.39 30.8694L117.815 29.7019C117.951 29.3286 118.392 29.1762 118.746 29.3499C119.154 29.5501 119.595 29.7212 120.067 29.8632C120.824 30.0705 121.574 30.1741 122.316 30.1741C122.979 30.1741 123.468 30.0705 123.784 29.8632C124.1 29.64 124.257 29.3531 124.257 29.0023C124.257 28.4444 123.855 28.0936 123.05 27.9501L120.564 27.4958C119.57 27.3204 118.812 26.9617 118.291 26.4196C117.77 25.8776 117.51 25.1681 117.51 24.2913C117.51 23.4942 117.731 22.8086 118.173 22.2347C118.615 21.6608 119.222 21.2144 119.996 20.8955C120.769 20.5767 121.661 20.4173 122.671 20.4173C123.508 20.4173 124.321 20.5289 125.11 20.752C125.735 20.9163 126.291 21.1606 126.778 21.4851C127.004 21.636 127.079 21.93 126.98 22.1852L126.541 23.3165C126.392 23.7001 125.922 23.8378 125.56 23.647C125.25 23.4833 124.91 23.3394 124.542 23.2152C123.894 22.992 123.287 22.8804 122.719 22.8804C122.008 22.8804 121.495 23 121.18 23.2391C120.864 23.4623 120.706 23.7493 120.706 24.1C120.706 24.658 121.077 25.0087 121.819 25.1522L124.305 25.6066C125.331 25.7819 126.112 26.1327 126.649 26.6588C127.185 27.1689 127.454 27.8704 127.454 28.7632C127.454 29.9908 126.98 30.9473 126.033 31.6329C125.086 32.3184 123.839 32.6612 122.292 32.6612Z" fill="white" />
            <path d="M132.972 32.3981C132.719 32.3981 132.492 32.2436 132.397 32.0073L128.167 21.5207C128.001 21.1079 128.302 20.6564 128.743 20.6564H131.009C131.269 20.6564 131.501 20.8195 131.592 21.0654L134.212 28.1893L136.831 21.0654C136.922 20.8195 137.154 20.6564 137.414 20.6564H138.915C139.176 20.6564 139.409 20.8207 139.499 21.0678L142.119 28.2849L144.74 21.0678C144.83 20.8207 145.063 20.6564 145.323 20.6564H147.402C147.843 20.6564 148.143 21.1062 147.978 21.5186L143.792 32.0053C143.697 32.2427 143.469 32.3981 143.215 32.3981H141.03C140.773 32.3981 140.543 32.2388 140.45 31.9971L138.047 25.7261L135.713 31.9916C135.621 32.2362 135.39 32.3981 135.131 32.3981H132.972Z" fill="white" />
            <path d="M153.355 32.6612C152.487 32.6612 151.722 32.4938 151.059 32.159C150.396 31.8242 149.867 31.3698 149.472 30.7959C149.094 30.222 148.904 29.5763 148.904 28.8589C148.904 28.0139 149.125 27.3363 149.567 26.8262C150.009 26.316 150.727 25.9573 151.722 25.7501C152.716 25.5269 154.034 25.4153 155.676 25.4153H156.528V25.0087C156.528 24.3072 156.37 23.813 156.054 23.5261C155.739 23.2232 155.202 23.0717 154.445 23.0717C153.813 23.0717 153.142 23.1753 152.432 23.3826C151.947 23.5163 151.461 23.7005 150.976 23.9354C150.638 24.0993 150.223 23.9556 150.082 23.6043L149.57 22.3307C149.458 22.0527 149.556 21.7312 149.818 21.5888C150.13 21.4188 150.48 21.2595 150.869 21.1108C151.469 20.8876 152.093 20.7202 152.74 20.6086C153.387 20.481 154.003 20.4173 154.587 20.4173C156.386 20.4173 157.728 20.8318 158.612 21.6608C159.495 22.4738 159.937 23.7413 159.937 25.4631V31.7706C159.937 32.1172 159.659 32.3981 159.316 32.3981H157.22C156.877 32.3981 156.599 32.1172 156.599 31.7706V30.6285C156.362 31.2502 155.96 31.7445 155.392 32.1111C154.839 32.4778 154.16 32.6612 153.355 32.6612ZM154.16 30.2459C154.823 30.2459 155.384 30.0147 155.841 29.5524C156.299 29.09 156.528 28.4922 156.528 27.7588V27.2805H155.699C154.484 27.2805 153.624 27.3921 153.119 27.6153C152.614 27.8226 152.361 28.1893 152.361 28.7154C152.361 29.1618 152.511 29.5284 152.811 29.8154C153.127 30.1024 153.576 30.2459 154.16 30.2459Z" fill="white" />
            <path d="M163.226 36.7026C162.883 36.7026 162.604 36.4217 162.604 36.0751V21.2839C162.604 20.9373 162.883 20.6564 163.226 20.6564H165.487C165.83 20.6564 166.108 20.9373 166.108 21.2839V22.4021C166.424 21.7963 166.906 21.318 167.553 20.9673C168.216 20.6006 168.958 20.4173 169.778 20.4173C170.788 20.4173 171.672 20.6644 172.43 21.1586C173.203 21.6528 173.803 22.3543 174.229 23.263C174.656 24.1717 174.869 25.2558 174.869 26.5153C174.869 27.7748 174.656 28.8668 174.229 29.7915C173.803 30.7002 173.203 31.4097 172.43 31.9198C171.672 32.4141 170.788 32.6612 169.778 32.6612C169.005 32.6612 168.295 32.4938 167.647 32.159C167.016 31.8242 166.527 31.3778 166.179 30.8198V36.0751C166.179 36.4217 165.901 36.7026 165.558 36.7026H163.226ZM168.713 29.9589C169.47 29.9589 170.086 29.6799 170.56 29.1219C171.033 28.5639 171.27 27.6951 171.27 26.5153C171.27 25.3515 171.033 24.4986 170.56 23.9565C170.086 23.3985 169.47 23.1195 168.713 23.1195C167.939 23.1195 167.316 23.3985 166.842 23.9565C166.369 24.4986 166.132 25.3515 166.132 26.5153C166.132 27.6951 166.369 28.5639 166.842 29.1219C167.316 29.6799 167.939 29.9589 168.713 29.9589Z" fill="white" />
            <path opacity="0.6" d="M5.9613 8.9986C5.9613 7.32135 7.32099 5.96167 8.99824 5.96167H35.1918C36.8691 5.96167 38.2287 7.32135 38.2287 8.9986V35.1922C38.2287 36.8694 36.869 38.2291 35.1918 38.2291H8.99824C7.32099 38.2291 5.9613 36.8694 5.9613 35.1922V8.9986Z" fill="#F70191" />
            <path opacity="0.5" d="M11.9218 14.9586C11.9218 13.2813 13.2814 11.9216 14.9587 11.9216H41.1522C42.8295 11.9216 44.1892 13.2813 44.1892 14.9586V41.1521C44.1892 42.8294 42.8295 44.1891 41.1522 44.1891H14.9587C13.2814 44.1891 11.9218 42.8294 11.9218 41.1521V14.9586Z" fill="#F70191" />
            <path opacity="0.9" d="M0 3.03693C0 1.35968 1.35968 0 3.03693 0H29.2305C30.9077 0 32.2674 1.35968 32.2674 3.03693V29.2305C32.2674 30.9077 30.9077 32.2674 29.2305 32.2674H3.03693C1.35968 32.2674 0 30.9077 0 29.2305V3.03693Z" fill="#F70191" />
        </svg>
    </>
)

export default LayerSwapLogo;