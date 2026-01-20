"use client";

import React, { useState, useMemo } from 'react';
import ToolLayout from '@/components/layout/ToolLayout';
import { Copy, Trash2, FileText, GitCompare, Settings, BarChart3, Edit, Eye, CheckCircle } from 'lucide-react';

interface DiffResult {
    original: string[];
    modified: string[];
    added: number;
    removed: number;
    changed: number;
}

export default function TextDiffCheckerPage() {
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const [ignoreCase, setIgnoreCase] = useState(false);
    const [ignoreWhitespace, setIgnoreWhitespace] = useState(false);

    // Calculate differences
    const diffResult = useMemo((): DiffResult => {
        let processedText1 = text1;
        let processedText2 = text2;

        if (ignoreCase) {
            processedText1 = text1.toLowerCase();
            processedText2 = text2.toLowerCase();
        }

        if (ignoreWhitespace) {
            processedText1 = processedText1.replace(/\s+/g, ' ').trim();
            processedText2 = processedText2.replace(/\s+/g, ' ').trim();
        }

        const lines1 = processedText1.split('\n');
        const lines2 = processedText2.split('\n');

        let added = 0;
        let removed = 0;
        let changed = 0;

        const highlightedLines1: string[] = [];
        const highlightedLines2: string[] = [];

        const maxLength = Math.max(lines1.length, lines2.length);

        for (let i = 0; i < maxLength; i++) {
            const line1 = lines1[i] || '';
            const line2 = lines2[i] || '';

            if (line1 === line2) {
                highlightedLines1.push(`<div class="py-1">${escapeHtml(text1.split('\n')[i] || '')}</div>`);
                highlightedLines2.push(`<div class="py-1">${escapeHtml(text2.split('\n')[i] || '')}</div>`);
            } else if (!line1) {
                highlightedLines1.push(`<div class="py-1 bg-red-500/20 border-l-4 border-red-500 pl-2"></div>`);
                highlightedLines2.push(`<div class="py-1 bg-green-500/20 border-l-4 border-green-500 pl-2">${escapeHtml(text2.split('\n')[i] || '')}</div>`);
                added++;
            } else if (!line2) {
                highlightedLines1.push(`<div class="py-1 bg-red-500/20 border-l-4 border-red-500 pl-2">${escapeHtml(text1.split('\n')[i] || '')}</div>`);
                highlightedLines2.push(`<div class="py-1 bg-green-500/20 border-l-4 border-green-500 pl-2"></div>`);
                removed++;
            } else {
                highlightedLines1.push(`<div class="py-1 bg-yellow-500/20 border-l-4 border-yellow-500 pl-2">${escapeHtml(text1.split('\n')[i] || '')}</div>`);
                highlightedLines2.push(`<div class="py-1 bg-yellow-500/20 border-l-4 border-yellow-500 pl-2">${escapeHtml(text2.split('\n')[i] || '')}</div>`);
                changed++;
            }
        }

        return {
            original: highlightedLines1,
            modified: highlightedLines2,
            added,
            removed,
            changed,
        };
    }, [text1, text2, ignoreCase, ignoreWhitespace]);

    function escapeHtml(text: string): string {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    return (
        <ToolLayout
            toolName="Text Diff Checker"
            description="Compare two texts side-by-side with highlighted differences."
            aboutContent={[
                "The Text Diff Checker is a powerful comparison tool that helps you spot differences between two versions of text instantly. Whether you're reviewing document changes, comparing code snippets, or tracking edits, this tool highlights additions, deletions, and modifications in real-time.",
                "Perfect for writers tracking document revisions, developers reviewing code changes, or editors comparing different versions of content. The side-by-side view makes it easy to see exactly what changed between versions.",
                "With options to ignore case sensitivity and whitespace, you can focus on the meaningful changes that matter. All comparisons happen locally in your browser for complete privacy."
            ]}
            features={[
                {
                    icon: <GitCompare className="w-6 h-6" />,
                    title: "Side-by-Side Comparison",
                    description: "View both texts simultaneously with synchronized scrolling."
                },
                {
                    icon: <BarChart3 className="w-6 h-6" />,
                    title: "Diff Statistics",
                    description: "See the count of added, removed, and changed lines at a glance."
                },
                {
                    icon: <Eye className="w-6 h-6" />,
                    title: "Color-Coded Highlights",
                    description: "Green for additions, red for deletions, yellow for changes."
                },
                {
                    icon: <Settings className="w-6 h-6" />,
                    title: "Ignore Options",
                    description: "Toggle case sensitivity and whitespace comparison on/off."
                },
                {
                    icon: <FileText className="w-6 h-6" />,
                    title: "Line-by-Line Analysis",
                    description: "Compare texts line by line for precise difference detection."
                },
                {
                    icon: <Trash2 className="w-6 h-6" />,
                    title: "Quick Clear",
                    description: "Clear both inputs instantly to start a new comparison."
                }
            ]}
            howToSteps={[
                {
                    number: 1,
                    icon: <Edit className="w-6 h-6" />,
                    title: "Enter Both Texts",
                    description: "Paste or type the original text on the left and the modified version on the right."
                },
                {
                    number: 2,
                    icon: <Settings className="w-6 h-6" />,
                    title: "Configure Options",
                    description: "Toggle ignore case or whitespace if you want to focus on specific changes."
                },
                {
                    number: 3,
                    icon: <Eye className="w-6 h-6" />,
                    title: "Review Differences",
                    description: "See highlighted differences and check the summary statistics for quick insights."
                }
            ]}
            proTips={[
                "Use 'Ignore Whitespace' when comparing code that may have different indentation.",
                "Enable 'Ignore Case' when case sensitivity doesn't matter for your comparison.",
                "Green highlights show text added in the second version, red shows removed text.",
                "Yellow highlights indicate lines that exist in both but have different content.",
                "Compare contract versions, API responses, or configuration files easily.",
                "The diff counter at the top gives you a quick overview before diving into details."
            ]}
            relatedTools={[
                {
                    title: "Remove Extra Spaces",
                    description: "Clean up whitespace before comparing texts.",
                    link: "/tools/remove-extra-spaces",
                    icon: <Trash2 className="w-8 h-8" />
                },
                {
                    title: "Text Case Converter",
                    description: "Normalize case before comparison.",
                    link: "/tools/text-case-converter",
                    icon: <FileText className="w-8 h-8" />
                },
                {
                    title: "Word & Character Counter",
                    description: "Analyze text statistics for both versions.",
                    link: "/tools/word-counter",
                    icon: <BarChart3 className="w-8 h-8" />
                }
            ]}
        >
            {/* Main Tool Interface */}
            <div className="space-y-6">
                {/* Diff Summary */}
                <div className="grid grid-cols-3 gap-4">
                    <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-xl">
                        <div className="text-3xl font-bold text-green-400 mb-1">{diffResult.added}</div>
                        <div className="text-sm text-green-300">Lines Added</div>
                    </div>
                    <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-xl">
                        <div className="text-3xl font-bold text-red-400 mb-1">{diffResult.removed}</div>
                        <div className="text-sm text-red-300">Lines Removed</div>
                    </div>
                    <div className="p-4 bg-yellow-500/20 border border-yellow-500/30 rounded-xl">
                        <div className="text-3xl font-bold text-yellow-400 mb-1">{diffResult.changed}</div>
                        <div className="text-sm text-yellow-300">Lines Changed</div>
                    </div>
                </div>

                {/* Options */}
                <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="ignoreCase"
                            checked={ignoreCase}
                            onChange={(e) => setIgnoreCase(e.target.checked)}
                            className="w-4 h-4 rounded border-gray-600 bg-gray-700 text-blue-500 focus:ring-2 focus:ring-blue-500"
                        />
                        <label htmlFor="ignoreCase" className="text-sm text-gray-300">
                            Ignore case
                        </label>
                    </div>

                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="ignoreWhitespace"
                            checked={ignoreWhitespace}
                            onChange={(e) => setIgnoreWhitespace(e.target.checked)}
                            className="w-4 h-4 rounded border-gray-600 bg-gray-700 text-blue-500 focus:ring-2 focus:ring-blue-500"
                        />
                        <label htmlFor="ignoreWhitespace" className="text-sm text-gray-300">
                            Ignore whitespace
                        </label>
                    </div>

                    <div className="flex-1"></div>

                    <button
                        onClick={() => { setText1(''); setText2(''); }}
                        className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg font-medium transition-all duration-200"
                    >
                        <Trash2 className="w-4 h-4" />
                        Clear Both
                    </button>
                </div>

                {/* Side-by-Side Comparison */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* Original Text */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-3">Original Text</h3>
                        <textarea
                            value={text1}
                            onChange={(e) => setText1(e.target.value)}
                            placeholder="Paste original text here..."
                            className="w-full h-96 p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none mb-4"
                            style={{ fontFamily: 'monospace' }}
                        />
                        <div
                            className="min-h-96 p-4 bg-white/5 border border-white/10 rounded-xl text-white text-sm overflow-auto"
                            style={{ fontFamily: 'monospace' }}
                            dangerouslySetInnerHTML={{ __html: diffResult.original.join('') || '<div class="text-gray-500">Comparison preview...</div>' }}
                        />
                    </div>

                    {/* Modified Text */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-3">Modified Text</h3>
                        <textarea
                            value={text2}
                            onChange={(e) => setText2(e.target.value)}
                            placeholder="Paste modified text here..."
                            className="w-full h-96 p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none mb-4"
                            style={{ fontFamily: 'monospace' }}
                        />
                        <div
                            className="min-h-96 p-4 bg-white/5 border border-white/10 rounded-xl text-white text-sm overflow-auto"
                            style={{ fontFamily: 'monospace' }}
                            dangerouslySetInnerHTML={{ __html: diffResult.modified.join('') || '<div class="text-gray-500">Comparison preview...</div>' }}
                        />
                    </div>
                </div>

                {/* Legend */}
                <div className="flex flex-wrap items-center gap-6 p-4 bg-white/5 rounded-xl">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-green-500/40 border-l-4 border-green-500"></div>
                        <span className="text-sm text-gray-300">Added</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-red-500/40 border-l-4 border-red-500"></div>
                        <span className="text-sm text-gray-300">Removed</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-yellow-500/40 border-l-4 border-yellow-500"></div>
                        <span className="text-sm text-gray-300">Modified</span>
                    </div>
                </div>
            </div>
        </ToolLayout>
    );
}
