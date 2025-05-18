"use client"
import Image from "next/image";
import sectionImage from "@/../public/noseyHeroV2.avif";
import { useEffect, useRef, useState } from "react";

export const Section1 = () => {
    const [videoPlayed, setVideoPlayed] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.play();

            video.onended = () => {
                setVideoPlayed(true);
            }
        }
    }, [])

    return (
        <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-12 max-w-7xl mx-auto">
            <div className="max-w-xl text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    The AI workspace <br className="hidden md:block" /> that works for you.
                </h1>
                <p className="mt-4 text-lg text-gray-700">
                    One place where teams find every answer, automate the busywork, and get projects done.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md">
                        Get StarLink free
                    </button>
                    <button className="bg-blue-100 hover:bg-blue-200 text-blue-700 font-semibold px-6 py-3 rounded-md">
                        Request a demo
                    </button>
                </div>
            </div>

            <div className="mb-8 lg:mb-0 lg:ml-12">

                {!videoPlayed ? <video ref={videoRef} poster="@/../public/noseyHeroV2.avif" src="https://www.notion.com/front-static/nosey/hero/noseyHeroV2.mp4" className="w-full h-auto" playsInline muted>

                </video>
                    : <Image
                        src={sectionImage}
                        alt="starlink illutration"
                        className="max-w-full h-auto"
                        priority
                    />}
            </div>
        </section>
    );
};

