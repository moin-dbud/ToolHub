"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Lightbulb } from 'lucide-react';
import Navbar from './Navbar';
import { Footer } from './footer';

interface RelatedTool {
    title: string;
    description: string;
    link: string;
    icon: React.ReactNode;
}

interface Feature {
    icon: React.ReactNode;
    title: string;
    description: string;
}

interface Step {
    number: number;
    icon: React.ReactNode;
    title: string;
    description: string;
}

interface ToolLayoutProps {
    toolName: string;
    description: string;
    children: React.ReactNode;
    aboutContent: string[];
    features: Feature[];
    howToSteps: Step[];
    proTips: string[];
    relatedTools: RelatedTool[];
}

export default function ToolLayout({
    toolName,
    description,
    children,
    aboutContent,
    features,
    howToSteps,
    proTips,
    relatedTools,
}: ToolLayoutProps) {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-black text-white">
                {/* Tool Hero Section */}
                <div className="relative pt-32 pb-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto text-center">
                        <h1
                            style={{ fontFamily: 'outfit, outfit Fallback' }}
                            className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4"
                        >
                            {toolName}
                        </h1>
                        <div className="w-32 h-1 bg-blue-500 mx-auto mb-6"></div>
                        <p
                            style={{ fontFamily: 'outfit, outfit Fallback' }}
                            className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto"
                        >
                            {description}
                        </p>
                    </div>
                </div>

                {/* Main Tool Interface */}
                <div className="py-8 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </div>

                {/* About This Tool Section */}
                <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
                    <div className="max-w-4xl mx-auto">
                        <h2
                            style={{ fontFamily: 'outfit, outfit Fallback' }}
                            className="text-3xl font-bold text-white mb-6"
                        >
                            About This Tool
                        </h2>
                        <div className="space-y-4">
                            {aboutContent.map((paragraph, index) => (
                                <p
                                    key={index}
                                    style={{ fontFamily: 'outfit, outfit Fallback' }}
                                    className="text-gray-400 leading-relaxed"
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Key Features Grid */}
                <div className="py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <h2
                            style={{ fontFamily: 'outfit, outfit Fallback' }}
                            className="text-3xl font-bold text-white mb-12 text-center"
                        >
                            Key Features
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-blue-500 transition-all duration-300"
                                >
                                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 mb-4">
                                        {feature.icon}
                                    </div>
                                    <h3
                                        style={{ fontFamily: 'outfit, outfit Fallback' }}
                                        className="text-lg font-bold text-white mb-2"
                                    >
                                        {feature.title}
                                    </h3>
                                    <p
                                        style={{ fontFamily: 'outfit, outfit Fallback' }}
                                        className="text-gray-400 text-sm"
                                    >
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* How To Use Section */}
                <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
                    <div className="max-w-4xl mx-auto">
                        <h2
                            style={{ fontFamily: 'outfit, outfit Fallback' }}
                            className="text-3xl font-bold text-white mb-12 text-center"
                        >
                            How To Use
                        </h2>
                        <div className="space-y-8">
                            {howToSteps.map((step, index) => (
                                <div key={index} className="flex gap-6">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                            {step.number}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="text-blue-400">
                                                {step.icon}
                                            </div>
                                            <h3
                                                style={{ fontFamily: 'outfit, outfit Fallback' }}
                                                className="text-xl font-bold text-white"
                                            >
                                                {step.title}
                                            </h3>
                                        </div>
                                        <p
                                            style={{ fontFamily: 'outfit, outfit Fallback' }}
                                            className="text-gray-400"
                                        >
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Pro Tips Section */}
                <div className="py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <Lightbulb className="w-8 h-8 text-blue-400" />
                            <h2
                                style={{ fontFamily: 'outfit, outfit Fallback' }}
                                className="text-3xl font-bold text-white"
                            >
                                Pro Tips
                            </h2>
                        </div>
                        <ul className="space-y-4">
                            {proTips.map((tip, index) => (
                                <li
                                    key={index}
                                    style={{ fontFamily: 'outfit, outfit Fallback' }}
                                    className="flex items-start gap-3 text-gray-400"
                                >
                                    <span className="text-blue-400 mt-1">•</span>
                                    <span>{tip}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Explore More Tools */}
                <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
                    <div className="max-w-6xl mx-auto">
                        <h2
                            style={{ fontFamily: 'outfit, outfit Fallback' }}
                            className="text-3xl font-bold text-white mb-8 text-center"
                        >
                            Explore More Tools
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            {relatedTools.map((tool, index) => (
                                <Link
                                    key={index}
                                    href={tool.link}
                                    className="group p-6 bg-white/5 border border-white/10 rounded-xl hover:border-blue-500 transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="mb-4 text-blue-400">
                                        {tool.icon}
                                    </div>
                                    <h3
                                        style={{ fontFamily: 'outfit, outfit Fallback' }}
                                        className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors"
                                    >
                                        {tool.title}
                                    </h3>
                                    <p
                                        style={{ fontFamily: 'outfit, outfit Fallback' }}
                                        className="text-gray-400 text-sm mb-4"
                                    >
                                        {tool.description}
                                    </p>
                                    <span className="inline-flex items-center gap-1 text-sm text-blue-400 group-hover:gap-2 transition-all">
                                        Try it <ArrowRight className="w-4 h-4" />
                                    </span>
                                </Link>
                            ))}
                        </div>
                        <div className="text-center">
                            <Link
                                href="/tools"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-bold transition-all duration-300 shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 hover:-translate-y-1"
                                style={{ fontFamily: 'outfit, outfit Fallback' }}
                            >
                                View All Tools <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
