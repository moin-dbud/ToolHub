"use client";

import React, { useState } from 'react';
import ToolLayout from '@/components/layout/ToolLayout';
import { Copy, RefreshCw, FileText, Type, Zap, CheckCircle, Edit, Eye } from 'lucide-react';

type GenerateMode = 'words' | 'sentences' | 'paragraphs';

const loremWords = [
    'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'sed', 'do',
    'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 'aliqua',
    'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud', 'exercitation', 'ullamco', 'laboris',
    'nisi', 'aliquip', 'ex', 'ea', 'commodo', 'consequat', 'duis', 'aute', 'irure', 'in',
    'reprehenderit', 'voluptate', 'velit', 'esse', 'cillum', 'fugiat', 'nulla', 'pariatur',
    'excepteur', 'sint', 'occaecat', 'cupidatat', 'non', 'proident', 'sunt', 'culpa', 'qui',
    'officia', 'deserunt', 'mollit', 'anim', 'id', 'est', 'laborum'
];

export default function LoremIpsumPage() {
    const [mode, setMode] = useState<GenerateMode>('paragraphs');
    const [count, setCount] = useState(3);
    const [generatedText, setGeneratedText] = useState('');
    const [copied, setCopied] = useState(false);

    const generateWord = () => {
        return loremWords[Math.floor(Math.random() * loremWords.length)];
    };

    const generateSentence = (wordCount: number = 10 + Math.floor(Math.random() * 10)) => {
        const words = [];
        for (let i = 0; i < wordCount; i++) {
            words.push(generateWord());
        }
        const sentence = words.join(' ');
        return sentence.charAt(0).toUpperCase() + sentence.slice(1) + '.';
    };

    const generateParagraph = (sentenceCount: number = 4 + Math.floor(Math.random() * 3)) => {
        const sentences = [];
        for (let i = 0; i < sentenceCount; i++) {
            sentences.push(generateSentence());
        }
        return sentences.join(' ');
    };

    const generate = () => {
        let result = '';

        switch (mode) {
            case 'words':
                const words = [];
                for (let i = 0; i < count; i++) {
                    words.push(generateWord());
                }
                result = words.join(' ');
                break;

            case 'sentences':
                const sentences = [];
                for (let i = 0; i < count; i++) {
                    sentences.push(generateSentence());
                }
                result = sentences.join(' ');
                break;

            case 'paragraphs':
                const paragraphs = [];
                for (let i = 0; i < count; i++) {
                    paragraphs.push(generateParagraph());
                }
                result = paragraphs.join('\n\n');
                break;
        }

        setGeneratedText(result);
    };

    const copyText = () => {
        navigator.clipboard.writeText(generatedText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <ToolLayout
            toolName="Lorem Ipsum Generator"
            description="Generate placeholder text by words, sentences, or paragraphs."
            aboutContent={[
                "The Lorem Ipsum Generator creates dummy text for design mockups, prototypes, and development. Lorem Ipsum has been the industry's standard placeholder text since the 1500s, helping designers and developers visualize layouts without being distracted by meaningful content.",
                "Perfect for web designers creating mockups, developers testing layouts, or anyone needing placeholder text for presentations and prototypes. Generate exactly the amount of text you need - from a few words to multiple paragraphs.",
                "All text is generated randomly from the classic Lorem Ipsum vocabulary, ensuring it looks like real Latin text. No server calls, instant generation, and you can regenerate for variation."
            ]}
            features={[
                {
                    icon: <Type className="w-6 h-6" />,
                    title: "3 Generation Modes",
                    description: "Generate by words, sentences, or full paragraphs."
                },
                {
                    icon: <Zap className="w-6 h-6" />,
                    title: "Instant Generation",
                    description: "Create placeholder text instantly with customizable length."
                },
                {
                    icon: <RefreshCw className="w-6 h-6" />,
                    title: "Regenerate Feature",
                    description: "Generate new random text with the same settings."
                },
                {
                    icon: <Copy className="w-6 h-6" />,
                    title: "One-Click Copy",
                    description: "Copy generated text to clipboard for immediate use."
                },
                {
                    icon: <FileText className="w-6 h-6" />,
                    title: "Classic Lorem Ipsum",
                    description: "Uses the traditional Lorem Ipsum vocabulary."
                },
                {
                    icon: <CheckCircle className="w-6 h-6" />,
                    title: "Custom Count",
                    description: "Specify exactly how many words, sentences, or paragraphs."
                }
            ]}
            howToSteps={[
                {
                    number: 1,
                    icon: <Type className="w-6 h-6" />,
                    title: "Select Mode",
                    description: "Choose whether you want to generate words, sentences, or paragraphs."
                },
                {
                    number: 2,
                    icon: <Edit className="w-6 h-6" />,
                    title: "Set Count",
                    description: "Enter how many units you want to generate (1-100)."
                },
                {
                    number: 3,
                    icon: <RefreshCw className="w-6 h-6" />,
                    title: "Generate & Copy",
                    description: "Click Generate to create text, then copy it to your clipboard."
                }
            ]}
            proTips={[
                "Use 3-5 paragraphs for blog post mockups and article layouts.",
                "Generate 10-20 words for button labels and short UI element testing.",
                "Need variation? Click Regenerate to get different text with the same settings.",
                "Combine with word counter to ensure your placeholder matches real content length.",
                "Use sentences mode for testing list items and menu navigation.",
                "For email templates, generate 2-3 paragraphs to visualize spacing."
            ]}
            relatedTools={[
                {
                    title: "Word & Character Counter",
                    description: "Count the generated Lorem Ipsum text.",
                    link: "/tools/word-counter",
                    icon: <FileText className="w-8 h-8" />
                },
                {
                    title: "Text Case Converter",
                    description: "Convert Lorem Ipsum to different cases.",
                    link: "/tools/text-case-converter",
                    icon: <Type className="w-8 h-8" />
                },
                {
                    title: "Markdown Previewer",
                    description: "Preview Lorem Ipsum in markdown format.",
                    link: "/tools/markdown-previewer",
                    icon: <Eye className="w-8 h-8" />
                }
            ]}
        >
            {/* Main Tool Interface */}
            <div className="space-y-6">
                {/* Generation Mode Selection */}
                <div>
                    <h3 className="text-lg font-bold text-white mb-3">Generation Mode</h3>
                    <div className="grid grid-cols-3 gap-3">
                        <button
                            onClick={() => setMode('words')}
                            className={`p-4 rounded-xl border-2 transition-all duration-200 ${mode === 'words'
                                    ? 'border-blue-500 bg-blue-500/20'
                                    : 'border-white/10 bg-white/5 hover:border-blue-500/50'
                                }`}
                        >
                            <Type className="w-6 h-6 mx-auto mb-2 text-blue-400" />
                            <div className="font-bold text-white">Words</div>
                            <div className="text-xs text-gray-400">Individual words</div>
                        </button>

                        <button
                            onClick={() => setMode('sentences')}
                            className={`p-4 rounded-xl border-2 transition-all duration-200 ${mode === 'sentences'
                                    ? 'border-blue-500 bg-blue-500/20'
                                    : 'border-white/10 bg-white/5 hover:border-blue-500/50'
                                }`}
                        >
                            <FileText className="w-6 h-6 mx-auto mb-2 text-blue-400" />
                            <div className="font-bold text-white">Sentences</div>
                            <div className="text-xs text-gray-400">Complete sentences</div>
                        </button>

                        <button
                            onClick={() => setMode('paragraphs')}
                            className={`p-4 rounded-xl border-2 transition-all duration-200 ${mode === 'paragraphs'
                                    ? 'border-blue-500 bg-blue-500/20'
                                    : 'border-white/10 bg-white/5 hover:border-blue-500/50'
                                }`}
                        >
                            <FileText className="w-6 h-6 mx-auto mb-2 text-blue-400" />
                            <div className="font-bold text-white">Paragraphs</div>
                            <div className="text-xs text-gray-400">Full paragraphs</div>
                        </button>
                    </div>
                </div>

                {/* Count Input */}
                <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
                    <label htmlFor="count" className="block text-lg font-bold text-white mb-3">
                        How many {mode}?
                    </label>
                    <input
                        type="number"
                        id="count"
                        value={count}
                        onChange={(e) => setCount(Math.max(1, Math.min(100, parseInt(e.target.value) || 1)))}
                        min="1"
                        max="100"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <p className="text-sm text-gray-400 mt-2">Enter a number between 1 and 100</p>
                </div>

                {/* Generate Button */}
                <div className="flex gap-4">
                    <button
                        onClick={generate}
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-bold text-lg transition-all duration-200 shadow-lg shadow-blue-500/50"
                    >
                        <RefreshCw className="w-5 h-5" />
                        Generate Lorem Ipsum
                    </button>
                </div>

                {/* Generated Text Output */}
                {generatedText && (
                    <div>
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="text-lg font-bold text-white">Generated Text</h3>
                            <button
                                onClick={copyText}
                                className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-all duration-200"
                            >
                                {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                {copied ? 'Copied!' : 'Copy Text'}
                            </button>
                        </div>
                        <div
                            className="w-full min-h-64 p-6 bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-xl text-white whitespace-pre-wrap"
                            style={{ fontFamily: 'outfit, outfit Fallback' }}
                        >
                            {generatedText}
                        </div>
                    </div>
                )}

                {/* Info Box */}
                <div className="p-6 bg-blue-500/10 border border-blue-500/30 rounded-xl">
                    <h4 className="font-bold text-white mb-2">💡 What is Lorem Ipsum?</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        Lorem Ipsum is placeholder text commonly used in the design and publishing industry.
                        It's been the standard dummy text since the 1500s and helps designers focus on layout
                        without being distracted by readable content.
                    </p>
                </div>
            </div>
        </ToolLayout>
    );
}
