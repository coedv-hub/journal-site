import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ChevronRight } from 'lucide-react';

const homeContent = {
  en: {
    heroTitle: 'Digital Intelligence Frontiers',
    heroSubtitle: 'A peer-reviewed, open-access journal on digital intelligence and society',
    currentIssue: 'Current Issue',
    volume: 'Volume 1, Issue 1',
    publishDate: 'April 1, 2026',
    viewIssue: 'View Issue',
    aboutTitle: 'About the Journal',
    aboutDesc: 'Digital Intelligence Frontiers is a peer-reviewed, fully open-access journal based in Hong Kong. It publishes interdisciplinary research on digital intelligence and its impact on technology, governance, and society.',
    scope: 'Research Scope',
    scopeDesc: 'We welcome submissions on (but not limited to): AI & society, data governance, platform studies, algorithmic governance, ethics & accountability, social computing, digital policy, and interdisciplinary methods.',
    model: 'Publishing Model',
    frequency: 'Frequency: Semiannual',
    format: 'Format: Online (PDF / HTML)',
    firstIssue: 'First issue planned: April 1, 2026',
    license: 'License: CC BY',
    language: 'Language: Chinese (primary); English submissions are welcome',
    submission: 'Submission',
    submitDesc: 'Submit manuscripts via email: yyyfeiwang@gmail.com; megantcy43@gmail.com',
    reviewTime: 'Review timeline: typically 2–6 weeks.',
    exploreMore: 'Explore More',
  },
  zh: {
    heroTitle: '数字智能前沿',
    heroSubtitle: '关于数字智能与社会的同行评审、开放获取学术期刊',
    currentIssue: '最新期刊',
    volume: '第 1 卷，第 1 期',
    publishDate: '2026 年 4 月 1 日',
    viewIssue: '查看期刊',
    aboutTitle: '期刊简介',
    aboutDesc: '《数字智能前沿》为立足香港的同行评审、完全开放获取学术期刊，聚焦数字智能及其在技术、治理与社会领域的跨学科影响研究。',
    scope: '研究范围',
    scopeDesc: '欢迎但不限于以下方向：AI与社会、数据治理、平台研究、算法治理、伦理与问责、社会计算、数字政策与跨学科方法。',
    model: '出版模式',
    frequency: '出版周期：半年刊',
    format: '出版形式：在线（PDF / HTML）',
    firstIssue: '首期计划：2026 年 4 月 1 日',
    license: '许可协议：CC BY',
    language: '语言：中文为主，欢迎英文来稿',
    submission: '投稿方式',
    submitDesc: '投稿邮箱：yyyfeiwang@gmail.com；megantcy43@gmail.com',
    reviewTime: '审稿周期：通常 2–6 周。',
    exploreMore: '了解更多',
  },
};

export default function Home() {
  const [currentLang, setCurrentLang] = useState<'en' | 'zh'>('en');
  const content = homeContent[currentLang];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header currentLang={currentLang} onLangChange={setCurrentLang} currentPage="/" />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-12 md:py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Text Content */}
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-primary">
                Digital Intelligence Frontiers
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  {content.heroSubtitle}
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="/about"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors no-underline font-medium"
                  >
                    {content.exploreMore}
                    <ChevronRight size={18} />
                  </a>
                </div>
              </div>

              {/* Cover Image */}
              <div className="flex justify-center">
                <img
                  src="/images/cover-vol1-issue1.jpg"
                  alt="Volume 1, Issue 1 Cover"
                  className="w-full max-w-sm rounded shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Current Issue Section */}
        <section className="py-12 md:py-16 bg-white border-b border-border">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
              {content.currentIssue}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Issue Info Card */}
              <div className="bg-muted p-6 rounded">
                <h3 className="text-lg font-bold text-primary mb-2">{content.volume}</h3>
                <p className="text-muted-foreground mb-4">{content.publishDate}</p>
                <a
                  href="/current"
                  className="inline-flex items-center gap-2 text-accent font-medium hover:text-accent/80 no-underline"
                >
                  {content.viewIssue}
                  <ChevronRight size={16} />
                </a>
              </div>

              {/* Featured Articles */}
              <div className="md:col-span-2 bg-white border border-border rounded p-6">
                <h3 className="text-lg font-bold text-primary mb-4">
                  {currentLang === 'en' ? 'Featured Articles' : '精选文章'}
                </h3>
                <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <a
                    href="/dif/article/2026-v1-i1-001/"
                    className="text-muted-foreground hover:text-primary no-underline"
                  >
                    AI-Enabled Cultural Tourism in Sichuan: The Bashu Cultural Narrative Chain and Intelligent Resource Matching
                  </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <a
                    href="/dif/article/2026-v1-i1-002/"
                    className="text-muted-foreground hover:text-primary no-underline"
                    >
                     AI
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span className="text-muted-foreground">
                      {currentLang === 'en'
                        ? 'Algorithmic ethics in digital society'
                        : '数字社会中的算法伦理'}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="md:col-span-2">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  {content.aboutTitle}
                </h2>

                <div className="space-y-8">
                  {/* About */}
                  <div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {content.aboutDesc}
                    </p>
                  </div>

                  {/* Scope */}
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="text-2xl font-bold text-primary mb-3">{content.scope}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {content.scopeDesc}
                    </p>
                  </div>

                  {/* Publishing Model */}
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="text-2xl font-bold text-primary mb-4">{content.model}</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• {content.frequency}</li>
                      <li>• {content.format}</li>
                      <li>• {content.firstIssue}</li>
                      <li>• {content.license}</li>
                      <li>• {content.language}</li>
                    </ul>
                  </div>

                  {/* Submission */}
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="text-2xl font-bold text-primary mb-3">{content.submission}</h3>
                    <p className="text-muted-foreground mb-2">{content.submitDesc}</p>
                    <p className="text-muted-foreground">{content.reviewTime}</p>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="bg-white rounded border border-border p-6 h-fit sticky top-24">
                <h3 className="text-lg font-bold text-primary mb-4">
                  {currentLang === 'en' ? 'Quick Info' : '快速信息'}
                </h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-bold text-primary mb-1">
                      {currentLang === 'en' ? 'ISSN' : 'ISSN'}
                    </p>
                    <p className="text-muted-foreground">
                      {currentLang === 'en' ? 'ISSN: 3135-0011' : 'ISSN：3135-0011'}
                    </p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="font-bold text-primary mb-1">
                      {currentLang === 'en' ? 'Open Access' : '开放获取'}
                    </p>
                    <p className="text-muted-foreground">
                      {currentLang === 'en'
                        ? 'All articles are freely available'
                        : '所有文章免费提供'}
                    </p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="font-bold text-primary mb-1">
                      {currentLang === 'en' ? 'License' : '许可协议'}
                    </p>
                    <p className="text-muted-foreground">CC BY 4.0</p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <Footer currentLang={currentLang} />
    </div>
  );
}
