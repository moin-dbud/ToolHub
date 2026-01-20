"use client";

import React, { useState, useMemo } from 'react';
import ToolLayout from '@/components/layout/ToolLayout';
import { Copy, Trash2, Eraser, Zap, FileText, Edit, Eye, CheckCircle, Type } from 'lucide-react';

export default function RemoveExtraSpacesPage() {
    const [inputText, setInputText] = useState('');
    const [removeSpaces, setRemoveSpaces] = useState(true);
    const [removeLineBreaks, setRemoveLineBreaks] = useState(true);
    const [trimSpaces, setTrimSpaces] = useState(true);
    const [copied, setCopied] = useState(false);

    // Clean text based on options
    const cleanedText = useMemo(() => {
        let result = inputText;

        if (removeSpaces) {
            result = result.replace(/  +/g, ' '); // Replace multiple spaces with single space
        }

        if (removeLineBreaks) {
            result = result.replace(/\n\s*\n\s*\n/g, '\n\n'); //Replace multiple line breaks with double
        }

        if (trimSpaces) {
            result = result.split('\n').map(line => line.trim()).join('\n');
        }

        return result;
    }, [inputText, removeSpaces, removeLineBreaks, trimSpaces]);

    const stats = useMemo(() => {
        const originalLength = inputText.length;
        const cleanedLength = cleanedText.length;
        const removed = originalLength - cleanedLength;
        const percentage = originalLength > 0 ? ((removed / originalLength) * 100).toFixed(1) : '0';

        return { originalLength, cleanedLength, removed, percentage };
    }, [inputText, cleanedText]);

    const copyOutput = () => {
        navigator.clipboard.writeText(cleanedText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <ToolLayout
            toolName="Remove Extra Spaces"
            description="Clean up duplicate spaces, line breaks, and trailing whitespace instantly."
            aboutContent={[
                "The Remove Extra Spaces tool is designed to clean and normalize text by removing unnecessary whitespace, extra line breaks, and trailing spaces. It's perfect for text copied from PDFs, websites, or documents that contain formatting irregularities.",
                "Ideal for content writers preparing text for publication, developers cleaning up code comments, or anyone dealing with messy text formatting. The tool gives you granular control over what type of whitespace to remove.",
                "All text processing happens locally in your browser. Your content is never uploaded to any server, ensuring complete privacy. See live previews and statistics about how much space you're saving."
            ]}
            features={[
                {
                    icon: <Eraser className="w-6 h-6" />,
                    title: "Remove Extra Spaces",
                    description: "Eliminate multiple consecutive spaces, leaving only single spaces."
                },
                {
                    icon: <Zap className="w-6 h-6" />,
                    title: "Clean Line Breaks",
                    description: "Remove excessive blank lines while preserving paragraph structure."
                },
                {
                    icon: <FileText className="w-6 h-6" />,
                    title: "Trim Leading/Trailing",
                    description: "Remove spaces at the beginning and end of each line."
                },
                {
                    icon: <Eye className="w-6 h-6" />,
                    title: "Live Preview",
                    description: "See cleaned text update in real-time as you adjust options."
                },
                {
                    icon: <Copy className="w-6 h-6" />,
                    title: "Space Savings Stats",
                    description: "See how many characters were removed and percentage saved."
                },
                {
                    icon: <CheckCircle className="w-6 h-6" />,
                    title: "Selective Cleaning",
                    description: "Toggle each cleaning option independently for precise control."
                }
            ]}
            howToSteps={[
                {
                    number: 1,
                    icon: <Edit className="w-6 h-6" />,
                    title: "Paste Your Text",
                    description: "Copy and paste messy text with extra spaces and line breaks."
                },
                {
                    number: 2,
                    icon: <Eraser className="w-6 h-6" />,
                    title: "Select Options",
                    description: "Choose which cleaning operations to apply using the checkboxes."
                },
                {
                    number: 3,
                    icon: <Copy className="w-6 h-6" />,
                    title: "Copy Clean Text",
                    description: "Review the preview and copy the cleaned text to your clipboard."
                }
            ]}
            proTips={[
                "Use all three options together for maximum text cleanup from PDF extractions.",
                "Keep 'Remove Line Breaks' off if you want to preserve the original paragraph structure.",
                "Perfect for cleaning up text before pasting into Word or Google Docs.",
                "The character savings counter shows how bloated your original text was.",
                "Use this before running text through other tools like word counters for accurate results.",
                "Great for preparing text for databases or APIs that are sensitive to whitespace."
            ]}
            relatedTools={[
                {
                    title: "Text Case Converter",
                    description: "Change text capitalization after cleaning.",
                    link: "/tools/text-case-converter",
                    icon: <Type className="w-8 h-8" />
                },
                {
                    title: "Word & Character Counter",
                    description: "Count cleaned text statistics.",
                    link: "/tools/word-counter",
                    icon: <FileText className="w-8 h-8" />
                },
                {
                    title: "Text Diff Checker",
                    description: "Compare original vs cleaned text.",
                    link: "/tools/text-diff-checker",
                    icon: <Eye className="w-8 h-8" />
                }
            ]}
        >
            {/* Main Tool Interface */}
            <div className="space-y-6">
                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-4 bg-blue-500/20 border border-blue-500/30 rounded-xl">
                        <div className="text-2xl font-bold text-white mb-1">{stats.originalLength}</div>
                        <div className="text-sm text-blue-300">Original</div>
                    </div>
                    <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-xl">
                        <div className="text-2xl font-bold text-white mb-1">{stats.cleanedLength}</div>
                        <div className="text-sm text-green-300">Cleaned</div>
                    </div>
                    <div className="p-4 bg-purple-500/20 border border-purple-500/30 rounded-xl">
                        <div className="text-2xl font-bold text-white mb-1">{stats.removed}</div>
                        <div className="text-sm text-purple-300">Removed</div>
                    </div>
                    <div className="p-4 bg-orange-500/20 border border-orange-500/30 rounded-xl">
                        <div className="text-2xl font-bold text-white mb-1">{stats.percentage}%</div>
                        <div className="text-sm text-orange-300">Saved</div>
                    </div>
                </div>

                {/* Options */}
                <div className="flex flex-wrap items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl">
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="removeSpaces"
                            checked={removeSpaces}
                            onChange={(e) => setRemoveSpaces(e.target.checked)}
                            className="w-4 h-4 rounded border-gray-600 bg-gray-700 text-blue-500 focus:ring-2 focus:ring-blue-500"
                        />
                        <label htmlFor="removeSpaces" className="text-sm text-gray-300">
                            Remove extra spaces
                        </label>
                    </div>

                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="removeLineBreaks"
                            checked={removeLineBreaks}
                            onChange={(e) => setRemoveLineBreaks(e.target.checked)}
                            className="w-4 h-4 rounded border-gray-600 bg-gray-700 text-blue-500 focus:ring-2 focus:ring-blue-500"
                        />
                        <label htmlFor="removeLineBreaks" className="text-sm text-gray-300">
                            Remove extra line breaks
                        </label>
                    </div>

                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="trimSpaces"
                            checked={trimSpaces}
                            onChange={(e) => setTrimSpaces(e.target.checked)}
                            className="w-4 h-4 rounded border-gray-600 bg-gray-700 text-blue-500 focus:ring-2 focus:ring-blue-500"
                        />
                        <label htmlFor="trimSpaces" className="text-sm text-gray-300">
                            Trim leading/trailing spaces
                        </label>
                    </div>
                </div>

                {/* Input */}
                <div>
                    <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-bold text-white">Input Text</h3>
                        <button
                            onClick={() => setInputText('')}
                            className="flex items-center gap-2 px-3 py-1 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg text-sm font-medium transition-all duration-200"
                        >
                            <Trash2 className="w-4 h-4" />
                            Clear
                        </button>
                    </div>
                    <textarea
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        placeholder="Paste your text with extra spaces here..."
                        className="w-full h-64 p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        style={{ fontFamily: 'outfit, outfit Fallback' }}
                    />
                </div>

                {/* Output */}
                <div>
                    <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-bold text-white">Cleaned Text</h3>
                        <button
                            onClick={copyOutput}
                            disabled={!cleanedText}
                            className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-all duration-200"
                        >
                            {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                            {copied ? 'Copied!' : 'Copy'}
                        </button>
                    </div>
                    <div
                        className="w-full min-h-64 p-4 bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-xl text-white whitespace-pre-wrap"
                        style={{ fontFamily: 'outfit, outfit Fallback' }}
                    >
                        {cleanedText || <span className="text-gray-500">Your cleaned text will appear here...</span>}
                    </div>
                </div>
            </div>
        </ToolLayout>
    );
}
