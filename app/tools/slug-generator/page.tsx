"use client";

import React, { useState, useMemo } from 'react';
import ToolLayout from '@/components/layout/ToolLayout';
import { Copy, Link2, Settings, Zap, CheckCircle, Edit, Eye, FileText, Type } from 'lucide-react';

export default function SlugGeneratorPage() {
    const [inputText, setInputText] = useState('');
    const [separator, setSeparator] = useState<'-' | '_'>('-');
    const [lowercase, setLowercase] = useState(true);
    const [removeStopWords, setRemoveStopWords] = useState(false);
    const [copied, setCopied] = useState(false);

    const stopWords = new Set([
        'a', 'an', 'and', 'are', 'as', 'at', 'be', 'by', 'for', 'from',
        'has', 'he', 'in', 'is', 'it', 'its', 'of', 'on', 'that', 'the',
        'to', 'was', 'will', 'with'
    ]);

    // Generate slug
    const slug = useMemo(() => {
        if (!inputText.trim()) return '';

        let result = inputText;

        // Convert to lowercase if enabled
        if (lowercase) {
            result = result.toLowerCase();
        }

        // Remove special characters and keep only alphanumeric and spaces
        result = result.replace(/[^\w\s-]/g, '');

        // Split into words
        let words = result.split(/\s+/).filter(word => word.length > 0);

        // Remove stop words if enabled
        if (removeStopWords) {
            words = words.filter(word => !stopWords.has(word.toLowerCase()));
        }

        // Join with separator
        result = words.join(separator);

        // Remove multiple separators
        const separatorRegex = new RegExp(`${separator}+`, 'g');
        result = result.replace(separatorRegex, separator);

        // Remove leading/trailing separators
        result = result.replace(new RegExp(`^${separator}+|${separator}+$`, 'g'), '');

        return result;
    }, [inputText, separator, lowercase, removeStopWords]);

    const copySlug = () => {
        navigator.clipboard.writeText(slug);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const examples = [
        { text: "How to Build a React App", slug: "how-to-build-a-react-app" },
        { text: "10 Best JavaScript Tips & Tricks!", slug: "10-best-javascript-tips-tricks" },
        { text: "Understanding TypeScript: A Guide", slug: "understanding-typescript-a-guide" },
    ];

    return (
        <ToolLayout
            toolName="Slug Generator"
            description="Convert text to URL-friendly slugs with custom separators."
            aboutContent={[
                "The Slug Generator converts any text into clean, URL-friendly slugs perfect for blog posts, product pages, and web applications. A slug is the part of a URL that identifies a page in a human-readable way - essential for SEO and user experience.",
                "Perfect for content creators setting up blog posts, developers building dynamic URLs, or anyone managing web content. The tool automatically removes special characters, handles spacing, and creates consistent, SEO-friendly URLs.",
                "With options to customize separators, toggle lowercase conversion, and remove common stop words, you have full control over your slug format. All generation happens instantly in your browser."
            ]}
            features={[
                {
                    icon: <Link2 className="w-6 h-6" />,
                    title: "URL-Friendly Output",
                    description: "Generates clean slugs safe for use in URLs and file names."
                },
                {
                    icon: <Settings className="w-6 h-6" />,
                    title: "Custom Separator",
                    description: "Choose between hyphens (-) or underscores (_) as separators."
                },
                {
                    icon: <Type className="w-6 h-6" />,
                    title: "Lowercase Option",
                    description: "Toggle automatic lowercase conversion for consistency."
                },
                {
                    icon: <Zap className="w-6 h-6" />,
                    title: "Remove Stop Words",
                    description: "Optionally remove common words like 'a', 'the', 'and' for shorter URLs."
                },
                {
                    icon: <Eye className="w-6 h-6" />,
                    title: "Live Preview",
                    description: "See your slug update in real-time as you type and adjust options."
                },
                {
                    icon: <CheckCircle className="w-6 h-6" />,
                    title: "Special Character Handling",
                    description: "Automatically removes or converts special characters safely."
                }
            ]}
            howToSteps={[
                {
                    number: 1,
                    icon: <Edit className="w-6 h-6" />,
                    title: "Enter Title or Text",
                    description: "Type or paste the title or text you want to convert into a slug."
                },
                {
                    number: 2,
                    icon: <Settings className="w-6 h-6" />,
                    title: "Configure Options",
                    description: "Choose separator style and toggle lowercase or stop word removal."
                },
                {
                    number: 3,
                    icon: <Copy className="w-6 h-6" />,
                    title: "Copy Your Slug",
                    description: "Review the generated slug and copy it for use in your URL or code."
                }
            ]}
            proTips={[
                "Use hyphens (-) instead of underscores for better SEO - Google treats them as word separators.",
                "Enable 'Remove Stop Words' for shorter, more concise URLs without losing meaning.",
                "Keep slugs under 60 characters for better readability and SEO performance.",
                "Always use lowercase to avoid case-sensitivity issues on different servers.",
                "Avoid changing slugs after publishing - it breaks existing links and hurts SEO.",
                "For multi-language sites, consider transliterating non-English characters before generating slugs."
            ]}
            relatedTools={[
                {
                    title: "Text Case Converter",
                    description: "Normalize text case before creating slugs.",
                    link: "/tools/text-case-converter",
                    icon: <Type className="w-8 h-8" />
                },
                {
                    title: "Remove Extra Spaces",
                    description: "Clean up text before slug generation.",
                    link: "/tools/remove-extra-spaces",
                    icon: <FileText className="w-8 h-8" />
                },
                {
                    title: "Word & Character Counter",
                    description: "Check slug length and word count.",
                    link: "/tools/word-counter",
                    icon: <FileText className="w-8 h-8" />
                }
            ]}
        >
            {/* Main Tool Interface */}
            <div className="space-y-6">
                {/* Options */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Separator Selection */}
                    <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                        <h4 className="font-bold text-white mb-3">Separator</h4>
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                onClick={() => setSeparator('-')}
                                className={`p-3 rounded-lg border-2 transition-all duration-200 ${separator === '-'
                                        ? 'border-blue-500 bg-blue-500/20'
                                        : 'border-white/10 bg-white/5 hover:border-blue-500/50'
                                    }`}
                            >
                                <div className="font-mono text-2xl text-blue-400 mb-1">-</div>
                                <div className="text-xs text-gray-400">Hyphen</div>
                            </button>

                            <button
                                onClick={() => setSeparator('_')}
                                className={`p-3 rounded-lg border-2 transition-all duration-200 ${separator === '_'
                                        ? 'border-blue-500 bg-blue-500/20'
                                        : 'border-white/10 bg-white/5 hover:border-blue-500/50'
                                    }`}
                            >
                                <div className="font-mono text-2xl text-blue-400 mb-1">_</div>
                                <div className="text-xs text-gray-400">Underscore</div>
                            </button>
                        </div>
                    </div>

                    {/* Toggle Options */}
                    <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                        <h4 className="font-bold text-white mb-3">Options</h4>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="lowercase"
                                    checked={lowercase}
                                    onChange={(e) => setLowercase(e.target.checked)}
                                    className="w-4 h-4 rounded border-gray-600 bg-gray-700 text-blue-500 focus:ring-2 focus:ring-blue-500"
                                />
                                <label htmlFor="lowercase" className="text-sm text-gray-300">
                                    Convert to lowercase
                                </label>
                            </div>

                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="removeStopWords"
                                    checked={removeStopWords}
                                    onChange={(e) => setRemoveStopWords(e.target.checked)}
                                    className="w-4 h-4 rounded border-gray-600 bg-gray-700 text-blue-500 focus:ring-2 focus:ring-blue-500"
                                />
                                <label htmlFor="removeStopWords" className="text-sm text-gray-300">
                                    Remove stop words (a, the, and, etc.)
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Input */}
                <div>
                    <h3 className="text-lg font-bold text-white mb-3">Input Text</h3>
                    <input
                        type="text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        placeholder="Enter your title or text here..."
                        className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                        style={{ fontFamily: 'outfit, outfit Fallback' }}
                    />
                </div>

                {/* Generated Slug */}
                <div>
                    <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-bold text-white">Generated Slug</h3>
                        <button
                            onClick={copySlug}
                            disabled={!slug}
                            className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-all duration-200"
                        >
                            {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                            {copied ? 'Copied!' : 'Copy Slug'}
                        </button>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-green-500/10 to-blue-500/10 border-2 border-green-500/30 rounded-xl">
                        <div className="flex items-center gap-3 mb-2">
                            <Link2 className="w-5 h-5 text-green-400" />
                            <span className="text-sm text-gray-400">example.com/blog/</span>
                        </div>
                        <div
                            className="text-2xl font-mono font-bold text-white break-all"
                        >
                            {slug || <span className="text-gray-500">your-slug-will-appear-here</span>}
                        </div>
                    </div>
                </div>

                {/* Examples */}
                <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
                    <h4 className="font-bold text-white mb-4">💡 Examples</h4>
                    <div className="space-y-3">
                        {examples.map((example, index) => (
                            <div key={index} className="flex flex-col gap-1">
                                <div className="text-gray-400 text-sm">
                                    "{example.text}"
                                </div>
                                <div className="text-blue-400 font-mono text-sm">
                                    → {example.slug}
                                </div>
                                {index < examples.length - 1 && <div className="border-t border-white/10 my-2" />}
                            </div>
                        ))}
                    </div>
                </div>

                {/* SEO Tip */}
                <div className="p-6 bg-blue-500/10 border border-blue-500/30 rounded-xl">
                    <h4 className="font-bold text-white mb-2">🎯 SEO Best Practices</h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                        <li className="flex items-start gap-2">
                            <span className="text-blue-400">•</span>
                            <span>Keep slugs short and descriptive (3-5 words is ideal)</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-400">•</span>
                            <span>Use hyphens (-) instead of underscores for better SEO</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-400">•</span>
                            <span>Include target keywords naturally in your slug</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-400">•</span>
                            <span>Avoid numbers and special characters when possible</span>
                        </li>
                    </ul>
                </div>
            </div>
        </ToolLayout>
    );
}
