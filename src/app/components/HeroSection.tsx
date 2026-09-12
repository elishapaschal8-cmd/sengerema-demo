'use client';

import Image from 'next/image';
import { ArrowRight, FileText, Menu, Phone, Sparkles, X } from 'lucide-react';
import { useState } from 'react';
import type { Language } from '../data/content';
import { copy, navigation } from '../data/content';

interface HeroSectionProps {
  lang: Language;
  onLanguageChange: (language: Language) => void;
  onOpenProfile: () => void;
}

/* --- HEADER AND HERO --- */
export default function HeroSection({ lang, onLanguageChange, onOpenProfile }: HeroSectionProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const text = (value: { en: string; sw: string }) => value[lang];

  return (
    <>
      <div className="bg-yellow px-4 py-2 text-center text-[10px] font-bold uppercase tracking-[0.12em] text-navy sm:text-xs">
        {text(copy.proposalBanner)}
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/95 text-white backdrop-blur-md">
        <div className="container-shell flex min-h-[72px] items-center justify-between gap-4">
          <a href="#home" className="flex shrink-0 items-center gap-3" aria-label="Sengerema Engineering Group Ltd home">
            <span className="flex h-10 w-10 items-center justify-center border border-yellow bg-yellow/10 text-sm font-black tracking-[0.18em] text-yellow">SE</span>
            <span className="hidden leading-tight sm:block">
              <span className="block text-xs font-bold uppercase tracking-[0.2em] text-yellow">Sengerema</span>
              <span className="block text-[10px] font-medium uppercase tracking-[0.16em] text-slate-300">Engineering Group Ltd</span>
            </span>
          </a>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
            {navigation.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="nav-link">
                {text(item.label)}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="flex border border-white/20 bg-white/5 p-1" role="group" aria-label="Language">
              {(['en', 'sw'] as Language[]).map((language) => (
                <button
                  key={language}
                  type="button"
                  onClick={() => onLanguageChange(language)}
                  className={`min-w-9 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.16em] transition ${lang === language ? 'bg-yellow text-navy' : 'text-slate-200 hover:text-yellow'}`}
                  aria-pressed={lang === language}
                >
                  {language}
                </button>
              ))}
            </div>
            <a href="mailto:info@sengerema.co.tz?subject=Tender%20inquiry" className="btn-primary hidden sm:inline-flex">
              {text(copy.tenderInquiry)}
            </a>
            <button type="button" className="border border-white/20 p-2 text-white lg:hidden" onClick={() => setMobileMenuOpen((open) => !open)} aria-label={text(copy.menu)} aria-expanded={mobileMenuOpen}>
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-white/10 bg-navy px-4 py-4 lg:hidden">
            <nav className="container-shell grid gap-1" aria-label="Mobile navigation">
              {navigation.map((item) => (
                <a key={item.id} href={`#${item.id}`} onClick={() => setMobileMenuOpen(false)} className="border-b border-white/10 py-3 text-sm font-semibold text-slate-100">
                  {text(item.label)}
                </a>
              ))}
              <a href="mailto:info@sengerema.co.tz?subject=Tender%20inquiry" className="mt-3 inline-flex items-center justify-center gap-2 border border-yellow px-4 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-yellow">
                <Phone size={16} /> {text(copy.tenderInquiry)}
              </a>
            </nav>
          </div>
        )}
      </header>

      <section id="home" className="relative isolate min-h-[calc(100vh-104px)] overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 -z-10">
          <Image src="/images/hero-electrical-infrastructure.jpg" alt={text({ en: 'High-voltage electrical infrastructure', sw: 'Miundombinu ya umeme wa nguvu za juu' })} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/65" />
          <div className="absolute inset-0 bg-navy/20" />
        </div>
        <div className="absolute inset-0 -z-10 opacity-20 [background-image:linear-gradient(rgba(245,196,0,0.22)_1px,transparent_1px),linear-gradient(to_right,rgba(245,196,0,0.18)_1px,transparent_1px)] [background-size:72px_72px]" />

        <div className="container-shell grid min-h-[calc(100vh-104px)] items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 border border-yellow/30 bg-yellow/10 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-yellow">
              <Sparkles size={14} /> {text(copy.heroEyebrow)}
            </div>
            <h1 className="max-w-3xl font-heading text-5xl font-extrabold leading-[0.96] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">{text(copy.heroTitle)}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200">{text(copy.heroDescription)}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#projects" className="btn-primary gap-2">{text(copy.exploreProjects)} <ArrowRight size={17} /></a>
              <button type="button" onClick={onOpenProfile} className="btn-secondary gap-2"><FileText size={17} /> {text(copy.companyProfile)}</button>
            </div>
          </div>

          <div className="relative ml-auto w-full max-w-md border border-white/15 bg-white/5 p-5 backdrop-blur-sm">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-yellow">{text(copy.projectFocus)}</span>
              <span className="h-2.5 w-2.5 rounded-full bg-yellow shadow-[0_0_18px_rgba(245,196,0,0.9)]" />
            </div>
            <div className="border border-white/10 bg-navy/40 p-5">
              <div className="mb-5 text-[11px] uppercase tracking-[0.18em] text-slate-300">{text(copy.currentPriorities)}</div>
              <div className="h-px w-full bg-gradient-to-r from-yellow via-yellow/70 to-transparent" />
              <div className="mt-5 grid gap-4">
                {['Electrical infrastructure', 'Rural electrification', 'Power distribution'].map((item) => (
                  <div key={item} className="flex items-center justify-between border-b border-white/10 pb-3 text-base text-slate-100 last:border-none last:pb-0">
                    <span>{item}</span><span className="text-yellow">+</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
