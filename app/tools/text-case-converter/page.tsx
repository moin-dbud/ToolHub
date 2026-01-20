"use client";

import React, { useState } from 'react';
import ToolLayout from '@/components/layout/ToolLayout';
import { Copy, Trash2, Type, Zap, FileText, Edit, Eye, CheckCircle, ArrowRight } from 'lucide-react';

type CaseType = 'upper' | 'lower' | 'title' | 'sentence' | 'alternating' | 'inverse';

export default function TextCaseConverterPage() {
    const [inputText, setInputText] = useState('');
    const [selectedCase, setSelectedCase] = useState<CaseType>('upper');
    const [copied, setCopied] = useState(false);

    // Conversion functions
    const convertCase = (text: string, caseType: CaseType): string => {
        switch (caseType) {
            case 'upper':
                return text.toUpperCase();

            case 'lower':
                return text.toLowerCase();

            case 'title':
                return text.replace(/\w\S*/g, (txt) =>
                    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
                );

            case 'sentence':
                return text
                    .toLowerCase()
                    .replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());

            case 'alternating':
                return text
                    .split('')
                    .map((char, i) => i % 2 === 0 ? char.toLowerCase() : char.toUpperCase())
                    .join('');

            case 'inverse':
                return text
                    .split('')
                    .map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase())
                    .join('');

            default:
                return text;
        }
    };

    const outputText = convertCase(inputText, selectedCase);

    const caseOptions = [
        { id: 'upper' as CaseType, label: 'UPPERCASE', example: 'HELLO WORLD' },
        { id: 'lower' as CaseType, label: 'lowercase', example: 'hello world' },
        { id: 'title' as CaseType, label: 'Title Case', example: 'Hello World' },
        { id: 'sentence' as CaseType, label: 'Sentence case', example: 'Hello world' },
        { id: 'alternating' as CaseType, label: 'aLtErNaTiNg', example: 'hElLo WoRlD' },
        { id: 'inverse' as CaseType, label: 'InVeRsE', example: 'iNVERSE cASE' },
    ];

    const copyOutput = () => {
        navigator.clipboard.writeText(outputText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <ToolLayout
            toolName="Text Case Converter"
            description="Convert text to UPPERCASE, lowercase, Title Case, Sentence case, or aLtErNaTiNg CaSe."
            aboutContent={[
                "The Text Case Converter is an essential tool for writers, developers, and content editors who need to quickly change the capitalization of their text. Whether you're formatting headings, fixing accidentally CAPS-LOCKED text, or creating stylized content, this tool handles it instantly.",
                "Perfect for social media managers creating attention-grabbing posts, developers formatting code comments, or anyone working with text that needs specific capitalization. It supports six different case transformations including the fun alternating case for creative content.",
                "All conversions happen in real-time in your browser. Your text is never sent to any server, ensuring complete privacy and instant results. Simply type or paste, select your desired case style, and copy the converted text."
            ]}
            features={[
                {
                    icon: <Type className="w-6 h-6" />,
                    title: "6 Case Styles",
                    description: "Choose from uppercase, lowercase, title, sentence, alternating, and inverse case."
                },
                {
                    icon: <Zap className="w-6 h-6" />,
                    title: "Instant Conversion",
                    description: "See your text transform in real-time as you type or switch case styles."
                },
                {
                    icon: <Copy className="w-6 h-6" />,
                    title: "One-Click Copy",
                    description: "Copy converted text to clipboard instantly for use anywhere."
                },
                {
                    icon: <Eye className="w-6 h-6" />,
                    title: "Live Preview",
                    description: "See the output update automatically as you modify the input text."
                },
                {
                    icon: <FileText className="w-6 h-6" />,
                    title: "Preserves Formatting",
                    description: "Maintains line breaks and spacing in your original text."
                },
                {
                    icon: <Trash2 className="w-6 h-6" />,
                    title: "Quick Clear",
                    description: "Start fresh with a single click to clear both input and output."
                }
            ]}
            howToSteps={[
                {
                    number: 1,
                    icon: <Edit className="w-6 h-6" />,
                    title: "Enter Your Text",
                    description: "Type or paste the text you want to convert into the input area."
                },
                {
                    number: 2,
                    icon: <Type className="w-6 h-6" />,
                    title: "Select Case Style",
                    description: "Click on one of the six case style buttons to see your text transform instantly."
                },
                {
                    number: 3,
                    icon: <Copy className="w-6 h-6" />,
                    title: "Copy the Result",
                    description: "Click the Copy button to save the converted text to your clipboard."
                }
            ]}
            proTips={[
                "Use Title Case for blog post headings and article titles for better readability.",
                "Sentence case is perfect for fixing accidentally capitalized sentences or normalizing text.",
                "Alternating case can make social media posts stand out, but use sparingly for readability.",
                "The inverse case option is great for quickly toggling between upper and lower case.",
                "For code comments, use sentence case for better documentation standards.",
                "Remember that proper nouns and acronyms might need manual adjustment after conversion."
            ]}
            relatedTools={[
                {
                    title: "Word & Character Counter",
                    description: "Count words, characters, sentences, and reading time.",
                    link: "/tools/word-counter",
                    icon: <FileText className="w-8 h-8" />
                },
                {
                    title: "Remove Extra Spaces",
                    description: "Clean up duplicate spaces and line breaks.",
                    link: "/tools/remove-extra-spaces",
                    icon: <Trash2 className="w-8 h-8" />
                },
                {
                    title: "Slug Generator",
                    description: "Convert text to URL-friendly slugs.",
                    link: "/tools/slug-generator",
                    icon: <ArrowRight className="w-8 h-8" />
                }
            ]}
        >
            {/* Main Tool Interface */}
            <div className="space-y-6">
                {/* Case Selection Buttons */}
                <div>
                    <h3 className="text-lg font-bold text-white mb-4">Select Case Style</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                        {caseOptions.map((option) => (
                            <button
                                key={option.id}
                                onClick={() => setSelectedCase(option.id)}
                                className={`p-4 rounded-xl border-2 transition-all duration-200 ${selectedCase === option.id
                                        ? 'border-blue-500 bg-blue-500/20'
                                        : 'border-white/10 bg-white/5 hover:border-blue-500/50'
                                    }`}
                            >
                                <div className="font-bold text-white mb-1">{option.label}</div>
                                <div className="text-xs text-gray-400">{option.example}</div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Input Section */}
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
                        placeholder="Type or paste your text here..."
                        className="w-full h-48 p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        style={{ fontFamily: 'outfit, outfit Fallback' }}
                    />
                </div>

                {/* Output Section */}
                <div>
                    <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-bold text-white">Converted Text</h3>
                        <button
                            onClick={copyOutput}
                            disabled={!outputText}
                            className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-all duration-200"
                        >
                            {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                            {copied ? 'Copied!' : 'Copy Output'}
                        </button>
                    </div>
                    <div
                        className="w-full min-h-48 p-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl text-white whitespace-pre-wrap"
                        style={{ fontFamily: 'outfit, outfit Fallback' }}
                    >
                        {outputText || <span className="text-gray-500">Your converted text will appear here...</span>}
                    </div>
                </div>
            </div>
        </ToolLayout>
    );
}
