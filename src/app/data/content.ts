import type { LucideIcon } from 'lucide-react';
import {
  Building2,
  Cable,
  Compass,
  Gauge,
  ShieldCheck,
  SunMedium,
  Zap,
} from 'lucide-react';

/* --- CORE TYPES --- */
export type Language = 'en' | 'sw';

export interface LocalizedText {
  en: string;
  sw: string;
}

export interface LocalizedList {
  en: string[];
  sw: string[];
}

export interface NavItem {
  id: string;
  label: LocalizedText;
}

export interface ServiceItem {
  number: string;
  title: LocalizedText;
  description: LocalizedText;
  icon: LucideIcon;
}

export interface MetricItem {
  value: string;
  label: LocalizedText;
  detail: LocalizedText;
}

export interface TrustBadge {
  title: LocalizedText;
  detail: LocalizedText;
  icon: LucideIcon;
}

export interface ProjectRegion {
  id: string;
  name: LocalizedText;
  title: LocalizedText;
  phase: LocalizedText;
  image: string;
  imageAlt: LocalizedText;
  voltageScope: LocalizedText;
  beneficiaryMetric: LocalizedText;
  deliveryNote: LocalizedText;
}

export interface CompanyProfile {
  eyebrow: LocalizedText;
  title: LocalizedText;
  summary: LocalizedText;
  capabilities: LocalizedList;
  leadershipPlaceholder: LocalizedText;
  downloadLabel: LocalizedText;
  closeLabel: LocalizedText;
}

export interface PageCopy {
  proposalBanner: LocalizedText;
  nav: {
    home: LocalizedText;
    about: LocalizedText;
    services: LocalizedText;
    projects: LocalizedText;
    capabilities: LocalizedText;
    contact: LocalizedText;
  };
  tenderInquiry: LocalizedText;
  menu: LocalizedText;
  heroEyebrow: LocalizedText;
  heroTitle: LocalizedText;
  heroDescription: LocalizedText;
  exploreProjects: LocalizedText;
  companyProfile: LocalizedText;
  projectFocus: LocalizedText;
  currentPriorities: LocalizedText;
  trustTitle: LocalizedText;
  partnersTitle: LocalizedText;
  aboutEyebrow: LocalizedText;
  aboutTitle: LocalizedText;
  aboutBody: LocalizedText;
  servicesEyebrow: LocalizedText;
  servicesTitle: LocalizedText;
  projectsEyebrow: LocalizedText;
  projectsTitle: LocalizedText;
  projectsDescription: LocalizedText;
  capabilitiesEyebrow: LocalizedText;
  capabilitiesTitle: LocalizedText;
  contactEyebrow: LocalizedText;
  contactTitle: LocalizedText;
  contactDescription: LocalizedText;
  contactCta: LocalizedText;
  footerDescription: LocalizedText;
  quickLinks: LocalizedText;
  contactDetails: LocalizedText;
  mobileCall: LocalizedText;
  mobileEmail: LocalizedText;
  representativeImagery: LocalizedText;
}

