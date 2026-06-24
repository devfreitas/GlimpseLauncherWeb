import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useAppContext } from '../context/AppContext';

export function WhyGlimpse() {
  const { t } = useAppContext();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const items = [
    { num: "01", title: t.f1Title, desc: t.f1Desc },
    { num: "02", title: t.f2Title, desc: t.f2Desc },
    { num: "03", title: t.f3Title, desc: t.f3Desc }
  ];

  return (
    <section ref={ref} style={{ padding: '80px 24px', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '896px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '64px' }}
        >
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700, color: 'var(--fg)', letterSpacing: '-0.03em', marginBottom: '16px' }}>
            {t.featuresEyebrow}
          </h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="flex flex-col md:flex-row items-start gap-4 md:gap-8"
              style={{ 
                borderBottom: i !== items.length - 1 ? '1px solid var(--border)' : 'none',
                paddingBottom: i !== items.length - 1 ? '48px' : '0'
              }}
            >
              {/* Numeração removida para reduzir ruído visual */}
              <div>
                <h3 style={{ fontSize: '24px', fontWeight: 600, color: 'var(--fg)', marginBottom: '12px', letterSpacing: '-0.02em' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '16px', color: 'var(--fg-muted)', lineHeight: 1.7, maxWidth: '600px' }}>
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
