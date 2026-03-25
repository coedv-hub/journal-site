import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { Link } from 'wouter';
import { ChevronLeft } from 'lucide-react';

interface PlaceholderPageProps {
  title: string;
  titleZh: string;
  description: string;
  descriptionZh: string;
  currentPage: string;
}

export default function PlaceholderPage({
  title,
  titleZh,
  description,
  descriptionZh,
  currentPage,
}: PlaceholderPageProps) {
  const [currentLang, setCurrentLang] = useState<'en' | 'zh'>('en');
  const pageTitle = currentLang === 'en' ? title : titleZh;
  const pageDesc = currentLang === 'en' ? description : descriptionZh;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header currentLang={currentLang} onLangChange={setCurrentLang} currentPage={currentPage} />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-primary text-primary-foreground py-12">
          <div className="container">
            <Link href="/">
              <a className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-4 no-underline">
                <ChevronLeft size={18} />
                {currentLang === 'en' ? 'Back to Home' : '返回首页'}
              </a>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold">{pageTitle}</h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="max-w-2xl mx-auto bg-white rounded border border-border p-8">
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔄</div>
                <h2 className="text-2xl font-bold text-primary mb-4">
                  {currentLang === 'en' ? 'Coming Soon' : '即将推出'}
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{pageDesc}</p>
                <Link href="/">
                  <a className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors no-underline font-medium">
                    {currentLang === 'en' ? 'Return to Home' : '返回首页'}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer currentLang={currentLang} />
    </div>
  );
}
