'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { translations } from './translations';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  translate: (section: "header" | "about" | "projects" | "contact" | "footer", key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'pt' ? 'en' : 'pt'));
  };

  const translate = (section: 'header' |'about' | 'projects' | 'contact' | 'footer' ,key: string) =>{
   if(language === 'pt')
   {
    // @ts-expect-error 
    const textPtValue = translations[section][key].pt

    return textPtValue
   }

   if(language === 'en')
   {
    // @ts-expect-error 
    const textPtValue = translations[section][key].eng

    return textPtValue
   }
  }


  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage deve ser usado dentro do LanguageProvider');
  }
  return context;
}
