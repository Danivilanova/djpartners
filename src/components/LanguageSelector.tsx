import { Globe } from 'lucide-react';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

interface LanguageSelectorProps {
  className?: string;
  onMobile?: boolean;
}

const LanguageSelector = ({ className, onMobile = false }: LanguageSelectorProps) => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; name: string }[] = [
    { code: 'es', name: 'Español' },
    { code: 'ca', name: 'Català' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  if (onMobile) {
    return (
      <div className={cn("space-y-2", className)}>
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={cn(
              "flex items-center w-full px-3 py-2 rounded-md text-sm transition-colors",
              language === lang.code
                ? "bg-gray-100 text-gray-900"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            )}
          >
            <span className="mr-2"></span>
            {lang.name}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className={cn("relative group", className)}>
      <button className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors">
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">{currentLanguage?.name}</span>
        <span className="sm:hidden">{currentLanguage?.name}</span>
      </button>
      
      <div className="absolute right-0 top-full mt-1 w-32 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="py-1">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              className={cn(
                "flex items-center w-full px-3 py-2 text-sm transition-colors",
                language === lang.code
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              <span className="mr-2"></span>
              {lang.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;