/* --- LOCALIZED COPY --- */
export const copy: PageCopy = {
  proposalBanner: {
    en: 'Interactive Concept Proposal — Prepared for Sengerema Engineering Group Ltd by Elisha Paschal Machibya',
    sw: 'Pendekezo la Mfumo wa Kidijitali — Limeandaliwa kwa ajili ya Sengerema Engineering Group Ltd na Elisha Paschal Machibya',
  },
  nav: {
    home: { en: 'Home', sw: 'Nyumbani' },
    about: { en: 'About', sw: 'Kuhusu' },
    services: { en: 'Services', sw: 'Huduma' },
    projects: { en: 'Projects', sw: 'Miradi' },
    capabilities: { en: 'Capabilities', sw: 'Uwezo' },
    contact: { en: 'Contact', sw: 'Mawasiliano' },
  },
  tenderInquiry: { en: 'Tender inquiry', sw: 'Ushauri wa zabuni' },
  menu: { en: 'Open menu', sw: 'Fungua menyu' },
  heroEyebrow: { en: 'Tanzania engineering solutions', sw: 'Suluhu za uhandisi Tanzania' },
  heroTitle: {
    en: "Powering Tanzania's Future Through Engineering",
    sw: 'Kusambaza Umeme na Kujenga Miundombinu ya Tanzania',
  },
  heroDescription: {
    en: 'Dependable electrical infrastructure, rural electrification and project delivery for communities, utilities and growing networks.',
    sw: 'Miundombinu ya umeme, umeme wa vijijini na utekelezaji wa miradi kwa jamii, mashirika ya huduma na mitandao inayokua.',
  },
  exploreProjects: { en: 'Explore projects', sw: 'Chunguza miradi' },
  companyProfile: { en: 'Company profile', sw: 'Wasifu wa kampuni' },
  projectFocus: { en: 'Project focus', sw: 'Mwelekeo wa miradi' },
  currentPriorities: { en: 'Current priorities', sw: 'Vipaumbele vya sasa' },
  trustTitle: { en: 'Built for accountable delivery', sw: 'Tumejengwa kwa utekelezaji wenye uwajibikaji' },
  partnersTitle: { en: 'Working alongside the institutions that power Tanzania', sw: 'Tunashirikiana na taasisi zinazoendesha nishati Tanzania' },
  aboutEyebrow: { en: 'Who we are', sw: 'Sisi ni nani' },
  aboutTitle: { en: 'Engineering that works in the real world.', sw: 'Uhandisi unaofanya kazi katika dunia halisi.' },
  aboutBody: {
    en: 'Sengerema Engineering Group Ltd brings field-minded engineering, practical coordination and a clear understanding of Tanzania’s infrastructure priorities to every engagement.',
    sw: 'Sengerema Engineering Group Ltd inaleta uhandisi unaozingatia uwanja, uratibu wa vitendo na uelewa wa vipaumbele vya miundombinu ya Tanzania katika kila kazi.',
  },
  servicesEyebrow: { en: 'What we do', sw: 'Tunachofanya' },
  servicesTitle: { en: 'Capability designed for dependable delivery.', sw: 'Uwezo ulioundwa kwa utoaji unaotegemewa.' },
  projectsEyebrow: { en: 'Selected regions', sw: 'Mikoa iliyochaguliwa' },
  projectsTitle: { en: 'Infrastructure with measurable impact.', sw: 'Miundombinu yenye athari inayopimika.' },
  projectsDescription: {
    en: 'Explore representative regional scopes and delivery priorities through a simple project view.',
    sw: 'Chunguza maeneo ya miradi na vipaumbele vya utekelezaji kupitia mwonekano rahisi wa miradi.',
  },
  capabilitiesEyebrow: { en: 'Why Sengerema', sw: 'Kwa nini Sengerema' },
  capabilitiesTitle: { en: 'Technical depth. Human accountability.', sw: 'Uwezo wa kiufundi. Uwajibikaji wa kibinadamu.' },
  contactEyebrow: { en: 'Start a conversation', sw: 'Anza mazungumzo' },
  contactTitle: { en: 'Let’s build the next connection.', sw: 'Tujenge muunganisho unaofuata.' },
  contactDescription: {
    en: 'For tenders, partnerships and engineering enquiries, contact the team in Mwanza.',
    sw: 'Kwa zabuni, ushirikiano na maswali ya uhandisi, wasiliana na timu yetu Mwanza.',
  },
  contactCta: { en: 'Email the team', sw: 'Tuma barua kwa timu' },
  footerDescription: { en: 'Engineering infrastructure. Powering progress.', sw: 'Miundombinu ya uhandisi. Inasukuma maendeleo.' },
  quickLinks: { en: 'Quick links', sw: 'Viungo vya haraka' },
  contactDetails: { en: 'Contact details', sw: 'Taarifa za mawasiliano' },
  mobileCall: { en: 'Call the team', sw: 'Piga simu kwa timu' },
  mobileEmail: { en: 'Email the team', sw: 'Tuma barua kwa timu' },
  representativeImagery: { en: 'Representative project imagery', sw: 'Picha za mfano wa mradi' },
};

export const navigation: NavItem[] = [
  { id: 'home', label: copy.nav.home },
  { id: 'about', label: copy.nav.about },
  { id: 'services', label: copy.nav.services },
  { id: 'projects', label: copy.nav.projects },
  { id: 'capabilities', label: copy.nav.capabilities },
  { id: 'contact', label: copy.nav.contact },
];

export const services: ServiceItem[] = [
  { number: '01', title: { en: 'Electrical infrastructure', sw: 'Miundombinu ya umeme' }, description: { en: 'Planning and delivery of resilient power systems that support growth and reliability.', sw: 'Upangaji na utoaji wa mifumo ya nguvu inayosaidia ukuaji na uhakika.' }, icon: Zap },
  { number: '02', title: { en: 'Power distribution', sw: 'Ugawaji wa nguvu' }, description: { en: 'Distribution solutions that strengthen utility access and network performance.', sw: 'Suluhu za ugawaji zinazoimarisha upatikanaji na utendaji wa mtandao.' }, icon: Gauge },
  { number: '03', title: { en: 'Rural electrification', sw: 'Umeme wa vijijini' }, description: { en: 'Community-focused works that expand access in underserved areas.', sw: 'Kazi zinazolenga jamii na kupanua upatikanaji katika maeneo yenye huduma chache.' }, icon: SunMedium },
  { number: '04', title: { en: 'Civil engineering', sw: 'Uhandisi wa kiraia' }, description: { en: 'Integrated civil works that support dependable project execution.', sw: 'Kazi za uhandisi wa kiraia zinazosaidia utekelezaji wa miradi kwa uhakika.' }, icon: Building2 },
  { number: '05', title: { en: 'Supply and installation', sw: 'Usambazaji na usakinishaji' }, description: { en: 'End-to-end coordination for critical electrical and engineering assets.', sw: 'Uratibu wa mwisho hadi mwisho wa vifaa muhimu vya umeme na uhandisi.' }, icon: Cable },
  { number: '06', title: { en: 'Power and telecom infrastructure', sw: 'Miundombinu ya umeme na mawasiliano' }, description: { en: 'Connected infrastructure for energy and communications requirements.', sw: 'Miundombinu iliyounganishwa kwa mahitaji ya nishati na mawasiliano.' }, icon: Compass },
];

