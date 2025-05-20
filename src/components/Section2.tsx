import Image from "next/image";

export const Section2 = () => {
    return (
        <section className="w-full bg-white py-8 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-6 xl:gap-40">
                <p className="text-slate-500 text-sm md:text-base whitespace-nowrap">
                    Trusted by top teams
                </p>

                <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
                    <Image src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2FjWkCPMAAj0Av69704DQoB%2F84499b606028b276e0bf94c238f07097%2FOpenAI-black-wordmark-cropped.png&w=3840&q=75" alt="OpenAi" width={80} height={30} />
                    <Image src="https://images.ctfassets.net/spoqsaf9291f/502ApiNcRHgIwrDU8XRYTQ/497492503acb3fa21bbd9dd1aec193c3/Figma-logo-color.svg" alt="Figma" width={80} height={30} />
                    <Image src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F3CSWr4Z4uIvbfO7102KPY%2Fbbd97c8edd0673853ac8dae2887a638d%2Fcursor.png&w=1920&q=75" alt="Cursor" width={80} height={30} />
                    <Image src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F4eiEZBWL5gEClwB1IHi18I%2Fb9b86479965977121ceabd01f45567a7%2Framp.png&w=3840&q=75" alt="Ramp" width={80} height={30} />
                    <Image src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F4xtSoCGKxiZcTwsYPlBB5h%2F0fb7d4155e89ef5a852936099e014313%2Fvolvo.png&w=1920&q=75" alt="Volvo" width={80} height={30} />
                    <Image src="https://images.ctfassets.net/spoqsaf9291f/xDZNk5XtOxMEiqsiJ6paq/5264c929774566fc6f02fbb47e7aea97/Headspace-logo-color.svg" alt="Headspace" width={80} height={30} />
                    <Image src="https://images.ctfassets.net/spoqsaf9291f/15en0a60cYTRxNO1QlHbdg/f09657a6b8287f1db0e628a048267e2c/vercel-logotype-light.svg" alt="Vercel" width={80} height={30} />
                    <Image src="https://images.ctfassets.net/spoqsaf9291f/3hzRKZTT0Mi4Q3JLPQpQyF/28256f50d0bf6b63bfbed7862b8cbe68/Perplexity_AI_logo.svg.png" alt="Perplexity" width={80} height={30} />
                </div>
            </div>
        </section>
    );
};
