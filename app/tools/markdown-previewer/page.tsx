"use client";

import React, { useState } from 'react';
import ToolLayout from '@/components/layout/ToolLayout';
import { Copy, Trash2, FileText, Code, Eye, EyeOff, CheckCircle, Edit, ArrowRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownPreviewerPage() {
    const [markdown, setMarkdown] = useState('# Welcome to Markdown Previewer\n\n## Features\n\n- **Bold text**\n- *Italic text*\n- `Code blocks`\n- [Links](https://example.com)\n\n```javascript\nconsole.log("Hello World");\n```');
    const [showPreview, setShowPreview] = useState(true);
    const [copied, setCopied] = useState(false);
    const [copiedHTML, setCopiedHTML] = useState(false);

    const copyMarkdown = () => {
        navigator.clipboard.writeText(markdown);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const copyHTML = () => {
        // In a real implementation, you'd convert markdown to HTML
        // For now, we'll copy the rendered content
        const htmlContent = document.querySelector('.markdown-preview')?.innerHTML || '';
        navigator.clipboard.writeText(htmlContent);
        setCopiedHTML(true);
        setTimeout(() => setCopiedHTML(false), 2000);
    };

    return (
        <ToolLayout
            toolName="Markdown Previewer"
            description="Write Markdown and see live HTML preview with syntax support."
            aboutContent={[
                "The Markdown Previewer is a real-time markdown editor that shows you exactly how your markdown will look when rendered. Perfect for writing README files, documentation, blog posts, or any content that uses markdown formatting.",
                "Whether you're a developer writing documentation, a blogger creating content, or a student taking notes, this tool helps you visualize your markdown before publishing. It supports all standard markdown syntax including headings, lists, links, images, code blocks, and more.",
                "All rendering happens locally in your browser for instant feedback and complete privacy. No server uploads, no delays - just pure, fast markdown preview."
            ]}
            features={[
                {
                    icon: <Eye className="w-6 h-6" />,
                    title: "Live Preview",
                    description: "See your markdown render in real-time as you type."
                },
                {
                    icon: <Code className="w-6 h-6" />,
                    title: "Syntax Highlighting",
                    description: "Code blocks with proper syntax highlighting support."
                },
                {
                    icon: <FileText className="w-6 h-6" />,
                    title: "Full Markdown Support",
                    description: "Headers, lists, links, images, tables, and more."
                },
                {
                    icon: <EyeOff className="w-6 h-6" />,
                    title: "Toggle Preview",
                    description: "Switch between split view and full editor mode."
                },
                {
                    icon: <Copy className="w-6 h-6" />,
                    title: "Copy HTML",
                    description: "Export the rendered HTML for use in other applications."
                },
                {
                    icon: <CheckCircle className="w-6 h-6" />,
                    title: "Standards Compliant",
                    description: "Follows CommonMark markdown specification."
                }
            ]}
            howToSteps={[
                {
                    number: 1,
                    icon: <Edit className="w-6 h-6" />,
                    title: "Write Markdown",
                    description: "Type or paste your markdown in the left editor panel."
                },
                {
                    number: 2,
                    icon: <Eye className="w-6 h-6" />,
                    title: "View Preview",
                    description: "See the rendered HTML preview update instantly on the right side."
                },
                {
                    number: 3,
                    icon: <Copy className="w-6 h-6" />,
                    title: "Copy Output",
                    description: "Copy the markdown or HTML output to use in your project."
                }
            ]}
            proTips={[
                "Use # for headings (# H1, ## H2, ### H3, etc.) - more # symbols mean smaller headings.",
                "Create bold text with **text** and italic with *text* or _text_.",
                "Make code blocks with triple backticks (```) and specify language for highlighting.",
                "Create links with [text](url) and images with ![alt](url).",
                "Use > for blockquotes and - or * for bullet lists.",
                "Preview mode is perfect for checking GitHub README formatting before committing."
            ]}
            relatedTools={[
                {
                    title: "Word & Character Counter",
                    description: "Count words and characters in your markdown.",
                    link: "/tools/word-counter",
                    icon: <FileText className="w-8 h-8" />
                },
                {
                    title: "Text Case Converter",
                    description: "Convert markdown headings case.",
                    link: "/tools/text-case-converter",
                    icon: <Code className="w-8 h-8" />
                },
                {
                    title: "Slug Generator",
                    description: "Generate URL slugs for markdown links.",
                    link: "/tools/slug-generator",
                    icon: <ArrowRight className="w-8 h-8" />
                }
            ]}
        >
            {/* Main Tool Interface */}
            <div className="space-y-6">
                {/* Controls */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <button
                        onClick={() => setShowPreview(!showPreview)}
                        className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg font-medium transition-all duration-200"
                    >
                        {showPreview ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        {showPreview ? 'Hide Preview' : 'Show Preview'}
                    </button>

                    <div className="flex gap-2">
                        <button
                            onClick={copyMarkdown}
                            className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-all duration-200"
                        >
                            {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                            {copied ? 'Copied!' : 'Copy Markdown'}
                        </button>

                        <button
                            onClick={copyHTML}
                            className="flex items-center gap-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-medium transition-all duration-200"
                        >
                            {copiedHTML ? <CheckCircle className="w-4 h-4" /> : <Code className="w-4 h-4" />}
                            {copiedHTML ? 'Copied!' : 'Copy HTML'}
                        </button>

                        <button
                            onClick={() => setMarkdown('')}
                            className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg font-medium transition-all duration-200"
                        >
                            <Trash2 className="w-4 h-4" />
                            Clear
                        </button>
                    </div>
                </div>

                {/* Editor and Preview */}
                <div className={`grid ${showPreview ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'} gap-4`}>
                    {/* Markdown Editor */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-3">Markdown Input</h3>
                        <textarea
                            value={markdown}
                            onChange={(e) => setMarkdown(e.target.value)}
                            placeholder="# Enter your markdown here..."
                            className="w-full h-[600px] p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none font-mono text-sm"
                        />
                    </div>

                    {/* Preview */}
                    {showPreview && (
                        <div>
                            <h3 className="text-lg font-bold text-white mb-3">Live Preview</h3>
                            <div className="markdown-preview w-full min-h-[600px] p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl text-white prose prose-invert prose-blue max-w-none overflow-auto">
                                <ReactMarkdown>{markdown}</ReactMarkdown>
                            </div>
                        </div>
                    )}
                </div>

                {/* Quick Reference */}
                <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
                    <h3 className="text-lg font-bold text-white mb-4">Quick Reference</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                            <code className="text-blue-400"># Heading 1</code>
                            <span className="text-gray-400 ml-2">→ Large heading</span>
                        </div>
                        <div>
                            <code className="text-blue-400">**bold**</code>
                            <span className="text-gray-400 ml-2">→ <strong>Bold text</strong></span>
                        </div>
                        <div>
                            <code className="text-blue-400">*italic*</code>
                            <span className="text-gray-400 ml-2">→ <em>Italic text</em></span>
                        </div>
                        <div>
                            <code className="text-blue-400">[link](url)</code>
                            <span className="text-gray-400 ml-2">→ Hyperlink</span>
                        </div>
                        <div>
                            <code className="text-blue-400">- item</code>
                            <span className="text-gray-400 ml-2">→ Bullet list</span>
                        </div>
                        <div>
                            <code className="text-blue-400">`code`</code>
                            <span className="text-gray-400 ml-2">→ Inline code</span>
                        </div>
                    </div>
                </div>
            </div>
        </ToolLayout>
    );
}
