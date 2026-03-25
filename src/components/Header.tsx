import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentLang: 'en' | 'zh';
  onLangChange: (lang: 'en' | 'zh') => void;
  currentPage: string;
}

const navItems = {
  en: [
    { label: 'Current Issue', href: '/' },
    { label: 'Archives', href: '/archives' },
    { label: 'About the Journal', href: '/about' },
    { label: 'Editorial Board', href: '/editorial' },
    { label: 'Authors Guidelines', href: '/instructions' },
    { label: 'Contact us', href: '/contact' },
  ],
  zh: [
    { label: '本期目录', href: '/' },
    { label: '过刊浏览', href: '/archives' },
    { label: '期刊简介', href: '/about' },
    { label: '编委会', href: '/editorial' },
    { label: '投稿指南', href: '/instructions' },
    { label: '联系我们', href: '/contact' },
  ],
};

export default function Header({ currentLang, onLangChange, currentPage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const items = navItems[currentLang];

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2 no-underline hover:opacity-80 transition-opacity">
              <div className="text-lg font-bold tracking-wide">DIF</div>
              <div className="hidden sm:block text-sm font-semibold">
                {currentLang === 'en' ? 'Digital Intelligence Frontiers' : '数字智能前沿'}
              </div>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {items.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className={`px-3 py-2 text-sm font-medium rounded transition-colors no-underline ${
                    currentPage === item.href
                      ? 'bg-primary-foreground/20 text-primary-foreground'
                      : 'text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10'
                  }`}
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </nav>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => onLangChange(currentLang === 'en' ? 'zh' : 'en')}
              className="px-3 py-2 text-sm font-medium rounded bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30 transition-colors"
            >
              {currentLang === 'en' ? '中文' : 'EN'}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-primary-foreground/20 rounded transition-colors"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-primary-foreground/20">
            {items.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className={`block px-4 py-2 text-sm font-medium rounded transition-colors no-underline ${
                    currentPage === item.href
                      ? 'bg-primary-foreground/20 text-primary-foreground'
                      : 'text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