export const metrics: MetricItem[] = [
  { value: '500+ KM', label: { en: 'High-voltage power lines implemented', sw: 'Kilomita za njia za umeme wa juu zilizotekelezwa' }, detail: { en: 'Representative delivery capacity', sw: 'Uwezo wa utekelezaji wa mfano' } },
  { value: '6+ Regions', label: { en: 'Active REA and grid coverage in Tanzania', sw: 'Uwepo wa REA na gridi katika mikoa Tanzania' }, detail: { en: 'Regional project perspective', sw: 'Mtazamo wa miradi ya kikanda' } },
  { value: '100%', label: { en: 'OSHA and HSE safety compliance rating', sw: 'Kiwango cha uzingatiaji wa OSHA na HSE' }, detail: { en: 'Safety-led execution mindset', sw: 'Utekelezaji unaoongozwa na usalama' } },
  { value: 'Class I / II', label: { en: 'CRB registered engineering capacity', sw: 'Uwezo wa uhandisi uliosajiliwa CRB' }, detail: { en: 'Professional delivery framework', sw: 'Mfumo wa utoaji wa kitaalamu' } },
];

export const trustBadges: TrustBadge[] = [
  { title: { en: 'CRB Tanzania', sw: 'CRB Tanzania' }, detail: { en: 'Registered contractor', sw: 'Mkandarasi aliyesajiliwa' }, icon: ShieldCheck },
  { title: { en: 'EWURA', sw: 'EWURA' }, detail: { en: 'Licensing pathway', sw: 'Mfumo wa leseni' }, icon: Zap },
  { title: { en: 'OSHA / HSE', sw: 'OSHA / HSE' }, detail: { en: 'Safety-led delivery', sw: 'Utoaji unaoongozwa na usalama' }, icon: ShieldCheck },
  { title: { en: 'ISO 9001', sw: 'ISO 9001' }, detail: { en: 'Quality standards', sw: 'Viwango vya ubora' }, icon: Gauge },
];

export const partners = ['TANESCO', 'REA', 'EWURA', 'MINISTRY OF ENERGY'];

