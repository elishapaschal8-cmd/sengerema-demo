'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, Check, Mail, MapPin, Phone } from 'lucide-react';
import CompanyProfileModal from './components/CompanyProfileModal';
import HeroSection from './components/HeroSection';
import ProjectSelector from './components/ProjectSelector';
import type { Language } from './data/content';
import { companyProfile, copy, metrics, navigation, partners, services, trustBadges } from './data/content';

/* --- ROOT PAGE AND GLOBAL UI STATE --- */
export default function Home() {
  const [lang, setLang] = useState<Language>('en');
  const [profileOpen, setProfileOpen] = useState(false);
  const text = (value: { en: string; sw: string }) => value[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <main className="overflow-x-hidden bg-mist text-ink">
      <HeroSection lang={lang} onLanguageChange={setLang} onOpenProfile={() => setProfileOpen(true)} />

      {/* --- KPI METRICS --- */}
      <section className="border-b border-slate-200 bg-white py-8" aria-label={text(copy.projectFocus)}>
        <div className="container-shell grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.value} className="bg-white p-6">
              <div className="font-heading text-3xl font-extrabold tracking-[-0.06em] text-navy">{metric.value}</div>
              <div className="mt-3 text-sm font-bold leading-5 text-navy">{text(metric.label)}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.12em] text-slate-500">{text(metric.detail)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* --- TRUST BADGES AND PARTNER TICKER --- */}
      <section className="border-b border-slate-200 bg-white py-10">
        <div className="container-shell">
          <p className="mb-6 text-center text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">{text(copy.trustTitle)}</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {trustBadges.map((badge) => {
              const Icon = badge.icon;
              return <div key={badge.title.en} className="flex items-center gap-3 border border-slate-200 bg-mist p-4"><span className="flex h-9 w-9 items-center justify-center bg-yellow/15 text-yellow"><Icon size={18} /></span><span><strong className="block text-sm text-navy">{text(badge.title)}</strong><small className="text-xs text-slate-500">{text(badge.detail)}</small></span></div>;
            })}
          </div>
          <p className="mt-10 text-center text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">{text(copy.partnersTitle)}</p>
          <div className="mt-5 overflow-hidden border-y border-slate-200 py-4">
            <div className="flex min-w-max items-center justify-around gap-14 text-sm font-extrabold tracking-[0.18em] text-navy">
              {[...partners, ...partners].map((partner, index) => <span key={`${partner}-${index}`}>{partner}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* --- ABOUT --- */}
      <section id="about" className="py-20 lg:py-28">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative overflow-hidden border border-slate-200 bg-white p-3 shadow-soft">
            <img src="/images/transformer.jpg" alt="Representative transformer infrastructure" className="h-[420px] w-full object-cover sm:h-[500px]" loading="lazy" />
          </div>
          <div>
            <span className="section-label">{text(copy.aboutEyebrow)}</span>
            <h2 className="section-title max-w-2xl text-balance">{text(copy.aboutTitle)}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{text(copy.aboutBody)}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {['Field-minded execution', 'Reliable infrastructure support', 'Community and network impact', 'Quality-led coordination'].map((item) => <div key={item} className="flex items-center gap-3 border border-slate-200 bg-white p-4 text-sm font-semibold text-navy"><Check size={16} className="shrink-0 text-yellow" /> {item}</div>)}
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES --- */}
      <section id="services" className="bg-white py-20 lg:py-28">
        <div className="container-shell">
          <span className="section-label">{text(copy.servicesEyebrow)}</span>
          <h2 className="section-title max-w-3xl text-balance">{text(copy.servicesTitle)}</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return <article key={service.number} className="group border border-slate-200 bg-mist p-6 transition hover:-translate-y-1 hover:border-yellow hover:bg-white"><div className="mb-8 flex items-center justify-between"><span className="font-heading text-4xl font-bold tracking-[-0.07em] text-slate-300">{service.number}</span><span className="flex h-12 w-12 items-center justify-center border border-yellow/40 bg-yellow/10 text-yellow"><Icon size={22} /></span></div><h3 className="font-heading text-2xl font-extrabold tracking-[-0.04em] text-navy">{text(service.title)}</h3><p className="mt-3 leading-7 text-slate-600">{text(service.description)}</p></article>;
            })}
          </div>
        </div>
      </section>

      {/* --- PROJECTS --- */}
      <section id="projects" className="py-20 lg:py-28">
        <div className="container-shell">
          <span className="section-label">{text(copy.projectsEyebrow)}</span>
          <h2 className="section-title max-w-3xl text-balance">{text(copy.projectsTitle)}</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">{text(copy.projectsDescription)}</p>
          <div className="mt-12"><ProjectSelector lang={lang} /></div>
        </div>
      </section>

      {/* --- CAPABILITIES --- */}
      <section id="capabilities" className="bg-navy py-20 text-white lg:py-28">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div><span className="section-label border-yellow/40 bg-yellow/10 text-yellow">{text(copy.capabilitiesEyebrow)}</span><h2 className="section-title max-w-2xl text-white">{text(copy.capabilitiesTitle)}</h2></div>
          <div className="border border-white/15 bg-white/5 p-6 sm:p-8"><p className="leading-7 text-slate-200">{text(companyProfile.summary)}</p><ul className="mt-7 space-y-3">{companyProfile.capabilities[lang].map((capability) => <li key={capability} className="flex items-start gap-3 text-slate-100"><Check size={17} className="mt-0.5 shrink-0 text-yellow" />{capability}</li>)}</ul><button type="button" onClick={() => setProfileOpen(true)} className="btn-primary mt-8 gap-2">{text(copy.companyProfile)} <ArrowRight size={16} /></button></div>
        </div>
      </section>

      {/* --- CONTACT --- */}
      <section id="contact" className="bg-white py-20 lg:py-28">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div><span className="section-label">{text(copy.contactEyebrow)}</span><h2 className="section-title max-w-xl">{text(copy.contactTitle)}</h2><p className="mt-5 max-w-md text-lg leading-8 text-slate-600">{text(copy.contactDescription)}</p><div className="mt-8 space-y-4 text-slate-700"><a href="tel:+255618921422" className="flex items-center gap-3 hover:text-navy"><Phone size={18} className="text-yellow" /> +255 618 921 422</a><a href="mailto:info@sengerema.co.tz" className="flex items-center gap-3 hover:text-navy"><Mail size={18} className="text-yellow" /> info@sengerema.co.tz</a><div className="flex items-center gap-3"><MapPin size={18} className="text-yellow" /> Mwanza HQ, Tanzania</div></div><a href="mailto:info@sengerema.co.tz" className="btn-primary mt-8">{text(copy.contactCta)}</a></div>
          <form className="border border-slate-200 bg-mist p-6 sm:p-8" onSubmit={(event) => event.preventDefault()}><div className="grid gap-5 sm:grid-cols-2">{['Name', 'Company', 'Email', 'Phone'].map((label) => <label key={label} className="text-sm font-medium text-navy">{label}<input required={label === 'Email'} type={label === 'Email' ? 'email' : label === 'Phone' ? 'tel' : 'text'} className="mt-2 w-full border border-slate-300 bg-white px-4 py-3 outline-none focus:border-yellow" /></label>)}</div><label className="mt-5 block text-sm font-medium text-navy">Project brief<textarea rows={5} className="mt-2 w-full resize-none border border-slate-300 bg-white px-4 py-3 outline-none focus:border-yellow" /></label><button type="submit" className="btn-primary mt-6">Send enquiry</button></form>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-navy py-12 text-white">
        <div className="container-shell grid gap-10 border-b border-white/10 pb-10 md:grid-cols-2 lg:grid-cols-4"><div><div className="font-heading text-lg font-extrabold tracking-[-0.05em]">SENGEREMA ENGINEERING GROUP LTD</div><p className="mt-4 text-slate-300">{text(copy.footerDescription)}</p></div><div><h3 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-yellow">{text(copy.quickLinks)}</h3><ul className="space-y-2 text-slate-300">{navigation.map((item) => <li key={item.id}><a href={`#${item.id}`} className="hover:text-yellow">{text(item.label)}</a></li>)}</ul></div><div><h3 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-yellow">{text(copy.contactDetails)}</h3><ul className="space-y-2 text-slate-300"><li>Mwanza HQ, Tanzania</li><li><a href="tel:+255618921422" className="hover:text-yellow">+255 618 921 422</a></li><li><a href="mailto:info@sengerema.co.tz" className="hover:text-yellow">info@sengerema.co.tz</a></li></ul></div><div><h3 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-yellow">Social</h3><p className="text-slate-300">Professional updates and partnership enquiries.</p></div></div>
        <div className="container-shell pt-6 text-sm text-slate-400">© 2026 Sengerema Engineering Group Ltd</div>
      </footer>

      {/* --- MOBILE CONTACT BAR --- */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-white/10 bg-navy p-2 shadow-soft sm:hidden"><a href="tel:+255618921422" className="flex items-center justify-center gap-2 border-r border-white/15 py-3 text-xs font-bold uppercase tracking-[0.12em] text-yellow"><Phone size={15} /> {text(copy.mobileCall)}</a><a href="mailto:info@sengerema.co.tz" className="flex items-center justify-center gap-2 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white"><Mail size={15} /> {text(copy.mobileEmail)}</a></div>

      <CompanyProfileModal lang={lang} open={profileOpen} onClose={() => setProfileOpen(false)} />
    </main>
  );
}
