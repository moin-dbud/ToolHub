"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TOOL_CATEGORIES } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import HeroSection from "@/components/sections/Hero";
import Tools from "@/components/sections/Tools";
import { Toaster, toast } from 'sonner';

export default function HomePage() {
  const handleNewsletterSubscribe = (email: string) => {
    // Show success toast notification
    toast.success('Successfully subscribed!', {
      description: `${email} has been added to our newsletter.`,
      duration: 5000,
    });

    // Here you can add your API call to save the email to your backend
    // Example:
    // fetch('/api/newsletter/subscribe', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email })
    // });
  };

  return (
    <>
      <Toaster position="top-right" richColors />
      <HeroSection />
      <Tools />
      <Footer onNewsletterSubscribe={handleNewsletterSubscribe} />
    </>
  );
}