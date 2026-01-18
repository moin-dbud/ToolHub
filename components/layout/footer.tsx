"use client"

import { useState } from 'react'
import Link from 'next/link'
import { FaXTwitter, FaLinkedin, FaGithub } from 'react-icons/fa6'

interface FooterProps {
  onNewsletterSubscribe?: (email: string) => void
}

export function Footer({ onNewsletterSubscribe }: FooterProps) {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !email.includes('@')) {
      setMessage('Please enter a valid email address')
      setTimeout(() => setMessage(''), 3000)
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Notify parent component
      if (onNewsletterSubscribe) {
        onNewsletterSubscribe(email)
      }

      setMessage('Successfully subscribed!')
      setEmail('')

      // Clear message after 3 seconds
      setTimeout(() => setMessage(''), 3000)
    } catch (error) {
      setMessage('Something went wrong. Please try again.')
      setTimeout(() => setMessage(''), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">

          {/* Brand Section */}
          <div className="lg:col-span-4">
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <div style={{ fontFamily: 'Agile, sans-serif' }} className="text-3xl text-white font-bold">
                  ToolVerse
                </div>
              </div>
              <p style={{ fontFamily: 'Outfit, sans-serif' }} className="text-sm leading-relaxed text-gray-400 max-w-sm">
                Empowering your productivity with powerful tools designed to streamline your workflow and enhance your digital experience.
              </p>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="text-sm font-bold tracking-wider uppercase text-white mb-4">
                STAY UPDATED
              </h4>
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="moinsheikh130@gmail.com"
                  className="flex-1 px-4 py-2.5 bg-gray-900 border border-gray-700 rounded text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  disabled={isSubmitting}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
              {message && (
                <p className={`mt-2 text-xs ${message.includes('Success') ? 'text-green-400' : 'text-red-400'}`}>
                  {message}
                </p>
              )}
            </div>
          </div>

          {/* Product Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold tracking-wider uppercase text-white mb-4">
              PRODUCT
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/tools" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Tools
                </Link>
              </li>
              <li>
                <Link href="/tools/ai" className="text-sm text-gray-400 hover:text-white transition-colors">
                  ToolVerse AI
                </Link>
              </li>
              <li>
                <Link href="/tools/hub" className="text-sm text-gray-400 hover:text-white transition-colors">
                  ToolVerse Hub
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold tracking-wider uppercase text-white mb-4">
              COMPANY
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">
                  About ToolVerse
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold tracking-wider uppercase text-white mb-4">
              SUPPORT
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/status" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Status
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold tracking-wider uppercase text-white mb-4">
              LEGAL
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} ToolVerse. All rights reserved.
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <FaXTwitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/moin-s-sheikh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/moin-dbud"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

