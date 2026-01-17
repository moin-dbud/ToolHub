"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const HomePage: React.FC = () => {
    const router = useRouter();
    return (
        <div className="font-sans min-h-screen bg-stone-50 dark:bg-black">

            <div className="relative z-10 p-4 pt-24 pb-12 gap-8 sm:p-8 sm:pt-28 md:pt-32 lg:p-20 lg:pt-40 lg:pb-20 lg:gap-16">

                {/* Hero Section */}
                <div className="text-center max-w-6xl mx-auto mb-16 sm:mb-20 md:mb-24 lg:mb-32">
                    <div className="space-y-6 md:space-y-8">
                        <div className="relative">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-none tracking-tight text-gray-900 dark:text-white" style={{ fontFamily: 'Agile, sans-serif' }}>
                                All Your Developer Tools 
                                <br />
                                In One Place
                            </h1>
                            <div className="absolute -bottom-2 md:-bottom-4 left-1/2 transform -translate-x-1/2 w-20 md:w-62 h-1 bg-gray-900 dark:bg-white"></div>
                        </div>

                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light max-w-4xl mx-auto leading-relaxed px-4 sm:px-0 text-gray-700 dark:text-gray-300">
                            Fast, privacy-focused utilities for developers. No sign-up required.
                            No ads. Process everything client-side.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-6 md:pt-8 px-4 sm:px-0">
                            <button
                                onClick={() => router.push('/login')}
                                style={{ backgroundColor: "hsl(217, 91%, 60%)" }}
                                className="group w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 cursor-pointer text-white rounded-full  transition-all duration-300 font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-2"
                            >
                                <span className="flex items-center justify-center space-x-3">
                                    <span>ACCESS TOOLS FREE</span>
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </span>
                            </button>

                            <Link
                                href="/tools"
                                className="group w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-full border-2 transition-all duration-300 font-bold text-base sm:text-lg hover:-translate-y-2 text-center border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-black">
                                <span className="flex items-center justify-center space-x-2">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                    <span>BROWSE ALL TOOLS</span>
                                </span>
                            </Link>
                        </div>


                        <div className="flex items-center justify-center space-x-6 sm:space-x-8 md:space-x-12 pt-8 sm:pt-10 md:pt-12">
                            <div className="text-center">
                                <div className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 dark:text-white">
                                    100+
                                </div>
                                <div className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
                                    TOOLS
                                </div>
                            </div>
                            <div className="w-px h-8 sm:h-10 md:h-12 bg-gray-300 dark:bg-gray-700"></div>
                            <div className="text-center">
                                <div className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 dark:text-white">
                                    FREE
                                </div>
                                <div className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
                                    TO USE
                                </div>
                            </div>
                            <div className="w-px h-8 sm:h-10 md:h-12 bg-gray-300 dark:bg-gray-700"></div>
                            <div className="text-center">
                                <div className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 dark:text-white">
                                    24/7
                                </div>
                                <div className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
                                    ACCESS
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default HomePage;