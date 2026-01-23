"use client"

import Link from 'next/link'
import { useState } from 'react'
import {
    ArrowRight,
    Clock,
    Tag,
    Search,
    BookOpen,
    TrendingUp,
    Code2,
    Shield,
    Zap,
    Image as ImageIcon,
    FileText,
    Sparkles,
    ChevronRight,
    Calendar,
    User,
    Eye,
    Heart,
} from 'lucide-react'
import { Footer } from '@/components/layout/footer'

// ─── Data ────────────────────────────────────────────────────────────────────

const categories = [
    { id: 'all', label: 'All Posts', icon: BookOpen },
    { id: 'developer', label: 'Developer Tips', icon: Code2 },
    { id: 'productivity', label: 'Productivity', icon: Zap },
    { id: 'tutorials', label: 'Tutorials', icon: FileText },
    { id: 'tools', label: 'Tool Spotlight', icon: TrendingUp },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'design', label: 'Design', icon: ImageIcon },
]

const posts = [
    {
        id: 1,
        slug: 'json-formatter-tips',
        title: '10 JSON Formatting Tricks Every Developer Should Know',
        excerpt:
            'JSON is everywhere in modern development. Master these formatting and validation patterns to debug faster, write cleaner APIs, and catch edge cases before they bite you in production.',
        category: 'developer',
        author: 'Moin Sheikh',
        authorInitials: 'MS',
        authorColor: 'hsl(217, 91%, 60%)',
        date: 'Mar 5, 2026',
        readTime: '6 min read',
        views: '4.2k',
        likes: 89,
        featured: true,
        tags: ['JSON', 'Developer Tools', 'APIs'],
        accentColor: '#3b82f6',
        gradientFrom: '#1e3a5f',
        gradientTo: '#0f172a',
        emoji: '🧩',
    },
    {
        id: 2,
        slug: 'image-compression-guide',
        title: 'How to Compress Images Without Losing Quality',
        excerpt:
            'Page load speed directly impacts your search rankings and user retention. Learn how to compress images for the web using our free tools — no quality compromise needed.',
        category: 'tutorials',
        author: 'Aisha Noor',
        authorInitials: 'AN',
        authorColor: '#a855f7',
        date: 'Mar 2, 2026',
        readTime: '5 min read',
        views: '3.1k',
        likes: 64,
        featured: false,
        tags: ['Images', 'Web Performance', 'Tools'],
        accentColor: '#a855f7',
        gradientFrom: '#2d1b4e',
        gradientTo: '#0f172a',
        emoji: '🖼️',
    },
    {
        id: 3,
        slug: 'pdf-workflow-automation',
        title: 'Automate Your PDF Workflow: Merge, Split & Convert in Seconds',
        excerpt:
            'Stop manually handling PDFs one by one. Discover how to batch-process documents using ToolVerse\'s PDF suite and save hours of tedious work every week.',
        category: 'productivity',
        author: 'Rahul Sharma',
        authorInitials: 'RS',
        authorColor: '#22c55e',
        date: 'Feb 27, 2026',
        readTime: '7 min read',
        views: '2.8k',
        likes: 57,
        featured: false,
        tags: ['PDF', 'Automation', 'Productivity'],
        accentColor: '#22c55e',
        gradientFrom: '#14382a',
        gradientTo: '#0f172a',
        emoji: '📄',
    },
    {
        id: 4,
        slug: 'password-security-2026',
        title: 'Password Security in 2026: What Actually Matters',
        excerpt:
            'With credential stuffing attacks at an all-time high, your password habits need an upgrade. Here\'s what modern security research says about staying safe online.',
        category: 'security',
        author: 'Moin Sheikh',
        authorInitials: 'MS',
        authorColor: 'hsl(217, 91%, 60%)',
        date: 'Feb 22, 2026',
        readTime: '8 min read',
        views: '5.7k',
        likes: 142,
        featured: false,
        tags: ['Security', 'Passwords', 'Privacy'],
        accentColor: '#ef4444',
        gradientFrom: '#3b1a1a',
        gradientTo: '#0f172a',
        emoji: '🔐',
    },
    {
        id: 5,
        slug: 'regex-tester-patterns',
        title: 'Regex Patterns You\'ll Actually Use Daily',
        excerpt:
            'Regex looks scary but mastering a handful of real-world patterns unlocks incredible power. We break down 15 practical patterns with live examples you can run right now.',
        category: 'developer',
        author: 'Aisha Noor',
        authorInitials: 'AN',
        authorColor: '#a855f7',
        date: 'Feb 18, 2026',
        readTime: '10 min read',
        views: '6.3k',
        likes: 198,
        featured: false,
        tags: ['Regex', 'Developer Tools', 'Patterns'],
        accentColor: '#f59e0b',
        gradientFrom: '#3b2a0f',
        gradientTo: '#0f172a',
        emoji: '🔍',
    },
    {
        id: 6,
        slug: 'color-palette-design-tools',
        title: 'Building a Cohesive Color Palette with a Color Picker',
        excerpt:
            'Design is 80% color. Learn how to extract colors from images, convert between color spaces, and build a harmonious system for your next project — all without Figma.',
        category: 'design',
        author: 'Priya Mehta',
        authorInitials: 'PM',
        authorColor: '#ec4899',
        date: 'Feb 14, 2026',
        readTime: '5 min read',
        views: '2.2k',
        likes: 45,
        featured: false,
        tags: ['Design', 'Colors', 'Tools'],
        accentColor: '#ec4899',
        gradientFrom: '#3b1a2e',
        gradientTo: '#0f172a',
        emoji: '🎨',
    },
    {
        id: 7,
        slug: 'pomodoro-deep-work',
        title: 'Deep Work With the Pomodoro Technique: A Developer\'s Guide',
        excerpt:
            'Distraction-resistant work sessions aren\'t a myth. Here\'s how combining the Pomodoro timer with intentional planning turns scattered effort into laser-focused output.',
        category: 'productivity',
        author: 'Rahul Sharma',
        authorInitials: 'RS',
        authorColor: '#22c55e',
        date: 'Feb 10, 2026',
        readTime: '6 min read',
        views: '3.4k',
        likes: 76,
        featured: false,
        tags: ['Productivity', 'Focus', 'Time Management'],
        accentColor: '#14b8a6',
        gradientFrom: '#0e2e2a',
        gradientTo: '#0f172a',
        emoji: '⏱️',
    },
    {
        id: 8,
        slug: 'url-utm-tracking',
        title: 'Track Every Click: Building a UTM Strategy That Works',
        excerpt:
            'Most marketers set up UTM parameters wrong and end up with garbage data. This guide walks you through building a clean, consistent tracking system from scratch.',
        category: 'tools',
        author: 'Priya Mehta',
        authorInitials: 'PM',
        authorColor: '#ec4899',
        date: 'Feb 5, 2026',
        readTime: '9 min read',
        views: '1.9k',
        likes: 38,
        featured: false,
        tags: ['Marketing', 'Analytics', 'UTM'],
        accentColor: '#0ea5e9',
        gradientFrom: '#0a2a3b',
        gradientTo: '#0f172a',
        emoji: '📊',
    },
    {
        id: 9,
        slug: 'base64-explained',
        title: 'Base64 Encoding Explained: When and Why to Use It',
        excerpt:
            'Base64 is one of those things developers use all the time but rarely understand deeply. Let\'s demystify it with clear examples and practical use cases you\'ll encounter daily.',
        category: 'developer',
        author: 'Moin Sheikh',
        authorInitials: 'MS',
        authorColor: 'hsl(217, 91%, 60%)',
        date: 'Jan 30, 2026',
        readTime: '7 min read',
        views: '4.8k',
        likes: 113,
        featured: false,
        tags: ['Encoding', 'Developer Tools', 'Web'],
        accentColor: '#6366f1',
        gradientFrom: '#1e1b4b',
        gradientTo: '#0f172a',
        emoji: '🔡',
    },
]

