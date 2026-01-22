"use client"

import Link from 'next/link'
import { useState } from 'react'
import {
    CheckCircle2,
    ArrowRight,
    Zap,
    Shield,
    Users,
    Crown,
    Sparkles,
    Lock,
    X,
    ChevronDown,
    ChevronUp,
    Star,
    Globe,
    Clock
} from 'lucide-react'
import { Footer } from '@/components/layout/footer'

const plans = [
    {
        name: 'Free',
        price: { monthly: 0, yearly: 0 },
        description: 'Everything you need to get started. No credit card required.',
        badge: null,
        highlight: false,
        cta: 'Get Started Free',
        ctaHref: '/tools',
        icon: Zap,
        iconColor: '#22c55e',
        features: [
            { text: 'Access to 72+ tools', included: true },
            { text: 'Client-side processing', included: true },
            { text: 'No sign-up required', included: true },
            { text: 'PDF merge & split', included: true },
            { text: 'Image & media tools', included: true },
            { text: '5 MB file upload limit', included: true },
            { text: 'Ad-free experience', included: true },
            { text: 'Batch file processing', included: false },
            { text: 'Priority processing', included: false },
            { text: 'API access', included: false },
            { text: 'Custom integrations', included: false },
        ],
    },
    {
        name: 'Pro',
        price: { monthly: 9, yearly: 79 },
        description: 'For power users and professionals who need more speed and capacity.',
        badge: 'Most Popular',
        highlight: true,
        cta: 'Start Pro Trial',
        ctaHref: '/login?plan=pro',
        icon: Crown,
        iconColor: 'hsl(217, 91%, 60%)',
        features: [
            { text: 'Everything in Free', included: true },
            { text: 'Up to 50 MB file uploads', included: true },
            { text: 'Batch file processing', included: true },
            { text: 'Priority processing queue', included: true },
            { text: 'Early access to new tools', included: true },
            { text: 'Ad-free — forever', included: true },
            { text: 'Saved tool history', included: true },
            { text: 'API access (1,000 req/mo)', included: true },
            { text: 'Custom integrations', included: false },
            { text: 'Dedicated support', included: false },
            { text: 'Team workspaces', included: false },
        ],
    },
    {
        name: 'Team',
        price: { monthly: 29, yearly: 249 },
        description: 'Built for teams that collaborate and need shared workspaces.',
        badge: 'Best Value',
        highlight: false,
        cta: 'Start Team Trial',
        ctaHref: '/login?plan=team',
        icon: Users,
        iconColor: '#a855f7',
        features: [
            { text: 'Everything in Pro', included: true },
            { text: 'Up to 200 MB file uploads', included: true },
            { text: 'Unlimited batch processing', included: true },
            { text: 'Team workspaces (up to 10)', included: true },
            { text: 'Shared tool history', included: true },
            { text: 'API access (10,000 req/mo)', included: true },
            { text: 'Custom integrations', included: true },
            { text: 'Dedicated support', included: true },
            { text: 'SSO / SAML login', included: true },
            { text: 'Usage analytics dashboard', included: true },
            { text: 'SLA guarantee', included: true },
        ],
    },
]

const faqs = [
    {
        question: 'Do I need to sign up to use ToolVerse?',
        answer:
            'No. Most tools work instantly without any account. The Free plan gives you full access to all 72+ tools right away.',
    },
    {
        question: 'Is there a free trial for Pro and Team plans?',
        answer:
            'Yes! Both Pro and Team plans come with a 14-day free trial. No credit card is required to start your trial.',
    },
    {
        question: 'What happens to my files after processing?',
        answer:
            'For client-side tools, your files never leave your browser. For server-side processing, uploaded files are automatically deleted within 1 hour of processing.',
    },
    {
        question: 'Can I cancel my subscription at any time?',
        answer:
            'Absolutely. You can cancel your subscription at any time from your account settings. You\'ll retain access until the end of your billing period.',
    },
    {
        question: 'What payment methods do you accept?',
        answer:
            'We accept all major credit cards (Visa, Mastercard, AMEX), UPI, and PayPal. Yearly plans can also be paid via bank transfer.',
    },
    {
        question: 'Do you offer discounts for students or non-profits?',
        answer:
            'Yes! Students and verified non-profit organizations receive a 50% discount on Pro and Team plans. Contact us with proof of eligibility.',
    },
]

