import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FileText, Code2, Tag } from 'lucide-react';
import { IconGitHub } from './Icons';
import { useAppContext } from '../context/AppContext';
import { config } from '../config';

export function ContributeSection() {
  const { t, releaseInfo } = useAppContext();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contribute" ref={ref} style={{ padding: '128px 24px', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '896px', margin: '0 auto', borderTop: '1px solid var(--border)', paddingTop: '96px' }}>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '100%' }}
        >
          <p className="text-[12px] text-(--fg-subtle) tracking-[0.12em] uppercase mb-4">{t.contributeEyebrow}</p>
          <h2 className="text-3xl md:text-[40px] font-semibold tracking-[-0.03em] leading-[1.1] text-(--fg) whitespace-pre-line">
            {t.contributeTitle}
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{ fontSize: '16px', color: 'var(--fg-muted)', maxWidth: '672px', lineHeight: 1.625, margin: '0 auto 48px auto', textAlign: 'center' }}
        >
          {t.contributeSub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', marginBottom: '64px' }}
        >
          <a href={config.github.owner ? `https://github.com/${config.github.owner}/${config.github.repo}` : "#"} target="_blank" rel="noopener noreferrer" className="ghost-btn" style={{ padding: '12px 24px', fontSize: '14px', borderRadius: '999px', background: 'var(--glass-bg)' }}>
            <IconGitHub /> Repository
          </a>
          <a href={config.github.owner ? `https://github.com/${config.github.owner}/${config.github.repo}/issues` : "#"} target="_blank" rel="noopener noreferrer" className="ghost-btn" style={{ padding: '12px 24px', fontSize: '14px', borderRadius: '999px', background: 'var(--glass-bg)' }}>
            <FileText size={16} /> Open an Issue
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', paddingTop: '48px', borderTop: '1px solid var(--border)' }}
        >
          {[
            { label: t.statVersion, value: releaseInfo.version, icon: Tag },
            { label: t.statLang, value: 'RUST', icon: Code2 },
            { label: 'Model', value: 'Open Source', icon: FileText },
          ].map((s, i) => (
            <div key={i} style={{ 
              display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
              background: 'var(--glass-gradient)',
              border: '1px solid var(--border)',
              borderRadius: '20px',
              padding: '32px 24px',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px var(--shadow)'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.borderColor = 'var(--glass-border-light)';
              e.currentTarget.style.boxShadow = '0 8px 24px var(--heavy-shadow)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.boxShadow = '0 4px 12px var(--shadow)';
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--fg-subtle)', marginBottom: '16px', letterSpacing: '0.04em', textTransform: 'uppercase', fontWeight: 600 }}>
                <s.icon size={16} strokeWidth={1.5} /> {s.label}
              </div>
              <div style={{ fontSize: '28px', fontWeight: 700, color: 'var(--fg)', letterSpacing: '-0.03em', textShadow: '0 2px 12px var(--button-glow)' }}>
                {s.value}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