// ─── Components ───────────────────────────────────────────────────────────────

function FeaturedPost({ post }: { post: typeof posts[0] }) {
    return (
        <div
            className="relative overflow-hidden rounded-2xl border border-gray-800 group cursor-pointer hover:border-gray-600 transition-all duration-300"
            style={{ boxShadow: '0 0 80px rgba(59,130,246,0.08)' }}
        >
            {/* Background gradient */}
            <div
                className="absolute inset-0 opacity-60"
                style={{
                    background: `linear-gradient(135deg, ${post.gradientFrom} 0%, ${post.gradientTo} 100%)`
                }}
            />
            {/* Glow orb */}
            <div
                className="absolute -top-20 -left-20 w-64 h-64 rounded-full opacity-20 blur-3xl"
                style={{ backgroundColor: post.accentColor }}
            />

            <div className="relative p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    {/* Emoji / Visual */}
                    <div
                        className="w-20 h-20 md:w-28 md:h-28 rounded-2xl flex items-center justify-center text-5xl md:text-6xl flex-shrink-0"
                        style={{ backgroundColor: `${post.accentColor}20`, border: `1px solid ${post.accentColor}40` }}
                    >
                        {post.emoji}
                    </div>

                    <div className="flex-1 min-w-0">
                        {/* Badges */}
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                            <span
                                className="px-3 py-1 rounded-full text-xs font-bold tracking-wider"
                                style={{ backgroundColor: `${post.accentColor}20`, color: post.accentColor, border: `1px solid ${post.accentColor}40` }}
                            >
                                ⭐ FEATURED
                            </span>
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-800 text-gray-300 border border-gray-700 capitalize">
                                {post.category}
                            </span>
                        </div>

                        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight group-hover:text-blue-300 transition-colors duration-300">
                            {post.title}
                        </h2>
                        <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6 max-w-2xl">
                            {post.excerpt}
                        </p>

                        <div className="flex flex-wrap items-center justify-between gap-4">
                            {/* Author + Meta */}
                            <div className="flex items-center gap-4">
                                <div
                                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                                    style={{ backgroundColor: post.authorColor }}
                                >
                                    {post.authorInitials}
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-white">{post.author}</p>
                                    <div className="flex items-center gap-3 text-xs text-gray-500 mt-0.5">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" /> {post.date}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" /> {post.readTime}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Eye className="w-3 h-3" /> {post.views}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* CTA */}
                            <Link
                                href={`/blogs/${post.slug}`}
                                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 group/btn"
                                style={{ backgroundColor: post.accentColor, color: 'white' }}
                            >
                                Read Article
                                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom shimmer */}
            <div
                className="absolute bottom-0 left-0 w-full h-0.5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700"
                style={{ backgroundImage: `linear-gradient(to right, transparent, ${post.accentColor}, transparent)` }}
            />
        </div>
    )
}

