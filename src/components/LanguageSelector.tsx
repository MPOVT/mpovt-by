import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type Props = {
  compact?: boolean;
};

type Language = {
  code: string;
  name: string;
  flag: string;
};

const languages: Language[] = [
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "be", name: "Беларуская", flag: "🇧🇾" },
  { code: "zh", name: "简体中文", flag: "🇨🇳" },
  { code: "en", name: "English", flag: "🇺🇸" },
];

export default function LanguageSelector({ compact = false }: Props) {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  const selected = languages.find((l) => l.code === language) ?? languages[0];

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={(e) => { e.stopPropagation(); setOpen(!open); }}
        className={compact ? "flex items-center p-2 rounded-full text-white hover:bg-white/5 transition-all duration-500" : "flex items-center px-3 py-2 rounded-xl font-medium text-white hover:text-orange-300 hover:bg-white/5 transition-all duration-500"}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={compact ? `Language: ${selected.name}` : undefined}
      >
        <span className={compact ? "text-lg" : "text-lg mr-2"}>{selected.flag}</span>
        {!compact && <ChevronDown className={open ? 'ml-1 h-4 w-4 rotate-180 transition-transform duration-500' : 'ml-1 h-4 w-4 transition-transform duration-500'} />}
      </button>

      <div
        className={"absolute right-0 mt-5 transition-all duration-500 ease-out origin-top transform " + (open ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-95 -translate-y-2 pointer-events-none")}
        style={{ zIndex: 1200 }}
      >
        <div className="rounded-xl p-2 shadow-xl bg-black/90 backdrop-blur-xl border-2 border-white/20 shadow-slate-900/30">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={(e) => { e.stopPropagation(); setLanguage(lang.code); setOpen(false); }}
              className="w-full flex items-center px-4 py-3 text-sm text-white/90 hover:text-orange-300 rounded-lg transition-all duration-200 hover:bg-white/5"
            >
              <span className="mr-3 text-lg">{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
