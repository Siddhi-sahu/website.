"use client"
import { useState } from "react";
import Link from "next/link";
import logo from "../../public/logo.jpg";
import Image from "next/image";


export default function Navbar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <Image
                                src={logo}
                                alt="Logo"
                                width={80}
                                height={20}
                                className="cursor-pointer h-auto w-auto"
                                priority
                            />

                        </Link>
                    </div>

                    <div className="hidden md:flex space-x-6 items-center">
                        <span className="text-gray-700 hover:text-black cursor-pointer">StarLink ▾</span>
                        <span className="text-gray-700 hover:text-black flex items-center gap-1 cursor-pointer">
                            Mail
                            <span className="text-xs bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded font-medium">New</span>
                        </span>
                        <span className="text-gray-700 hover:text-black cursor-pointer">Calendar</span>
                        <span className="text-gray-700 hover:text-black cursor-pointer">AI</span>
                        <span className="text-gray-700 hover:text-black cursor-pointer">Enterprise</span>
                        <span className="text-gray-700 hover:text-black cursor-pointer">Pricing</span>
                        <span className="text-gray-700 hover:text-black cursor-pointer">Explore ▾</span>
                        <span className="text-gray-700 hover:text-black cursor-pointer">Request a demo</span>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <Link href="/login" className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900">Log in</Link>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-700 focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden px-4 pb-4 space-y-2">
                    {[
                        "StarLink",
                        "Mail",
                        "Calendar",
                        "AI",
                        "Enterprise",
                        "Pricing",
                        "Explore",
                        "Request a demo",
                    ].map((item) => (
                        <div key={item} className="block text-gray-700">
                            {item === "Mail" ? (
                                <span className="flex items-center gap-1">
                                    Mail
                                    <span className="text-xs bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded font-medium">New</span>
                                </span>
                            ) : (
                                item
                            )}
                        </div>
                    ))}


                    <button className="w-full mt-2 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900">
                        Log in
                    </button>
                </div>
            )}
        </nav>
    );
}
