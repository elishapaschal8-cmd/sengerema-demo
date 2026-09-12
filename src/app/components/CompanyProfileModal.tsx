'use client';

import { Download, X } from 'lucide-react';
import type { Language } from '../data/content';
import { companyProfile } from '../data/content';

interface CompanyProfileModalProps {
  lang: Language;
  open: boolean;
  onClose: () => void;
}

const escapePdfText = (value: string) => value.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');

/* --- COMPANY PROFILE MODAL --- */
export default function CompanyProfileModal({ lang, open, onClose }: CompanyProfileModalProps) {
  if (!open) return null;

  const text = (value: { en: string; sw: string }) => value[lang];

  const downloadProfile = () => {
    const lines = [
      'SENGEREMA ENGINEERING GROUP LTD',
      'Company profile overview',
      '',
      text(companyProfile.summary),
      '',
      'CAPABILITIES',
      ...companyProfile.capabilities[lang].map((capability) => `- ${capability}`),
      '',
      text(companyProfile.leadershipPlaceholder),
      '',
      'Mwanza HQ | info@sengerema.co.tz | +255 618 921 422',
    ];
    const stream = `BT /F1 12 Tf 48 760 Td ${lines.map((line, index) => `${index ? '0 -20 Td ' : ''}(${escapePdfText(line)}) Tj`).join(' ')} ET`;
    const pdf = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>
endobj
4 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
5 0 obj
<< /Length ${stream.length} >>
stream
${stream}
endstream
endobj
xref
0 6
0000000000 65535 f 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
0
%%EOF`;
    const url = URL.createObjectURL(new Blob([pdf], { type: 'application/pdf' }));
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'sengerema-engineering-company-profile.pdf';
    anchor.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-navy/75 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="profile-title" onMouseDown={(event) => { if (event.currentTarget === event.target) onClose(); }}>
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto border border-white/15 bg-white shadow-soft">
        <div className="flex items-start justify-between gap-6 bg-navy p-6 text-white sm:p-8">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-yellow">{text(companyProfile.eyebrow)}</p>
            <h2 id="profile-title" className="mt-2 font-heading text-3xl font-extrabold tracking-[-0.05em]">{text(companyProfile.title)}</h2>
          </div>
          <button type="button" onClick={onClose} className="border border-white/20 p-2 text-slate-200 hover:text-yellow" aria-label={text(companyProfile.closeLabel)}><X size={20} /></button>
        </div>
        <div className="p-6 sm:p-8">
          <p className="text-lg leading-8 text-slate-600">{text(companyProfile.summary)}</p>
          <h3 className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-navy">Capabilities</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {companyProfile.capabilities[lang].map((capability) => <li key={capability} className="border border-slate-200 bg-mist px-4 py-3 text-sm font-semibold text-navy">{capability}</li>)}
          </ul>
          <div className="mt-8 border-l-2 border-yellow bg-mist p-4 text-sm font-medium text-slate-600">{text(companyProfile.leadershipPlaceholder)}</div>
          <button type="button" onClick={downloadProfile} className="btn-primary mt-8 gap-2"><Download size={17} /> {text(companyProfile.downloadLabel)}</button>
        </div>
      </div>
    </div>
  );
}
