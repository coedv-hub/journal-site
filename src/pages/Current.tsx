import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { Link } from 'wouter';
import { ChevronLeft, FileText } from 'lucide-react';

const currentContent = {
  en: {
    pageTitle: 'Current Issue',
    volume: 'Volume 1, Issue 1',
    publishDate: 'April 1, 2026',
    issn: 'ISSN: 3135-0011',
    toc: 'Table of Contents',
    articles: [
      {
        id: 1,
        title: 'Interdisciplinary Perspectives on AI Governance',
        authors: 'Author One, Author Two',
        pages: '1-15',
      },
      {
        id: 2,
        title: 'Data Governance and Platform Accountability',
        authors: 'Author Three, Author Four',
        pages: '16-32',
      },
      {
        id: 3,
        title: 'Algorithmic Ethics in Digital Society',
        authors: 'Author Five',
        pages: '33-48',
      },
    ],
  },
  zh: {
    pageTitle: '最新期刊',
    volume: '第 1 卷，第 1 期',
    publishDate: '2026 年 4 月 1 日',
    issn: 'ISSN：3135-0011',
    toc: '目录',
    articles: [
      {
        id: 1,
        title: 'AI治理的跨学科视角',
        authors: '作者一，作者二',
        pages: '1-15',
      },
      {
        id: 2,
        title: '数据治理与平台问责',
        authors: '作者三，作者四',
        pages: '16-32',
      },
      {
        id: 3,
        title: '数字社会中的算法伦理',
        authors: '作者五',
        pages: '33-48',
      },
    ],
  },
};

export default function Current() {
  const [currentLang, setCurrentLang] = useState<'en' | 'zh'>('en');
  const content = currentContent[currentLang];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header currentLang={currentLang} onLangChange={setCurrentLang} currentPage="/" />

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{content.pageTitle}</h1>
            <div className="space-y-2 text-primary-foreground/90">
              <p className="text-lg font-medium">{content.volume}</p>
              <p>{content.publishDate}</p>
              <p className="text-sm">{content.issn}</p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="md:col-span-2">
                <div className="bg-white rounded border border-border p-8">
                  <h2 className="text-3xl font-bold text-primary mb-8">{content.toc}</h2>

                  <div className="space-y-6">
                    {content.articles.map((article, index) => (
                      <div
                        key={article.id}
                        className="pb-6 border-b border-border last:border-b-0"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 mt-1">
                            <FileText size={20} className="text-accent" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-primary mb-2">
                              {index + 1}. {article.title}
                            </h3>
                            <p className="text-muted-foreground mb-2">{article.authors}</p>
                            <div className="flex items-center justify-between">
                              <p className="text-sm text-muted-foreground">
                                {currentLang === 'en' ? 'Pages' : '页码'}: {article.pages}
                              </p>
                              <a
                                href="#"
                                className="text-accent font-medium hover:text-accent/80 text-sm no-underline"
                              >
                                {currentLang === 'en' ? 'Read' : '阅读'} →
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="space-y-6">
                {/* Issue Info */}
                <div className="bg-white rounded border border-border p-6">
                  <h3 className="text-lg font-bold text-primary mb-4">
                    {currentLang === 'en' ? 'Issue Information' : '期刊信息'}
                  </h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="text-muted-foreground mb-1">
                        {currentLang === 'en' ? 'Volume' : '卷'}
                      </p>
                      <p className="font-bold text-primary">1</p>
                    </div>
                    <div className="border-t border-border pt-4">
                      <p className="text-muted-foreground mb-1">
                        {currentLang === 'en' ? 'Issue' : '期'}
                      </p>
                      <p className="font-bold text-primary">1</p>
                    </div>
                    <div className="border-t border-border pt-4">
                      <p className="text-muted-foreground mb-1">
                        {currentLang === 'en' ? 'Publication Date' : '发布日期'}
                      </p>
                      <p className="font-bold text-primary">April 1, 2026</p>
                    </div>
                    <div className="border-t border-border pt-4">
                      <p className="text-muted-foreground mb-1">
                        {currentLang === 'en' ? 'Articles' : '文章数'}
                      </p>
                      <p className="font-bold text-primary">{content.articles.length}</p>
                    </div>
                  </div>
                </div>

                {/* Download */}
                <div className="bg-primary text-primary-foreground rounded border border-border p-6">
                  <h3 className="text-lg font-bold mb-4">
                    {currentLang === 'en' ? 'Download' : '下载'}
                  </h3>
                  <button className="w-full px-4 py-2 bg-primary-foreground/20 text-primary-foreground rounded hover:bg-primary-foreground/30 transition-colors font-medium mb-2">
                    {currentLang === 'en' ? 'Full Issue (PDF)' : '完整期刊 (PDF)'}
                  </button>
                  <button className="w-full px-4 py-2 bg-primary-foreground/20 text-primary-foreground rounded hover:bg-primary-foreground/30 transition-colors font-medium">
                    {currentLang === 'en' ? 'Table of Contents' : '目录'}
                  </button>
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
