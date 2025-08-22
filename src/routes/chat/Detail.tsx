import DetailHeader from "./compnents/DetailHeader";

export default function Detail() {
    return <>
    <DetailHeader />
    <div className="relative flex h-full max-w-full flex-1 flex-col overflow-hidden">
        <div className="bg-token-main-surface-primary sticky top-0 z-10 flex min-h-[40px] items-center justify-center bg-white pl-1 dark:bg-gray-800 dark:text-white md:hidden">
            <button type="button" data-testid="mobile-header-new-chat-button" aria-label="Open sidebar" className="m-1 inline-flex size-10 items-center justify-center rounded-full hover:bg-surface-hover"><span className="sr-only">Open sidebar</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-md">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3 8C3 7.44772 3.44772 7 4 7H20C20.5523 7 21 7.44772 21 8C21 8.55228 20.5523 9 20 9H4C3.44772 9 3 8.55228 3 8ZM3 16C3 15.4477 3.44772 15 4 15H14C14.5523 15 15 15.4477 15 16C15 16.5523 14.5523 17 14 17H4C3.44772 17 3 16.5523 3 16Z"
                        fill="currentColor"></path>
                </svg>
            </button>
            <h1 className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-center text-sm font-normal">Friendly Greetings and Assistance</h1>
            <button type="button" aria-label="New chat" className="m-1 inline-flex size-10 items-center justify-center rounded-full hover:bg-surface-hover">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-md">
                    <path fillRule="evenodd" clipRule="evenodd" d="M16.7929 2.79289C18.0118 1.57394 19.9882 1.57394 21.2071 2.79289C22.4261 4.01184 22.4261 5.98815 21.2071 7.20711L12.7071 15.7071C12.5196 15.8946 12.2652 16 12 16H9C8.44772 16 8 15.5523 8 15V12C8 11.7348 8.10536 11.4804 8.29289 11.2929L16.7929 2.79289ZM19.7929 4.20711C19.355 3.7692 18.645 3.7692 18.2071 4.2071L10 12.4142V14H11.5858L19.7929 5.79289C20.2308 5.35499 20.2308 4.64501 19.7929 4.20711ZM6 5C5.44772 5 5 5.44771 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V14C19 13.4477 19.4477 13 20 13C20.5523 13 21 13.4477 21 14V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6C3 4.34314 4.34315 3 6 3H10C10.5523 3 11 3.44771 11 4C11 4.55228 10.5523 5 10 5H6Z"
                        fill="currentColor"></path>
                </svg>
            </button>
        </div>
        <main className="flex h-full flex-col overflow-y-auto" role="main">
            <div className="flex h-full w-full flex-col">
                <div className="flex flex-col h-full overflow-y-auto">
                    <div className="text-token-text-primary w-full border-0 bg-transparent dark:border-0 dark:bg-transparent">
                        <div className="m-auto justify-center p-4 py-2 md:gap-6">
                            <div id="995db14f-1359-4784-b27b-8ce3d7f34600" aria-label="message-0-995db14f-1359-4784-b27b-8ce3d7f34600" className="group mx-auto flex flex-1 gap-3 transition-all duration-300 transform-gpu md:max-w-[47rem] xl:max-w-[55rem] focus:outline-none focus:ring-2 focus:ring-border-xheavy message-render">
                                <div className="relative flex flex-shrink-0 flex-col items-center">
                                    <div className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full">
                                        <div title="Abdullah" className="relative flex items-center justify-center" style={{ "width": "28.8px", "height": "28.8px" }}>
                                            <div className="relative flex h-9 w-9 items-center justify-center rounded-sm p-1 text-white" style={{
                                                "backgroundColor": "rgb(121, 137, 255)", "width": "20px", "height": "20px", "boxShadow":
                                                    "rgba(240, 246, 252, 0.1) 0px 0px 0px 1px"
                                            }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="">
                                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                                    <circle cx="12" cy="7" r="4"></circle>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative flex w-11/12 flex-col user-turn">
                                    <h2 className="select-none font-semibold text-base">Abdullah</h2>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex max-w-full flex-grow flex-col gap-0">
                                            <div className="text-message flex min-h-[20px] flex-col items-start gap-3 overflow-visible [.text-message+&amp;]:mt-5" dir="auto">
                                                <div className="markdown prose message-content dark:prose-invert light w-full break-words dark:text-gray-20">
                                                    <p className="mb-2 whitespace-pre-wrap">Hi</p>
                                                </div>
                                            </div>
                                        </div><span></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-token-text-primary w-full border-0 bg-transparent dark:border-0 dark:bg-transparent">
                        <div className="m-auto justify-center p-4 py-2 md:gap-6">
                            <div id="6736b91f-e3df-4738-bade-0582d732b2f6" aria-label="message-1-6736b91f-e3df-4738-bade-0582d732b2f6" className="group mx-auto flex flex-1 gap-3 transition-all duration-300 transform-gpu md:max-w-[47rem] xl:max-w-[55rem] focus:outline-none focus:ring-2 focus:ring-border-xheavy message-render">
                                <div className="relative flex flex-shrink-0 flex-col items-center">
                                    <div className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full">
                                        <div title="ChatGPT" className="relative flex h-9 w-9 items-center justify-center rounded-sm p-1 text-white" style={{ "background": "rgb(171, 104, 255)", "width": "28.8px", "height": "28.8px" }}>
                                            <svg width="16" height="16" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.5" className="">
                                                <path d="M37.5324 16.8707C37.9808 15.5241 38.1363 14.0974 37.9886 12.6859C37.8409 11.2744 37.3934 9.91076 36.676 8.68622C35.6126 6.83404 33.9882 5.3676 32.0373 4.4985C30.0864 3.62941 27.9098 3.40259 25.8215 3.85078C24.8796 2.7893 23.7219 1.94125 22.4257 1.36341C21.1295 0.785575 19.7249 0.491269 18.3058 0.500197C16.1708 0.495044 14.0893 1.16803 12.3614 2.42214C10.6335 3.67624 9.34853 5.44666 8.6917 7.47815C7.30085 7.76286 5.98686 8.3414 4.8377 9.17505C3.68854 10.0087 2.73073 11.0782 2.02839 12.312C0.956464 14.1591 0.498905 16.2988 0.721698 18.4228C0.944492 20.5467 1.83612 22.5449 3.268 24.1293C2.81966 25.4759 2.66413 26.9026 2.81182 28.3141C2.95951 29.7256 3.40701 31.0892 4.12437 32.3138C5.18791 34.1659 6.8123 35.6322 8.76321 36.5013C10.7141 37.3704 12.8907 37.5973 14.9789 37.1492C15.9208 38.2107 17.0786 39.0587 18.3747 39.6366C19.6709 40.2144 21.0755 40.5087 22.4946 40.4998C24.6307 40.5054 26.7133 39.8321 28.4418 38.5772C30.1704 37.3223 31.4556 35.5506 32.1119 33.5179C33.5027 33.2332 34.8167 32.6547 35.9659 31.821C37.115 30.9874 38.0728 29.9178 38.7752 28.684C39.8458 26.8371 40.3023 24.6979 40.0789 22.5748C39.8556 20.4517 38.9639 18.4544 37.5324 16.8707ZM22.4978 37.8849C20.7443 37.8874 19.0459 37.2733 17.6994 36.1501C17.7601 36.117 17.8666 36.0586 17.936 36.0161L25.9004 31.4156C26.1003 31.3019 26.2663 31.137 26.3813 30.9378C26.4964 30.7386 26.5563 30.5124 26.5549 30.2825V19.0542L29.9213 20.998C29.9389 21.0068 29.9541 21.0198 29.9656 21.0359C29.977 21.052 29.9842 21.0707 29.9867 21.0902V30.3889C29.9842 32.375 29.1946 34.2791 27.7909 35.6841C26.3872 37.0892 24.4838 37.8806 22.4978 37.8849ZM6.39227 31.0064C5.51397 29.4888 5.19742 27.7107 5.49804 25.9832C5.55718 26.0187 5.66048 26.0818 5.73461 26.1244L13.699 30.7248C13.8975 30.8408 14.1233 30.902 14.3532 30.902C14.583 30.902 14.8088 30.8408 15.0073 30.7248L24.731 25.1103V28.9979C24.7321 29.0177 24.7283 29.0376 24.7199 29.0556C24.7115 29.0736 24.6988 29.0893 24.6829 29.1012L16.6317 33.7497C14.9096 34.7416 12.8643 35.0097 10.9447 34.4954C9.02506 33.9811 7.38785 32.7263 6.39227 31.0064ZM4.29707 13.6194C5.17156 12.0998 6.55279 10.9364 8.19885 10.3327C8.19885 10.4013 8.19491 10.5228 8.19491 10.6071V19.808C8.19351 20.0378 8.25334 20.2638 8.36823 20.4629C8.48312 20.6619 8.64893 20.8267 8.84863 20.9404L18.5723 26.5542L15.206 28.4979C15.1894 28.5089 15.1703 28.5155 15.1505 28.5173C15.1307 28.5191 15.1107 28.516 15.0924 28.5082L7.04046 23.8557C5.32135 22.8601 4.06716 21.2235 3.55289 19.3046C3.03862 17.3858 3.30624 15.3413 4.29707 13.6194ZM31.955 20.0556L22.2312 14.4411L25.5976 12.4981C25.6142 12.4872 25.6333 12.4805 25.6531 12.4787C25.6729 12.4769 25.6928 12.4801 25.7111 12.4879L33.7631 17.1364C34.9967 17.849 36.0017 18.8982 36.6606 20.1613C37.3194 21.4244 37.6047 22.849 37.4832 24.2684C37.3617 25.6878 36.8382 27.0432 35.9743 28.1759C35.1103 29.3086 33.9415 30.1717 32.6047 30.6641C32.6047 30.5947 32.6047 30.4733 32.6047 30.3889V21.188C32.6066 20.9586 32.5474 20.7328 32.4332 20.5338C32.319 20.3348 32.154 20.1698 31.955 20.0556ZM35.3055 15.0128C35.2464 14.9765 35.1431 14.9142 35.069 14.8717L27.1045 10.2712C26.906 10.1554 26.6803 10.0943 26.4504 10.0943C26.2206 10.0943 25.9948 10.1554 25.7963 10.2712L16.0726 15.8858V11.9982C16.0715 11.9783 16.0753 11.9585 16.0837 11.9405C16.0921 11.9225 16.1048 11.9068 16.1207 11.8949L24.1719 7.25025C25.4053 6.53903 26.8158 6.19376 28.2383 6.25482C29.6608 6.31589 31.0364 6.78077 32.2044 7.59508C33.3723 8.40939 34.2842 9.53945 34.8334 10.8531C35.3826 12.1667 35.5464 13.6095 35.3055 15.0128ZM14.2424 21.9419L10.8752 19.9981C10.8576 19.9893 10.8423 19.9763 10.8309 19.9602C10.8195 19.9441 10.8122 19.9254 10.8098 19.9058V10.6071C10.8107 9.18295 11.2173 7.78848 11.9819 6.58696C12.7466 5.38544 13.8377 4.42659 15.1275 3.82264C16.4173 3.21869 17.8524 2.99464 19.2649 3.1767C20.6775 3.35876 22.0089 3.93941 23.1034 4.85067C23.0427 4.88379 22.937 4.94215 22.8668 4.98473L14.9024 9.58517C14.7025 9.69878 14.5366 9.86356 14.4215 10.0626C14.3065 10.2616 14.2466 10.4877 14.2479 10.7175L14.2424 21.9419ZM16.071 17.9991L20.4018 15.4978L24.7325 17.9975V22.9985L20.4018 25.4983L16.071 22.9985V17.9991Z"
                                                    fill="currentColor" className=""></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative flex w-11/12 flex-col agent-turn">
                                    <h2 className="select-none font-semibold text-base">GPT-4o</h2>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex max-w-full flex-grow flex-col gap-0">
                                            <div className="text-message flex min-h-[20px] flex-col items-start gap-3 overflow-visible [.text-message+&amp;]:mt-5" dir="auto">
                                                <div className="markdown prose message-content dark:prose-invert light w-full break-words dark:text-gray-100">
                                                    <p className="mb-2 whitespace-pre-wrap">Hello! How can I assist you today?</p>
                                                </div>
                                            </div>
                                        </div><span></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-token-text-primary w-full border-0 bg-transparent dark:border-0 dark:bg-transparent">
                        <div className="m-auto justify-center p-4 py-2 md:gap-6">
                            <div id="8f31f893-b2cd-46de-926c-c49ea5fe6652" aria-label="message-2-8f31f893-b2cd-46de-926c-c49ea5fe6652" className="group mx-auto flex flex-1 gap-3 transition-all duration-300 transform-gpu md:max-w-[47rem] xl:max-w-[55rem] focus:outline-none focus:ring-2 focus:ring-border-xheavy message-render">
                                <div className="relative flex flex-shrink-0 flex-col items-center">
                                    <div className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full">
                                        <div title="Abdullah" className="relative flex items-center justify-center" style={{ "width": "28.8px", "height": "28.8px" }}>
                                            <div className="relative flex h-9 w-9 items-center justify-center rounded-sm p-1 text-white" style={{
                                                "backgroundColor": "rgb(121, 137, 255)", "width": "20px", "height": "20px", "boxShadow":
                                                    "rgba(240, 246, 252, 0.1) 0px 0px 0px 1px"
                                            }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                                    <circle cx="12" cy="7" r="4"></circle>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative flex w-11/12 flex-col user-turn">
                                    <h2 className="select-none font-semibold text-base">Abdullah</h2>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex max-w-full flex-grow flex-col gap-0">
                                            <div className="text-message flex min-h-[20px] flex-col items-start gap-3 overflow-visible [.text-message+&amp;]:mt-5" dir="auto">
                                                <div className="markdown prose message-content dark:prose-invert light w-full break-words dark:text-gray-20">
                                                    <p className="mb-2 whitespace-pre-wrap">I can help</p>
                                                </div>
                                            </div>
                                        </div><span></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-token-text-primary w-full border-0 bg-transparent dark:border-0 dark:bg-transparent">
                        <div className="m-auto justify-center p-4 py-2 md:gap-6">
                            <div id="e0575e7f-b8ac-4834-b175-e4f9732edc10" aria-label="message-3-e0575e7f-b8ac-4834-b175-e4f9732edc10" className="group mx-auto flex flex-1 gap-3 transition-all duration-300 transform-gpu md:max-w-[47rem] xl:max-w-[55rem] focus:outline-none focus:ring-2 focus:ring-border-xheavy message-render">
                                <div className="relative flex flex-shrink-0 flex-col items-center">
                                    <div className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full">
                                        <div title="ChatGPT" className="relative flex h-9 w-9 items-center justify-center rounded-sm p-1 text-white" style={{ "background": "rgb(171, 104, 255)", "width": "28.8px", "height": "28.8px" }}>
                                            <svg width="16" height="16" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.5" className="">
                                                <path d="M37.5324 16.8707C37.9808 15.5241 38.1363 14.0974 37.9886 12.6859C37.8409 11.2744 37.3934 9.91076 36.676 8.68622C35.6126 6.83404 33.9882 5.3676 32.0373 4.4985C30.0864 3.62941 27.9098 3.40259 25.8215 3.85078C24.8796 2.7893 23.7219 1.94125 22.4257 1.36341C21.1295 0.785575 19.7249 0.491269 18.3058 0.500197C16.1708 0.495044 14.0893 1.16803 12.3614 2.42214C10.6335 3.67624 9.34853 5.44666 8.6917 7.47815C7.30085 7.76286 5.98686 8.3414 4.8377 9.17505C3.68854 10.0087 2.73073 11.0782 2.02839 12.312C0.956464 14.1591 0.498905 16.2988 0.721698 18.4228C0.944492 20.5467 1.83612 22.5449 3.268 24.1293C2.81966 25.4759 2.66413 26.9026 2.81182 28.3141C2.95951 29.7256 3.40701 31.0892 4.12437 32.3138C5.18791 34.1659 6.8123 35.6322 8.76321 36.5013C10.7141 37.3704 12.8907 37.5973 14.9789 37.1492C15.9208 38.2107 17.0786 39.0587 18.3747 39.6366C19.6709 40.2144 21.0755 40.5087 22.4946 40.4998C24.6307 40.5054 26.7133 39.8321 28.4418 38.5772C30.1704 37.3223 31.4556 35.5506 32.1119 33.5179C33.5027 33.2332 34.8167 32.6547 35.9659 31.821C37.115 30.9874 38.0728 29.9178 38.7752 28.684C39.8458 26.8371 40.3023 24.6979 40.0789 22.5748C39.8556 20.4517 38.9639 18.4544 37.5324 16.8707ZM22.4978 37.8849C20.7443 37.8874 19.0459 37.2733 17.6994 36.1501C17.7601 36.117 17.8666 36.0586 17.936 36.0161L25.9004 31.4156C26.1003 31.3019 26.2663 31.137 26.3813 30.9378C26.4964 30.7386 26.5563 30.5124 26.5549 30.2825V19.0542L29.9213 20.998C29.9389 21.0068 29.9541 21.0198 29.9656 21.0359C29.977 21.052 29.9842 21.0707 29.9867 21.0902V30.3889C29.9842 32.375 29.1946 34.2791 27.7909 35.6841C26.3872 37.0892 24.4838 37.8806 22.4978 37.8849ZM6.39227 31.0064C5.51397 29.4888 5.19742 27.7107 5.49804 25.9832C5.55718 26.0187 5.66048 26.0818 5.73461 26.1244L13.699 30.7248C13.8975 30.8408 14.1233 30.902 14.3532 30.902C14.583 30.902 14.8088 30.8408 15.0073 30.7248L24.731 25.1103V28.9979C24.7321 29.0177 24.7283 29.0376 24.7199 29.0556C24.7115 29.0736 24.6988 29.0893 24.6829 29.1012L16.6317 33.7497C14.9096 34.7416 12.8643 35.0097 10.9447 34.4954C9.02506 33.9811 7.38785 32.7263 6.39227 31.0064ZM4.29707 13.6194C5.17156 12.0998 6.55279 10.9364 8.19885 10.3327C8.19885 10.4013 8.19491 10.5228 8.19491 10.6071V19.808C8.19351 20.0378 8.25334 20.2638 8.36823 20.4629C8.48312 20.6619 8.64893 20.8267 8.84863 20.9404L18.5723 26.5542L15.206 28.4979C15.1894 28.5089 15.1703 28.5155 15.1505 28.5173C15.1307 28.5191 15.1107 28.516 15.0924 28.5082L7.04046 23.8557C5.32135 22.8601 4.06716 21.2235 3.55289 19.3046C3.03862 17.3858 3.30624 15.3413 4.29707 13.6194ZM31.955 20.0556L22.2312 14.4411L25.5976 12.4981C25.6142 12.4872 25.6333 12.4805 25.6531 12.4787C25.6729 12.4769 25.6928 12.4801 25.7111 12.4879L33.7631 17.1364C34.9967 17.849 36.0017 18.8982 36.6606 20.1613C37.3194 21.4244 37.6047 22.849 37.4832 24.2684C37.3617 25.6878 36.8382 27.0432 35.9743 28.1759C35.1103 29.3086 33.9415 30.1717 32.6047 30.6641C32.6047 30.5947 32.6047 30.4733 32.6047 30.3889V21.188C32.6066 20.9586 32.5474 20.7328 32.4332 20.5338C32.319 20.3348 32.154 20.1698 31.955 20.0556ZM35.3055 15.0128C35.2464 14.9765 35.1431 14.9142 35.069 14.8717L27.1045 10.2712C26.906 10.1554 26.6803 10.0943 26.4504 10.0943C26.2206 10.0943 25.9948 10.1554 25.7963 10.2712L16.0726 15.8858V11.9982C16.0715 11.9783 16.0753 11.9585 16.0837 11.9405C16.0921 11.9225 16.1048 11.9068 16.1207 11.8949L24.1719 7.25025C25.4053 6.53903 26.8158 6.19376 28.2383 6.25482C29.6608 6.31589 31.0364 6.78077 32.2044 7.59508C33.3723 8.40939 34.2842 9.53945 34.8334 10.8531C35.3826 12.1667 35.5464 13.6095 35.3055 15.0128ZM14.2424 21.9419L10.8752 19.9981C10.8576 19.9893 10.8423 19.9763 10.8309 19.9602C10.8195 19.9441 10.8122 19.9254 10.8098 19.9058V10.6071C10.8107 9.18295 11.2173 7.78848 11.9819 6.58696C12.7466 5.38544 13.8377 4.42659 15.1275 3.82264C16.4173 3.21869 17.8524 2.99464 19.2649 3.1767C20.6775 3.35876 22.0089 3.93941 23.1034 4.85067C23.0427 4.88379 22.937 4.94215 22.8668 4.98473L14.9024 9.58517C14.7025 9.69878 14.5366 9.86356 14.4215 10.0626C14.3065 10.2616 14.2466 10.4877 14.2479 10.7175L14.2424 21.9419ZM16.071 17.9991L20.4018 15.4978L24.7325 17.9975V22.9985L20.4018 25.4983L16.071 22.9985V17.9991Z"
                                                    fill="currentColor"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative flex w-11/12 flex-col agent-turn">
                                    <h2 className="select-none font-semibold text-base">GPT-4o</h2>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex max-w-full flex-grow flex-col gap-0">
                                            <div className="text-message flex min-h-[20px] flex-col items-start gap-3 overflow-visible [.text-message+&amp;]:mt-5" dir="auto">
                                                <div className="markdown prose message-content dark:prose-invert light w-full break-words dark:text-gray-100">
                                                    <p className="mb-2 whitespace-pre-wrap">That sounds great! How would you like to help?</p>
                                                </div>
                                            </div>
                                        </div><span></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-token-text-primary w-full border-0 bg-transparent dark:border-0 dark:bg-transparent">
                        <div className="m-auto justify-center p-4 py-2 md:gap-6">
                            <div id="117059e2-3b9c-4b1f-9d5f-ac1d62834e0a" aria-label="message-4-117059e2-3b9c-4b1f-9d5f-ac1d62834e0a" className="group mx-auto flex flex-1 gap-3 transition-all duration-300 transform-gpu md:max-w-[47rem] xl:max-w-[55rem] focus:outline-none focus:ring-2 focus:ring-border-xheavy message-render">
                                <div className="relative flex flex-shrink-0 flex-col items-center">
                                    <div className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full">
                                        <div title="Abdullah" className="relative flex items-center justify-center" style={{ "width": "28.8px", "height": "28.8px" }}>
                                            <div className="relative flex h-9 w-9 items-center justify-center rounded-sm p-1 text-white" style={{
                                                "backgroundColor": "rgb(121, 137, 255)", "width": "20px", "height": "20px", "boxShadow":
                                                    "rgba(240, 246, 252, 0.1) 0px 0px 0px 1px"
                                            }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                                    <circle cx="12" cy="7" r="4"></circle>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative flex w-11/12 flex-col user-turn">
                                    <h2 className="select-none font-semibold text-base">Abdullah</h2>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex max-w-full flex-grow flex-col gap-0">
                                            <div className="text-message flex min-h-[20px] flex-col items-start gap-3 overflow-visible [.text-message+&amp;]:mt-5" dir="auto">
                                                <div className="markdown prose message-content dark:prose-invert light w-full break-words dark:text-gray-20">
                                                    <p className="mb-2 whitespace-pre-wrap">By giving you commands</p>
                                                </div>
                                            </div>
                                        </div><span></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-token-text-primary w-full border-0 bg-transparent dark:border-0 dark:bg-transparent">
                        <div className="m-auto justify-center p-4 py-2 md:gap-6">
                            <div id="5400e023-d318-4ea3-a3c3-869ad2f502d8" aria-label="message-5-5400e023-d318-4ea3-a3c3-869ad2f502d8" className="group mx-auto flex flex-1 gap-3 transition-all duration-300 transform-gpu md:max-w-[47rem] xl:max-w-[55rem] focus:outline-none focus:ring-2 focus:ring-border-xheavy message-render">
                                <div className="relative flex flex-shrink-0 flex-col items-center">
                                    <div className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full">
                                        <div title="ChatGPT" className="relative flex h-9 w-9 items-center justify-center rounded-sm p-1 text-white" style={{ "background": "rgb(171, 104, 255)", "width": "28.8px", "height": "28.8px" }}>
                                            <svg width="16" height="16" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.5" className="">
                                                <path d="M37.5324 16.8707C37.9808 15.5241 38.1363 14.0974 37.9886 12.6859C37.8409 11.2744 37.3934 9.91076 36.676 8.68622C35.6126 6.83404 33.9882 5.3676 32.0373 4.4985C30.0864 3.62941 27.9098 3.40259 25.8215 3.85078C24.8796 2.7893 23.7219 1.94125 22.4257 1.36341C21.1295 0.785575 19.7249 0.491269 18.3058 0.500197C16.1708 0.495044 14.0893 1.16803 12.3614 2.42214C10.6335 3.67624 9.34853 5.44666 8.6917 7.47815C7.30085 7.76286 5.98686 8.3414 4.8377 9.17505C3.68854 10.0087 2.73073 11.0782 2.02839 12.312C0.956464 14.1591 0.498905 16.2988 0.721698 18.4228C0.944492 20.5467 1.83612 22.5449 3.268 24.1293C2.81966 25.4759 2.66413 26.9026 2.81182 28.3141C2.95951 29.7256 3.40701 31.0892 4.12437 32.3138C5.18791 34.1659 6.8123 35.6322 8.76321 36.5013C10.7141 37.3704 12.8907 37.5973 14.9789 37.1492C15.9208 38.2107 17.0786 39.0587 18.3747 39.6366C19.6709 40.2144 21.0755 40.5087 22.4946 40.4998C24.6307 40.5054 26.7133 39.8321 28.4418 38.5772C30.1704 37.3223 31.4556 35.5506 32.1119 33.5179C33.5027 33.2332 34.8167 32.6547 35.9659 31.821C37.115 30.9874 38.0728 29.9178 38.7752 28.684C39.8458 26.8371 40.3023 24.6979 40.0789 22.5748C39.8556 20.4517 38.9639 18.4544 37.5324 16.8707ZM22.4978 37.8849C20.7443 37.8874 19.0459 37.2733 17.6994 36.1501C17.7601 36.117 17.8666 36.0586 17.936 36.0161L25.9004 31.4156C26.1003 31.3019 26.2663 31.137 26.3813 30.9378C26.4964 30.7386 26.5563 30.5124 26.5549 30.2825V19.0542L29.9213 20.998C29.9389 21.0068 29.9541 21.0198 29.9656 21.0359C29.977 21.052 29.9842 21.0707 29.9867 21.0902V30.3889C29.9842 32.375 29.1946 34.2791 27.7909 35.6841C26.3872 37.0892 24.4838 37.8806 22.4978 37.8849ZM6.39227 31.0064C5.51397 29.4888 5.19742 27.7107 5.49804 25.9832C5.55718 26.0187 5.66048 26.0818 5.73461 26.1244L13.699 30.7248C13.8975 30.8408 14.1233 30.902 14.3532 30.902C14.583 30.902 14.8088 30.8408 15.0073 30.7248L24.731 25.1103V28.9979C24.7321 29.0177 24.7283 29.0376 24.7199 29.0556C24.7115 29.0736 24.6988 29.0893 24.6829 29.1012L16.6317 33.7497C14.9096 34.7416 12.8643 35.0097 10.9447 34.4954C9.02506 33.9811 7.38785 32.7263 6.39227 31.0064ZM4.29707 13.6194C5.17156 12.0998 6.55279 10.9364 8.19885 10.3327C8.19885 10.4013 8.19491 10.5228 8.19491 10.6071V19.808C8.19351 20.0378 8.25334 20.2638 8.36823 20.4629C8.48312 20.6619 8.64893 20.8267 8.84863 20.9404L18.5723 26.5542L15.206 28.4979C15.1894 28.5089 15.1703 28.5155 15.1505 28.5173C15.1307 28.5191 15.1107 28.516 15.0924 28.5082L7.04046 23.8557C5.32135 22.8601 4.06716 21.2235 3.55289 19.3046C3.03862 17.3858 3.30624 15.3413 4.29707 13.6194ZM31.955 20.0556L22.2312 14.4411L25.5976 12.4981C25.6142 12.4872 25.6333 12.4805 25.6531 12.4787C25.6729 12.4769 25.6928 12.4801 25.7111 12.4879L33.7631 17.1364C34.9967 17.849 36.0017 18.8982 36.6606 20.1613C37.3194 21.4244 37.6047 22.849 37.4832 24.2684C37.3617 25.6878 36.8382 27.0432 35.9743 28.1759C35.1103 29.3086 33.9415 30.1717 32.6047 30.6641C32.6047 30.5947 32.6047 30.4733 32.6047 30.3889V21.188C32.6066 20.9586 32.5474 20.7328 32.4332 20.5338C32.319 20.3348 32.154 20.1698 31.955 20.0556ZM35.3055 15.0128C35.2464 14.9765 35.1431 14.9142 35.069 14.8717L27.1045 10.2712C26.906 10.1554 26.6803 10.0943 26.4504 10.0943C26.2206 10.0943 25.9948 10.1554 25.7963 10.2712L16.0726 15.8858V11.9982C16.0715 11.9783 16.0753 11.9585 16.0837 11.9405C16.0921 11.9225 16.1048 11.9068 16.1207 11.8949L24.1719 7.25025C25.4053 6.53903 26.8158 6.19376 28.2383 6.25482C29.6608 6.31589 31.0364 6.78077 32.2044 7.59508C33.3723 8.40939 34.2842 9.53945 34.8334 10.8531C35.3826 12.1667 35.5464 13.6095 35.3055 15.0128ZM14.2424 21.9419L10.8752 19.9981C10.8576 19.9893 10.8423 19.9763 10.8309 19.9602C10.8195 19.9441 10.8122 19.9254 10.8098 19.9058V10.6071C10.8107 9.18295 11.2173 7.78848 11.9819 6.58696C12.7466 5.38544 13.8377 4.42659 15.1275 3.82264C16.4173 3.21869 17.8524 2.99464 19.2649 3.1767C20.6775 3.35876 22.0089 3.93941 23.1034 4.85067C23.0427 4.88379 22.937 4.94215 22.8668 4.98473L14.9024 9.58517C14.7025 9.69878 14.5366 9.86356 14.4215 10.0626C14.3065 10.2616 14.2466 10.4877 14.2479 10.7175L14.2424 21.9419ZM16.071 17.9991L20.4018 15.4978L24.7325 17.9975V22.9985L20.4018 25.4983L16.071 22.9985V17.9991Z"
                                                    fill="currentColor"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative flex w-11/12 flex-col agent-turn">
                                    <h2 className="select-none font-semibold text-base">GPT-4o</h2>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex max-w-full flex-grow flex-col gap-0">
                                            <div className="text-message flex min-h-[20px] flex-col items-start gap-3 overflow-visible [.text-message+&amp;]:mt-5" dir="auto">
                                                <div className="markdown prose message-content dark:prose-invert light w-full break-words dark:text-gray-100">
                                                    <p className="mb-2 whitespace-pre-wrap">Sure! Feel free to give me commands or ask questions, and I'll do my best to assist you. What would you like to do?</p>
                                                </div>
                                            </div>
                                        </div><span></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-token-text-primary w-full border-0 bg-transparent dark:border-0 dark:bg-transparent">
                        <div className="m-auto justify-center p-4 py-2 md:gap-6">
                            <div id="c4339f98-5da5-454c-b221-4b2814fcfc3a" aria-label="message-6-c4339f98-5da5-454c-b221-4b2814fcfc3a" className="group mx-auto flex flex-1 gap-3 transition-all duration-300 transform-gpu md:max-w-[47rem] xl:max-w-[55rem] focus:outline-none focus:ring-2 focus:ring-border-xheavy message-render">
                                <div className="relative flex flex-shrink-0 flex-col items-center">
                                    <div className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full">
                                        <div title="Abdullah" className="relative flex items-center justify-center" style={{ "width": "28.8px", "height": "28.8px" }}>
                                            <div className="relative flex h-9 w-9 items-center justify-center rounded-sm p-1 text-white" style={{
                                                "backgroundColor": "rgb(121, 137, 255)", "width": "20px", "height": "20px", "boxShadow":
                                                    "rgba(240, 246, 252, 0.1) 0px 0px 0px 1px"
                                            }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                                    <circle cx="12" cy="7" r="4"></circle>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative flex w-11/12 flex-col user-turn">
                                    <h2 className="select-none font-semibold text-base">Abdullah</h2>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex max-w-full flex-grow flex-col gap-0">
                                            <div className="text-message flex min-h-[20px] flex-col items-start gap-3 overflow-visible [.text-message+&amp;]:mt-5" dir="auto">
                                                <div className="markdown prose message-content dark:prose-invert light w-full break-words dark:text-gray-20">
                                                    <p className="mb-2 whitespace-pre-wrap">give me dummy markdown</p>
                                                </div>
                                            </div>
                                        </div><span></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-token-text-primary w-full border-0 bg-transparent dark:border-0 dark:bg-transparent">
                        <div className="m-auto justify-center p-4 py-2 md:gap-6">
                            <div id="59f0b8f9-556e-462d-a2a1-848cfd5269b3" aria-label="message-7-59f0b8f9-556e-462d-a2a1-848cfd5269b3" className="group mx-auto flex flex-1 gap-3 transition-all duration-300 transform-gpu md:max-w-[47rem] xl:max-w-[55rem] focus:outline-none focus:ring-2 focus:ring-border-xheavy message-render">
                                <div className="relative flex flex-shrink-0 flex-col items-center">
                                    <div className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full">
                                        <div title="ChatGPT" className="relative flex h-9 w-9 items-center justify-center rounded-sm p-1 text-white" style={{ "background": "rgb(171, 104, 255)", "width": "28.8px", "height": "28.8px" }}>
                                            <svg width="16" height="16" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.5" className="">
                                                <path d="M37.5324 16.8707C37.9808 15.5241 38.1363 14.0974 37.9886 12.6859C37.8409 11.2744 37.3934 9.91076 36.676 8.68622C35.6126 6.83404 33.9882 5.3676 32.0373 4.4985C30.0864 3.62941 27.9098 3.40259 25.8215 3.85078C24.8796 2.7893 23.7219 1.94125 22.4257 1.36341C21.1295 0.785575 19.7249 0.491269 18.3058 0.500197C16.1708 0.495044 14.0893 1.16803 12.3614 2.42214C10.6335 3.67624 9.34853 5.44666 8.6917 7.47815C7.30085 7.76286 5.98686 8.3414 4.8377 9.17505C3.68854 10.0087 2.73073 11.0782 2.02839 12.312C0.956464 14.1591 0.498905 16.2988 0.721698 18.4228C0.944492 20.5467 1.83612 22.5449 3.268 24.1293C2.81966 25.4759 2.66413 26.9026 2.81182 28.3141C2.95951 29.7256 3.40701 31.0892 4.12437 32.3138C5.18791 34.1659 6.8123 35.6322 8.76321 36.5013C10.7141 37.3704 12.8907 37.5973 14.9789 37.1492C15.9208 38.2107 17.0786 39.0587 18.3747 39.6366C19.6709 40.2144 21.0755 40.5087 22.4946 40.4998C24.6307 40.5054 26.7133 39.8321 28.4418 38.5772C30.1704 37.3223 31.4556 35.5506 32.1119 33.5179C33.5027 33.2332 34.8167 32.6547 35.9659 31.821C37.115 30.9874 38.0728 29.9178 38.7752 28.684C39.8458 26.8371 40.3023 24.6979 40.0789 22.5748C39.8556 20.4517 38.9639 18.4544 37.5324 16.8707ZM22.4978 37.8849C20.7443 37.8874 19.0459 37.2733 17.6994 36.1501C17.7601 36.117 17.8666 36.0586 17.936 36.0161L25.9004 31.4156C26.1003 31.3019 26.2663 31.137 26.3813 30.9378C26.4964 30.7386 26.5563 30.5124 26.5549 30.2825V19.0542L29.9213 20.998C29.9389 21.0068 29.9541 21.0198 29.9656 21.0359C29.977 21.052 29.9842 21.0707 29.9867 21.0902V30.3889C29.9842 32.375 29.1946 34.2791 27.7909 35.6841C26.3872 37.0892 24.4838 37.8806 22.4978 37.8849ZM6.39227 31.0064C5.51397 29.4888 5.19742 27.7107 5.49804 25.9832C5.55718 26.0187 5.66048 26.0818 5.73461 26.1244L13.699 30.7248C13.8975 30.8408 14.1233 30.902 14.3532 30.902C14.583 30.902 14.8088 30.8408 15.0073 30.7248L24.731 25.1103V28.9979C24.7321 29.0177 24.7283 29.0376 24.7199 29.0556C24.7115 29.0736 24.6988 29.0893 24.6829 29.1012L16.6317 33.7497C14.9096 34.7416 12.8643 35.0097 10.9447 34.4954C9.02506 33.9811 7.38785 32.7263 6.39227 31.0064ZM4.29707 13.6194C5.17156 12.0998 6.55279 10.9364 8.19885 10.3327C8.19885 10.4013 8.19491 10.5228 8.19491 10.6071V19.808C8.19351 20.0378 8.25334 20.2638 8.36823 20.4629C8.48312 20.6619 8.64893 20.8267 8.84863 20.9404L18.5723 26.5542L15.206 28.4979C15.1894 28.5089 15.1703 28.5155 15.1505 28.5173C15.1307 28.5191 15.1107 28.516 15.0924 28.5082L7.04046 23.8557C5.32135 22.8601 4.06716 21.2235 3.55289 19.3046C3.03862 17.3858 3.30624 15.3413 4.29707 13.6194ZM31.955 20.0556L22.2312 14.4411L25.5976 12.4981C25.6142 12.4872 25.6333 12.4805 25.6531 12.4787C25.6729 12.4769 25.6928 12.4801 25.7111 12.4879L33.7631 17.1364C34.9967 17.849 36.0017 18.8982 36.6606 20.1613C37.3194 21.4244 37.6047 22.849 37.4832 24.2684C37.3617 25.6878 36.8382 27.0432 35.9743 28.1759C35.1103 29.3086 33.9415 30.1717 32.6047 30.6641C32.6047 30.5947 32.6047 30.4733 32.6047 30.3889V21.188C32.6066 20.9586 32.5474 20.7328 32.4332 20.5338C32.319 20.3348 32.154 20.1698 31.955 20.0556ZM35.3055 15.0128C35.2464 14.9765 35.1431 14.9142 35.069 14.8717L27.1045 10.2712C26.906 10.1554 26.6803 10.0943 26.4504 10.0943C26.2206 10.0943 25.9948 10.1554 25.7963 10.2712L16.0726 15.8858V11.9982C16.0715 11.9783 16.0753 11.9585 16.0837 11.9405C16.0921 11.9225 16.1048 11.9068 16.1207 11.8949L24.1719 7.25025C25.4053 6.53903 26.8158 6.19376 28.2383 6.25482C29.6608 6.31589 31.0364 6.78077 32.2044 7.59508C33.3723 8.40939 34.2842 9.53945 34.8334 10.8531C35.3826 12.1667 35.5464 13.6095 35.3055 15.0128ZM14.2424 21.9419L10.8752 19.9981C10.8576 19.9893 10.8423 19.9763 10.8309 19.9602C10.8195 19.9441 10.8122 19.9254 10.8098 19.9058V10.6071C10.8107 9.18295 11.2173 7.78848 11.9819 6.58696C12.7466 5.38544 13.8377 4.42659 15.1275 3.82264C16.4173 3.21869 17.8524 2.99464 19.2649 3.1767C20.6775 3.35876 22.0089 3.93941 23.1034 4.85067C23.0427 4.88379 22.937 4.94215 22.8668 4.98473L14.9024 9.58517C14.7025 9.69878 14.5366 9.86356 14.4215 10.0626C14.3065 10.2616 14.2466 10.4877 14.2479 10.7175L14.2424 21.9419ZM16.071 17.9991L20.4018 15.4978L24.7325 17.9975V22.9985L20.4018 25.4983L16.071 22.9985V17.9991Z"
                                                    fill="currentColor"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative flex w-11/12 flex-col agent-turn">
                                    <h2 className="select-none font-semibold text-base">GPT-4o</h2>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex max-w-full flex-grow flex-col gap-0">
                                            <div className="text-message flex min-h-[20px] flex-col items-start gap-3 overflow-visible [.text-message+&amp;]:mt-5" dir="auto">
                                                <div className="markdown prose message-content dark:prose-invert light w-full break-words dark:text-gray-100">
                                                    <p className="mb-2 whitespace-pre-wrap">Sure! Here’s an example of dummy Markdown content:</p>
                                                    <pre><div className="w-full rounded-md bg-gray-900 text-xs text-white/80"><div className="relative flex items-center justify-between rounded-tl-md rounded-tr-md bg-gray-700 px-4 py-2 font-sans text-xs text-gray-200 dark:bg-gray-700"><span className="">markdown</span><div className="flex items-center justify-center gap-4"><button type="button" className="ml-auto flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" height="1em" width="1em" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="icon-md-heavy"><path fill="currentColor" fillRule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" clipRule="evenodd"></path></svg>Copy code</button></div></div><div className="overflow-y-auto p-4"><code className="hljs language-markdown !whitespace-pre"><span className="hljs-section"># Dummy Markdown Example</span>

                                                        <span className="hljs-section">## Introduction</span>

                                                        This is a sample markdown document that demonstrates various markdown features.

                                                        <span className="hljs-section">### Features</span>

                                                        <span className="hljs-bullet">-</span> <span className="hljs-strong">**Bold Text**</span>: You can make text bold using double asterisks or double underscores.
                                                        <span className="hljs-bullet">-</span> <span className="hljs-emphasis">*Italic Text*</span>: Italicize text with single asterisks or single underscores.
                                                        <span className="hljs-bullet">-</span> ~~Strikethrough~~: Use double tildes to strike through text.

                                                        <span className="hljs-section">## Lists</span>

                                                        <span className="hljs-section">### Unordered List</span>

                                                        <span className="hljs-bullet">-</span> Item 1
                                                        <span className="hljs-bullet">-</span> Item 2
                                                        <span className="hljs-bullet">  -</span> Subitem A
                                                        <span className="hljs-bullet">  -</span> Subitem B

                                                        <span className="hljs-section">### Ordered List</span>

                                                        <span className="hljs-bullet">1.</span> First item
                                                        <span className="hljs-bullet">2.</span> Second item
                                                        <span className="hljs-bullet">   1.</span> Subitem A
                                                        <span className="hljs-bullet">   2.</span> Subitem B

                                                        <span className="hljs-section">## Links and Images</span>

                                                        [<span >Visit OpenAI</span>](<span className="hljs-link">https://www.openai.com</span>)

                                                        ![<span >Sample Image</span>](<span className="hljs-link">https://via.placeholder.com/150</span>)

                                                        <span className="hljs-section">## Code</span>

                                                        You can include inline code like this: <span className="hljs-code">`console.log('Hello, World!');`</span>

                                                        And you can also create code blocks:

                                                        <span className="hljs-code">```javascript

                                                        </span></code></div></div></pre>
                                                    <h2>Conclusion</h2>
                                                    <p className="mb-2 whitespace-pre-wrap">This is a basic example of a Markdown document. You can use it as a template for your own documentation.</p>
                                                    <pre><div className="w-full rounded-md bg-gray-900 text-xs text-white/80"><div className="relative flex items-center justify-between rounded-tl-md rounded-tr-md bg-gray-700 px-4 py-2 font-sans text-xs text-gray-200 dark:bg-gray-700"><span className="">sql</span><div className="flex items-center justify-center gap-4"><button type="button" className="ml-auto flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" height="1em" width="1em" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="icon-md-heavy"><path fill="currentColor" fillRule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" clipRule="evenodd"></path></svg>Copy code</button></div></div><div className="overflow-y-auto p-4"><code className="hljs language-sql !whitespace-pre">
                                                        Feel <span className="hljs-keyword">free</span> <span className="hljs-keyword">to</span> modify <span className="hljs-keyword">or</span> ask <span className="hljs-keyword">for</span> more <span className="hljs-keyword">specific</span> examples<span className="hljs-operator">!</span>
                                                    </code></div></div></pre></div>
                                            </div>
                                        </div><span></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-token-text-primary w-full border-0 bg-transparent dark:border-0 dark:bg-transparent">
                        <div className="m-auto justify-center p-4 py-2 md:gap-6 ">
                            <div id="390633b7-54e0-4b6b-94ec-1c00f6acc8a4" aria-label="message-8-390633b7-54e0-4b6b-94ec-1c00f6acc8a4" className="group mx-auto flex flex-1 gap-3 transition-all duration-300 transform-gpu md:max-w-[47rem] xl:max-w-[55rem] focus:outline-none focus:ring-2 focus:ring-border-xheavy message-render">
                                <div className="relative flex flex-shrink-0 flex-col items-center">
                                    <div className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full">
                                        <div title="Abdullah" className="relative flex items-center justify-center" style={{ "width": "28.8px", "height": "28.8px" }}>
                                            <div className="relative flex h-9 w-9 items-center justify-center rounded-sm p-1 text-white" style={{
                                                "backgroundColor": "rgb(121, 137, 255)", "width": "20px", "height": "20px", "boxShadow":
                                                    "rgba(240, 246, 252, 0.1) 0px 0px 0px 1px"
                                            }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                                    <circle cx="12" cy="7" r="4"></circle>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative flex w-11/12 flex-col user-turn">
                                    <h2 className="select-none font-semibold text-base">Abdullah</h2>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex max-w-full flex-grow flex-col gap-0">
                                            <div className="text-message flex min-h-[20px] flex-col items-start gap-3 overflow-visible [.text-message+&amp;]:mt-5" dir="auto">
                                                <div className="markdown prose message-content dark:prose-invert light w-full break-words dark:text-gray-20">
                                                    <p className="mb-2 whitespace-pre-wrap">generte me dummy html</p>
                                                </div>
                                            </div>
                                        </div><span></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-token-text-primary w-full border-0 bg-transparent dark:border-0 dark:bg-transparent">
                        <div className="m-auto justify-center p-4 py-2 md:gap-6 ">
                            <div id="6783d794-5a33-43ce-9ac9-7761fe2436ed" aria-label="message-9-6783d794-5a33-43ce-9ac9-7761fe2436ed" className="group mx-auto flex flex-1 gap-3 transition-all duration-300 transform-gpu md:max-w-[47rem] xl:max-w-[55rem] focus:outline-none focus:ring-2 focus:ring-border-xheavy message-render">
                                <div className="relative flex flex-shrink-0 flex-col items-center">
                                    <div className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full">
                                        <div title="ChatGPT" className="relative flex h-9 w-9 items-center justify-center rounded-sm p-1 text-white" style={{ "background": "rgb(171, 104, 255)", "width": "28.8px", "height": "28.8px" }}>
                                            <svg width="16" height="16" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.5" className="">
                                                <path d="M37.5324 16.8707C37.9808 15.5241 38.1363 14.0974 37.9886 12.6859C37.8409 11.2744 37.3934 9.91076 36.676 8.68622C35.6126 6.83404 33.9882 5.3676 32.0373 4.4985C30.0864 3.62941 27.9098 3.40259 25.8215 3.85078C24.8796 2.7893 23.7219 1.94125 22.4257 1.36341C21.1295 0.785575 19.7249 0.491269 18.3058 0.500197C16.1708 0.495044 14.0893 1.16803 12.3614 2.42214C10.6335 3.67624 9.34853 5.44666 8.6917 7.47815C7.30085 7.76286 5.98686 8.3414 4.8377 9.17505C3.68854 10.0087 2.73073 11.0782 2.02839 12.312C0.956464 14.1591 0.498905 16.2988 0.721698 18.4228C0.944492 20.5467 1.83612 22.5449 3.268 24.1293C2.81966 25.4759 2.66413 26.9026 2.81182 28.3141C2.95951 29.7256 3.40701 31.0892 4.12437 32.3138C5.18791 34.1659 6.8123 35.6322 8.76321 36.5013C10.7141 37.3704 12.8907 37.5973 14.9789 37.1492C15.9208 38.2107 17.0786 39.0587 18.3747 39.6366C19.6709 40.2144 21.0755 40.5087 22.4946 40.4998C24.6307 40.5054 26.7133 39.8321 28.4418 38.5772C30.1704 37.3223 31.4556 35.5506 32.1119 33.5179C33.5027 33.2332 34.8167 32.6547 35.9659 31.821C37.115 30.9874 38.0728 29.9178 38.7752 28.684C39.8458 26.8371 40.3023 24.6979 40.0789 22.5748C39.8556 20.4517 38.9639 18.4544 37.5324 16.8707ZM22.4978 37.8849C20.7443 37.8874 19.0459 37.2733 17.6994 36.1501C17.7601 36.117 17.8666 36.0586 17.936 36.0161L25.9004 31.4156C26.1003 31.3019 26.2663 31.137 26.3813 30.9378C26.4964 30.7386 26.5563 30.5124 26.5549 30.2825V19.0542L29.9213 20.998C29.9389 21.0068 29.9541 21.0198 29.9656 21.0359C29.977 21.052 29.9842 21.0707 29.9867 21.0902V30.3889C29.9842 32.375 29.1946 34.2791 27.7909 35.6841C26.3872 37.0892 24.4838 37.8806 22.4978 37.8849ZM6.39227 31.0064C5.51397 29.4888 5.19742 27.7107 5.49804 25.9832C5.55718 26.0187 5.66048 26.0818 5.73461 26.1244L13.699 30.7248C13.8975 30.8408 14.1233 30.902 14.3532 30.902C14.583 30.902 14.8088 30.8408 15.0073 30.7248L24.731 25.1103V28.9979C24.7321 29.0177 24.7283 29.0376 24.7199 29.0556C24.7115 29.0736 24.6988 29.0893 24.6829 29.1012L16.6317 33.7497C14.9096 34.7416 12.8643 35.0097 10.9447 34.4954C9.02506 33.9811 7.38785 32.7263 6.39227 31.0064ZM4.29707 13.6194C5.17156 12.0998 6.55279 10.9364 8.19885 10.3327C8.19885 10.4013 8.19491 10.5228 8.19491 10.6071V19.808C8.19351 20.0378 8.25334 20.2638 8.36823 20.4629C8.48312 20.6619 8.64893 20.8267 8.84863 20.9404L18.5723 26.5542L15.206 28.4979C15.1894 28.5089 15.1703 28.5155 15.1505 28.5173C15.1307 28.5191 15.1107 28.516 15.0924 28.5082L7.04046 23.8557C5.32135 22.8601 4.06716 21.2235 3.55289 19.3046C3.03862 17.3858 3.30624 15.3413 4.29707 13.6194ZM31.955 20.0556L22.2312 14.4411L25.5976 12.4981C25.6142 12.4872 25.6333 12.4805 25.6531 12.4787C25.6729 12.4769 25.6928 12.4801 25.7111 12.4879L33.7631 17.1364C34.9967 17.849 36.0017 18.8982 36.6606 20.1613C37.3194 21.4244 37.6047 22.849 37.4832 24.2684C37.3617 25.6878 36.8382 27.0432 35.9743 28.1759C35.1103 29.3086 33.9415 30.1717 32.6047 30.6641C32.6047 30.5947 32.6047 30.4733 32.6047 30.3889V21.188C32.6066 20.9586 32.5474 20.7328 32.4332 20.5338C32.319 20.3348 32.154 20.1698 31.955 20.0556ZM35.3055 15.0128C35.2464 14.9765 35.1431 14.9142 35.069 14.8717L27.1045 10.2712C26.906 10.1554 26.6803 10.0943 26.4504 10.0943C26.2206 10.0943 25.9948 10.1554 25.7963 10.2712L16.0726 15.8858V11.9982C16.0715 11.9783 16.0753 11.9585 16.0837 11.9405C16.0921 11.9225 16.1048 11.9068 16.1207 11.8949L24.1719 7.25025C25.4053 6.53903 26.8158 6.19376 28.2383 6.25482C29.6608 6.31589 31.0364 6.78077 32.2044 7.59508C33.3723 8.40939 34.2842 9.53945 34.8334 10.8531C35.3826 12.1667 35.5464 13.6095 35.3055 15.0128ZM14.2424 21.9419L10.8752 19.9981C10.8576 19.9893 10.8423 19.9763 10.8309 19.9602C10.8195 19.9441 10.8122 19.9254 10.8098 19.9058V10.6071C10.8107 9.18295 11.2173 7.78848 11.9819 6.58696C12.7466 5.38544 13.8377 4.42659 15.1275 3.82264C16.4173 3.21869 17.8524 2.99464 19.2649 3.1767C20.6775 3.35876 22.0089 3.93941 23.1034 4.85067C23.0427 4.88379 22.937 4.94215 22.8668 4.98473L14.9024 9.58517C14.7025 9.69878 14.5366 9.86356 14.4215 10.0626C14.3065 10.2616 14.2466 10.4877 14.2479 10.7175L14.2424 21.9419ZM16.071 17.9991L20.4018 15.4978L24.7325 17.9975V22.9985L20.4018 25.4983L16.071 22.9985V17.9991Z"
                                                    fill="currentColor"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative flex w-11/12 flex-col agent-turn">
                                    <h2 className="select-none font-semibold text-base">GPT-4o</h2>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex max-w-full flex-grow flex-col gap-0">
                                            <div className="text-message flex min-h-[20px] flex-col items-start gap-3 overflow-visible [.text-message+&amp;]:mt-5" dir="auto">
                                                <div className="markdown prose message-content dark:prose-invert light w-full break-words dark:text-gray-100">
                                                    <p className="mb-2 whitespace-pre-wrap">Sure! Here’s a simple example of dummy HTML content:</p>
                                                    <pre><div className="w-full rounded-md bg-gray-900 text-xs text-white/80"><div className="relative flex items-center justify-between rounded-tl-md rounded-tr-md bg-gray-700 px-4 py-2 font-sans text-xs text-gray-200 dark:bg-gray-700"><span className="">html</span><div className="flex items-center justify-center gap-4"><button type="button" className="ml-auto flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" height="1em" width="1em" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="icon-md-heavy"><path fill="currentColor" fillRule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" clipRule="evenodd"></path></svg>Copy code</button></div></div><div className="overflow-y-auto p-4"><code className="hljs language-html !whitespace-pre"><span className="hljs-meta">&lt;!DOCTYPE <span className="hljs-keyword">html</span>&gt;</span>
                                                        <span>&lt;<span>html</span> <span >lang</span>=<span >"en"</span>&gt;</span>
                                                        <span>&lt;<span>head</span>&gt;</span>
                                                        <span>&lt;<span>meta</span> <span >charset</span>=<span >"UTF-8"</span>&gt;</span>
                                                        <span>&lt;<span>meta</span> <span >name</span>=<span >"viewport"</span> <span >content</span>=<span >"width=device-width, initial-scale=1.0"</span>&gt;</span>
                                                        <span>&lt;<span>title</span>&gt;</span>Dummy HTML Example<span>&lt;/<span>title</span>&gt;</span>
                                                        <span>&lt;<span>link</span> <span >rel</span>=<span >"stylesheet"</span> <span >href</span>=<span >"styles.css"</span>&gt;</span>
                                                        <span>&lt;/<span>head</span>&gt;</span>
                                                        <span>&lt;<span>body</span>&gt;</span>

                                                        <span>&lt;<span>header</span>&gt;</span>
                                                        <span>&lt;<span>h1</span>&gt;</span>Welcome to My Dummy HTML Page<span>&lt;/<span>h1</span>&gt;</span>
                                                        <span>&lt;<span>nav</span>&gt;</span>
                                                        <span>&lt;<span>ul</span>&gt;</span>
                                                        <span>&lt;<span>li</span>&gt;</span><span>&lt;<span>a</span> <span >href</span>=<span >"#about"</span>&gt;</span>About<span>&lt;/<span>a</span>&gt;</span><span>&lt;/<span>li</span>&gt;</span>
                                                        <span>&lt;<span>li</span>&gt;</span><span>&lt;<span>a</span> <span >href</span>=<span >"#services"</span>&gt;</span>Services<span>&lt;/<span>a</span>&gt;</span><span>&lt;/<span>li</span>&gt;</span>
                                                        <span>&lt;<span>li</span>&gt;</span><span>&lt;<span>a</span> <span >href</span>=<span >"#contact"</span>&gt;</span>Contact<span>&lt;/<span>a</span>&gt;</span><span>&lt;/<span>li</span>&gt;</span>
                                                        <span>&lt;/<span>ul</span>&gt;</span>
                                                        <span>&lt;/<span>nav</span>&gt;</span>
                                                        <span>&lt;/<span>header</span>&gt;</span>

                                                        <span>&lt;<span>main</span>&gt;</span>
                                                        <span>&lt;<span>section</span> <span >id</span>=<span >"about"</span>&gt;</span>
                                                        <span>&lt;<span>h2</span>&gt;</span>About<span>&lt;/<span>h2</span>&gt;</span>
                                                        <span>&lt;<span>p</span>&gt;</span>This is a simple HTML document created for demonstration purposes. You can use it as a template for your own projects.<span>&lt;/<span>p</span>&gt;</span>
                                                        <span>&lt;/<span>section</span>&gt;</span>

                                                        <span>&lt;<span>section</span> <span >id</span>=<span >"services"</span>&gt;</span>
                                                        <span>&lt;<span>h2</span>&gt;</span>Services<span>&lt;/<span>h2</span>&gt;</span>
                                                        <span>&lt;<span>ul</span>&gt;</span>
                                                        <span>&lt;<span>li</span>&gt;</span>Web Development<span>&lt;/<span>li</span>&gt;</span>
                                                        <span>&lt;<span>li</span>&gt;</span>SEO Optimization<span>&lt;/<span>li</span>&gt;</span>
                                                        <span>&lt;<span>li</span>&gt;</span>Content Creation<span>&lt;/<span>li</span>&gt;</span>
                                                        <span>&lt;/<span>ul</span>&gt;</span>
                                                        <span>&lt;/<span>section</span>&gt;</span>

                                                        <span>&lt;<span>section</span> <span >id</span>=<span >"contact"</span>&gt;</span>
                                                        <span>&lt;<span>h2</span>&gt;</span>Contact<span>&lt;/<span>h2</span>&gt;</span>
                                                        <span>&lt;<span>form</span> <span >action</span>=<span >"#"</span> <span >method</span>=<span >"post"</span>&gt;</span>
                                                        <span>&lt;<span>label</span> <span >for</span>=<span >"name"</span>&gt;</span>Name:<span>&lt;/<span>label</span>&gt;</span>
                                                        <span>&lt;<span>input</span> <span >type</span>=<span >"text"</span> <span >id</span>=<span >"name"</span> <span >name</span>=<span >"name"</span> <span >required</span>&gt;</span>

                                                        <span>&lt;<span>label</span> <span >for</span>=<span >"email"</span>&gt;</span>Email:<span>&lt;/<span>label</span>&gt;</span>
                                                        <span>&lt;<span>input</span> <span >type</span>=<span >"email"</span> <span >id</span>=<span >"email"</span> <span >name</span>=<span >"email"</span> <span >required</span>&gt;</span>

                                                        <span>&lt;<span>label</span> <span >for</span>=<span >"message"</span>&gt;</span>Message:<span>&lt;/<span>label</span>&gt;</span>
                                                        <span>&lt;<span>textarea</span> <span >id</span>=<span >"message"</span> <span >name</span>=<span >"message"</span> <span >required</span>&gt;</span><span>&lt;/<span>textarea</span>&gt;</span>

                                                        <span>&lt;<span>button</span> <span >type</span>=<span >"submit"</span>&gt;</span>Send Message<span>&lt;/<span>button</span>&gt;</span>
                                                        <span>&lt;/<span>form</span>&gt;</span>
                                                        <span>&lt;/<span>section</span>&gt;</span>
                                                        <span>&lt;/<span>main</span>&gt;</span>

                                                        <span>&lt;<span>footer</span>&gt;</span>
                                                        <span>&lt;<span>p</span>&gt;</span><span className="hljs-symbol">&amp;copy;</span> 2023 Dummy HTML Example. All rights reserved.<span>&lt;/<span>p</span>&gt;</span>
                                                        <span>&lt;/<span>footer</span>&gt;</span>

                                                        <span>&lt;/<span>body</span>&gt;</span>
                                                        <span>&lt;/<span>html</span>&gt;</span>
                                                    </code></div></div></pre>
                                                    <p className="mb-2 whitespace-pre-wrap">Feel free to modify it for your needs, or let me know if you need different content!</p>
                                                </div>
                                            </div>
                                        </div><span></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-token-text-primary w-full border-0 bg-transparent dark:border-0 dark:bg-transparent">
                        <div className="m-auto justify-center p-4 py-2 md:gap-6 ">
                            <div id="e5f668c8-ffa6-4cde-8608-3834d0064f96" aria-label="message-10-e5f668c8-ffa6-4cde-8608-3834d0064f96" className="group mx-auto flex flex-1 gap-3 transition-all duration-300 transform-gpu md:max-w-[47rem] xl:max-w-[55rem] focus:outline-none focus:ring-2 focus:ring-border-xheavy message-render">
                                <div className="relative flex flex-shrink-0 flex-col items-center">
                                    <div className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full">
                                        <div title="Abdullah" className="relative flex items-center justify-center" style={{ "width": "28.8px", "height": "28.8px" }}>
                                            <div className="relative flex h-9 w-9 items-center justify-center rounded-sm p-1 text-white" style={{
                                                "backgroundColor": "rgb(121, 137, 255)", "width": "20px", "height": "20px", "boxShadow":
                                                    "rgba(240, 246, 252, 0.1) 0px 0px 0px 1px"
                                            }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                                    <circle cx="12" cy="7" r="4"></circle>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative flex w-11/12 flex-col user-turn">
                                    <h2 className="select-none font-semibold text-base">Abdullah</h2>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex max-w-full flex-grow flex-col gap-0">
                                            <div className="text-message flex min-h-[20px] flex-col items-start gap-3 overflow-visible [.text-message+&amp;]:mt-5" dir="auto">
                                                <div className="markdown prose message-content dark:prose-invert light w-full break-words dark:text-gray-20">
                                                    <p className="mb-2 whitespace-pre-wrap">give me dummy html response page only</p>
                                                </div>
                                            </div>
                                        </div><span></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-token-text-primary w-full border-0 bg-transparent dark:border-0 dark:bg-transparent">
                        <div className="m-auto justify-center p-4 py-2 md:gap-6 ">
                            <div id="32fd87ae-9ade-415a-9bb7-f4102627cbf6" aria-label="message-11-32fd87ae-9ade-415a-9bb7-f4102627cbf6" className="group mx-auto flex flex-1 gap-3 transition-all duration-300 transform-gpu md:max-w-[47rem] xl:max-w-[55rem] focus:outline-none focus:ring-2 focus:ring-border-xheavy message-render">
                                <div className="relative flex flex-shrink-0 flex-col items-center">
                                    <div className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full">
                                        <div title="ChatGPT" className="relative flex h-9 w-9 items-center justify-center rounded-sm p-1 text-white" style={{ "background": "rgb(171, 104, 255)", "width": "28.8px", "height": "28.8px" }}>
                                            <svg width="16" height="16" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.5" className="">
                                                <path d="M37.5324 16.8707C37.9808 15.5241 38.1363 14.0974 37.9886 12.6859C37.8409 11.2744 37.3934 9.91076 36.676 8.68622C35.6126 6.83404 33.9882 5.3676 32.0373 4.4985C30.0864 3.62941 27.9098 3.40259 25.8215 3.85078C24.8796 2.7893 23.7219 1.94125 22.4257 1.36341C21.1295 0.785575 19.7249 0.491269 18.3058 0.500197C16.1708 0.495044 14.0893 1.16803 12.3614 2.42214C10.6335 3.67624 9.34853 5.44666 8.6917 7.47815C7.30085 7.76286 5.98686 8.3414 4.8377 9.17505C3.68854 10.0087 2.73073 11.0782 2.02839 12.312C0.956464 14.1591 0.498905 16.2988 0.721698 18.4228C0.944492 20.5467 1.83612 22.5449 3.268 24.1293C2.81966 25.4759 2.66413 26.9026 2.81182 28.3141C2.95951 29.7256 3.40701 31.0892 4.12437 32.3138C5.18791 34.1659 6.8123 35.6322 8.76321 36.5013C10.7141 37.3704 12.8907 37.5973 14.9789 37.1492C15.9208 38.2107 17.0786 39.0587 18.3747 39.6366C19.6709 40.2144 21.0755 40.5087 22.4946 40.4998C24.6307 40.5054 26.7133 39.8321 28.4418 38.5772C30.1704 37.3223 31.4556 35.5506 32.1119 33.5179C33.5027 33.2332 34.8167 32.6547 35.9659 31.821C37.115 30.9874 38.0728 29.9178 38.7752 28.684C39.8458 26.8371 40.3023 24.6979 40.0789 22.5748C39.8556 20.4517 38.9639 18.4544 37.5324 16.8707ZM22.4978 37.8849C20.7443 37.8874 19.0459 37.2733 17.6994 36.1501C17.7601 36.117 17.8666 36.0586 17.936 36.0161L25.9004 31.4156C26.1003 31.3019 26.2663 31.137 26.3813 30.9378C26.4964 30.7386 26.5563 30.5124 26.5549 30.2825V19.0542L29.9213 20.998C29.9389 21.0068 29.9541 21.0198 29.9656 21.0359C29.977 21.052 29.9842 21.0707 29.9867 21.0902V30.3889C29.9842 32.375 29.1946 34.2791 27.7909 35.6841C26.3872 37.0892 24.4838 37.8806 22.4978 37.8849ZM6.39227 31.0064C5.51397 29.4888 5.19742 27.7107 5.49804 25.9832C5.55718 26.0187 5.66048 26.0818 5.73461 26.1244L13.699 30.7248C13.8975 30.8408 14.1233 30.902 14.3532 30.902C14.583 30.902 14.8088 30.8408 15.0073 30.7248L24.731 25.1103V28.9979C24.7321 29.0177 24.7283 29.0376 24.7199 29.0556C24.7115 29.0736 24.6988 29.0893 24.6829 29.1012L16.6317 33.7497C14.9096 34.7416 12.8643 35.0097 10.9447 34.4954C9.02506 33.9811 7.38785 32.7263 6.39227 31.0064ZM4.29707 13.6194C5.17156 12.0998 6.55279 10.9364 8.19885 10.3327C8.19885 10.4013 8.19491 10.5228 8.19491 10.6071V19.808C8.19351 20.0378 8.25334 20.2638 8.36823 20.4629C8.48312 20.6619 8.64893 20.8267 8.84863 20.9404L18.5723 26.5542L15.206 28.4979C15.1894 28.5089 15.1703 28.5155 15.1505 28.5173C15.1307 28.5191 15.1107 28.516 15.0924 28.5082L7.04046 23.8557C5.32135 22.8601 4.06716 21.2235 3.55289 19.3046C3.03862 17.3858 3.30624 15.3413 4.29707 13.6194ZM31.955 20.0556L22.2312 14.4411L25.5976 12.4981C25.6142 12.4872 25.6333 12.4805 25.6531 12.4787C25.6729 12.4769 25.6928 12.4801 25.7111 12.4879L33.7631 17.1364C34.9967 17.849 36.0017 18.8982 36.6606 20.1613C37.3194 21.4244 37.6047 22.849 37.4832 24.2684C37.3617 25.6878 36.8382 27.0432 35.9743 28.1759C35.1103 29.3086 33.9415 30.1717 32.6047 30.6641C32.6047 30.5947 32.6047 30.4733 32.6047 30.3889V21.188C32.6066 20.9586 32.5474 20.7328 32.4332 20.5338C32.319 20.3348 32.154 20.1698 31.955 20.0556ZM35.3055 15.0128C35.2464 14.9765 35.1431 14.9142 35.069 14.8717L27.1045 10.2712C26.906 10.1554 26.6803 10.0943 26.4504 10.0943C26.2206 10.0943 25.9948 10.1554 25.7963 10.2712L16.0726 15.8858V11.9982C16.0715 11.9783 16.0753 11.9585 16.0837 11.9405C16.0921 11.9225 16.1048 11.9068 16.1207 11.8949L24.1719 7.25025C25.4053 6.53903 26.8158 6.19376 28.2383 6.25482C29.6608 6.31589 31.0364 6.78077 32.2044 7.59508C33.3723 8.40939 34.2842 9.53945 34.8334 10.8531C35.3826 12.1667 35.5464 13.6095 35.3055 15.0128ZM14.2424 21.9419L10.8752 19.9981C10.8576 19.9893 10.8423 19.9763 10.8309 19.9602C10.8195 19.9441 10.8122 19.9254 10.8098 19.9058V10.6071C10.8107 9.18295 11.2173 7.78848 11.9819 6.58696C12.7466 5.38544 13.8377 4.42659 15.1275 3.82264C16.4173 3.21869 17.8524 2.99464 19.2649 3.1767C20.6775 3.35876 22.0089 3.93941 23.1034 4.85067C23.0427 4.88379 22.937 4.94215 22.8668 4.98473L14.9024 9.58517C14.7025 9.69878 14.5366 9.86356 14.4215 10.0626C14.3065 10.2616 14.2466 10.4877 14.2479 10.7175L14.2424 21.9419ZM16.071 17.9991L20.4018 15.4978L24.7325 17.9975V22.9985L20.4018 25.4983L16.071 22.9985V17.9991Z"
                                                    fill="currentColor"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative flex w-11/12 flex-col agent-turn">
                                    <h2 className="select-none font-semibold text-base">GPT-4o</h2>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex max-w-full flex-grow flex-col gap-0">
                                            <div className="text-message flex min-h-[20px] flex-col items-start gap-3 overflow-visible [.text-message+&amp;]:mt-5" dir="auto">
                                                <div className="markdown prose message-content dark:prose-invert light w-full break-words dark:text-gray-100">
                                                    <p className="mb-2 whitespace-pre-wrap">Certainly! Here’s a simple dummy HTML response page that you can use as a template. This can serve as a basic response or confirmation page for a web application.</p>
                                                    <pre><div className="w-full rounded-md bg-gray-900 text-xs text-white/80"><div className="relative flex items-center justify-between rounded-tl-md rounded-tr-md bg-gray-700 px-4 py-2 font-sans text-xs text-gray-200 dark:bg-gray-700"><span className="">html</span><div className="flex items-center justify-center gap-4"><button type="button" className="ml-auto flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" height="1em" width="1em" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="icon-md-heavy"><path fill="currentColor" fillRule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" clipRule="evenodd"></path></svg>Copy code</button></div></div><div className="overflow-y-auto p-4"><code className="hljs language-html !whitespace-pre"><span className="hljs-meta">&lt;!DOCTYPE <span className="hljs-keyword">html</span>&gt;</span>
                                                        <span>&lt;<span>html</span> <span >lang</span>=<span >"en"</span>&gt;</span>
                                                        <span>&lt;<span>head</span>&gt;</span>
                                                        <span>&lt;<span>meta</span> <span >charset</span>=<span >"UTF-8"</span>&gt;</span>
                                                        <span>&lt;<span>meta</span> <span >name</span>=<span >"viewport"</span> <span >content</span>=<span >"width=device-width, initial-scale=1.0"</span>&gt;</span>
                                                        <span>&lt;<span>title</span>&gt;</span>Response Page<span>&lt;/<span>title</span>&gt;</span>
                                                        <span>&lt;<span>style</span>&gt;</span><span className="css">
                                                            <span>body</span>
                                                            <span>font-family</span>: Arial, sans-serif;
                                                            <span>background-color</span>: <span className="hljs-number">#f4f4f4</span>;
                                                            <span>color</span>: <span className="hljs-number">#333</span>;
                                                            <span>margin</span>: <span className="hljs-number">0</span>;
                                                            <span>padding</span>: <span className="hljs-number">20px</span>;

                                                            <span className="hljs-selector-class">.container</span>
                                                            <span>max-width</span>: <span className="hljs-number">600px</span>;
                                                            <span>margin</span>: auto;
                                                            <span>background</span>: white;
                                                            <span>padding</span>: <span className="hljs-number">20px</span>;
                                                            <span>border-radius</span>: <span className="hljs-number">8px</span>;
                                                            <span>box-shadow</span>: <span className="hljs-number">0</span> <span className="hljs-number">0</span> <span className="hljs-number">10px</span> <span className="hljs-built_in">rgba</span>(<span className="hljs-number">0</span>, <span className="hljs-number">0</span>, <span className="hljs-number">0</span>, <span className="hljs-number">0.1</span>);

                                                            <span>h1</span>
                                                            <span>color</span>: <span className="hljs-number">#4CAF50</span>;

                                                            <span>p</span>
                                                            <span>font-size</span>: <span className="hljs-number">1.2em</span>;

                                                            <span>a</span>
                                                            <span>display</span>: inline-block;
                                                            <span>margin-top</span>: <span className="hljs-number">20px</span>;
                                                            <span>text-decoration</span>: none;
                                                            <span>color</span>: <span className="hljs-number">#fff</span>;
                                                            <span>background-color</span>: <span className="hljs-number">#4CAF50</span>;
                                                            <span>padding</span>: <span className="hljs-number">10px</span> <span className="hljs-number">15px</span>;
                                                            <span>border-radius</span>: <span className="hljs-number">5px</span>;

                                                            <span>a</span><span className="hljs-selector-pseudo">:hover</span>
                                                            <span>background-color</span>: <span className="hljs-number">#45a049</span>;

                                                        </span><span>&lt;/<span>style</span>&gt;</span>
                                                        <span>&lt;/<span>head</span>&gt;</span>
                                                        <span>&lt;<span>body</span>&gt;</span>

                                                        <span>&lt;<span>div</span> <span >class</span>=<span >"container"</span>&gt;</span>
                                                        <span>&lt;<span>h1</span>&gt;</span>Thank You!<span>&lt;/<span>h1</span>&gt;</span>
                                                        <span>&lt;<span>p</span>&gt;</span>Your request has been successfully processed.<span>&lt;/<span>p</span>&gt;</span>
                                                        <span>&lt;<span>p</span>&gt;</span>If you have any further questions or need assistance, feel free to reach out.<span>&lt;/<span>p</span>&gt;</span>
                                                        <span>&lt;<span>a</span> <span >href</span>=<span >"/"</span>&gt;</span>Back to Home<span>&lt;/<span>a</span>&gt;</span>
                                                        <span>&lt;/<span>div</span>&gt;</span>

                                                        <span>&lt;/<span>body</span>&gt;</span>
                                                        <span>&lt;/<span>html</span>&gt;</span>
                                                    </code></div></div></pre>
                                                    <p className="mb-2 whitespace-pre-wrap">This HTML code provides a simple, styled response page that can be customized according to your requirements. Let me know if you need further modifications or additional features!</p>
                                                </div>
                                            </div>
                                        </div><span></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-token-text-primary w-full border-0 bg-transparent dark:border-0 dark:bg-transparent">
                        <div className="m-auto justify-center p-4 py-2 md:gap-6 ">
                            <div id="97f649e7-b29b-4900-b677-f8b265e798bd" aria-label="message-12-97f649e7-b29b-4900-b677-f8b265e798bd" className="group mx-auto flex flex-1 gap-3 transition-all duration-300 transform-gpu md:max-w-[47rem] xl:max-w-[55rem] focus:outline-none focus:ring-2 focus:ring-border-xheavy message-render">
                                <div className="relative flex flex-shrink-0 flex-col items-center">
                                    <div className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full">
                                        <div title="Abdullah" className="relative flex items-center justify-center" style={{ "width": "28.8px", "height": "28.8px" }}>
                                            <div className="relative flex h-9 w-9 items-center justify-center rounded-sm p-1 text-white" style={{
                                                "backgroundColor": "rgb(121, 137, 255)", "width": "20px", "height": "20px", "boxShadow":
                                                    "rgba(240, 246, 252, 0.1) 0px 0px 0px 1px"
                                            }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                                    <circle cx="12" cy="7" r="4"></circle>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative flex w-11/12 flex-col user-turn">
                                    <h2 className="select-none font-semibold text-base">Abdullah</h2>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex max-w-full flex-grow flex-col gap-0">
                                            <div className="text-message flex min-h-[20px] flex-col items-start gap-3 overflow-visible [.text-message+&amp;]:mt-5" dir="auto">
                                                <div className="markdown prose message-content dark:prose-invert light w-full break-words dark:text-gray-20">
                                                    <p className="mb-2 whitespace-pre-wrap">give me dummy html response page only no explaination or txt</p>
                                                </div>
                                            </div>
                                        </div><span></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-token-text-primary w-full border-0 bg-transparent dark:border-0 dark:bg-transparent">
                        <div className="m-auto justify-center p-4 py-2 md:gap-6 ">
                            <div id="03b9a86a-e544-4312-92cc-44f90bc39ff0" aria-label="message-13-03b9a86a-e544-4312-92cc-44f90bc39ff0" className="group mx-auto flex flex-1 gap-3 transition-all duration-300 transform-gpu md:max-w-[47rem] xl:max-w-[55rem] focus:outline-none focus:ring-2 focus:ring-border-xheavy message-render">
                                <div className="relative flex flex-shrink-0 flex-col items-center">
                                    <div className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full">
                                        <div title="ChatGPT" className="relative flex h-9 w-9 items-center justify-center rounded-sm p-1 text-white" style={{ "background": "rgb(171, 104, 255)", "width": "28.8px", "height": "28.8px" }}>
                                            <svg width="16" height="16" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.5" className="">
                                                <path d="M37.5324 16.8707C37.9808 15.5241 38.1363 14.0974 37.9886 12.6859C37.8409 11.2744 37.3934 9.91076 36.676 8.68622C35.6126 6.83404 33.9882 5.3676 32.0373 4.4985C30.0864 3.62941 27.9098 3.40259 25.8215 3.85078C24.8796 2.7893 23.7219 1.94125 22.4257 1.36341C21.1295 0.785575 19.7249 0.491269 18.3058 0.500197C16.1708 0.495044 14.0893 1.16803 12.3614 2.42214C10.6335 3.67624 9.34853 5.44666 8.6917 7.47815C7.30085 7.76286 5.98686 8.3414 4.8377 9.17505C3.68854 10.0087 2.73073 11.0782 2.02839 12.312C0.956464 14.1591 0.498905 16.2988 0.721698 18.4228C0.944492 20.5467 1.83612 22.5449 3.268 24.1293C2.81966 25.4759 2.66413 26.9026 2.81182 28.3141C2.95951 29.7256 3.40701 31.0892 4.12437 32.3138C5.18791 34.1659 6.8123 35.6322 8.76321 36.5013C10.7141 37.3704 12.8907 37.5973 14.9789 37.1492C15.9208 38.2107 17.0786 39.0587 18.3747 39.6366C19.6709 40.2144 21.0755 40.5087 22.4946 40.4998C24.6307 40.5054 26.7133 39.8321 28.4418 38.5772C30.1704 37.3223 31.4556 35.5506 32.1119 33.5179C33.5027 33.2332 34.8167 32.6547 35.9659 31.821C37.115 30.9874 38.0728 29.9178 38.7752 28.684C39.8458 26.8371 40.3023 24.6979 40.0789 22.5748C39.8556 20.4517 38.9639 18.4544 37.5324 16.8707ZM22.4978 37.8849C20.7443 37.8874 19.0459 37.2733 17.6994 36.1501C17.7601 36.117 17.8666 36.0586 17.936 36.0161L25.9004 31.4156C26.1003 31.3019 26.2663 31.137 26.3813 30.9378C26.4964 30.7386 26.5563 30.5124 26.5549 30.2825V19.0542L29.9213 20.998C29.9389 21.0068 29.9541 21.0198 29.9656 21.0359C29.977 21.052 29.9842 21.0707 29.9867 21.0902V30.3889C29.9842 32.375 29.1946 34.2791 27.7909 35.6841C26.3872 37.0892 24.4838 37.8806 22.4978 37.8849ZM6.39227 31.0064C5.51397 29.4888 5.19742 27.7107 5.49804 25.9832C5.55718 26.0187 5.66048 26.0818 5.73461 26.1244L13.699 30.7248C13.8975 30.8408 14.1233 30.902 14.3532 30.902C14.583 30.902 14.8088 30.8408 15.0073 30.7248L24.731 25.1103V28.9979C24.7321 29.0177 24.7283 29.0376 24.7199 29.0556C24.7115 29.0736 24.6988 29.0893 24.6829 29.1012L16.6317 33.7497C14.9096 34.7416 12.8643 35.0097 10.9447 34.4954C9.02506 33.9811 7.38785 32.7263 6.39227 31.0064ZM4.29707 13.6194C5.17156 12.0998 6.55279 10.9364 8.19885 10.3327C8.19885 10.4013 8.19491 10.5228 8.19491 10.6071V19.808C8.19351 20.0378 8.25334 20.2638 8.36823 20.4629C8.48312 20.6619 8.64893 20.8267 8.84863 20.9404L18.5723 26.5542L15.206 28.4979C15.1894 28.5089 15.1703 28.5155 15.1505 28.5173C15.1307 28.5191 15.1107 28.516 15.0924 28.5082L7.04046 23.8557C5.32135 22.8601 4.06716 21.2235 3.55289 19.3046C3.03862 17.3858 3.30624 15.3413 4.29707 13.6194ZM31.955 20.0556L22.2312 14.4411L25.5976 12.4981C25.6142 12.4872 25.6333 12.4805 25.6531 12.4787C25.6729 12.4769 25.6928 12.4801 25.7111 12.4879L33.7631 17.1364C34.9967 17.849 36.0017 18.8982 36.6606 20.1613C37.3194 21.4244 37.6047 22.849 37.4832 24.2684C37.3617 25.6878 36.8382 27.0432 35.9743 28.1759C35.1103 29.3086 33.9415 30.1717 32.6047 30.6641C32.6047 30.5947 32.6047 30.4733 32.6047 30.3889V21.188C32.6066 20.9586 32.5474 20.7328 32.4332 20.5338C32.319 20.3348 32.154 20.1698 31.955 20.0556ZM35.3055 15.0128C35.2464 14.9765 35.1431 14.9142 35.069 14.8717L27.1045 10.2712C26.906 10.1554 26.6803 10.0943 26.4504 10.0943C26.2206 10.0943 25.9948 10.1554 25.7963 10.2712L16.0726 15.8858V11.9982C16.0715 11.9783 16.0753 11.9585 16.0837 11.9405C16.0921 11.9225 16.1048 11.9068 16.1207 11.8949L24.1719 7.25025C25.4053 6.53903 26.8158 6.19376 28.2383 6.25482C29.6608 6.31589 31.0364 6.78077 32.2044 7.59508C33.3723 8.40939 34.2842 9.53945 34.8334 10.8531C35.3826 12.1667 35.5464 13.6095 35.3055 15.0128ZM14.2424 21.9419L10.8752 19.9981C10.8576 19.9893 10.8423 19.9763 10.8309 19.9602C10.8195 19.9441 10.8122 19.9254 10.8098 19.9058V10.6071C10.8107 9.18295 11.2173 7.78848 11.9819 6.58696C12.7466 5.38544 13.8377 4.42659 15.1275 3.82264C16.4173 3.21869 17.8524 2.99464 19.2649 3.1767C20.6775 3.35876 22.0089 3.93941 23.1034 4.85067C23.0427 4.88379 22.937 4.94215 22.8668 4.98473L14.9024 9.58517C14.7025 9.69878 14.5366 9.86356 14.4215 10.0626C14.3065 10.2616 14.2466 10.4877 14.2479 10.7175L14.2424 21.9419ZM16.071 17.9991L20.4018 15.4978L24.7325 17.9975V22.9985L20.4018 25.4983L16.071 22.9985V17.9991Z"
                                                    fill="currentColor"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative flex w-11/12 flex-col agent-turn">
                                    <h2 className="select-none font-semibold text-base">GPT-4o</h2>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex max-w-full flex-grow flex-col gap-0">
                                            <div className="text-message flex min-h-[20px] flex-col items-start gap-3 overflow-visible [.text-message+&amp;]:mt-5" dir="auto">
                                                <div className="markdown prose message-content dark:prose-invert light w-full break-words dark:text-gray-100"><pre><div className="w-full rounded-md bg-gray-900 text-xs text-white/80"><div className="relative flex items-center justify-between rounded-tl-md rounded-tr-md bg-gray-700 px-4 py-2 font-sans text-xs text-gray-200 dark:bg-gray-700"><span className="">html</span><div className="flex items-center justify-center gap-4"><button type="button" className="ml-auto flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" height="1em" width="1em" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="icon-md-heavy"><path fill="currentColor" fillRule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" clipRule="evenodd"></path></svg>Copy code</button></div></div><div className="overflow-y-auto p-4"><code className="hljs language-html !whitespace-pre"><span className="hljs-meta">&lt;!DOCTYPE <span className="hljs-keyword">html</span>&gt;</span>
                                                    <span>&lt;<span>html</span> <span >lang</span>=<span >"en"</span>&gt;</span>
                                                    <span>&lt;<span>head</span>&gt;</span>
                                                    <span>&lt;<span>meta</span> <span >charset</span>=<span >"UTF-8"</span>&gt;</span>
                                                    <span>&lt;<span>meta</span> <span >name</span>=<span >"viewport"</span> <span >content</span>=<span >"width=device-width, initial-scale=1.0"</span>&gt;</span>
                                                    <span>&lt;<span>title</span>&gt;</span>Response Page<span>&lt;/<span>title</span>&gt;</span>
                                                    <span>&lt;<span>style</span>&gt;</span><span className="css">
                                                        <span>body</span>
                                                        <span>font-family</span>: Arial, sans-serif;
                                                        <span>background-color</span>: <span className="hljs-number">#f4f4f4</span>;

                                                        <span className="hljs-selector-class">.container</span>
                                                        <span>max-width</span>: <span className="hljs-number">600px</span>;
                                                        <span>margin</span>: auto;
                                                        <span>background</span>: white;
                                                        <span>padding</span>: <span className="hljs-number">20px</span>;
                                                        <span>border-radius</span>: <span className="hljs-number">8px</span>;
                                                        <span>box-shadow</span>: <span className="hljs-number">0</span> <span className="hljs-number">0</span> <span className="hljs-number">10px</span> <span className="hljs-built_in">rgba</span>(<span className="hljs-number">0</span>, <span className="hljs-number">0</span>, <span className="hljs-number">0</span>, <span className="hljs-number">0.1</span>);

                                                        <span>h1</span>
                                                        <span>color</span>: <span className="hljs-number">#4CAF50</span>;

                                                        <span>p</span>
                                                        <span>font-size</span>: <span className="hljs-number">1.2em</span>;

                                                        <span>a</span>
                                                        <span>display</span>: inline-block;
                                                        <span>margin-top</span>: <span className="hljs-number">20px</span>;
                                                        <span>text-decoration</span>: none;
                                                        <span>color</span>: <span className="hljs-number">#fff</span>;
                                                        <span>background-color</span>: <span className="hljs-number">#4CAF50</span>;
                                                        <span>padding</span>: <span className="hljs-number">10px</span> <span className="hljs-number">15px</span>;
                                                        <span>border-radius</span>: <span className="hljs-number">5px</span>;

                                                        <span>a</span><span className="hljs-selector-pseudo">:hover</span>
                                                        <span>background-color</span>: <span className="hljs-number">#45a049</span>;

                                                    </span><span>&lt;/<span>style</span>&gt;</span>
                                                    <span>&lt;/<span>head</span>&gt;</span>
                                                    <span>&lt;<span>body</span>&gt;</span>

                                                    <span>&lt;<span>div</span> <span >class</span>=<span >"container"</span>&gt;</span>
                                                    <span>&lt;<span>h1</span>&gt;</span>Thank You!<span>&lt;/<span>h1</span>&gt;</span>
                                                    <span>&lt;<span>p</span>&gt;</span>Your request has been successfully processed.<span>&lt;/<span>p</span>&gt;</span>
                                                    <span>&lt;<span>p</span>&gt;</span>If you have any further questions or need assistance, feel free to reach out.<span>&lt;/<span>p</span>&gt;</span>
                                                    <span>&lt;<span>a</span> <span >href</span>=<span >"/"</span>&gt;</span>Back to Home<span>&lt;/<span>a</span>&gt;</span>
                                                    <span>&lt;/<span>div</span>&gt;</span>

                                                    <span>&lt;/<span>body</span>&gt;</span>
                                                    <span>&lt;/<span>html</span>&gt;</span>
                                                </code></div></div></pre></div>
                                            </div>
                                        </div><span></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <form className="mx-auto flex w-full flex-row gap-3 transition-[max-width] duration-300 sm:px-2 md:max-w-3xl xl:max-w-4xl sm:mb-10">
                            <div className="relative flex h-full flex-1 items-stretch md:flex-col">
                                <div className="flex w-full items-center">
                                    <div className="relative flex w-full flex-grow flex-col overflow-hidden rounded-t-3xl border pb-4 text-text-primary transition-all duration-200 sm:rounded-3xl sm:pb-0 shadow-md border-border-light bg-surface-chat">
                                        <div className="flex flex-row">
                                            <textarea dir="ltr" name="text" id="prompt-textarea" tabIndex={0} data-testid="text-input" rows={1} className="md:py-3.5 m-0 w-full resize-none py-[13px] placeholder-black/50 bg-transparent dark:placeholder-white/50 [&amp;:has(textarea:focus)]:shadow-[0_2px_6px_rgba(0,0,0,.05)] max-h-[45vh] md:max-h-[55vh] px-5 focus:outline-none focus:ring-0 focus:ring-opacity-0 focus:ring-offset-0 transition-[max-height] duration-200 disabled:cursor-not-allowed"
                                                style={{ "height": "52px", "overflowY": "auto" }} placeholder="Message GPT-4o"></textarea>
                                        </div>
                                        <div className="items-between flex gap-2 pb-2 flex-row">
                                            <div className="mx-auto flex"></div>
                                            <div className="mr-2">
                                                <button aria-label="Send message" id="send-button" className="cursor-pointer rounded-full bg-text-primary p-1.5 text-text-primary outline-offset-4 transition-all duration-200 disabled:cursor-not-allowed disabled:text-text-secondary disabled:opacity-10"
                                                    data-testid="send-button" type="submit" aria-describedby=":ra:"><span className="" data-state="closed"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white dark:text-black"><path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg></span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    </div>
    </>
}