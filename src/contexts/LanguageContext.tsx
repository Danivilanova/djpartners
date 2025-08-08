import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'es' | 'ca';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ca');
  const [translations, setTranslations] = useState<Record<string, string>>({});

  const loadTranslations = async (lang: Language) => {
    try {
      const module = await import(`../locales/${lang}.ts`);
      setTranslations(module.default);
    } catch (error) {
      console.error(`Failed to load translations for ${lang}:`, error);
      // Fallback to Spanish if Catalan fails
      if (lang === 'ca') {
        const fallback = await import('../locales/es.ts');
        setTranslations(fallback.default);
      }
    }
  };

  useEffect(() => {
    // Load saved language or default to Spanish
    const savedLanguage = localStorage.getItem('preferred-language') as Language || 'ca';
    setLanguage(savedLanguage);
    loadTranslations(savedLanguage);
  }, []);

  useEffect(() => {
    loadTranslations(language);
    localStorage.setItem('preferred-language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};