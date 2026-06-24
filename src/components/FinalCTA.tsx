import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { config } from '../config';

export function FinalCTA() {
  const { t, releaseInfo } = useAppContext();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="install" ref={ref} style={{ padding: '160px 24px', position: 'relative', zIndex: 1, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '400px', background: 'radial-gradient(ellipse at center, var(--accent) 0%, transparent 70%)', opacity: '0.08', filter: 'blur(60px)', zIndex: -1, pointerEvents: 'none' }} />
      <div style={{ maxWidth: '896px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '100%' }}
        >
          <h2 style={{ fontSize: 'clamp(40px, 6vw, 64px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, color: 'var(--fg)', marginBottom: '24px' }}>
            {t.ctaTitle1}
            <br />
            <span style={{ color: 'var(--accent)', textShadow: '0 0 40px var(--accent-dim)' }}>{t.ctaTitle2}</span>
          </h2>

          <p className="text-[15px] text-[var(--fg-subtle)] mb-10 max-w-md leading-relaxed">
            {t.ctaDesc}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '16px', width: '100%', marginTop: '16px' }}>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', inset: -4, background: 'var(--accent)', filter: 'blur(20px)', opacity: 0.4, borderRadius: 999, zIndex: -1 }} />
              <a
                href={releaseInfo.downloadUrl}
                style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  background: 'var(--fg)', color: 'var(--bg)',
                  padding: '16px 36px', borderRadius: '999px',
                  fontSize: '15px', fontWeight: 700, textDecoration: 'none',
                  transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'none'}
              >
                <ArrowDown size={18} strokeWidth={2.5} />
                {t.ctaDownload}
              </a>
            </div>
            <a
              href={`https://github.com/${config.github.owner}/${config.github.repo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ghost-btn"
              style={{ padding: '16px 36px', fontSize: '15px', borderRadius: '999px', background: 'var(--glass-bg)', display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--fg-subtle)', border: '1px solid var(--border)', textDecoration: 'none' }}
            >
              {t.ctaGithub}
              <ArrowUpRight size={14} strokeWidth={2} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