const testimonials = [
    {
        name: 'Aryan Kapoor',
        role: 'Frontend Developer',
        avatar: 'AK',
        color: '#3b82f6',
        text: 'ToolVerse replaced at least 6 separate bookmarks for me. The JSON formatter and PDF tools alone are worth it.',
    },
    {
        name: 'Priya Mehta',
        role: 'Content Creator',
        avatar: 'PM',
        color: '#a855f7',
        text: 'I use the image resize and watermark tools daily. Super fast, no login, no nonsense. Exactly what I needed.',
    },
    {
        name: 'Sam Torres',
        role: 'Product Manager',
        avatar: 'ST',
        color: '#22c55e',
        text: 'The Pro plan batch processing saves my team hours every week. Best $9/month I spend on any tool.',
    },
]

export default function PricingPage() {
    const [isYearly, setIsYearly] = useState(false)
    const [openFaq, setOpenFaq] = useState<number | null>(null)

    return (
        <div className="min-h-screen bg-black text-white" style={{ fontFamily: 'outfit, outfit Fallback' }}>

            {/* Hero */}
            <section className="pt-32 pb-16 px-8 text-center">
                <div className="max-w-4xl mx-auto">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border"
                        style={{
                            backgroundColor: 'rgba(59,130,246,0.1)',
                            borderColor: 'rgba(59,130,246,0.3)',
                            color: 'hsl(217, 91%, 60%)'
                        }}
                    >
                        <Sparkles className="w-4 h-4" />
                        Simple, Transparent Pricing
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Start Free.
                        <br />
                        <span style={{ color: 'hsl(217, 91%, 60%)' }}>Scale When Ready.</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Every tool is free to use with no sign-up. Upgrade when you need more power, speed, or collaboration.
                    </p>

                    {/* Billing Toggle */}
                    <div className="flex items-center justify-center gap-4 mt-10">
                        <span className={`text-sm font-medium transition-colors ${!isYearly ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
                        <button
                            id="billing-toggle"
                            onClick={() => setIsYearly(!isYearly)}
                            className="relative w-14 h-7 rounded-full transition-all duration-300 focus:outline-none"
                            style={{ backgroundColor: isYearly ? 'hsl(217, 91%, 60%)' : '#374151' }}
                            aria-label="Toggle billing period"
                        >
                            <span
                                className="absolute top-1 w-5 h-5 bg-white rounded-full shadow transition-all duration-300"
                                style={{ left: isYearly ? '32px' : '4px' }}
                            />
                        </button>
                        <span className={`text-sm font-medium transition-colors ${isYearly ? 'text-white' : 'text-gray-500'}`}>
                            Yearly
                        </span>
                        {isYearly && (
                            <span
                                className="text-xs font-bold px-2 py-0.5 rounded-full"
                                style={{ backgroundColor: 'rgba(34,197,94,0.15)', color: '#22c55e' }}
                            >
                                Save up to 30%
                            </span>
                        )}
                    </div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="pb-24 px-8">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-stretch">
                    {plans.map((plan) => {
                        const Icon = plan.icon
                        const price = isYearly ? plan.price.yearly : plan.price.monthly
                        return (
                            <div
                                key={plan.name}
                                className={`relative flex flex-col rounded-2xl transition-all duration-300 ${plan.highlight
                                    ? 'border-2 shadow-2xl'
                                    : 'border border-gray-800 hover:border-gray-600'
                                    }`}
                                style={plan.highlight ? {
                                    borderColor: 'hsl(217, 91%, 60%)',
                                    boxShadow: '0 0 60px rgba(59,130,246,0.15)'
                                } : {}}
                            >
                                {plan.badge && (
                                    <div
                                        className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold tracking-wider whitespace-nowrap"
                                        style={plan.highlight
                                            ? { backgroundColor: 'hsl(217, 91%, 60%)', color: 'white' }
                                            : { backgroundColor: 'rgba(168,85,247,0.2)', color: '#a855f7', border: '1px solid rgba(168,85,247,0.4)' }
                                        }
                                    >
                                        {plan.badge}
                                    </div>
                                )}

                                <div
                                    className={`flex flex-col flex-1 rounded-2xl p-8 ${plan.highlight ? 'bg-gradient-to-b from-gray-900 to-black' : 'bg-gray-900/30'}`}
                                >
                                    {/* Plan Header */}
                                    <div className="mb-6">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div
                                                className="w-10 h-10 rounded-xl flex items-center justify-center"
                                                style={{ backgroundColor: `${plan.iconColor}20` }}
                                            >
                                                <Icon className="w-5 h-5" style={{ color: plan.iconColor }} />
                                            </div>
                                            <h2 className="text-xl font-bold">{plan.name}</h2>
                                        </div>
                                        <div className="flex items-end gap-1 mb-3">
                                            <span className="text-5xl font-black">
                                                {price === 0 ? 'Free' : `$${price}`}
                                            </span>
                                            {price > 0 && (
                                                <span className="text-gray-400 mb-2 text-sm">
                                                    /{isYearly ? 'yr' : 'mo'}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-gray-400 text-sm leading-relaxed">{plan.description}</p>
                                    </div>

                                    {/* CTA */}
                                    <Link
                                        href={plan.ctaHref}
                                        id={`cta-${plan.name.toLowerCase()}`}
                                        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 mb-8 group"
                                        style={plan.highlight
                                            ? { backgroundColor: 'hsl(217, 91%, 60%)', color: 'white' }
                                            : { border: '1px solid #374151', color: 'white' }
                                        }
                                        onMouseEnter={(e) => {
                                            if (!plan.highlight) (e.currentTarget as HTMLElement).style.borderColor = 'hsl(217, 91%, 60%)'
                                        }}
                                        onMouseLeave={(e) => {
                                            if (!plan.highlight) (e.currentTarget as HTMLElement).style.borderColor = '#374151'
                                        }}
                                    >
                                        {plan.cta}
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>

                                    {/* Divider */}
                                    <div className="border-t border-gray-800 mb-6" />

                                    {/* Features */}
                                    <ul className="space-y-3 flex-1">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                {feature.included ? (
                                                    <CheckCircle2
                                                        className="w-4 h-4 flex-shrink-0 mt-0.5"
                                                        style={{ color: 'hsl(217, 91%, 60%)' }}
                                                    />
                                                ) : (
                                                    <X className="w-4 h-4 flex-shrink-0 mt-0.5 text-gray-600" />
                                                )}
                                                <span className={`text-sm ${feature.included ? 'text-gray-200' : 'text-gray-600'}`}>
                                                    {feature.text}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>

            {/* Trust Indicators */}
            <section className="py-16 px-8 bg-gradient-to-b from-black to-gray-950">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { icon: Shield, label: 'Privacy-First', sub: 'No data stored', color: '#22c55e' },
                            { icon: Lock, label: 'No Hidden Fees', sub: 'Cancel anytime', color: 'hsl(217, 91%, 60%)' },
                            { icon: Globe, label: '72+ Tools', sub: 'Always growing', color: '#a855f7' },
                            { icon: Clock, label: '24/7 Access', sub: 'Always online', color: '#f59e0b' },
                        ].map((item) => {
                            const Icon = item.icon
                            return (
                                <div
                                    key={item.label}
                                    className="flex flex-col items-center text-center p-6 rounded-xl bg-gray-900/50 border border-gray-800"
                                >
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-3"
                                        style={{ backgroundColor: `${item.color}18` }}
                                    >
                                        <Icon className="w-6 h-6" style={{ color: item.color }} />
                                    </div>
                                    <p className="font-bold text-white text-sm">{item.label}</p>
                                    <p className="text-xs text-gray-500 mt-1">{item.sub}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 px-8 bg-black">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-14">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Loved by Developers &amp; Creators</h2>
                        <p className="text-gray-400 text-lg">Real users. Real results.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {testimonials.map((t) => (
                            <div
                                key={t.name}
                                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition-all duration-300"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div
                                        className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                                        style={{ backgroundColor: t.color }}
                                    >
                                        {t.avatar}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-white text-sm">{t.name}</p>
                                        <p className="text-gray-500 text-xs">{t.role}</p>
                                    </div>
                                </div>
                                <div className="flex gap-1 mb-3">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-gray-300 text-sm leading-relaxed">"{t.text}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feature Comparison Table */}
            <section className="py-20 px-8 bg-gradient-to-b from-black to-gray-950">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-14">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Full Plan Comparison</h2>
                        <p className="text-gray-400 text-lg">Exactly what you get with each plan.</p>
                    </div>

                    <div className="overflow-x-auto rounded-2xl border border-gray-800">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-gray-900/80">
                                    <th className="text-left px-6 py-4 text-gray-400 font-semibold">Feature</th>
                                    {plans.map((p) => (
                                        <th key={p.name} className="px-6 py-4 text-center">
                                            <span
                                                className="font-bold"
                                                style={{ color: p.highlight ? 'hsl(217, 91%, 60%)' : 'white' }}
                                            >
                                                {p.name}
                                            </span>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { label: 'All 72+ Tools', values: [true, true, true] },
                                    { label: 'No Sign-up Required', values: [true, true, true] },
                                    { label: 'File Upload Limit', values: ['5 MB', '50 MB', '200 MB'] },
                                    { label: 'Batch Processing', values: [false, true, true] },
                                    { label: 'Priority Queue', values: [false, true, true] },
                                    { label: 'API Access', values: [false, '1k req/mo', '10k req/mo'] },
                                    { label: 'Team Workspaces', values: [false, false, 'Up to 10'] },
                                    { label: 'Dedicated Support', values: [false, false, true] },
                                    { label: 'SSO / SAML', values: [false, false, true] },
                                ].map((row, i) => (
                                    <tr
                                        key={row.label}
                                        className={`border-t border-gray-800 ${i % 2 === 0 ? 'bg-transparent' : 'bg-gray-900/20'}`}
                                    >
                                        <td className="px-6 py-4 text-gray-300">{row.label}</td>
                                        {row.values.map((val, j) => (
                                            <td key={j} className="px-6 py-4 text-center">
                                                {typeof val === 'boolean' ? (
                                                    val ? (
                                                        <CheckCircle2 className="w-5 h-5 mx-auto" style={{ color: 'hsl(217, 91%, 60%)' }} />
                                                    ) : (
                                                        <X className="w-4 h-4 mx-auto text-gray-600" />
                                                    )
                                                ) : (
                                                    <span className="text-gray-300 font-medium">{val}</span>
                                                )}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 px-8 bg-black">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-14">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
                        <p className="text-gray-400 text-lg">Got questions? We've got answers.</p>
                    </div>

                    <div className="space-y-3">
                        {faqs.map((faq, i) => (
                            <div
                                key={i}
                                className="border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-gray-600"
                            >
                                <button
                                    id={`faq-${i}`}
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full flex items-center justify-between px-6 py-5 text-left bg-gray-900/30 hover:bg-gray-900/60 transition-colors duration-200"
                                >
                                    <span className="font-semibold text-white pr-4">{faq.question}</span>
                                    {openFaq === i ? (
                                        <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                    )}
                                </button>
                                {openFaq === i && (
                                    <div className="px-6 py-5 bg-gray-900/10 border-t border-gray-800">
                                        <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-28 px-8 bg-gradient-to-b from-black via-gray-950 to-black">
                <div className="max-w-4xl mx-auto text-center">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-8 border"
                        style={{
                            backgroundColor: 'rgba(59,130,246,0.1)',
                            borderColor: 'rgba(59,130,246,0.3)',
                            color: 'hsl(217, 91%, 60%)'
                        }}
                    >
                        <Zap className="w-4 h-4" />
                        No credit card required to start
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Start Using ToolVerse Today
                    </h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Instant access to 72+ tools. Free forever. Upgrade anytime.
                    </p>

                    <div className="flex gap-4 justify-center flex-wrap">
                        <Link
                            href="/tools"
                            id="cta-final-tools"
                            className="px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-200 flex items-center gap-2 group hover:opacity-90"
                            style={{ backgroundColor: 'hsl(217, 91%, 60%)', color: 'white' }}
                        >
                            Browse All Tools
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/features"
                            id="cta-final-features"
                            className="px-10 py-5 border border-gray-700 hover:border-blue-500 rounded-xl font-semibold text-lg transition-all duration-200"
                        >
                            See All Features
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