export const projects: ProjectRegion[] = [
  { id: 'singida', name: { en: 'Singida', sw: 'Singida' }, title: { en: 'Singida rural electrification', sw: 'Umeme wa vijijini Singida' }, phase: { en: 'REA programme delivery', sw: 'Utekelezaji wa programu ya REA' }, image: '/images/power-distribution.jpg', imageAlt: { en: 'Representative rural electrification imagery', sw: 'Picha ya mfano wa umeme vijijini' }, voltageScope: { en: '33kV line extension', sw: 'Upanuzi wa njia ya 33kV' }, beneficiaryMetric: { en: 'Connected households and transformers', sw: 'Kaya zilizounganishwa na transfoma' }, deliveryNote: { en: 'LV distribution networks and consumer connections.', sw: 'Mitandao ya usambazaji wa LV na miunganisho ya watumiaji.' } },
  { id: 'tabora', name: { en: 'Tabora', sw: 'Tabora' }, title: { en: 'Tabora grid connections', sw: 'Miunganisho ya gridi Tabora' }, phase: { en: 'REA rural access scope', sw: 'Kazi ya upatikanaji wa REA vijijini' }, image: '/images/power-distribution.jpg', imageAlt: { en: 'Representative power distribution imagery', sw: 'Picha ya mfano wa ugawaji wa nguvu' }, voltageScope: { en: '33kV feeder and LV network', sw: 'Feeder ya 33kV na mtandao wa LV' }, beneficiaryMetric: { en: 'New connections and service points', sw: 'Miunganisho mipya na vituo vya huduma' }, deliveryNote: { en: 'Distribution infrastructure coordinated for community access.', sw: 'Miundombinu ya ugawaji iliyoratibiwa kwa upatikanaji wa jamii.' } },
  { id: 'pwani', name: { en: 'Pwani', sw: 'Pwani' }, title: { en: 'Pwani distribution works', sw: 'Kazi za ugawaji Pwani' }, phase: { en: 'Rural electrification support', sw: 'Msaada wa umeme wa vijijini' }, image: '/images/power-distribution.jpg', imageAlt: { en: 'Representative distribution infrastructure imagery', sw: 'Picha ya mfano wa miundombinu ya ugawaji' }, voltageScope: { en: '11kV / 33kV distribution scope', sw: 'Eneo la ugawaji la 11kV / 33kV' }, beneficiaryMetric: { en: 'Consumer connections and network reach', sw: 'Miunganisho ya watumiaji na ufikaji wa mtandao' }, deliveryNote: { en: 'Electrical distribution infrastructure for growing communities.', sw: 'Miundombinu ya ugawaji wa umeme kwa jamii zinazokua.' } },
  { id: 'tanga', name: { en: 'Tanga', sw: 'Tanga' }, title: { en: 'Tanga network extension', sw: 'Upanuzi wa mtandao Tanga' }, phase: { en: 'REA connection works', sw: 'Kazi za miunganisho ya REA' }, image: '/images/hero-electrical-infrastructure.jpg', imageAlt: { en: 'Representative high-voltage infrastructure imagery', sw: 'Picha ya mfano wa miundombinu ya nguvu za juu' }, voltageScope: { en: '33kV line and transformer points', sw: 'Njia ya 33kV na maeneo ya transfoma' }, beneficiaryMetric: { en: 'Transformer points and connected users', sw: 'Maeneo ya transfoma na watumiaji waliounganishwa' }, deliveryNote: { en: 'Network readiness and site delivery coordination.', sw: 'Utayari wa mtandao na uratibu wa utekelezaji wa tovuti.' } },
  { id: 'mbeya', name: { en: 'Mbeya', sw: 'Mbeya' }, title: { en: 'Mbeya electrification scope', sw: 'Eneo la umeme Mbeya' }, phase: { en: 'Rural electrification programme', sw: 'Programu ya umeme wa vijijini' }, image: '/images/transformer.jpg', imageAlt: { en: 'Representative transformer infrastructure imagery', sw: 'Picha ya mfano wa miundombinu ya transfoma' }, voltageScope: { en: 'Distribution infrastructure and LV network', sw: 'Miundombinu ya ugawaji na mtandao wa LV' }, beneficiaryMetric: { en: 'Household connections and transformer capacity', sw: 'Miunganisho ya kaya na uwezo wa transfoma' }, deliveryNote: { en: 'Distribution and consumer connection delivery.', sw: 'Utekelezaji wa ugawaji na miunganisho ya watumiaji.' } },
  { id: 'simiyu', name: { en: 'Simiyu', sw: 'Simiyu' }, title: { en: 'Simiyu community electrification', sw: 'Umeme wa jamii Simiyu' }, phase: { en: 'REA Phase III Round II', sw: 'REA Awamu ya III Round II' }, image: '/images/powering-tanzania.jpg', imageAlt: { en: 'Representative Tanzania electrification imagery', sw: 'Picha ya mfano wa umeme Tanzania' }, voltageScope: { en: '33kV extension and consumer connections', sw: 'Upanuzi wa 33kV na miunganisho ya watumiaji' }, beneficiaryMetric: { en: 'Connected communities and transformers', sw: 'Jamii zilizounganishwa na transfoma' }, deliveryNote: { en: 'Participation in regional electrification implementation.', sw: 'Ushiriki katika utekelezaji wa umeme wa kikanda.' } },
];

export const companyProfile: CompanyProfile = {
  eyebrow: { en: 'Executive overview', sw: 'Muhtasari wa uongozi' },
  title: { en: 'Sengerema Engineering Group Ltd', sw: 'Sengerema Engineering Group Ltd' },
  summary: { en: 'A focused Tanzanian engineering partner for electrical infrastructure, rural electrification, distribution and practical project coordination.', sw: 'Mshirika wa uhandisi wa Tanzania kwa miundombinu ya umeme, umeme wa vijijini, ugawaji na uratibu wa miradi ya vitendo.' },
  capabilities: {
    en: ['Electrical infrastructure', 'REA and grid delivery', 'Power distribution', 'Civil works and installation', 'Quality and HSE coordination'],
    sw: ['Miundombinu ya umeme', 'Utekelezaji wa REA na gridi', 'Ugawaji wa nguvu', 'Kazi za kiraia na usakinishaji', 'Uratibu wa ubora na HSE'],
  },
  leadershipPlaceholder: { en: '[Board & Technical Directorate - Pending Official Update]', sw: '[Bodi na Kurugenzi ya Kiufundi - Taarifa rasmi inasubiriwa]' },
  downloadLabel: { en: 'Download profile PDF', sw: 'Pakua PDF ya wasifu' },
  closeLabel: { en: 'Close profile', sw: 'Funga wasifu' },
};
