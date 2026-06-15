import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { issues } from '@/lib/issues';
import { useState } from 'react';
import { Link } from 'wouter';
import { ChevronLeft, ExternalLink, FileText } from 'lucide-react';

const currentContent = {
  en: {
    pageTitle: 'Current Issue',
    issn: 'ISSN: 3135-0011',
    toc: 'Table of Contents',
    pages: 'Article',
    read: 'Read',
    pdf: 'PDF',
    issueInfo: 'Issue Information',
    volume: 'Volume',
    issue: 'Issue',
    publicationDate: 'Publication Date',
    articles: 'Articles',
    back: 'Back to Home',
  },
  zh: {
    pageTitle: '最新期刊',
    issn: 'ISSN：3135-0011',
    toc: '目录',
    pages: '文章',
    read: '阅读',
    pdf: 'PDF',
    issueInfo: '期刊信息',
    volume: '卷',
    issue: '期',
    publicationDate: '发布日期',
    articles: '文章数',
    back: '返回首页',
  },
};

export default function Current() {
  const [currentLang, setCurrentLang] = useState<'en' | 'zh'>('en');
  const content = currentContent[currentLang];
  const currentIssue = issues[0];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header currentLang={currentLang} onLangChange={setCurrentLang} currentPage="/" />

      <main className="flex-1">
        <section className="bg-primary text-primary-foreground py-12">
          <div className="container">
            <Link href="/">
              <a className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-4 no-underline">
                <ChevronLeft size={18} />
                {content.back}
              </a>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{content.pageTitle}</h1>
            <div className="space-y-2 text-primary-foreground/90">
              <p className="text-lg font-medium">
                {currentLang === 'en'
                  ? `Volume ${currentIssue.volume}, Issue ${currentIssue.issue}`
                  : `第 ${currentIssue.volume} 卷，第 ${currentIssue.issue} 期`}
              </p>
              <p>{currentIssue.publicationDate}</p>
              <p className="text-sm">{content.issn}</p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <div className="bg-white rounded border border-border p-6 md:p-8">
                  <h2 className="text-3xl font-bold text-primary mb-8">{content.toc}</h2>

                  <div className="divide-y divide-border">
                    {currentIssue.articles.map((article) => (
                      <article key={article.number} className="py-5 first:pt-0 last:pb-0">
                        <div className="grid grid-cols-1 md:grid-cols-[72px_1fr_auto] gap-4">
                          <div className="flex items-center gap-2 text-sm font-bold text-primary">
                            <FileText size={18} className="text-accent" />
                            {article.number}
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-primary mb-2 leading-snug">
                              <a
                                href={article.htmlUrl}
                                className="text-primary hover:text-accent no-underline"
                              >
                                {article.title}
                              </a>
                            </h3>
                            <p className="text-muted-foreground">{article.authors}</p>
                          </div>
                          <div className="flex md:flex-col gap-3 md:items-end text-sm font-medium">
                            <a
                              href={article.htmlUrl}
                              className="inline-flex items-center gap-1 text-accent hover:text-accent/80 no-underline"
                            >
                              {content.read}
                              <ExternalLink size={14} />
                            </a>
                            <a
                              href={article.pdfUrl}
                              className="inline-flex items-center gap-1 text-accent hover:text-accent/80 no-underline"
                            >
                              {content.pdf}
                              <ExternalLink size={14} />
                            </a>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>

              <aside className="space-y-6">
                <div className="bg-white rounded border border-border p-6">
                  <h3 className="text-lg font-bold text-primary mb-4">{content.issueInfo}</h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="text-muted-foreground mb-1">{content.volume}</p>
                      <p className="font-bold text-primary">{currentIssue.volume}</p>
                    </div>
                    <div className="border-t border-border pt-4">
                      <p className="text-muted-foreground mb-1">{content.issue}</p>
                      <p className="font-bold text-primary">{currentIssue.issue}</p>
                    </div>
                    <div className="border-t border-border pt-4">
                      <p className="text-muted-foreground mb-1">{content.publicationDate}</p>
                      <p className="font-bold text-primary">{currentIssue.publicationDate}</p>
                    </div>
                    <div className="border-t border-border pt-4">
                      <p className="text-muted-foreground mb-1">{content.articles}</p>
                      <p className="font-bold text-primary">{currentIssue.articles.length}</p>
                    </div>
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

