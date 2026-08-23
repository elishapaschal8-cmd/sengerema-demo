'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Building2,
  Cable,
  Check,
  Compass,
  Gauge,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  SunMedium,
  Zap,
} from 'lucide-react';

type Locale = 'en' | 'sw';

const navByLocale: Record<Locale, string[]> = {
  en: ['Home', 'About', 'Services', 'Projects', 'Capabilities', 'Contact'],
  sw: ['Nyumbani', 'Kuhusu', 'Huduma', 'Miradi', 'Uwezo', 'Mawasiliano'],
};

const heroImages = {
  en: {
    src: '/images/hero-electrical-infrastructure.jpg',
    alt: 'High voltage electricity infrastructure and power lines',
  },
  sw: {
    src: '/images/hero-electrical-infrastructure.jpg',
    alt: 'Miundombinu ya umeme yenye nyaya za nguvu za juu',
  },
};

const services = [
  {
    number: '01',
    title: { en: 'Electrical Infrastructure', sw: 'Miundombinu ya Umeme' },
    icon: Zap,
    desc: {
      en: 'Planning and delivery of resilient power systems that support growth, reliability and long-term infrastructure performance.',
      sw: 'Upangaji na utoaji wa mifumo ya nguvu inayostahimili maendeleo, usalama na utendakazi wa miundombinu kwa muda mrefu.',
    },
  },
  {
    number: '02',
    title: { en: 'Power Distribution', sw: 'Ugawaji wa Nguvu' },
    icon: Gauge,
    desc: {
      en: 'Distribution-focused solutions built to strengthen utility access, improve continuity and support efficient network performance.',
      sw: 'Suluhu za ugawaji zinazolenga kuimarisha upatikanaji wa huduma, kuboresha usambazaji na kuendeleza utendaji mzuri wa mitandao.',
    },
  },
  {
    number: '03',
    title: { en: 'Rural Electrification', sw: 'Umeme wa Vijijini' },
    icon: SunMedium,
    desc: {
      en: 'Community-focused electrification works designed to expand access and support sustainable development in underserved areas.',
      sw: 'Kazi za umeme zinazolenga jamii ili kupanua upatikanaji wa nishati na kusaidia maendeleo endelevu katika maeneo ya chini ya huduma.',
    },
  },
  {
    number: '04',
    title: { en: 'Civil Engineering', sw: 'Uhandisi wa Kijamii' },
    icon: Building2,
    desc: {
      en: 'Integrated civil works that underpin efficient site delivery, infrastructure readiness and dependable project execution.',
      sw: 'Kazi za uhandisi wa kijamii zinazoimarisha ujenzi wa tovuti, utayari wa miundombinu na utekelezaji wa miradi kwa uaminifu.',
    },
  },
  {
    number: '05',
    title: { en: 'Supply & Installation', sw: 'Usambazaji na Usakinishaji' },
    icon: Cable,
    desc: {
      en: 'End-to-end supply, installation and project coordination for critical electrical and engineering assets.',
      sw: 'Usambazaji, usakinishaji na uratibu wa mradi wa vifaa vya umeme na uhandisi muhimu.',
    },
  },
  {
    number: '06',
    title: { en: 'Power & Telecom Infrastructure', sw: 'Miundombinu ya Umeme na Mawasiliano' },
    icon: Compass,
    desc: {
      en: 'Connected infrastructure solutions that support both energy and communications requirements across growing networks.',
      sw: 'Suluhu za miundombinu zinazounganisha mahitaji ya nishati na mawasiliano katika mitandao inayokua.',
    },
  },
];

