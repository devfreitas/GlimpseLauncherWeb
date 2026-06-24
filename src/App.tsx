import { motion } from 'framer-motion';
import { BentoGrid } from './components/BentoGrid';
import { WhyGlimpse } from './components/WhyGlimpse';
import { FinalCTA } from './components/FinalCTA';
import { ContributeSection } from './components/ContributeSection';
import { IconGitHub, IconWindows, IconSun, IconMoon, IconTranslate } from './components/Icons';
import { Mockup } from './components/Mockup';
import { useAppContext } from './context/AppContext';

export default function App() {
  const { theme, lang, t, toggleTheme, toggleLang, releaseInfo } = useAppContext();

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Ambientes removidos para um design mais limpo */}

      <motion.nav
        initial={{ opacity: 0, y: -24, x: '-50%' }}
        animate={{ opacity: 1, y: 0, x: '-50%' }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed', top: '24px', left: '50%', zIndex: 50,
          width: 'calc(100% - 48px)', maxWidth: '960px',
          background: 'color-mix(in srgb, var(--bg) 75%, transparent)',
          backdropFilter: 'blur(32px)', WebkitBackdropFilter: 'blur(32px)',
          border: '1px solid var(--border)',
          borderRadius: '24px',
          padding: '12px 24px',
          boxShadow: '0 8px 32px var(--shadow)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          {/* Logo */}
          <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <span className="hidden sm:inline" style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--fg)' }}>
              GLIMPSE LAUNCHER
            </span>
            <span className="sm:hidden" style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--fg)' }}>
              GLIMPSE
            </span>
          </a>

          <div className="flex items-center gap-4 md:gap-8">
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" style={{ fontSize: '14px', color: 'var(--fg-subtle)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--fg)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--fg-subtle)'}>
                {t.navFeatures}
              </a>
              <a href="#install" style={{ fontSize: '14px', color: 'var(--fg-subtle)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--fg)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--fg-subtle)'}>
                {t.navInstall}
              </a>
              <a href="https://github.com/devfreitas/GlimpseLauncher" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: 'var(--fg-subtle)', textDecoration: 'none', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '6px', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--fg)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--fg-subtle)'}>
                <IconGitHub /> {t.navGithub}
              </a>
            </div>

            <div className="hidden md:block" style={{ width: '1px', height: '16px', background: 'var(--border)' }}></div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <button onClick={toggleLang} className="icon-btn" style={{ display: 'flex', alignItems: 'center', gap: '6px' }} title="Toggle Language">
                <IconTranslate /> <span style={{ fontSize: '13px', fontWeight: 600 }}>{lang.toUpperCase()}</span>
              </button>
              <button onClick={toggleTheme} className="icon-btn" title="Toggle Theme">
                {theme === 'dark' ? <IconSun /> : <IconMoon />}
              </button>
              <a
                href={releaseInfo.downloadUrl}
                className="hidden md:inline-flex"
                style={{
                  alignItems: 'center',
                  background: 'var(--fg)',
                  color: 'var(--bg)',
                  padding: '8px 20px',
                  borderRadius: '999px',
                  fontSize: '14px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: '0 4px 16px var(--button-glow)',
                  marginLeft: '8px'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px var(--button-glow-hover)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '0 4px 16px var(--button-glow)';
                }}
              >
                {t.dlButtonCard}
              </a>
            </div>
          </div>
        </div>
      </motion.nav>

      <section style={{
        position: 'relative', zIndex: 1,
        padding: '160px 24px 80px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
      }}>
        {/* Pílula desnecessária removida (Distill) */}

        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.12 }} style={{
          fontSize: 'clamp(40px, 10vw, 100px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24, maxWidth: 800, color: 'var(--fg)'
        }}>
          <span>
            {t.heroTitle}
          </span> <br/>
          <span style={{ color: 'var(--accent)' }}>
            {t.heroTitleHighlight}
          </span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }} style={{
          fontSize: 19, color: 'var(--fg-muted)', maxWidth: 440, lineHeight: 1.7, letterSpacing: '-0.01em', marginBottom: 40,
        }}>
          {t.heroSub}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.28 }} style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 40 }}>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', inset: -4, background: 'var(--accent)', filter: 'blur(20px)', opacity: 0.4, borderRadius: 999, zIndex: -1 }} />
            <a id="hero-download-btn" href={releaseInfo.downloadUrl} className="dl-btn" style={{ background: 'var(--fg)', color: 'var(--bg)', padding: '16px 32px', fontSize: '15px' }}>
              {t.downloadBtn}
            </a>
          </div>
          <a
            href="https://github.com/devfreitas/GlimpseLauncher"
            target="_blank"
            rel="noopener noreferrer"
            className="ghost-btn"
            style={{ padding: '15px 32px', fontSize: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <IconGitHub /> {t.navGithub}
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.36 }} style={{ marginBottom: 72 }}>
          <span style={{
            fontSize: 14, color: 'var(--fg-subtle)', letterSpacing: '0.02em', display: 'inline-flex', alignItems: 'center', gap: 7,
          }}>
            <span style={{ display: 'flex', alignItems: 'center' }}><IconWindows /></span>
            {t.versionBadge}
          </span>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.45 }} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Mockup />
        </motion.div>
      </section>

      <BentoGrid />
      
      <WhyGlimpse />

      <ContributeSection />

      <FinalCTA />

      <footer style={{
        padding: '40px 24px', borderTop: '1px solid var(--border)', background: 'transparent', position: 'relative', zIndex: 1,
      }}>
        <div style={{
          maxWidth: 640, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16,
        }}>
          <span style={{ fontSize: 13, color: 'var(--fg-subtle)' }}>
            {t.footerCopy}
          </span>
          <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
            <a id="footer-github" href="https://github.com/devfreitas" style={{
              fontSize: 13, color: 'var(--fg-subtle)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6, transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--fg-subtle)')}>
              <IconGitHub /> DevFreitas
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
