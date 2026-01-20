"use client";

import React, { useState, useMemo } from 'react';
import ToolLayout from '@/components/layout/ToolLayout';
import { Copy, Trash2, ArrowUpDown, ArrowDown, ArrowUp, CheckSquare, CheckCircle, Edit, Eye, FileText } from 'lucide-react';

type SortMode = 'asc' | 'desc' | 'reverse';

export default function TextSorterPage() {
    const [inputText, setInputText] = useState('');
    const [sortMode, setSortMode] = useState<SortMode>('asc');
    const [removeDuplicates, setRemoveDuplicates] = useState(false);
    const [caseInsensitive, setCaseInsensitive] = useState(false);
    const [copied, setCopied] = useState(false);

    // Sort text
    const sortedText = useMemo(() => {
        if (!inputText.trim()) return '';

        let lines = inputText.split('\n').filter(line => line.trim() !== '');

        // Remove duplicates if enabled
        if (removeDuplicates) {
            if (caseInsensitive) {
                const seen = new Set<string>();
                lines = lines.filter(line => {
                    const lower = line.toLowerCase();
                    if (seen.has(lower)) return false;
                    seen.add(lower);
                    return true;
                });
            } else {
                lines = Array.from(new Set(lines));
            }
        }

        // Sort based on mode
        switch (sortMode) {
            case 'asc':
                lines.sort((a, b) => {
                    const aVal = caseInsensitive ? a.toLowerCase() : a;
                    const bVal = caseInsensitive ? b.toLowerCase() : b;
                    return aVal.localeCompare(bVal);
                });
                break;
            case 'desc':
                lines.sort((a, b) => {
                    const aVal = caseInsensitive ? a.toLowerCase() : a;
                    const bVal = caseInsensitive ? b.toLowerCase() : b;
                    return bVal.localeCompare(aVal);
                });
                break;
            case 'reverse':
                lines.reverse();
                break;
        }

        return lines.join('\n');
    }, [inputText, sortMode, removeDuplicates, caseInsensitive]);

    const stats = useMemo(() => {
        const inputLines = inputText.split('\n').filter(line => line.trim() !== '').length;
        const outputLines = sortedText.split('\n').filter(line => line.trim() !== '').length;
        const removed = inputLines - outputLines;

        return { inputLines, outputLines, removed };
    }, [inputText, sortedText]);

    const copyOutput = () => {
        navigator.clipboard.writeText(sortedText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <ToolLayout
            toolName="Text Sorter"
            description="Sort lines alphabetically, reverse order, or remove duplicates."
            aboutContent={[
                "The Text Sorter is a powerful tool for organizing and cleaning up lists of text. Whether you have a shopping list, a list of names, URLs, or any line-separated data, this tool can sort it alphabetically or in reverse order with a single click.",
                "Perfect for web developers organizing CSS properties, writers alphabetizing bibliographies, or anyone managing lists. The duplicate removal feature is especially useful for cleaning up data from multiple sources.",
                "With case-insensitive sorting option, you can ensure your lists are sorted logically regardless of capitalization. All sorting happens instantly in your browser with complete privacy."
            ]}
            features={[
                {
                    icon: <ArrowUpDown className="w-6 h-6" />,
                    title: "Multiple Sort Modes",
                    description: "Sort A→Z, Z→A, or reverse the original order."
                },
                {
                    icon: <CheckSquare className="w-6 h-6" />,
                    title: "Remove Duplicates",
                    description: "Automatically eliminate duplicate lines from your list."
                },
                {
                    icon: <ArrowUp className="w-6 h-6" />,
                    title: "Case Insensitive",
                    description: "Sort without worrying about uppercase/lowercase differences."
                },
                {
                    icon: <Eye className="w-6 h-6" />,
                    title: "Live Preview",
                    description: "See sorted results update in real-time as you change options."
                },
                {
                    icon: <Copy className="w-6 h-6" />,
                    title: "Line Statistics",
                    description: "See how many lines you started with and how many duplicates were removed."
                },
                {
                    icon: <FileText className="w-6 h-6" />,
                    title: "Preserves Content",
                    description: "Only sorts lines - doesn't modify the content of each line."
                }
            ]}
            howToSteps={[
                {
                    number: 1,
                    icon: <Edit className="w-6 h-6" />,
                    title: "Enter Your List",
                    description: "Paste or type your list with one item per line."
                },
                {
                    number: 2,
                    icon: <ArrowUpDown className="w-6 h-6" />,
                    title: "Choose Sort Options",
                    description: "Select sort direction and enable duplicate removal or case-insensitive sorting if needed."
                },
                {
                    number: 3,
                    icon: <Copy className="w-6 h-6" />,
                    title: "Copy Sorted List",
                    description: "Review the sorted list and copy it to your clipboard."
                }
            ]}
            proTips={[
                "Use case-insensitive sorting for lists that mix uppercase and lowercase items.",
                "Remove duplicates is perfect for combining multiple lists into one clean list.",
                "The reverse order option is useful for quickly flipping the order of chronological lists.",
                "Great for organizing CSS classes, import statements, or configuration options.",
                "Use this to alphabetize references, citations, or bibliography entries.",
                "Combine A→Z sorting with duplicate removal to create clean, unique, sorted lists."
            ]}
            relatedTools={[
                {
                    title: "Remove Extra Spaces",
                    description: "Clean whitespace before sorting lists.",
                    link: "/tools/remove-extra-spaces",
                    icon: <Trash2 className="w-8 h-8" />
                },
                {
                    title: "Text Case Converter",
                    description: "Normalize case before or after sorting.",
                    link: "/tools/text-case-converter",
                    icon: <ArrowUpDown className="w-8 h-8" />
                },
                {
                    title: "Word & Character Counter",
                    description: "Count items in your sorted list.",
                    link: "/tools/word-counter",
                    icon: <FileText className="w-8 h-8" />
                }
            ]}
        >
            {/* Main Tool Interface */}
            <div className="space-y-6">
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                    <div className="p-4 bg-blue-500/20 border border-blue-500/30 rounded-xl">
                        <div className="text-3xl font-bold text-white mb-1">{stats.inputLines}</div>
                        <div className="text-sm text-blue-300">Input Lines</div>
                    </div>
                    <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-xl">
                        <div className="text-3xl font-bold text-white mb-1">{stats.outputLines}</div>
                        <div className="text-sm text-green-300">Output Lines</div>
                    </div>
                    <div className="p-4 bg-purple-500/20 border border-purple-500/30 rounded-xl">
                        <div className="text-3xl font-bold text-white mb-1">{stats.removed}</div>
                        <div className="text-sm text-purple-300">Duplicates Removed</div>
                    </div>
                </div>

                {/* Sort Mode Selection */}
                <div>
                    <h3 className="text-lg font-bold text-white mb-3">Sort Mode</h3>
                    <div className="grid grid-cols-3 gap-3">
                        <button
                            onClick={() => setSortMode('asc')}
                            className={`p-4 rounded-xl border-2 transition-all duration-200 ${sortMode === 'asc'
                                    ? 'border-blue-500 bg-blue-500/20'
                                    : 'border-white/10 bg-white/5 hover:border-blue-500/50'
                                }`}
                        >
                            <ArrowUp className="w-6 h-6 mx-auto mb-2 text-blue-400" />
                            <div className="font-bold text-white">A → Z</div>
                            <div className="text-xs text-gray-400">Ascending</div>
                        </button>

                        <button
                            onClick={() => setSortMode('desc')}
                            className={`p-4 rounded-xl border-2 transition-all duration-200 ${sortMode === 'desc'
                                    ? 'border-blue-500 bg-blue-500/20'
                                    : 'border-white/10 bg-white/5 hover:border-blue-500/50'
                                }`}
                        >
                            <ArrowDown className="w-6 h-6 mx-auto mb-2 text-blue-400" />
                            <div className="font-bold text-white">Z → A</div>
                            <div className="text-xs text-gray-400">Descending</div>
                        </button>

                        <button
                            onClick={() => setSortMode('reverse')}
                            className={`p-4 rounded-xl border-2 transition-all duration-200 ${sortMode === 'reverse'
                                    ? 'border-blue-500 bg-blue-500/20'
                                    : 'border-white/10 bg-white/5 hover:border-blue-500/50'
                                }`}
                        >
                            <ArrowUpDown className="w-6 h-6 mx-auto mb-2 text-blue-400" />
                            <div className="font-bold text-white">Reverse</div>
                            <div className="text-xs text-gray-400">Flip Order</div>
                        </button>
                    </div>
                </div>

                {/* Options */}
                <div className="flex flex-wrap items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl">
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="removeDuplicates"
                            checked={removeDuplicates}
                            onChange={(e) => setRemoveDuplicates(e.target.checked)}
                            className="w-4 h-4 rounded border-gray-600 bg-gray-700 text-blue-500 focus:ring-2 focus:ring-blue-500"
                        />
                        <label htmlFor="removeDuplicates" className="text-sm text-gray-300">
                            Remove duplicates
                        </label>
                    </div>

                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="caseInsensitive"
                            checked={caseInsensitive}
                            onChange={(e) => setCaseInsensitive(e.target.checked)}
                            className="w-4 h-4 rounded border-gray-600 bg-gray-700 text-blue-500 focus:ring-2 focus:ring-blue-500"
                        />
                        <label htmlFor="caseInsensitive" className="text-sm text-gray-300">
                            Case-insensitive sorting
                        </label>
                    </div>
                </div>

                {/* Input and Output */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* Input */}
                    <div>
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="text-lg font-bold text-white">Input List (one per line)</h3>
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
                            placeholder="Paste your list here...&#10;One item per line"
                            className="w-full h-96 p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                            style={{ fontFamily: 'outfit, outfit Fallback' }}
                        />
                    </div>

                    {/* Output */}
                    <div>
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="text-lg font-bold text-white">Sorted Output</h3>
                            <button
                                onClick={copyOutput}
                                disabled={!sortedText}
                                className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-all duration-200"
                            >
                                {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                {copied ? 'Copied!' : 'Copy'}
                            </button>
                        </div>
                        <div
                            className="w-full h-96 p-4 bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-xl text-white whitespace-pre-wrap overflow-auto"
                            style={{ fontFamily: 'outfit, outfit Fallback' }}
                        >
                            {sortedText || <span className="text-gray-500">Sorted list will appear here...</span>}
                        </div>
                    </div>
                </div>
            </div>
        </ToolLayout>
    );
}