const projects = [
  {
    image:
          '/images/rural-electrification.webp',
    region: { en: 'Rural Electrification — Singida & Tabora', sw: 'Umeme wa Vijijini — Singida & Tabora' },
    description: {
      en: 'Supply and installation of LV distribution networks and consumer connections under a Rural Energy Agency programme.',
      sw: 'Usambazaji na usakinishaji wa mitandao ya usambazaji wa LV na miunganisho ya watumiaji chini ya programu ya Wakala wa Nishati Vijijini.',
    },
    tags: ['REA', 'Electrical Infrastructure', 'Power Distribution', 'Community Impact'],
  },
  {
    image:
          '/images/power-distribution.jpg',
    region: { en: 'Rural Electrification — Pwani & Tanga', sw: 'Umeme wa Vijijini — Pwani & Tanga' },
    description: {
      en: 'Electrical distribution infrastructure and consumer connection works supporting rural electrification.',
      sw: 'Miundombinu ya usambazaji wa umeme na kazi za uunganishaji wa watumiaji zinazosaidia umeme wa vijijini.',
    },
    tags: ['REA', 'Electrical Infrastructure', 'Power Distribution', 'Community Impact'],
  },
  {
    image:
          '/images/transformer.jpg',
    region: { en: 'Rural Electrification — Mbeya', sw: 'Umeme wa Vijijini — Mbeya' },
    description: {
      en: 'Distribution infrastructure and consumer connection works within a rural electrification programme.',
      sw: 'Miundombinu ya usambazaji na kazi za uunganishaji wa watumiaji ndani ya programu ya umeme wa vijijini.',
    },
    tags: ['REA', 'Electrical Infrastructure', 'Power Distribution', 'Community Impact'],
  },
  {
    image:
          '/images/powering-tanzania.jpg',
    region: { en: 'Community Electrification — Simiyu', sw: 'Umeme wa Jamii — Simiyu' },
    description: {
      en: 'Participation in the implementation of REA Phase III Round II electrification works.',
      sw: 'Kushiriki katika utekelezaji wa kazi za umeme za REA Awamu ya III Round II.',
    },
    tags: ['REA', 'Electrical Infrastructure', 'Power Distribution', 'Community Impact'],
  },
];

const impactStats = {
  en: ['Electrical Infrastructure', 'Rural Electrification', 'Power Distribution', 'Community Impact'],
  sw: ['Miundombinu ya Umeme', 'Umeme wa Vijijini', 'Ugawaji wa Nguvu', 'Athari kwa Jamii'],
};

const differentiators = {
  en: ['Technical Expertise', 'Project Experience', 'Quality', 'Safety', 'National Impact'],
  sw: ['Uwezo wa Kiufundi', 'Uzoefu wa Mradi', 'Ubora', 'Usalama', 'Athari ya Kitaifa'],
};

