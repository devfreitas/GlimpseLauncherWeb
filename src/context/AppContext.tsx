import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { i18n } from '../i18n';
import type { Lang, Translation } from '../i18n';
import { config } from '../config';

type Theme = 'dark' | 'light';

interface ReleaseInfo {
  version: string;
  downloadUrl: string;
  sizeMB: string;
  setupName: string;
}

interface AppContextData {
  theme: Theme;
  lang: Lang;
  t: Translation;
  toggleTheme: () => void;
  toggleLang: () => void;
  releaseInfo: ReleaseInfo;
}

const AppContext = createContext<AppContextData | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem('theme') as Theme) || 'dark';
  });
  
  const [lang, setLang] = useState<Lang>(() => {
    return (localStorage.getItem('lang') as Lang) || 'pt';
  });

  const [releaseInfo, setReleaseInfo] = useState<ReleaseInfo>({
    version: config.defaultRelease.version,
    downloadUrl: config.defaultRelease.downloadUrl,
    sizeMB: config.defaultRelease.sizeMB,
    setupName: config.defaultRelease.downloadUrl.split('/').pop() || 'GlimpseLauncher-Setup.exe'
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  // Fetch the latest release from GitHub API
  useEffect(() => {
    async function fetchLatestRelease() {
      try {
        const response = await fetch(`https://api.github.com/repos/${config.github.owner}/${config.github.repo}/releases/latest`);
        if (!response.ok) return;
        const data = await response.json();
        
        // Find the exe asset
        const asset = data.assets?.find((a: any) => a.name.endsWith('.exe'));
        if (asset) {
          setReleaseInfo({
            version: data.tag_name.replace(/^v/, ''),
            downloadUrl: asset.browser_download_url,
            sizeMB: `~${Math.round(asset.size / (1024 * 1024))} MB`,
            setupName: asset.name
          });
        }
      } catch (e) {
        console.error('Failed to fetch latest release from GitHub', e);
      }
    }
    
    fetchLatestRelease();
  }, []);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  const toggleLang = () => setLang(prev => prev === 'en' ? 'pt' : 'en');

  // Replace placeholders in translations
  const t = Object.entries(i18n[lang]).reduce((acc, [key, value]) => {
    if (typeof value === 'string') {
      acc[key as keyof Translation] = value
        .replace('{version}', releaseInfo.version)
        .replace('{sizeMB}', releaseInfo.sizeMB)
        .replace('{setupName}', releaseInfo.setupName);
    } else {
      acc[key as keyof Translation] = value;
    }
    return acc;
  }, {} as Translation);

  return (
    <AppContext.Provider value={{ theme, lang, t, toggleTheme, toggleLang, releaseInfo }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
