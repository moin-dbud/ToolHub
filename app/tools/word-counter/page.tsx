"use client";

import React, { useState, useMemo, useEffect } from 'react';
import ToolLayout from '@/components/layout/ToolLayout';
import { Copy, Trash2, FileText, Clock, Hash, Type, Zap, BarChart3, Edit, Eye, CheckCircle } from 'lucide-react';

export default function WordCounterPage() {
    const [text, setText] = useState('');
    const [autoClean, setAutoClean] = useState(false);
    const [highlightEvery, setHighlightEvery] = useState('');
    const [copied, setCopied] = useState(false);

    // Calculate statistics
    const stats = useMemo(() => {
        const withSpaces = text.length;
        const withoutSpaces = text.replace(/\s/g, '').length;
        const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
        const sentences = text.trim() === '' ? 0 : text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
        const paragraphs = text.trim() === '' ? 0 : text.split(/\n\n+/).filter(p => p.trim().length > 0).length;
        const readingTime = Math.ceil(words / 200); // 200 words per minute

        return {
            words,
            withSpaces,
            withoutSpaces,
            sentences,
            paragraphs,
            readingTime,
        };
    }, [text]);

    // Auto-clean on paste
    const handlePaste = (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
        if (autoClean) {
            e.preventDefault();
            const pastedText = e.clipboardData.getData('text');
            const cleaned = pastedText
                .replace(/\s+/g, ' ')
                .replace(/\n\s*\n/g, '\n\n')
                .trim();
            setText(cleaned);
        }
    };

    // Copy stats
    const copyStats = () => {
        const statsText = `
Words: ${stats.words}
Characters (with spaces): ${stats.withSpaces}
Characters (without spaces): ${stats.withoutSpaces}
Sentences: ${stats.sentences}
Paragraphs: ${stats.paragraphs}
Reading Time: ${stats.readingTime} min
    `.trim();

        navigator.clipboard.writeText(statsText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    // Highlight every Nth word
    const highlightedText = useMemo(() => {
        if (!highlightEvery || !text) return text;
        const n = parseInt(highlightEvery);
        if (isNaN(n) || n <= 0) return text;

        const words = text.split(/(\s+)/);
        let wordCount = 0;

        return words.map((segment, index) => {
            if (!/\s/.test(segment) && segment.length > 0) {
                wordCount++;
                if (wordCount % n === 0) {
                    return `<mark key="${index}" class="bg-blue-500/30 px-1 rounded">${segment}</mark>`;
                }
            }
            return segment;
        }).join('');
    }, [text, highlightEvery]);

    return (
        <ToolLayout
            toolName="Word & Character Counter"
            description="Count words, characters, sentences, paragraphs, and reading time instantly."
            aboutContent={[
                "The Word & Character Counter is a powerful, real-time text analysis tool designed for writers, students, and content creators. Whether you're checking word limits for an essay, optimizing social media posts, or analyzing document length, this tool provides instant, accurate statistics.",
                "Perfect for bloggers tracking SEO requirements, students meeting assignment guidelines, or anyone who needs precise text metrics. All processing happens in your browser - your text never leaves your device.",
                "With features like auto-clean on paste and customizable word highlighting, it's more than just a counter - it's a complete writing companion that helps you understand and optimize your content."
            ]}
            features={[
                {
                    icon: <Hash className="w-6 h-6" />,
                    title: "Real-Time Counting",
                    description: "Instant updates as you type with word, character, sentence, and paragraph counts."
                },
                {
                    icon: <Clock className="w-6 h-6" />,
                    title: "Reading Time Estimate",
                    description: "Calculate how long it takes to read your text at 200 words per minute."
                },
                {
                    icon: <Zap className="w-6 h-6" />,
                    title: "Auto-Clean on Paste",
                    description: "Automatically remove extra spaces and line breaks when pasting text."
                },
                {
                    icon: <Eye className="w-6 h-6" />,
                    title: "Word Highlighting",
                    description: "Highlight every Nth word to analyze text patterns and improve readability."
                },
                {
                    icon: <Copy className="w-6 h-6" />,
                    title: "Copy Statistics",
                    description: "Export all metrics with a single click for reports or documentation."
                },
                {
                    icon: <BarChart3 className="w-6 h-6" />,
                    title: "Multiple Metrics",
                    description: "Track characters with/without spaces, sentences, and paragraphs."
                }
            ]}
            howToSteps={[
                {
                    number: 1,
                    icon: <Edit className="w-6 h-6" />,
                    title: "Enter Your Text",
                    description: "Type or paste your text into the large input area. Statistics update automatically as you type."
                },
                {
                    number: 2,
                    icon: <BarChart3 className="w-6 h-6" />,
                    title: "View Real-Time Stats",
                    description: "Watch the stat cards update instantly with word count, character count, reading time, and more."
                },
                {
                    number: 3,
                    icon: <Copy className="w-6 h-6" />,
                    title: "Copy or Clear",
                    description: "Use the Copy Stats button to export metrics, or Clear to start fresh."
                }
            ]}
            proTips={[
                "Enable Auto-Clean when pasting from PDFs or websites to remove formatting issues automatically.",
                "Use the word highlighter (every 10th or 100th word) to spot pacing issues in your writing.",
                "Reading time is based on 200 words per minute - the average reading speed for most content.",
                "For SEO, aim for 300-600 words for blog posts and 1,500+ for in-depth articles.",
                "Count characters without spaces for Twitter/X posts (280 character limit).",
                "Use paragraph count to check if your content has good structure and isn't wall-of-text."
            ]}
            relatedTools={[
                {
                    title: "Text Case Converter",
                    description: "Convert text to uppercase, lowercase, title case, and more.",
                    link: "/tools/text-case-converter",
                    icon: <Type className="w-8 h-8" />
                },
                {
                    title: "Remove Extra Spaces",
                    description: "Clean up duplicate spaces, line breaks, and whitespace.",
                    link: "/tools/remove-extra-spaces",
                    icon: <Trash2 className="w-8 h-8" />
                },
                {
                    title: "Text Sorter",
                    description: "Sort lines alphabetically or reverse order, remove duplicates.",
                    link: "/tools/text-sorter",
                    icon: <BarChart3 className="w-8 h-8" />
                }
            ]}
        >
            {/* Main Tool Interface */}
            <div className="space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    <div className="p-4 bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/30 rounded-xl">
                        <div className="text-3xl font-bold text-white mb-1">{stats.words}</div>
                        <div className="text-sm text-blue-300">Words</div>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-500/30 rounded-xl">
                        <div className="text-3xl font-bold text-white mb-1">{stats.withSpaces}</div>
                        <div className="text-sm text-purple-300">Characters</div>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-500/30 rounded-xl">
                        <div className="text-3xl font-bold text-white mb-1">{stats.withoutSpaces}</div>
                        <div className="text-sm text-green-300">Chars (no spaces)</div>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/30 rounded-xl">
                        <div className="text-3xl font-bold text-white mb-1">{stats.sentences}</div>
                        <div className="text-sm text-orange-300">Sentences</div>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-pink-500/20 to-pink-600/10 border border-pink-500/30 rounded-xl">
                        <div className="text-3xl font-bold text-white mb-1">{stats.paragraphs}</div>
                        <div className="text-sm text-pink-300">Paragraphs</div>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 border border-cyan-500/30 rounded-xl">
                        <div className="text-3xl font-bold text-white mb-1">{stats.readingTime}</div>
                        <div className="text-sm text-cyan-300">Min to Read</div>
                    </div>
                </div>

                {/* Controls */}
                <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="autoClean"
                            checked={autoClean}
                            onChange={(e) => setAutoClean(e.target.checked)}
                            className="w-4 h-4 rounded border-gray-600 bg-gray-700 text-blue-500 focus:ring-2 focus:ring-blue-500"
                        />
                        <label htmlFor="autoClean" className="text-sm text-gray-300">
                            Auto-clean on paste
                        </label>
                    </div>

                    <div className="flex items-center gap-2">
                        <label htmlFor="highlight" className="text-sm text-gray-300">
                            Highlight every
                        </label>
                        <input
                            type="number"
                            id="highlight"
                            value={highlightEvery}
                            onChange={(e) => setHighlightEvery(e.target.value)}
                            placeholder="N"
                            className="w-20 px-3 py-1 bg-white/5 border border-white/10 rounded text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-300">word</span>
                    </div>

                    <div className="flex-1"></div>

                    <button
                        onClick={copyStats}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-all duration-200"
                    >
                        {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        {copied ? 'Copied!' : 'Copy Stats'}
                    </button>

                    <button
                        onClick={() => setText('')}
                        className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg font-medium transition-all duration-200"
                    >
                        <Trash2 className="w-4 h-4" />
                        Clear
                    </button>
                </div>

                {/* Text Input */}
                <div className="relative">
                    <textarea
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        onPaste={handlePaste}
                        placeholder="Start typing or paste your text here..."
                        className="w-full h-96 p-6 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        style={{ fontFamily: 'outfit, outfit Fallback' }}
                    />
                </div>

                {/* Highlighted Preview */}
                {highlightEvery && parseInt(highlightEvery) > 0 && text && (
                    <div>
                        <h3 className="text-lg font-bold text-white mb-3">Highlighted Preview</h3>
                        <div
                            className="p-6 bg-white/5 border border-white/10 rounded-xl text-white leading-relaxed"
                            style={{ fontFamily: 'outfit, outfit Fallback' }}
                            dangerouslySetInnerHTML={{ __html: highlightedText }}
                        />
                    </div>
                )}
            </div>
        </ToolLayout>
    );
}
