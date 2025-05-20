import Image from "next/image"

export const Section3 = () => {
    return <>
        <div className="grid grid-cols-2 w-full">
            <article className="bg-pink-50 col-span-1 w-full flex justify-between flex-col relative gap-2">
                <div>
                    <header>
                        <div className="flex items-center gap-2">
                            <Image src="https://images.ctfassets.net/spoqsaf9291f/2RmBatRiqNZT7mu44Qoifl/6a834087f3d0a018fa5b14a5bae00582/ai-meeting-notes-icon.png" alt="mic" width={20} height={20} />
                            <h3> AI Meeting Notes</h3>
                            <span>New</span>
                        </div>
                        <div className="flex flex-row gap-2">
                            <h2>Perfect notes every time.</h2>
                            <div>
                                <svg
                                    height="32"
                                    width="32"
                                    viewBox="0 0 64 64"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="NotionIconSvgWrapper_icon__In1uC"
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

                </div>
                <picture>
                    <Image src="https://images.ctfassets.net/spoqsaf9291f/4zmmc2Sts2j750iWG4cz9C/f9fc4a58dea5be6e42777a8637684765/bento_1.en-US.png" alt="image" width={100} height={100} className="w-full object-contain h-auto max-h-full z-20"
                    />

                </picture>
            </article>
            <article className="bg-blue-50 col-span-1"></article>



        </div>
    </>
}