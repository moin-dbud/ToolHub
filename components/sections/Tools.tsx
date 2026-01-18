"use client";

import toolsData from "@/lib/tools-data.json";
import Link from "next/link";

import {
  Activity,
  Archive,
  ArrowUpDown,
  AudioWaveform,
  BarChart3,
  Binary,
  Braces,
  Calculator,
  CalendarClock,
  CaseSensitive,
  CheckCircle2,
  CheckSquare,
  Clock,
  Crop,
  Diff,
  DollarSign,
  Download,
  Eraser,
  ExternalLink,
  Eye,
  FileImage,
  Files,
  FileText,
  Film,
  Fingerprint,
  Globe,
  GraduationCap,
  Hash,
  Image,
  ImagePlus,
  Info,
  Key,
  KeyRound,
  Link2,
  Locate,
  Lock,
  MailCheck,
  MessageSquare,
  Move,
  Music,
  Palette,
  Percent,
  QrCode,
  Receipt,
  Regex,
  Repeat,
  Ruler,
  Scissors,
  Server,
  ShieldAlert,
  ShieldCheck,
  ShieldX,
  Split,
  Stamp,
  StickyNote,
  Table,
  Table2,
  Tag,
  Text,
  Timer,
  TrendingDown,
  TrendingUp,
  User,
  VolumeX,
  Clipboard,
} from "lucide-react";
import CTA from "./CTA";
import WhoWeServe from "./WhoWeServe";

type BadgeType = "Popular" | "Trending" | "New" | "Premium" | "Beta";

const badgeStyles: Record<BadgeType, string> = {
  Popular: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  Trending: "bg-orange-500/15 text-orange-400 border-orange-500/30",
  New: "bg-green-500/15 text-green-400 border-green-500/30",
  Premium: "bg-purple-500/15 text-purple-400 border-purple-500/30",
  Beta: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
};

const iconMap: Record<string, { icon: any, color: string }> = {
  "word-character-counter": { icon: Calculator, color: '#3b82f6' },
  "text-case-converter": { icon: CaseSensitive, color: '#22c55e' },
  "text-diff-checker": { icon: Diff, color: '#ef4444' },
  "remove-extra-spaces": { icon: Eraser, color: '#a855f7' },
  "markdown-previewer": { icon: FileText, color: '#f97316' },
  "text-sorter": { icon: ArrowUpDown, color: '#ec4899' },
  "lorem-ipsum-generator": { icon: Text, color: '#6366f1' },
  "slug-generator": { icon: Link2, color: '#14b8a6' },
  "pdf-merge": { icon: Files, color: '#eab308' },
  "pdf-split": { icon: Scissors, color: '#6b7280' },
  "pdf-compress": { icon: Archive, color: '#06b6d4' },
  "images-to-pdf": { icon: ImagePlus, color: '#84cc16' },
  "pdf-to-images": { icon: FileImage, color: '#10b981' },
  "csv-to-json": { icon: Table2, color: '#8b5cf6' },
  "json-to-csv": { icon: Table, color: '#d946ef' },
  "image-resize": { icon: Move, color: '#f43f5e' },
  "image-compress": { icon: Archive, color: '#0ea5e9' },
  "image-format-converter": { icon: Repeat, color: '#f59e0b' },
  "crop-rotate-image": { icon: Crop, color: '#64748b' },
  "image-metadata-viewer": { icon: Info, color: '#71717a' },
  "image-to-base64": { icon: Binary, color: '#737373' },
  "image-color-extractor": { icon: Palette, color: '#78716c' },
  "add-watermark-image": { icon: Stamp, color: '#2563eb' },
  "image-dimensions-detector": { icon: Ruler, color: '#16a34a' },
  "video-thumbnail-generator": { icon: Image, color: '#dc2626' },
  "video-trimmer": { icon: Scissors, color: '#9333ea' },
  "remove-audio-video": { icon: VolumeX, color: '#ea580c' },
  "audio-file-converter": { icon: Music, color: '#db2777' },
  "audio-trimmer": { icon: AudioWaveform, color: '#4f46e5' },
  "gif-maker-video": { icon: Film, color: '#0d9488' },
  "qr-code-generator": { icon: QrCode, color: '#ca8a04' },
  "url-encoder-decoder": { icon: Link2, color: '#52525b' },
  "utm-builder": { icon: BarChart3, color: '#0891b2' },
  "open-graph-preview": { icon: Eye, color: '#65a30d' },
  "short-url-expander": { icon: ExternalLink, color: '#059669' },
  "url-parser": { icon: Split, color: '#7c3aed' },
  "bulk-url-checker": { icon: CheckCircle2, color: '#c026d3' },
  "twitter-thread-formatter": { icon: MessageSquare, color: '#e11d48' },
  "hashtag-generator": { icon: Hash, color: '#0284c7' },
  "social-media-image-resizer": { icon: Image, color: '#d97706' },
  "meta-tag-generator": { icon: Tag, color: '#475569' },
  "youtube-thumbnail-downloader": { icon: Download, color: '#52525b' },
  "engagement-rate-calculator": { icon: TrendingUp, color: '#525252' },
  "json-formatter-validator": { icon: Braces, color: '#57534e' },
  "base64-encoder-decoder": { icon: Binary, color: '#1e40af' },
  "uuid-generator": { icon: Fingerprint, color: '#15803d' },
  "hash-generator": { icon: ShieldCheck, color: '#b91c1c' },
  "unix-timestamp-converter": { icon: Clock, color: '#7e22ce' },
  "color-converter": { icon: Palette, color: '#c2410c' },
  "regex-tester": { icon: Regex, color: '#be185d' },
  "jwt-decoder": { icon: KeyRound, color: '#4338ca' },
  "pomodoro-timer": { icon: Timer, color: '#0f766e' },
  "note-taking-app": { icon: StickyNote, color: '#a16207' },
  "simple-todo-list": { icon: CheckSquare, color: '#3f3f46' },
  "days-until-calculator": { icon: CalendarClock, color: '#0e7490' },
  "grade-calculator": { icon: GraduationCap, color: '#4d7c0f' },
  "time-zone-converter": { icon: Globe, color: '#047857' },
  "scientific-calculator": { icon: Calculator, color: '#6d28d9' },
  "currency-converter": { icon: DollarSign, color: '#a21caf' },
  "unit-converter": { icon: Ruler, color: '#be123c' },
  "percentage-calculator": { icon: Percent, color: '#0369a1' },
  "age-calculator": { icon: User, color: '#b45309' },
  "bmi-calculator": { icon: Activity, color: '#334155' },
  "tip-calculator": { icon: Receipt, color: '#3f3f46' },
  "discount-calculator": { icon: TrendingDown, color: '#404040' },
  "password-generator": { icon: Key, color: '#44403c' },
  "password-strength-checker": { icon: ShieldAlert, color: '#1e3a8a' },
  "encryption-decryption": { icon: Lock, color: '#166534' },
  "email-validator": { icon: MailCheck, color: '#991b1b' },
  "ip-address-lookup": { icon: Locate, color: '#6b21a8' },
  "dns-lookup-tool": { icon: Server, color: '#9a3412' },
  "password-leak-checker": { icon: ShieldX, color: '#9f1239' },
};