function BlogCard({ post }: { post: typeof posts[0] }) {
    return (
        <Link
            href={`/blogs/${post.slug}`}
            className="group relative flex flex-col rounded-xl border border-gray-800 overflow-hidden hover:border-gray-600 transition-all duration-300 hover:-translate-y-1"
        >
            {/* Card top color bar */}
            <div
                className="h-1 w-full opacity-60"
                style={{ backgroundColor: post.accentColor }}
            />

            {/* Emoji banner */}
            <div
                className="relative flex items-center justify-center py-8"
                style={{
                    background: `linear-gradient(135deg, ${post.gradientFrom} 0%, #0f172a 100%)`
                }}
            >
                <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                    style={{ backgroundColor: `${post.accentColor}20` }}
                >
                    {post.emoji}
                </div>
                {/* Category pill */}
                <span
                    className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-medium capitalize"
                    style={{ backgroundColor: `${post.accentColor}18`, color: post.accentColor, border: `1px solid ${post.accentColor}30` }}
                >
                    {post.category}
                </span>
            </div>

            <div className="flex flex-col flex-1 p-5 bg-gray-900/30">
                <h3 className="text-base font-bold text-white mb-3 leading-snug group-hover:text-blue-300 transition-colors duration-300 line-clamp-2">
                    {post.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed line-clamp-3 mb-4 flex-1">
                    {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                        <span
                            key={tag}
                            className="flex items-center gap-1 px-2 py-0.5 rounded-md text-xs text-gray-400 bg-gray-800 border border-gray-700"
                        >
                            <Tag className="w-2.5 h-2.5" />
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                    <div className="flex items-center gap-2">
                        <div
                            className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                            style={{ backgroundColor: post.authorColor }}
                        >
                            {post.authorInitials}
                        </div>
                        <div>
                            <p className="text-xs font-medium text-gray-300">{post.author}</p>
                            <p className="text-xs text-gray-600">{post.date}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-gray-600">
                        <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                            <Heart className="w-3 h-3" />
                            {post.likes}
                        </span>
                    </div>
                </div>
            </div>

            {/* Hover glow */}
            <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: `inset 0 0 40px ${post.accentColor}08` }}
            />
        </Link>
    )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BlogsPage() {
    const [activeCategory, setActiveCategory] = useState('all')
    const [searchQuery, setSearchQuery] = useState('')
    const [email, setEmail] = useState('')
    const [subscribed, setSubscribed] = useState(false)

    const featuredPost = posts.find((p) => p.featured)!
    const filteredPosts = posts
        .filter((p) => !p.featured)
        .filter((p) => activeCategory === 'all' || p.category === activeCategory)
        .filter(
            (p) =>
                searchQuery === '' ||
                p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
        )

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault()
        if (email && email.includes('@')) {
            setSubscribed(true)
            setEmail('')
            setTimeout(() => setSubscribed(false), 4000)
        }
    }

    return (
        <div
            className="min-h-screen bg-black text-white"
            style={{ fontFamily: 'outfit, outfit Fallback' }}
        >
            {/* ── Hero ── */}
            <section className="pt-32 pb-16 px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-14">
                        <div
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border"
                            style={{
                                backgroundColor: 'rgba(59,130,246,0.1)',
                                borderColor: 'rgba(59,130,246,0.3)',
                                color: 'hsl(217, 91%, 60%)',
                            }}
                        >
                            <Sparkles className="w-4 h-4" />
                            Tips, Tutorials &amp; Tool Deep-Dives
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            The ToolVerse
                            <br />
                            <span style={{ color: 'hsl(217, 91%, 60%)' }}>Blog</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            Practical guides, developer workflows, and insights on the tools you use every day.
                        </p>
                    </div>

                    {/* Stats bar */}
                    <div className="flex items-center justify-center gap-8 md:gap-16 flex-wrap text-center">
                        {[
                            { count: '9+', label: 'Articles' },
                            { count: '5', label: 'Authors' },
                            { count: '6', label: 'Categories' },
                            { count: '28k', label: 'Monthly Readers' },
                        ].map((stat) => (
                            <div key={stat.label}>
                                <div className="text-2xl font-black text-white">{stat.count}</div>
                                <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mt-0.5">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Featured Post ── */}
            <section className="px-8 pb-16">
                <div className="max-w-6xl mx-auto">
                    <FeaturedPost post={featuredPost} />
                </div>
            </section>

            {/* ── Search + Filters ── */}
            <section className="px-8 pb-10 bg-gradient-to-b from-black to-gray-950">
                <div className="max-w-6xl mx-auto">
                    {/* Search */}
                    <div className="relative max-w-xl mx-auto mb-8">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input
                            id="blog-search"
                            type="text"
                            placeholder="Search articles, topics, tags..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-11 pr-4 py-3 bg-gray-900/60 border border-gray-800 rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all duration-200"
                        />
                    </div>

                    {/* Category Tabs */}
                    <div className="flex items-center gap-2 flex-wrap justify-center">
                        {categories.map((cat) => {
                            const Icon = cat.icon
                            const isActive = activeCategory === cat.id
                            return (
                                <button
                                    key={cat.id}
                                    id={`category-${cat.id}`}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
                                    style={
                                        isActive
                                            ? {
                                                backgroundColor: 'hsl(217, 91%, 60%)',
                                                color: 'white',
                                            }
                                            : {
                                                backgroundColor: 'rgba(255,255,255,0.04)',
                                                color: '#9ca3af',
                                                border: '1px solid #1f2937',
                                            }
                                    }
                                >
                                    <Icon className="w-3.5 h-3.5" />
                                    {cat.label}
                                </button>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ── Blog Grid ── */}
            <section className="px-8 pb-24 bg-gray-950">
                <div className="max-w-6xl mx-auto">
                    {filteredPosts.length > 0 ? (
                        <>
                            <div className="flex items-center justify-between mb-8 pt-8">
                                <p className="text-sm text-gray-500">
                                    Showing <span className="text-white font-semibold">{filteredPosts.length}</span> result{filteredPosts.length !== 1 ? 's' : ''}
                                    {activeCategory !== 'all' && (
                                        <> in <span className="text-white font-semibold capitalize">{activeCategory}</span></>
                                    )}
                                </p>
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery('')}
                                        className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
                                    >
                                        Clear search
                                    </button>
                                )}
                            </div>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredPosts.map((post) => (
                                    <BlogCard key={post.id} post={post} />
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-24 text-center">
                            <div className="text-5xl mb-4">🔍</div>
                            <h3 className="text-xl font-bold text-white mb-2">No articles found</h3>
                            <p className="text-gray-500 text-sm mb-6">
                                Try a different search term or browse a different category.
                            </p>
                            <button
                                onClick={() => { setSearchQuery(''); setActiveCategory('all') }}
                                className="text-sm font-medium px-5 py-2.5 rounded-xl border border-gray-700 text-white hover:border-blue-500 transition-colors"
                            >
                                Reset Filters
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* ── Popular Tags ── */}
            <section className="py-16 px-8 bg-black border-t border-gray-900">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-xl font-bold text-white mb-6 text-center">Browse by Tag</h2>
                    <div className="flex flex-wrap justify-center gap-2">
                        {Array.from(new Set(posts.flatMap((p) => p.tags))).map((tag) => (
                            <button
                                key={tag}
                                onClick={() => setSearchQuery(tag)}
                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-gray-400 bg-gray-900/60 border border-gray-800 hover:border-gray-600 hover:text-white transition-all duration-200"
                            >
                                <Tag className="w-3 h-3" />
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Top Picks Sidebar strip ── */}
            <section className="py-20 px-8 bg-gradient-to-b from-black to-gray-950">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-10 items-start">
                        {/* Trending */}
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <TrendingUp className="w-5 h-5" style={{ color: 'hsl(217, 91%, 60%)' }} />
                                <h2 className="text-xl font-bold text-white">Trending This Week</h2>
                            </div>
                            <div className="space-y-4">
                                {posts
                                    .sort((a, b) => b.likes - a.likes)
                                    .slice(0, 4)
                                    .map((post, i) => (
                                        <Link
                                            key={post.id}
                                            href={`/blogs/${post.slug}`}
                                            className="flex items-start gap-4 group"
                                        >
                                            <span className="text-3xl font-black text-gray-800 w-8 flex-shrink-0 leading-none mt-1">
                                                {String(i + 1).padStart(2, '0')}
                                            </span>
                                            <div>
                                                <h3 className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors leading-snug mb-1">
                                                    {post.title}
                                                </h3>
                                                <div className="flex items-center gap-3 text-xs text-gray-600">
                                                    <span className="flex items-center gap-1">
                                                        <Heart className="w-3 h-3" /> {post.likes}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <Clock className="w-3 h-3" /> {post.readTime}
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div
                            className="rounded-2xl border border-gray-800 p-8 relative overflow-hidden"
                            style={{ background: 'linear-gradient(135deg, #0f1729 0%, #0a0a0a 100%)' }}
                        >
                            {/* Glow */}
                            <div
                                className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-10 blur-3xl"
                                style={{ backgroundColor: 'hsl(217, 91%, 60%)' }}
                            />
                            <div className="relative">
                                <div
                                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-4 border"
                                    style={{
                                        backgroundColor: 'rgba(59,130,246,0.1)',
                                        borderColor: 'rgba(59,130,246,0.3)',
                                        color: 'hsl(217, 91%, 60%)',
                                    }}
                                >
                                    <Sparkles className="w-3 h-3" />
                                    Newsletter
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Stay in the loop</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    Get the latest tutorials, tool updates, and developer tips delivered to your inbox — no spam, ever.
                                </p>

                                {subscribed ? (
                                    <div
                                        className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium"
                                        style={{ backgroundColor: 'rgba(34,197,94,0.15)', color: '#22c55e', border: '1px solid rgba(34,197,94,0.3)' }}
                                    >
                                        ✅ You're subscribed! Thanks for joining.
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                                        <div className="flex gap-2">
                                            <input
                                                id="newsletter-email-blogs"
                                                type="email"
                                                placeholder="your@email.com"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all"
                                                required
                                            />
                                            <button
                                                id="newsletter-submit-blogs"
                                                type="submit"
                                                className="px-5 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:opacity-90"
                                                style={{ backgroundColor: 'hsl(217, 91%, 60%)' }}
                                            >
                                                Subscribe
                                            </button>
                                        </div>
                                        <p className="text-xs text-gray-600">No spam. Unsubscribe anytime.</p>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Bottom CTA ── */}
            <section className="py-28 px-8 bg-gradient-to-b from-gray-950 via-black to-black border-t border-gray-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Ready to Put It
                        <br />
                        <span style={{ color: 'hsl(217, 91%, 60%)' }}>Into Practice?</span>
                    </h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-xl mx-auto leading-relaxed">
                        Everything you read about here is a free tool waiting for you right now.
                    </p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <Link
                            href="/tools"
                            id="blogs-cta-tools"
                            className="flex items-center gap-2 px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-200 group hover:opacity-90"
                            style={{ backgroundColor: 'hsl(217, 91%, 60%)', color: 'white' }}
                        >
                            Try the Tools Free
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/features"
                            id="blogs-cta-features"
                            className="px-10 py-5 border border-gray-700 hover:border-blue-500 rounded-xl font-semibold text-lg transition-all duration-200"
                        >
                            Explore Features
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
