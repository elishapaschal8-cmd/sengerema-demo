'use client';

import Image from 'next/image';
import { Check, MapPin } from 'lucide-react';
import { useState } from 'react';
import type { Language } from '../data/content';
import { copy, projects } from '../data/content';

interface ProjectSelectorProps {
  lang: Language;
}

/* --- REGIONAL PROJECT SELECTOR --- */
export default function ProjectSelector({ lang }: ProjectSelectorProps) {
  const [activeId, setActiveId] = useState(projects[0].id);
  const activeProject = projects.find((project) => project.id === activeId) ?? projects[0];
  const text = (value: { en: string; sw: string }) => value[lang];

  return (
    <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-1">
        {projects.map((project) => (
          <button
            key={project.id}
            type="button"
            onClick={() => setActiveId(project.id)}
            className={`group flex items-center justify-between border px-4 py-4 text-left transition ${activeId === project.id ? 'border-yellow bg-navy text-white shadow-soft' : 'border-slate-200 bg-white text-navy hover:border-yellow'}`}
            aria-pressed={activeId === project.id}
          >
            <span>
              <span className={`block text-[10px] font-bold uppercase tracking-[0.16em] ${activeId === project.id ? 'text-yellow' : 'text-slate-400'}`}>Region</span>
              <span className="mt-1 block font-heading text-lg font-extrabold tracking-[-0.04em]">{text(project.name)}</span>
            </span>
            <MapPin size={17} className={activeId === project.id ? 'text-yellow' : 'text-slate-300'} />
          </button>
        ))}
      </div>

      <article className="overflow-hidden border border-slate-200 bg-white shadow-soft">
        <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
          <Image src={activeProject.image} alt={text(activeProject.imageAlt)} fill sizes="(max-width: 1024px) 100vw, 70vw" unoptimized className="object-cover" />
          <span className="absolute bottom-4 left-4 border border-white/30 bg-navy/85 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-yellow">{text(copy.representativeImagery)}</span>
        </div>
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-yellow">{text(activeProject.phase)}</p>
              <h3 className="mt-2 font-heading text-3xl font-extrabold tracking-[-0.05em] text-navy">{text(activeProject.title)}</h3>
            </div>
            <span className="border border-slate-200 bg-mist px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">REA</span>
          </div>
          <p className="mt-4 max-w-2xl leading-7 text-slate-600">{text(activeProject.deliveryNote)}</p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <div className="border border-slate-200 bg-mist p-4">
              <span className="block text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">Voltage scope</span>
              <span className="mt-2 block font-semibold text-navy">{text(activeProject.voltageScope)}</span>
            </div>
            <div className="border border-slate-200 bg-mist p-4">
              <span className="block text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">Beneficiary metric</span>
              <span className="mt-2 block font-semibold text-navy">{text(activeProject.beneficiaryMetric)}</span>
            </div>
          </div>
          <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-navy"><Check size={17} className="text-yellow" /> {text(copy.trustTitle)}</div>
        </div>
      </article>
    </div>
  );
}
