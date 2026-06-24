import { useState, useEffect } from 'react';
import { IconSearch } from './Icons';
import { useAppContext } from '../context/AppContext';

export function Mockup() {
  const { t } = useAppContext();
  const [text, setText] = useState('');
  
  useEffect(() => {
    const full = 'Find your software and directories';
    let i = 0;
    const interval = setInterval(() => {
      setText(full.substring(0, i));
      i++;
      if (i > full.length + 5) i = 0;
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="float" style={{ maxWidth: 560, width: '100%' }}>
      <div className={`search-bar ${text ? 'focused' : ''}`} style={{
        margin: 0,
        padding: '20px 28px',
        borderRadius: 20,
        background: 'color-mix(in srgb, var(--window-bg) 60%, transparent)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid var(--border)',
        boxShadow: 'var(--mockup-shadow)',
      }}>
        <span style={{ color: 'var(--accent)', opacity: 0.6, display: 'flex', alignItems: 'center' }}>
          <IconSearch />
        </span>
        <span style={{
          fontSize: 18,
          fontWeight: 400,
          color: 'var(--fg)',
          flex: 1,
          minHeight: 26,
          letterSpacing: '-0.02em',
        }} className={text ? 'cursor' : ''}>
          {text || <span style={{ color: 'var(--fg-subtle)', fontWeight: 300 }}>{t.searchPlaceholder}</span>}
        </span>
        <span className="kbd" style={{ opacity: 0.5 }}>Alt+S</span>
      </div>
    </div>
  );
}