const copy = {
  en: {
    badge: 'Tanzania Engineering Solutions',
    headline: 'POWERING TANZANIA’S FUTURE THROUGH ENGINEERING',
    subheadline:
      'Delivering electrical infrastructure, rural electrification and engineering solutions that connect communities and support sustainable development.',
    explore: 'Explore Our Projects',
    talk: 'Talk to Our Team',
    projectFocus: 'Project Focus',
    priorities: 'Current priorities',
    trust: ['Electrical Engineering', 'Rural Electrification', 'Power Distribution', 'Civil Works', 'Supply & Installation'],
    introLabel: 'WHO WE ARE',
    introTitle: 'Engineering Solutions Built for Real-World Impact',
    introBody:
      'Sengerema Engineering Group Ltd is a Tanzanian engineering company focused on delivering dependable electrical infrastructure, power distribution, rural electrification and practical engineering solutions that meet the needs of communities and growing infrastructure networks.',
    introBody2:
      'The company brings together technical capability, field-driven execution and a clear understanding of infrastructure priorities across Tanzania, supporting projects that improve access, reliability and long-term value.',
    introBullets: ['Project-focused execution', 'Reliable infrastructure support', 'Community and network impact'],
    servicesTitle: 'Engineering capability designed for dependable delivery.',
    learnMore: 'Learn more',
    projectTitle: 'Infrastructure With Measurable Impact',
    disclaimer:
      'Project information presented in this concept is based on publicly available records and should be confirmed by Sengerema Engineering Group Ltd.',
    impactTitle: 'Infrastructure Isn’t Just What We Build. It’s What It Enables.',
    whyTitle: 'Built Around Engineering. Driven by Results.',
    capabilityCardTitle: 'A Stronger Digital Presence for Every Opportunity',
    capabilityText:
      'A strong corporate presence can help represent the company clearly to clients, developers, partners and procurement teams through a professional overview of its business profile, selected project experience, engineering capabilities, quality and HSE standards, certifications, and contact information.',
    capabilityList: ['Company Profile', 'Project Experience', 'Engineering Capabilities', 'Certifications', 'Quality & HSE', 'Contact Information'],
    profileCta: 'Request Company Profile',
    contactTitle: 'Let’s Build What Powers Tomorrow.',
    contactSubhead: 'Have an electrical infrastructure, engineering or development project? Let’s start the conversation.',
    contactBtn: 'Contact Us',
    consultBtn: 'Request a Consultation',
    formName: 'Name',
    formCompany: 'Company',
    formEmail: 'Email',
    formPhone: 'Phone',
    formType: 'Project Type',
    formMessage: 'Message',
    send: 'Send Enquiry',
    footerIntro: 'Engineering Infrastructure. Powering Progress.',
    quickLinks: 'Quick Links',
    contact: 'Contact',
    social: 'Social',
    conceptual: 'Website Concept — Prepared by [YOUR NAME/BRAND]',
    requestProfile: 'Request Company Profile',
  },
  sw: {
    badge: 'Ufundi wa Tanzania',
    headline: 'KUTOKA KATIKA NISHATI YA TANZANIA KWA UHANDISI',
    subheadline:
      'Tunakabidhi miundombinu ya umeme, umeme wa vijijini na suluhu za uhandisi zinazounganisha jamii na kuhimiza maendeleo endelevu.',
    explore: 'Chunguza Miradi Yetu',
    talk: 'Zungumza na Timu Yetu',
    projectFocus: 'Mwelekeo wa Mradi',
    priorities: 'Vipaumbele vya sasa',
    trust: ['Uhandisi wa Umeme', 'Umeme wa Vijijini', 'Ugawaji wa Nguvu', 'Kazi za Kijamii', 'Usambazaji & Usakinishaji'],
    introLabel: 'TUMETOKA WAPI',
    introTitle: 'Suluhu za Uhandisi Zilizojengwa kwa Athari ya Kweli',
    introBody:
      'Sengerema Engineering Group Ltd ni kampuni ya uhandisi ya Tanzania inayolenga kutoa miundombinu ya umeme inayotegemewa, usambazaji wa nguvu, umeme wa vijijini na suluhu za uhandisi zinazokidhi mahitaji ya jamii na mitandao ya miundombinu inayokua.',
    introBody2:
      'Kampuni hiyo inakusanya uwezo wa kiufundi, utekelezaji wa uwanja na uelewa wa vipaumbele vya miundombinu kote Tanzania, ikisaidia miradi inayoboresha upatikanaji, uthabiti na thamani ya muda mrefu.',
    introBullets: ['Utekelezaji unaolenga mradi', 'Usaidizi wa miundombinu inayotegemewa', 'Athari kwa jamii na mtandao'],
    servicesTitle: 'Uwezo wa uhandisi uliofungwa kwa utoaji unaotegemewa.',
    learnMore: 'Jifunze zaidi',
    projectTitle: 'Miundombinu na Athari Inayoweza Kupimika',
    disclaimer:
      'Taarifa za mradi zinazowasilishwa katika dhana hii zinatokana na rekodi zinazopatikana kwa umma na zinapaswa kuthibitishwa na Sengerema Engineering Group Ltd.',
    impactTitle: 'Miundombinu Siyo Tu Kitu Tunachojenga. Ni Kitu Kinachowezesha.',
    whyTitle: 'Imejengwa Kwenye Uhandisi. Inayoendeshwa na Matokeo.',
    capabilityCardTitle: 'Uwepo Mpana wa Dijitali kwa Kila Fursa',
    capabilityText:
      'Uwepo wa kampuni wenye nguvu unaweza kusaidia kuwakilisha kampuni kwa wazi kwa wateja, wasanidi, washirika na timu za ununuzi kupitia maelezo ya kitaalamu ya wasifu wa biashara, uzoefu wa miradi iliyochaguliwa, uwezo wa uhandisi, ubora na viwango vya HSE, vyeti, na maelezo ya mawasiliano.',
    capabilityList: ['Wasifu wa Kampuni', 'Uzoefu wa Miradi', 'Uwezo wa Uhandisi', 'Vyeti', 'Ubora & HSE', 'Taarifa za Mawasiliano'],
    profileCta: 'Omba Wasifu wa Kampuni',
    contactTitle: 'Tujenge Kitu Kinachoweza Kutengeneza Kesho.',
    contactSubhead: 'Una mradi wa miundombinu ya umeme, uhandisi au maendeleo? Wacha tuanze mazungumzo.',
    contactBtn: 'Wasiliana Nasi',
    consultBtn: 'Omba Ushauri',
    formName: 'Jina',
    formCompany: 'Kampuni',
    formEmail: 'Barua pepe',
    formPhone: 'Simu',
    formType: 'Aina ya Mradi',
    formMessage: 'Ujumbe',
    send: 'Tuma Ujumbe',
    footerIntro: 'Miundombinu ya Uhandisi. Inasawazisha Maendeleo.',
    quickLinks: 'Viungo vya Haraka',
    contact: 'Mawasiliano',
    social: 'Mitandao',
    conceptual: 'Dhana ya Tovuti — Imetayarishwa na [JINA LA BINA/BRANDI YAKO]',
    requestProfile: 'Omba Wasifu wa Kampuni',
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  const [lang, setLang] = useState<Locale>('en');
  const navItems = navByLocale[lang];
  const t = copy[lang];

  return (
    <main className="overflow-x-hidden bg-mist text-ink">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/85 backdrop-blur-md">
        <div className="container-shell flex items-center justify-between py-4">
          <div className="flex items-center gap-3 text-white">
            <div className="flex h-10 w-10 items-center justify-center border border-yellow bg-yellow/10 text-sm font-black tracking-[0.18em] text-yellow">
              SE
            </div>
            <div className="leading-tight">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-yellow">Sengerema</div>
              <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-300">Engineering Group Ltd</div>
            </div>
          </div>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="flex rounded-none border border-white/15 bg-white/5 p-1">
              {(['en', 'sw'] as Locale[]).map((locale) => (
                <button
                  key={locale}
                  type="button"
                  onClick={() => setLang(locale)}
                  className={`px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] transition ${
                    lang === locale ? 'bg-yellow text-navy' : 'text-slate-200 hover:text-yellow'
                  }`}
                  aria-label={`Switch language to ${locale === 'en' ? 'English' : 'Swahili'}`}
                >
                  {locale === 'en' ? 'EN' : 'SW'}
                </button>
              ))}
            </div>

            {/* Persistent phone CTA visible on all screen sizes */}
            <a
              href="tel:+255618921422"
              className="btn-primary inline-flex items-center"
              aria-label="Call Elisha Paschal Machibya at 0618921422"
            >
              Call: 0618921422
            </a>

            {/* Consult / Email CTA (kept visible on sm and up) */}
            <a href="#contact" className="btn-secondary hidden sm:inline-flex">
              {t.consultBtn}
            </a>
          </div>
        </div>
      </header>

      <section id="home" className="relative isolate min-h-[calc(100vh-72px)] overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 opacity-40">
          <Image
            src={heroImages[lang].src}
            alt={heroImages[lang].alt}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/70" />
        </div>

        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(245,196,0,0.22)_1px,transparent_1px),linear-gradient(to_right,rgba(245,196,0,0.18)_1px,transparent_1px)] [background-size:72px_72px]" />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="container-shell relative z-10 grid min-h-[calc(100vh-72px)] items-center py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-28"
        >
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 border border-yellow/30 bg-yellow/10 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-yellow"
            >
              <Sparkles size={14} />
              {t.badge}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="font-heading text-4xl font-extrabold leading-[0.96] tracking-[-0.06em] text-white sm:text-5xl lg:text-7xl"
            >
              {t.headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mt-6 max-w-xl text-lg text-slate-200"
            >
              {t.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <a href="#projects" className="btn-primary">
                {t.explore}
              </a>
              <a href="tel:+255618921422" className="btn-secondary ml-2">
                Call: 0618921422
              </a>
              <a href="mailto:elishapaschal8@gmail.com" className="btn-secondary ml-2">
                Email
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative ml-auto mt-12 w-full max-w-md lg:mt-0"
          >
            <div className="absolute -left-10 top-10 h-28 w-28 rounded-full border border-yellow/40" />
            <div className="absolute -right-10 bottom-10 h-32 w-32 rounded-full border border-white/20" />
            <div className="relative border border-white/15 bg-white/5 p-5 backdrop-blur-sm">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-yellow">{t.projectFocus}</span>
                <span className="h-2.5 w-2.5 rounded-full bg-yellow shadow-[0_0_18px_rgba(245,196,0,0.9)]" />
              </div>

              <div className="space-y-5 border border-white/10 bg-navy/20 p-5">
                <div>
                  <div className="mb-2 text-[11px] uppercase tracking-[0.18em] text-slate-300">{t.priorities}</div>
                  <div className="h-px w-full bg-gradient-to-r from-yellow via-yellow/70 to-transparent" />
                </div>
                <div className="space-y-4">
                  {['Electrical infrastructure', 'Rural electrification', 'Power distribution'].map((item) => (
                    <div key={item} className="flex items-center justify-between gap-3 border-b border-white/10 pb-3 last:border-none last:pb-0">
                      <span className="text-base text-slate-100">{item}</span>
                      <Check size={18} className="text-yellow" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <div className="border-b border-slate-200 bg-white">
        <div className="container-shell grid gap-4 py-6 text-center text-sm font-semibold uppercase tracking-[0.18em] text-navy sm:grid-cols-2 lg:grid-cols-5 lg:text-left">
          {t.trust.map((item) => (
            <div key={item} className="border-t border-slate-200 pt-3 lg:border-t-0 lg:pt-0">
              {item}
            </div>
          ))}
        </div>
      </div>

      <section id="about" className="py-20 lg:py-28">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -left-6 top-8 h-24 w-24 rounded-full border border-yellow/40" />
            <div className="relative overflow-hidden border border-slate-200 bg-white p-3 shadow-soft">
              <Image
                src="/images/transformer.jpg"
                alt="Electrical power substation and high voltage infrastructure"
                width={900}
                height={780}
                className="h-[500px] w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="section-label">{t.introLabel}</span>
            <h2 className="section-title max-w-xl text-balance">{t.introTitle}</h2>
            <p className="mt-6 max-w-xl text-lg text-slate-600">{t.introBody}</p>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">{t.introBody2}</p>
            <div className="mt-8 space-y-4">
              {t.introBullets.map((item) => (
                <div key={item} className="flex items-center gap-3 text-base font-medium text-navy">
                  <span className="flex h-7 w-7 items-center justify-center border border-yellow bg-yellow/15 text-yellow">
                    <Check size={15} />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="bg-white py-20 lg:py-28">
        <div className="container-shell">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mb-12 max-w-3xl"
          >
            <span className="section-label">Services</span>
            <h2 className="section-title text-balance">{t.servicesTitle}</h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  whileHover={{ y: -6 }}
                  className="group border border-slate-200 bg-mist p-6 transition-all duration-300 hover:border-yellow hover:bg-white"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <span className="font-heading text-4xl font-bold tracking-[-0.07em] text-slate-300">{service.number}</span>
                    <span className="flex h-12 w-12 items-center justify-center border border-yellow/40 bg-yellow/10 text-yellow transition-transform duration-300 group-hover:scale-110">
                      <Icon size={22} />
                    </span>
                  </div>
                  <h3 className="mb-3 font-heading text-2xl font-extrabold tracking-[-0.04em] text-navy">{service.title[lang]}</h3>
                  <p className="mb-6 text-base leading-7 text-slate-600">{service.desc[lang]}</p>
                  <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-navy">
                    {t.learnMore} <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 lg:py-28">
        <div className="container-shell">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mb-12 max-w-3xl"
          >
            <span className="section-label">Projects</span>
            <h2 className="section-title text-balance">{t.projectTitle}</h2>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
                key={project.region[lang]}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="group overflow-hidden border border-slate-200 bg-white shadow-soft"
              >
                <div className="h-52 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={project.image}
                    alt="Electrical infrastructure project site"
                    width={1200}
                    height={800}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="border border-slate-200 bg-mist px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-heading text-2xl font-extrabold tracking-[-0.05em] text-navy">{project.region[lang]}</h3>
                  <p className="mt-4 text-base leading-7 text-slate-600">{project.description[lang]}</p>
                </div>
              </motion.article>
            ))}
          </div>

          <p className="mt-8 text-sm italic text-slate-500">{t.disclaimer}</p>
        </div>
      </section>

      <section className="bg-navy py-20 text-white lg:py-28">
        <div className="container-shell">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="section-label border-yellow/40 bg-yellow/10 text-yellow">Impact</span>
            <h2 className="section-title max-w-2xl text-white">{t.impactTitle}</h2>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {impactStats[lang].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.09 }}
                className="overflow-hidden border border-white/10 bg-white/5 p-6"
              >
                <div className="mb-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-yellow">0{index + 1}</div>
                <div className="font-heading text-2xl font-extrabold tracking-[-0.04em] text-white">{item}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="capabilities" className="py-20 lg:py-28">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <span className="section-label">Why Choose Us</span>
            <h2 className="section-title text-balance">{t.whyTitle}</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {differentiators[lang].map((item, idx) => (
                <div key={item} className="flex items-center gap-3 border border-slate-200 bg-white p-4">
                  <span className="flex h-9 w-9 items-center justify-center bg-yellow text-sm font-bold text-navy">{String(idx + 1).padStart(2, '0')}</span>
                  <span className="font-semibold text-navy">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-none border border-slate-200 bg-navy p-8 text-white shadow-soft"
          >
            <span className="section-label border-yellow/40 bg-yellow/10 text-yellow">Capabilities</span>
            <h3 className="font-heading text-3xl font-extrabold tracking-[-0.05em] text-white">{t.capabilityCardTitle}</h3>
            <p className="mt-5 text-base leading-7 text-slate-200">{t.capabilityText}</p>
            <ul className="mt-8 space-y-3 text-slate-100">
              {t.capabilityList.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-yellow text-navy">
                    <Check size={12} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a href="#contact" className="btn-primary mt-8">
              {t.profileCta}
            </a>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="bg-white py-20 lg:py-28">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <span className="section-label">Contact</span>
            <h2 className="section-title text-balance">{t.contactTitle}</h2>
            <p className="mt-5 max-w-md text-lg text-slate-600">{t.contactSubhead}</p>
            <div className="mt-8 space-y-4 text-base text-slate-700">
              <div className="flex items-center gap-3"><Phone size={18} className="text-yellow" /> <span>+255 (0) XX XXX XXXX</span></div>
              <div className="flex items-center gap-3"><Mail size={18} className="text-yellow" /> <span>info@sengeremaengineering.co.tz</span></div>
              <div className="flex items-center gap-3"><MapPin size={18} className="text-yellow" /> <span>Tanzania</span></div>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="mailto:info@sengeremaengineering.co.tz" className="btn-primary">{t.contactBtn}</a>
              <a href="#contact" className="btn-secondary border-navy text-navy hover:border-yellow hover:text-navy">{t.consultBtn}</a>
            </div>
          </motion.div>

          <motion.form
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="border border-slate-200 bg-mist p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-medium text-navy">
                {t.formName}
                <input type="text" placeholder={lang === 'en' ? 'Your name' : 'Jina lako'} className="mt-2 w-full border border-slate-300 bg-white px-4 py-3 text-base text-navy outline-none transition focus:border-yellow" />
              </label>
              <label className="text-sm font-medium text-navy">
                {t.formCompany}
                <input type="text" placeholder={lang === 'en' ? 'Company name' : 'Jina la kampuni'} className="mt-2 w-full border border-slate-300 bg-white px-4 py-3 text-base text-navy outline-none transition focus:border-yellow" />
              </label>
              <label className="text-sm font-medium text-navy">
                {t.formEmail}
                <input type="email" placeholder={lang === 'en' ? 'name@company.com' : 'jina@kampuni.com'} className="mt-2 w-full border border-slate-300 bg-white px-4 py-3 text-base text-navy outline-none transition focus:border-yellow" />
              </label>
              <label className="text-sm font-medium text-navy">
                {t.formPhone}
                <input type="tel" placeholder={lang === 'en' ? '+255 ...' : '+255 ...'} className="mt-2 w-full border border-slate-300 bg-white px-4 py-3 text-base text-navy outline-none transition focus:border-yellow" />
              </label>
            </div>

            <label className="mt-5 block text-sm font-medium text-navy">
              {t.formType}
              <input type="text" placeholder={lang === 'en' ? 'Electrical Infrastructure' : 'Miundombinu ya Umeme'} className="mt-2 w-full border border-slate-300 bg-white px-4 py-3 text-base text-navy outline-none transition focus:border-yellow" />
            </label>

            <label className="mt-5 block text-sm font-medium text-navy">
              {t.formMessage}
              <textarea rows={5} placeholder={lang === 'en' ? 'Tell us about your project or enquiry...' : 'Tuambie kuhusu mradi au ombi lako...'} className="mt-2 w-full resize-none border border-slate-300 bg-white px-4 py-3 text-base text-navy outline-none transition focus:border-yellow" />
            </label>

            <button type="submit" className="btn-primary mt-6">
              {t.send}
            </button>
          </motion.form>
        </div>
      </section>

      <footer className="bg-navy py-12 text-white">
        <div className="container-shell">
          <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="mb-4 text-lg font-heading font-extrabold tracking-[-0.05em]">SENGEREMA ENGINEERING GROUP LTD</div>
              <p className="text-slate-300">{t.footerIntro}</p>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-yellow">{t.quickLinks}</h3>
              <ul className="space-y-2 text-slate-300">
                {navItems.map((item) => (
                  <li key={item}><a href={`#${item.toLowerCase()}`} className="hover:text-yellow">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-yellow">{t.contact}</h3>
              <ul className="space-y-2 text-slate-300">
                <li className="font-semibold">Elisha Paschal Machibya</li>
                <li><a href="tel:+255618921422" className="hover:text-yellow">0618921422</a></li>
                <li><a href="mailto:elishapaschal8@gmail.com" className="hover:text-yellow">elishapaschal8@gmail.com</a></li>
                <li>Tanzania</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-yellow">{t.social}</h3>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-yellow">LinkedIn</a></li>
                <li><a href="#" className="hover:text-yellow">Facebook</a></li>
                <li><a href="#" className="hover:text-yellow">X / Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-6 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Sengerema Engineering Group Ltd</p>
            <p>{t.conceptual}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
