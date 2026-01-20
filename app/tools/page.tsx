"use client";

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import toolsData from "@/lib/tools-data.json";
import {
    Activity, Archive, ArrowUpDown, AudioWaveform, BarChart3, Binary, Braces,
    Calculator, CalendarClock, CaseSensitive, CheckCircle2, CheckSquare, Clock,
    Crop, Diff, DollarSign, Download, Eraser, ExternalLink, Eye, FileImage,
    Files, FileText, Film, Fingerprint, Globe, GraduationCap, Hash, Image,
    ImagePlus, Info, Key, KeyRound, Link2, Locate, Lock, MailCheck, MessageSquare,
    Move, Music, Palette, Percent, QrCode, Receipt, Regex, Repeat, Ruler,
    Scissors, Server, ShieldAlert, ShieldCheck, ShieldX, Split, Stamp, StickyNote,
    Table, Table2, Tag, Text, Timer, TrendingDown, TrendingUp, User, VolumeX,
    Clipboard, Search, ArrowUp, Lightbulb
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import {Footer} from "@/components/layout/footer";

type BadgeType = "Popular" | "Trending" | "New" | "Premium" | "Beta";

const badgeStyles: Record<BadgeType, string> = {
    Popular: "bg-blue-500/15 text-blue-400 border-blue-500/30",
    Trending: "bg-orange-500/15 text-orange-400 border-orange-500/30",
    New: "bg-green-500/15 text-green-400 border-green-500/30",
    Premium: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
    Beta: "bg-purple-500/15 text-purple-400 border-purple-500/30",
};

const iconMap: Record<string, { icon: any, color: string }> = {
    "word-character-counter": { icon: Calculator, color: '#3b82f6' },
    "text-case-converter": { icon: CaseSensitive, color: '#22c55e' },
    "text-diff-checker": { icon: Diff, color: '#ef4444' },
    "remove-extra-spaces": { icon: Eraser, color: '#a855f7' },
    "markdown-previewer": { icon: FileText, color: '#f97316' },
    "text-sorter": { icon: ArrowUpDown, color: '#ec4899' },
    "lorem-ipsum-generator": { icon: Text, color: '#6366f1' },
    "slug-generator": { icon: Link2, color: '#14b8a6' },
    "pdf-merge": { icon: Files, color: '#eab308' },
    "pdf-split": { icon: Scissors, color: '#6b7280' },
    "pdf-compress": { icon: Archive, color: '#06b6d4' },
    "images-to-pdf": { icon: ImagePlus, color: '#84cc16' },
    "pdf-to-images": { icon: FileImage, color: '#10b981' },
    "csv-to-json": { icon: Table2, color: '#8b5cf6' },
    "json-to-csv": { icon: Table, color: '#d946ef' },
    "image-resize": { icon: Move, color: '#f43f5e' },
    "image-compress": { icon: Archive, color: '#0ea5e9' },
    "image-format-converter": { icon: Repeat, color: '#f59e0b' },
    "crop-rotate-image": { icon: Crop, color: '#64748b' },
    "image-metadata-viewer": { icon: Info, color: '#71717a' },
    "image-to-base64": { icon: Binary, color: '#737373' },
    "image-color-extractor": { icon: Palette, color: '#78716c' },
    "add-watermark-image": { icon: Stamp, color: '#2563eb' },
    "image-dimensions-detector": { icon: Ruler, color: '#16a34a' },
    "video-thumbnail-generator": { icon: Image, color: '#dc2626' },
    "video-trimmer": { icon: Scissors, color: '#9333ea' },
    "remove-audio-video": { icon: VolumeX, color: '#ea580c' },
    "audio-file-converter": { icon: Music, color: '#db2777' },
    "audio-trimmer": { icon: AudioWaveform, color: '#4f46e5' },
    "gif-maker-video": { icon: Film, color: '#0d9488' },
    "qr-code-generator": { icon: QrCode, color: '#ca8a04' },
    "url-encoder-decoder": { icon: Link2, color: '#52525b' },
    "utm-builder": { icon: BarChart3, color: '#0891b2' },
    "open-graph-preview": { icon: Eye, color: '#65a30d' },
    "short-url-expander": { icon: ExternalLink, color: '#059669' },
    "url-parser": { icon: Split, color: '#7c3aed' },
    "bulk-url-checker": { icon: CheckCircle2, color: '#c026d3' },
    "twitter-thread-formatter": { icon: MessageSquare, color: '#e11d48' },
    "hashtag-generator": { icon: Hash, color: '#0284c7' },
    "social-media-image-resizer": { icon: Image, color: '#d97706' },
    "meta-tag-generator": { icon: Tag, color: '#475569' },
    "youtube-thumbnail-downloader": { icon: Download, color: '#52525b' },
    "engagement-rate-calculator": { icon: TrendingUp, color: '#525252' },
    "json-formatter-validator": { icon: Braces, color: '#57534e' },
    "base64-encoder-decoder": { icon: Binary, color: '#1e40af' },
    "uuid-generator": { icon: Fingerprint, color: '#15803d' },
    "hash-generator": { icon: ShieldCheck, color: '#b91c1c' },
    "unix-timestamp-converter": { icon: Clock, color: '#7e22ce' },
    "color-converter": { icon: Palette, color: '#c2410c' },
    "regex-tester": { icon: Regex, color: '#be185d' },
    "jwt-decoder": { icon: KeyRound, color: '#4338ca' },
    "pomodoro-timer": { icon: Timer, color: '#0f766e' },
    "note-taking-app": { icon: StickyNote, color: '#a16207' },
    "simple-todo-list": { icon: CheckSquare, color: '#3f3f46' },
    "days-until-calculator": { icon: CalendarClock, color: '#0e7490' },
    "grade-calculator": { icon: GraduationCap, color: '#4d7c0f' },
    "time-zone-converter": { icon: Globe, color: '#047857' },
    "scientific-calculator": { icon: Calculator, color: '#6d28d9' },
    "currency-converter": { icon: DollarSign, color: '#a21caf' },
    "unit-converter": { icon: Ruler, color: '#be123c' },
    "percentage-calculator": { icon: Percent, color: '#0369a1' },
    "age-calculator": { icon: User, color: '#b45309' },
    "bmi-calculator": { icon: Activity, color: '#334155' },
    "tip-calculator": { icon: Receipt, color: '#3f3f46' },
    "discount-calculator": { icon: TrendingDown, color: '#404040' },
    "password-generator": { icon: Key, color: '#44403c' },
    "password-strength-checker": { icon: ShieldAlert, color: '#1e3a8a' },
    "encryption-decryption": { icon: Lock, color: '#166534' },
    "email-validator": { icon: MailCheck, color: '#991b1b' },
    "ip-address-lookup": { icon: Locate, color: '#6b21a8' },
    "dns-lookup-tool": { icon: Server, color: '#9a3412' },
    "password-leak-checker": { icon: ShieldX, color: '#9f1239' },
};

type FilterType = "all" | "trending" | "popular" | "new" | "beta" | "premium";
type SortType = "popular" | "newest" | "alphabetical" | "category";

export default function ToolsPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeFilter, setActiveFilter] = useState<FilterType>("all");
    const [sortBy, setSortBy] = useState<SortType>("popular");
    const [showBackToTop, setShowBackToTop] = useState(false);

    // Calculate total tools count
    const totalTools = useMemo(() => {
        return toolsData.categories.reduce((total, category) => total + category.tools.length, 0);
    }, []);

    // Filter and sort tools
    const filteredCategories = useMemo(() => {
        let categories = toolsData.categories.map(category => ({
            ...category,
            tools: category.tools.filter(tool => {
                // Search filter
                const matchesSearch = searchQuery === "" ||
                    tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    tool.description.toLowerCase().includes(searchQuery.toLowerCase());

                // Badge filter
                const matchesFilter = activeFilter === "all" ||
                    tool.badge?.toLowerCase() === activeFilter;

                return matchesSearch && matchesFilter;
            })
        })).filter(category => category.tools.length > 0);

        // Sort categories based on sortBy
        if (sortBy === "alphabetical") {
            categories.forEach(category => {
                category.tools.sort((a, b) => a.title.localeCompare(b.title));
            });
        } else if (sortBy === "newest") {
            categories.forEach(category => {
                category.tools.sort((a, b) => {
                    if (a.badge === "New" && b.badge !== "New") return -1;
                    if (a.badge !== "New" && b.badge === "New") return 1;
                    return 0;
                });
            });
        } else if (sortBy === "popular") {
            categories.forEach(category => {
                category.tools.sort((a, b) => {
                    if (a.badge === "Popular" && b.badge !== "Popular") return -1;
                    if (a.badge !== "Popular" && b.badge === "Popular") return 1;
                    return 0;
                });
            });
        }

        return categories;
    }, [searchQuery, activeFilter, sortBy]);

    // Scroll to top handler
    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 500);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-black text-white">
                {/* Hero Section */}
                <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto text-center">
                        {/* Headline */}
                        <h1
                            style={{ fontFamily: 'outfit, outfit Fallback' }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6"
                        >
                            {totalTools}+ Free Tools to Supercharge Your Workflow
                        </h1>

                        {/* Subheadline */}
                        <p
                            style={{ fontFamily: 'outfit, outfit Fallback' }}
                            className="text-lg sm:text-xl text-gray-400 mb-10 max-w-3xl mx-auto"
                        >
                            Browse our complete collection of privacy-focused utilities.
                            <br />
                            No sign-up required. Process everything client-side.
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto mb-10">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search tools... (e.g., PDF merge, JSON formatter)"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                    style={{ fontFamily: 'outfit, outfit Fallback' }}
                                />
                            </div>
                        </div>

                        {/* Quick Stats Row */}
                        <div className="flex flex-wrap items-center justify-center gap-6 text-sm sm:text-base">
                            <div className="flex items-center gap-2">
                                <span className="text-2xl">📊</span>
                                <span style={{ fontFamily: 'outfit, outfit Fallback' }} className="text-gray-300">{totalTools}+ Tools</span>
                            </div>
                            <div className="hidden sm:block w-px h-6 bg-gray-700"></div>
                            <div className="flex items-center gap-2">
                                <span className="text-2xl">🚀</span>
                                <span style={{ fontFamily: 'outfit, outfit Fallback' }} className="text-gray-300">All Free</span>
                            </div>
                            <div className="hidden sm:block w-px h-6 bg-gray-700"></div>
                            <div className="flex items-center gap-2">
                                <span className="text-2xl">🔒</span>
                                <span style={{ fontFamily: 'outfit, outfit Fallback' }} className="text-gray-300">Privacy-First</span>
                            </div>
                            <div className="hidden sm:block w-px h-6 bg-gray-700"></div>
                            <div className="flex items-center gap-2">
                                <span className="text-2xl">⚡</span>
                                <span style={{ fontFamily: 'outfit, outfit Fallback' }} className="text-gray-300">Lightning Fast</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filter & Sort Section */}
                <div className="sticky top-0 z-40 bg-black/95 backdrop-blur-lg border-b border-white/10 py-4 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                        {/* Filter Pills */}
                        <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto">
                            {[
                                { id: "all", label: "All Tools" },
                                { id: "trending", label: "Trending" },
                                { id: "popular", label: "Popular" },
                                { id: "new", label: "New" },
                                { id: "beta", label: "Beta" },
                                { id: "premium", label: "Premium" },
                            ].map((filter) => (
                                <button
                                    key={filter.id}
                                    onClick={() => setActiveFilter(filter.id as FilterType)}
                                    className={`px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${activeFilter === filter.id
                                            ? "bg-blue-500 text-white shadow-lg shadow-blue-500/50"
                                            : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                                        }`}
                                    style={{ fontFamily: 'outfit, outfit Fallback' }}
                                >
                                    {filter.label}
                                </button>
                            ))}
                        </div>

                        {/* Sort Dropdown */}
                        <div className="flex items-center gap-2">
                            <span style={{ fontFamily: 'outfit, outfit Fallback' }} className="text-gray-400 text-sm">Sort by:</span>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value as SortType)}
                                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                                style={{ fontFamily: 'outfit, outfit Fallback' }}
                            >
                                <option value="popular">Most Popular</option>
                                <option value="newest">Newest First</option>
                                <option value="alphabetical">A–Z</option>
                                <option value="category">Category</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Tools Grid */}
                <div className="py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        {filteredCategories.length === 0 ? (
                            <div className="text-center py-20">
                                <p style={{ fontFamily: 'outfit, outfit Fallback' }} className="text-2xl text-gray-400">
                                    No tools found matching your criteria
                                </p>
                            </div>
                        ) : (
                            filteredCategories.map((category) => (
                                <div key={category.id} className="mb-20">
                                    {/* Category Header */}
                                    <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                                        <div>
                                            <h2
                                                style={{ fontFamily: 'outfit, outfit Fallback' }}
                                                className="text-3xl font-bold text-white mb-2"
                                            >
                                                {category.icon} {category.name}
                                            </h2>
                                            <p
                                                style={{ fontFamily: 'outfit, outfit Fallback' }}
                                                className="text-gray-400"
                                            >
                                                {category.description}
                                            </p>
                                        </div>
                                        <Link
                                            href={`#${category.id}`}
                                            className="hidden sm:flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                                            style={{ fontFamily: 'outfit, outfit Fallback' }}
                                        >
                                            View All ({category.tools.length}) →
                                        </Link>
                                    </div>

                                    {/* Tool Cards Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {category.tools.map((tool) => {
                                            const { icon: Icon, color } = iconMap[tool.id] ?? { icon: Clipboard, color: '#3b82f6' };

                                            return (
                                                <Link
                                                    key={tool.id}
                                                    href={tool.link || "#"}
                                                    className="group relative overflow-hidden rounded-xl transition-all duration-300 ease-in-out hover:-translate-y-1 block focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                >
                                                    {/* Card Background with Glow Effect */}
                                                    <div className="relative h-full rounded-xl bg-white/5 border border-white/10 group-hover:border-blue-500 transition-all duration-300 p-6">
                                                        {/* Hover Glow */}
                                                        <div
                                                            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"
                                                            style={{ backgroundColor: 'hsl(217, 91%, 60%)' }}
                                                        />

                                                        {/* Badge */}
                                                        {tool.badge && (
                                                            <span
                                                                style={{ fontFamily: 'outfit, outfit Fallback' }}
                                                                className={`absolute right-4 top-4 rounded-full border px-2.5 py-0.5 text-xs font-medium ${badgeStyles[tool.badge as BadgeType]
                                                                    }`}
                                                            >
                                                                {tool.badge}
                                                            </span>
                                                        )}

                                                        {/* Icon */}
                                                        <div
                                                            className="w-12 h-12 rounded-2xl flex items-center justify-center text-white transform group-hover:scale-110 transition-all duration-300 mb-4"
                                                            style={{ backgroundColor: color }}
                                                        >
                                                            <Icon size={24} />
                                                        </div>

                                                        {/* Tool Name */}
                                                        <h3
                                                            style={{ fontFamily: 'outfit, outfit Fallback' }}
                                                            className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors"
                                                        >
                                                            {tool.title}
                                                        </h3>

                                                        {/* Description */}
                                                        <p
                                                            style={{ fontFamily: 'outfit, outfit Fallback' }}
                                                            className="text-sm text-gray-400 mb-4 line-clamp-2"
                                                        >
                                                            {tool.description}
                                                        </p>

                                                        {/* CTA */}
                                                        <span
                                                            style={{ fontFamily: 'outfit, outfit Fallback' }}
                                                            className="inline-flex items-center gap-1 text-sm font-medium text-blue-400 transition-all group-hover:gap-2"
                                                        >
                                                            Use Tool →
                                                        </span>
                                                    </div>
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2
                            style={{ fontFamily: 'outfit, outfit Fallback' }}
                            className="text-4xl sm:text-5xl font-bold text-white mb-4"
                        >
                            Can't Find What You Need?
                        </h2>
                        <p
                            style={{ fontFamily: 'outfit, outfit Fallback' }}
                            className="text-lg text-gray-400 mb-8"
                        >
                            We're constantly adding new tools. Suggest a tool or request a feature.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button
                                className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-bold transition-all duration-300 shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 hover:-translate-y-1"
                                style={{ fontFamily: 'outfit, outfit Fallback' }}
                            >
                                Suggest a Tool
                            </button>
                            <button
                                className="px-8 py-4 border-2 border-white/20 hover:border-blue-500 text-white rounded-full font-bold transition-all duration-300 hover:-translate-y-1"
                                style={{ fontFamily: 'outfit, outfit Fallback' }}
                            >
                                View Roadmap
                            </button>
                        </div>
                    </div>
                </div>

                {/* Back to Top Button */}
                {showBackToTop && (
                    <button
                        onClick={scrollToTop}
                        className="fixed bottom-8 right-8 p-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg shadow-blue-500/50 transition-all duration-300 hover:scale-110 z-50"
                        aria-label="Back to top"
                    >
                        <ArrowUp className="w-6 h-6" />
                    </button>
                )}
            </div>
            <Footer />
        </>
    );
}