export default function Tools() {
  return (
    <div className="min-h-screen pb-20 bg-black">
      {toolsData.categories.map((category) => (
        <div key={category.id} className="mb-24">
          {/* Header */}
          <div className="mb-12 text-center">
            <h2 style={{ fontFamily: 'outfit, outfit Fallback' }} className="text-3xl font-semibold text-foreground sm:text-4xl">
              {category.icon} {category.name}
            </h2>
            <p style={{ fontFamily: 'outfit, outfit Fallback' }} className="mt-3 text-muted-foreground">
              {category.description}
            </p>
          </div>

          {/* Tool Grid */}
          <div className="grid gap-6 px-8 sm:grid-cols-2 md:px-32 lg:grid-cols-4">
            {category.tools.map((tool) => {
              const { icon: Icon, color } = iconMap[tool.id] ?? { icon: Clipboard, color: 'blue-500' };

              const CardContent = (
                <>
                  {tool.badge && (
                    <span style={{ fontFamily: 'outfit, outfit Fallback' }}
                      className={`absolute right-4 top-4 rounded-full border px-2.5 py-0.5 text-xs font-medium ${badgeStyles[tool.badge as BadgeType]
                        }`}
                    >
                      {tool.badge}
                    </span>
                  )}

                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-white transform group-hover:scale-110 transition-all duration-300 mb-4"
                    style={{ backgroundColor: color }}
                  >
                    <Icon size={32} />
                  </div>

                  <h3 style={{ fontFamily: 'outfit, outfit Fallback' }} className="text-lg font-bold text-gray-900 dark:text-white">
                    {tool.title}
                  </h3>

                  <p style={{ fontFamily: 'outfit, outfit Fallback' }} className="mt-2 text-sm line-clamp-2 text-gray-600 dark:text-gray-400">
                    {tool.description}
                  </p>

                  <span style={{ color: "hsl(217, 91%, 60%)" }} className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary transition group-hover:gap-2">
                    Open Tool →
                  </span>
                </>
              );

              if (!tool.link) {
                console.warn("Missing link for tool:", tool.title);
              }

              return tool.link ? (
                <Link
                  key={tool.id}
                  href={tool.link}
                  className="group relative overflow-hidden rounded-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-stone-50 dark:focus:ring-offset-black block"
                >
                  <div className="size-full rounded-xl transform-gpu bg-white dark:bg-black [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.3)]">
                    <div
                      className="absolute inset-0 rounded-xl blur opacity-0 group-hover:opacity-30 transition-all duration-300"
                      style={{ backgroundImage: 'linear-gradient(to right, #3b82f6, #2563eb)' }}
                    />
                    <div className="relative p-8 h-full rounded-xl bg-white dark:bg-black">
                      {CardContent}
                    </div>
                  </div>
                  <div
                    className="pointer-events-none absolute inset-0 z-30 bg-gradient-to-tl via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundImage: 'linear-gradient(to top left, rgba(59, 130, 246, 0.05), transparent, transparent)' }}
                  />
                </Link>
              ) : (
                <div
                  key={tool.id}
                  className="group relative cursor-not-allowed overflow-hidden rounded-2xl border border-white bg-background/40 p-8 opacity-60"
                >
                  <div className="relative z-10">
                    {CardContent}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
      <CTA />
      <WhoWeServe />
    </div>
  );
}






