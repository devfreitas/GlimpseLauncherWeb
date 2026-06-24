import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Cpu, Palette, Lock } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export function BentoGrid() {
  const { t } = useAppContext();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const features = [
    {
      icon: Zap,
      title: t.bentoF1Title,
      description: t.bentoF1Desc,
      span: "md:col-span-2",
    },
    {
      icon: Cpu,
      title: t.bentoF2Title,
      description: t.bentoF2Desc,
      span: "md:col-span-1",
    },
    {
      icon: Palette,
      title: t.bentoF3Title,
      description: t.bentoF3Desc,
      span: "md:col-span-1",
    },
    {
      icon: Lock,
      title: t.bentoF4Title,
      description: t.bentoF4Desc,
      span: "md:col-span-2",
    },
  ];

  return (
    <section id="features" ref={ref} style={{ padding: '128px 24px', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '896px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '64px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '100%' }}
        >
          {/* Eyebrow removido */}
          <h2 className="text-3xl md:text-[40px] font-semibold tracking-[-0.03em] leading-[1.1] text-(--fg)">
            {t.bentoTitle1}
            <br />
            <span className="text-(--fg-subtle)">{t.bentoTitle2}</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', width: '100%' }}>
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className={`${feature.span} group relative`}
            >
              <div 
                style={{ 
                  background: 'var(--glass-gradient)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  borderRadius: '24px',
                  border: '1px solid var(--border)',
                  padding: '32px',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--accent)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 40px var(--accent-dim)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, var(--glass-border-light), transparent)', opacity: 0, transition: 'opacity 0.4s' }} className="group-hover:opacity-100" />
                
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '20px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '16px', background: 'var(--glass-bg)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.4s ease' }} className="group-hover:border-[var(--accent)] group-hover:bg-[var(--accent-dim)] group-hover:shadow-[0_0_16px_var(--accent-dim)]">
                    <feature.icon size={20} strokeWidth={1.5} className="text-(--fg-muted) group-hover:text-(--accent) transition-colors duration-400" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--fg)', marginBottom: '8px', letterSpacing: '-0.01em' }}>{feature.title}</h3>
                    <p style={{ fontSize: '14px', color: 'var(--fg-subtle)', lineHeight: 1.6 }}>{feature.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
