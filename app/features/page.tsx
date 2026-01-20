"use client"

import Link from 'next/link'
import {
    Lock,
    Zap,
    Grid3x3,
    Target,
    Brain,
    FileText,
    Image as ImageIcon,
    Code2,
    TrendingUp,
    Shield,
    Users,
    Keyboard,
    CheckCircle2,
    ArrowRight,
    Sparkles,
    Clock,
    Smartphone,
    Globe
} from 'lucide-react'
import { Footer } from '@/components/layout/footer'

export default function FeaturesPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-8">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Everything You Need.
                        <br />
                        <span className="text-blue-500">One Platform.</span> Zero Friction.
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                        ToolVerse is a privacy-first, multi-service toolkit that brings essential text, file, image, developer, and productivity tools into a single, fast, and reliable experience.
                    </p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <Link
                            href="/tools"
                            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2"
                        >
                            Explore All Tools
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <button
                            onClick={() => document.getElementById('why-toolverse')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 border border-gray-700 hover:border-blue-500 rounded-lg font-semibold transition-all duration-200"
                        >
                            Why ToolVerse?
                        </button>
                    </div>
                </div>
            </section>

            {/* Core Principles */}
            <section id="why-toolverse" className="py-20 px-8 bg-gradient-to-b from-black to-gray-950">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Built With Simplicity, Speed, and Privacy in Mind
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Privacy First */}
                        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
                            <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-6">
                                <Lock className="w-6 h-6 text-blue-500" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Privacy-First by Design</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Your data never leaves your device for most tools. No tracking, no uploads unless required.
                            </p>
                        </div>

                        {/* Lightning Fast */}
                        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
                            <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-6">
                                <Zap className="w-6 h-6 text-blue-500" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Lightning-Fast Performance</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Optimized client-side processing with minimal server dependency for instant results.
                            </p>
                        </div>

                        {/* One Platform */}
                        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
                            <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-6">
                                <Grid3x3 className="w-6 h-6 text-blue-500" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">One Platform, Many Tools</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Stop jumping between websites. Access everything from text utilities to file tools in one place.
                            </p>
                        </div>

                        {/* No Sign-Up */}
                        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
                            <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-6">
                                <Target className="w-6 h-6 text-blue-500" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">No Sign-Up Required</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Use tools instantly. No accounts, no friction, no hidden paywalls.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Multi-Service Capability */}
            <section className="py-20 px-8 bg-black">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            A Complete Utility Ecosystem
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Instead of focusing on one niche, ToolVerse covers multiple real-world use cases across industries.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
                            <Brain className="w-10 h-10 text-blue-500 mb-4" />
                            <h3 className="text-2xl font-bold mb-3">Text & Writing Utilities</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Analyze, clean, compare, and format text effortlessly.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
                            <FileText className="w-10 h-10 text-blue-500 mb-4" />
                            <h3 className="text-2xl font-bold mb-3">Document & File Processing</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Merge, split, convert, and manage PDFs and structured files.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
                            <ImageIcon className="w-10 h-10 text-blue-500 mb-4" />
                            <h3 className="text-2xl font-bold mb-3">Image & Media Tools</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Resize, compress, convert, and inspect images and media assets.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
                            <Code2 className="w-10 h-10 text-blue-500 mb-4" />
                            <h3 className="text-2xl font-bold mb-3">Developer Utilities</h3>
                            <p className="text-gray-400 leading-relaxed">
                                JSON tools, encoders, validators, generators, and debugging helpers.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
                            <TrendingUp className="w-10 h-10 text-blue-500 mb-4" />
                            <h3 className="text-2xl font-bold mb-3">Productivity & Study Tools</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Timers, planners, calculators, and focus utilities.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
                            <Shield className="w-10 h-10 text-blue-500 mb-4" />
                            <h3 className="text-2xl font-bold mb-3">Security & Utility Tools</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Passwords, encryption helpers, validators, and lookup tools.
                            </p>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-lg text-blue-400 flex items-center justify-center gap-2">
                            <CheckCircle2 className="w-5 h-5" />
                            All tools follow the same clean, fast, and consistent UX.
                        </p>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 px-8 bg-gradient-to-b from-black to-gray-950">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            How It Works Under the Hood
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                                1
                            </div>
                            <h3 className="text-xl font-bold mb-2">Choose a Tool</h3>
                            <p className="text-gray-400">
                                Browse tools by category or search instantly.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                                2
                            </div>
                            <h3 className="text-xl font-bold mb-2">Process Instantly</h3>
                            <p className="text-gray-400">
                                Most tools run directly in your browser using modern web APIs.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                                3
                            </div>
                            <h3 className="text-xl font-bold mb-2">Get Results Immediately</h3>
                            <p className="text-gray-400">
                                No waiting, no queues, no unnecessary uploads.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                                4
                            </div>
                            <h3 className="text-xl font-bold mb-2">Stay in Control</h3>
                            <p className="text-gray-400">
                                Your data stays yours. Close the tab and it's gone.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Performance & Reliability */}
            <section className="py-20 px-8 bg-black">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Engineered for Speed and Stability
                        </h2>
                    </div>

                    {/* Stats */}
                    <div className="grid md:grid-cols-4 gap-6 mb-12">
                        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
                            <Zap className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                            <div className="text-3xl font-bold text-blue-500 mb-2">&lt; 3s</div>
                            <p className="text-gray-400">Page Load</p>
                        </div>

                        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
                            <Brain className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                            <div className="text-2xl font-bold text-blue-500 mb-2">Client-Side</div>
                            <p className="text-gray-400">Processing</p>
                        </div>

                        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
                            <Smartphone className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                            <div className="text-2xl font-bold text-blue-500 mb-2">Fully</div>
                            <p className="text-gray-400">Responsive</p>
                        </div>

                        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
                            <Globe className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                            <div className="text-2xl font-bold text-blue-500 mb-2">Cross</div>
                            <p className="text-gray-400">Device</p>
                        </div>
                    </div>

                    {/* Features */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="flex items-start gap-4">
                            <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="font-semibold mb-1">Optimized for low-end devices</h4>
                                <p className="text-gray-400">Works smoothly even on older hardware</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="font-semibold mb-1">Minimal JavaScript overhead</h4>
                                <p className="text-gray-400">Lean codebase for faster execution</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="font-semibold mb-1">Lazy-loaded tools and sections</h4>
                                <p className="text-gray-400">Load only what you need, when you need it</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="font-semibold mb-1">Works seamlessly on mobile and desktop</h4>
                                <p className="text-gray-400">Consistent experience across all devices</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Designed for Everyone */}
            <section className="py-20 px-8 bg-gradient-to-b from-black to-gray-950">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Who ToolVerse Is For
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 text-center hover:border-blue-500/50 transition-all duration-300">
                            <div className="text-4xl mb-4">👨‍💻</div>
                            <h3 className="text-xl font-bold mb-3">Developers</h3>
                            <p className="text-gray-400">
                                Quick utilities without bloated IDE plugins.
                            </p>
                        </div>

                        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 text-center hover:border-blue-500/50 transition-all duration-300">
                            <div className="text-4xl mb-4">🎓</div>
                            <h3 className="text-xl font-bold mb-3">Students</h3>
                            <p className="text-gray-400">
                                Study tools, calculators, and writing helpers in one place.
                            </p>
                        </div>

                        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 text-center hover:border-blue-500/50 transition-all duration-300">
                            <div className="text-4xl mb-4">🧑‍💼</div>
                            <h3 className="text-xl font-bold mb-3">Professionals</h3>
                            <p className="text-gray-400">
                                File converters, document tools, and productivity utilities.
                            </p>
                        </div>

                        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 text-center hover:border-blue-500/50 transition-all duration-300">
                            <div className="text-4xl mb-4">🎨</div>
                            <h3 className="text-xl font-bold mb-3">Creators & Designers</h3>
                            <p className="text-gray-400">
                                Image, media, and content tools without complexity.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Accessibility & UX */}
            <section className="py-20 px-8 bg-black">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Clean, Accessible, and User-Friendly
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="flex items-start gap-4">
                            <Keyboard className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="font-semibold mb-1">Keyboard-navigable tools</h4>
                                <p className="text-gray-400 text-sm">Full keyboard support for accessibility</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Sparkles className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="font-semibold mb-1">High contrast dark & light themes</h4>
                                <p className="text-gray-400 text-sm">Optimized for readability</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Grid3x3 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="font-semibold mb-1">Consistent layouts across all tools</h4>
                                <p className="text-gray-400 text-sm">Familiar interface patterns</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="font-semibold mb-1">Clear feedback and error handling</h4>
                                <p className="text-gray-400 text-sm">Always know what's happening</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Target className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="font-semibold mb-1">No distracting ads or popups</h4>
                                <p className="text-gray-400 text-sm">Focused user experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Security & Trust */}
            <section className="py-20 px-8 bg-gradient-to-b from-black to-gray-950">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Security Without Complexity
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 flex items-start gap-4">
                            <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="font-semibold mb-2">No mandatory accounts</h4>
                                <p className="text-gray-400">Use tools anonymously without registration</p>
                            </div>
                        </div>

                        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 flex items-start gap-4">
                            <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="font-semibold mb-2">No permanent data storage</h4>
                                <p className="text-gray-400">Your data isn't saved on our servers</p>
                            </div>
                        </div>

                        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 flex items-start gap-4">
                            <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="font-semibold mb-2">Secure browser-based processing</h4>
                                <p className="text-gray-400">Most operations happen entirely in your browser</p>
                            </div>
                        </div>

                        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 flex items-start gap-4">
                            <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="font-semibold mb-2">Optional server processing only when required</h4>
                                <p className="text-gray-400">Transparent about when data is sent to servers</p>
                            </div>
                        </div>

                        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 flex items-start gap-4 md:col-span-2">
                            <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="font-semibold mb-2">Clear boundaries on what data is used and why</h4>
                                <p className="text-gray-400">Full transparency in our privacy practices</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Roadmap */}
            <section className="py-20 px-8 bg-black">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Growing With Purpose
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            ToolVerse grows based on real user needs, not feature bloat.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-xl p-8">
                        <h3 className="text-2xl font-bold mb-6 text-blue-400">Planned Directions:</h3>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <div>
                                    <h4 className="font-semibold mb-1">More offline-capable tools</h4>
                                    <p className="text-gray-400 text-sm">Progressive Web App features for offline use</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <div>
                                    <h4 className="font-semibold mb-1">Improved batch processing</h4>
                                    <p className="text-gray-400 text-sm">Handle multiple files at once</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <div>
                                    <h4 className="font-semibold mb-1">Better search & filtering</h4>
                                    <p className="text-gray-400 text-sm">Find tools faster with advanced search</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <div>
                                    <h4 className="font-semibold mb-1">Optional Pro tier for heavy usage</h4>
                                    <p className="text-gray-400 text-sm">Advanced features for power users</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <div>
                                    <h4 className="font-semibold mb-1">Community-requested tools</h4>
                                    <p className="text-gray-400 text-sm">Your feedback drives our development</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 px-8 bg-gradient-to-b from-black via-gray-950 to-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Ready to Simplify Your Workflow?
                    </h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                        Explore all tools and start using them instantly — no sign-up required.
                    </p>

                    <div className="flex gap-4 justify-center flex-wrap">
                        <Link
                            href="/tools"
                            className="px-10 py-5 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center gap-2"
                        >
                            Browse All Tools
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/roadmap"
                            className="px-10 py-5 border border-gray-700 hover:border-blue-500 rounded-lg font-semibold text-lg transition-all duration-200"
                        >
                            View Roadmap
                        </Link>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

