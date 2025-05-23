import Image from "next/image"

export const Section3 = () => {
    return (
        <section className="w-full xl:w-11/12 px-6 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6">
                <article className="group col-span-1 bg-red-50 rounded-3xl pt-6 md:pt-10 flex flex-col justify-between relative overflow-hidden border border-red-100 hover:border-red-200">
                    <header className="pl-6 pr-6">
                        <div className="flex items-center gap-2 mb-4">
                            <Image
                                src="https://images.ctfassets.net/spoqsaf9291f/2RmBatRiqNZT7mu44Qoifl/6a834087f3d0a018fa5b14a5bae00582/ai-meeting-notes-icon.png"
                                alt="mic"
                                width={30}
                                height={30}
                            />
                            <h3 className="text-sm font-medium">AI Meeting Notes</h3>
                            <span className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full">New</span>
                        </div>

                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                                Perfect notes every time.
                            </h2>
                            <div className="ml-4 shrink-0">
                                <svg
                                    height="32"
                                    width="32"
                                    viewBox="0 0 64 64"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="text-black"
                                >
                                    <svg
                                        viewBox="0 0 33 32"
                                        className="w-full h-full block fill-inherit shrink-0"
                                    >
                                        <rect
                                            width="31.2"
                                            height="31.2"
                                            x="0.9"
                                            y="0.4"
                                            rx="15.6"
                                            stroke="#F6F5F4"
                                            strokeWidth="1"
                                            fill="white"
                                        />
                                        <path
                                            fill="#000"
                                            d="m23.769 16-7.2 7.2-1.272-1.272 5.028-5.028H9.297v-1.8h11.028l-5.028-5.028L16.569 8.8l7.2 7.2Z"
                                        />
                                    </svg>
                                </svg>
                            </div>
                        </div>
                    </header>

                    <div className="mt-6">
                        <Image
                            src="https://images.ctfassets.net/spoqsaf9291f/4zmmc2Sts2j750iWG4cz9C/f9fc4a58dea5be6e42777a8637684765/bento_1.en-US.png"
                            alt="AI Meeting Notes"
                            width={600}
                            height={400}
                            className="w-full h-auto object-contain z-20"
                        />
                    </div>

                    <img
                        src="https://www.notion.com/front-static/nosey/bento/noseyWriting.gif"
                        alt="animation"
                        className="absolute bottom-4 right-4 w-[8vw] h-[8vw] max-w-[90px] max-h-[90px] min-w-[60px] min-h-[60px] p-[2px] rounded-full border-2 border-gray-200 bg-white flex items-center justify-center shadow-[0_2px_10.6667px_#00000014] overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none"
                    />
                </article>

                <article className="group col-span-1 bg-blue-50 rounded-3xl pt-6 md:pt-10 flex flex-col justify-between relative overflow-hidden border border-blue-100 hover:border-blue-200">
                    <header className="pr-6 pl-6">
                        <div className="flex items-center gap-2 mb-4">
                            <Image
                                src="https://images.ctfassets.net/spoqsaf9291f/4Jnz1LdPqjujdW77jmtWTh/a055aeb5baa46435d5db493456991bff/icon_bento_search.png"
                                alt="search"
                                width={30}
                                height={30}
                            />
                            <h3 className="text-sm font-medium">Enterprise Search</h3>
                            <span className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full">New</span>
                        </div>

                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                                One search for everything.
                            </h2>
                            <div className="ml-4 shrink-0">
                                <svg
                                    height="32"
                                    width="32"
                                    viewBox="0 0 64 64"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="text-black"
                                >
                                    <svg
                                        viewBox="0 0 33 32"
                                        className="w-full h-full block fill-inherit shrink-0"
                                    >
                                        <rect
                                            width="31.2"
                                            height="31.2"
                                            x="0.9"
                                            y="0.4"
                                            rx="15.6"
                                            stroke="#F6F5F4"
                                            strokeWidth="1"
                                            fill="white"
                                        />
                                        <path
                                            fill="#000"
                                            d="m23.769 16-7.2 7.2-1.272-1.272 5.028-5.028H9.297v-1.8h11.028l-5.028-5.028L16.569 8.8l7.2 7.2Z"
                                        />
                                    </svg>
                                </svg>
                            </div>
                        </div>

                    </header>

                    <div className="mt-6">
                        <Image
                            src="https://images.ctfassets.net/spoqsaf9291f/2ZvcfZ5FYoh5mWSzqBAoqI/0fc610cde8307c2707c679304bf55589/30222"
                            alt="AI Meeting Notes"
                            width={600}
                            height={400}
                            className="w-full h-auto object-contain z-20"
                        />
                    </div>

                    <img
                        src="https://www.notion.com/front-static/nosey/bento/noseySearching.gif"
                        alt="animation"
                        className="absolute bottom-4 right-4 w-[8vw] h-[8vw] max-w-[90px] max-h-[90px] min-w-[60px] min-h-[60px] p-[2px] rounded-full border-2 border-gray-200 bg-white flex items-center justify-center shadow-[0_2px_10.6667px_#00000014] overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none"
                    />
                </article>
                {/* //orange article */}
                <article className="group col-span-1 md:col-span-2 bg-orange-100 rounded-3xl pt-4 md:pt-6 flex flex-col md:flex-row justify-between relative overflow-hidden border border-orange-100 hover:border-orange-200 transition-shadow  md:h-[320px]">
                    <header className="px-6">
                        <div className="flex items-center gap-2 mb-2">
                            <Image
                                src="https://images.ctfassets.net/spoqsaf9291f/1vDd1Xq1bijUBXwf3p33RL/70cae92019d022cc26708127829459ae/icon_bento_projects.png"
                                alt="projects"
                                width={24}
                                height={24}
                            />
                            <h3 className="text-sm font-medium">Projects</h3>
                        </div>

                        <div className="flex flex-row md:flex-col items-end md:items-start gap-32 md:gap-36">
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                                Keep every plan on track.
                            </h2>
                            <div className=" shrink-0">
                                <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-md">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="w-4 h-4 text-black"
                                    >
                                        <path d="M9 18l6-6-6-6" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </header>

                    <div className="mt-4 pl-6">
                        <Image
                            src="https://images.ctfassets.net/spoqsaf9291f/sBvJS45PQCJBRR1hfIZH6/89c2b8066e8e52ef45c433294d6d0af9/bento_3.en-US.png"
                            alt="Projects Preview"
                            width={600}
                            height={400}
                            className="h-full w-full object-center z-10"
                        />
                    </div>

                    <img
                        src="https://www.notion.com/front-static/nosey/bento/noseyGreeting.gif"
                        alt="animation"
                        className="absolute bottom-4 right-4 w-[8vw] h-[8vw] max-w-[90px] max-h-[90px] min-w-[60px] min-h-[60px] p-[2px] rounded-full border-2 border-gray-200 bg-white flex items-center justify-center shadow-[0_2px_10.6667px_#00000014] overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none"
                    />
                </article>



                {/* grey article */}
                <article className="group col-span-1 bg-slate-50 rounded-3xl pt-6 md:pt-10 flex flex-col justify-between relative overflow-hidden border border-slate-100 hover:border-slate-200">
                    <header className="pl-6 pr-6">
                        <div className="flex items-center gap-2 mb-4">
                            <Image
                                src="https://images.ctfassets.net/spoqsaf9291f/3ZUI2YU0fvfX5iqzaO6vy5/116f6227f7a97a126cac46377c0b6ea2/icon_bento_mail.png"
                                alt="mail"
                                width={30}
                                height={30}
                            />
                            <h3 className="text-sm font-medium">Star Mail</h3>
                            <span className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full">New</span>
                        </div>

                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                                The inbox that thinks like you.
                            </h2>
                            <div className="ml-4 shrink-0">
                                <svg
                                    height="32"
                                    width="32"
                                    viewBox="0 0 64 64"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="text-black"
                                >
                                    <svg
                                        viewBox="0 0 33 32"
                                        className="w-full h-full block fill-inherit shrink-0"
                                    >
                                        <rect
                                            width="31.2"
                                            height="31.2"
                                            x="0.9"
                                            y="0.4"
                                            rx="15.6"
                                            stroke="#F6F5F4"
                                            strokeWidth="1"
                                            fill="white"
                                        />
                                        <path
                                            fill="#000"
                                            d="m23.769 16-7.2 7.2-1.272-1.272 5.028-5.028H9.297v-1.8h11.028l-5.028-5.028L16.569 8.8l7.2 7.2Z"
                                        />
                                    </svg>
                                </svg>
                            </div>
                        </div>
                    </header>

                    <div className="mt-6">
                        <Image
                            src="https://images.ctfassets.net/spoqsaf9291f/3WUVrdpc8WmnGJooDLXPR7/58a35d526f463c4a492a8119c1b652b8/bento_4.en-US.png"
                            alt="AI Inbox"
                            width={600}
                            height={400}
                            className="w-full h-auto object-contain z-20"
                        />
                    </div>

                    <img
                        src="https://www.notion.com/front-static/nosey/bento/noseyThinking.gif"
                        alt="animation"
                        className="absolute bottom-4 right-4 w-[8vw] h-[8vw] max-w-[90px] max-h-[90px] min-w-[60px] min-h-[60px] p-[2px] rounded-full border-2 border-gray-200 bg-white flex items-center justify-center shadow-[0_2px_10.6667px_#00000014] overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none"
                    />
                </article>

                {/* green article */}

                <article className="group col-span-1 bg-blue-50 rounded-3xl pt-6 md:pt-10 flex flex-col justify-between relative overflow-hidden border border-blue-100 hover:border-blue-200">
                    <header className="pr-6 pl-6">
                        <div className="flex items-center gap-2 mb-4">
                            <Image
                                src="https://images.ctfassets.net/spoqsaf9291f/7x3FVMsVsqlTTYDAC8PEpD/3a305e02cf4577a6d7b2acf0b979bb66/icon_bento_templates.png"
                                alt="search"
                                width={30}
                                height={30}
                            />
                            <h3 className="text-sm font-medium">Bussiness-in-a-box</h3>
                            <span className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full">New</span>
                        </div>

                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                                Run your entire company.
                            </h2>
                            <div className="ml-4 shrink-0">
                                <svg
                                    height="32"
                                    width="32"
                                    viewBox="0 0 64 64"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="text-black"
                                >
                                    <svg
                                        viewBox="0 0 33 32"
                                        className="w-full h-full block fill-inherit shrink-0"
                                    >
                                        <rect
                                            width="31.2"
                                            height="31.2"
                                            x="0.9"
                                            y="0.4"
                                            rx="15.6"
                                            stroke="#F6F5F4"
                                            strokeWidth="1"
                                            fill="white"
                                        />
                                        <path
                                            fill="#000"
                                            d="m23.769 16-7.2 7.2-1.272-1.272 5.028-5.028H9.297v-1.8h11.028l-5.028-5.028L16.569 8.8l7.2 7.2Z"
                                        />
                                    </svg>
                                </svg>
                            </div>
                        </div>

                    </header>

                    <div className="mt-6">
                        <Image
                            src="https://images.ctfassets.net/spoqsaf9291f/4m5lpqe7uGKqVeCbxJTzs8/e55e27db18bf03aa6b431f6797219894/bento_5.en-US.png"
                            alt="AI Meeting Notes"
                            width={600}
                            height={400}
                            className="w-full h-auto object-contain z-20"
                        />
                    </div>

                    <img
                        src="https://www.notion.com/front-static/nosey/bento/noseyGear.gif"
                        alt="animation"
                        className="absolute bottom-4 right-4 w-[8vw] h-[8vw] max-w-[90px] max-h-[90px] min-w-[60px] min-h-[60px] p-[2px] rounded-full border-2 border-gray-200 bg-white flex items-center justify-center shadow-[0_2px_10.6667px_#00000014] overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none"
                    />
                </article>
            </div>
        </section>
    );
};
