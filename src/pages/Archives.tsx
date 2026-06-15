import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { issues } from '@/lib/issues';
import { useState } from 'react';
import { ExternalLink, FileText } from 'lucide-react';

const archivesContent = {
  en: {
    pageTitle: 'Archives',
    description: 'Browse published issues of Digital Intelligence Frontiers by volume and issue.',
    articles: 'Articles',
    html: 'HTML',
    pdf: 'PDF',
  },
  zh: {
    pageTitle: '过刊',
    description: '按卷号与期号浏览《数字智能前沿》已发布的期刊。',
    articles: '文章',
    html: 'HTML',
    pdf: 'PDF',
  },
};

export default function Archives() {
  const [currentLang, setCurrentLang] = useState<'en' | 'zh'>('en');
  const content = archivesContent[currentLang];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header currentLang={currentLang} onLangChange={setCurrentLang} currentPage="/archives" />

      <main className="flex-1">
        <section className="bg-primary text-primary-foreground py-12">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{content.pageTitle}</h1>
            <p className="text-lg text-primary-foreground/90 max-w-3xl">{content.description}</p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container">
            <div className="max-w-5xl mx-auto space-y-8">
              {issues.map((issue) => (
                <section
                  key={issue.id}
                  id={issue.id}
                  className="bg-white rounded border border-border p-6 md:p-8 scroll-mt-24"
                >
                  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 pb-5 border-b border-border">
                    <div>
                      <p className="text-sm font-bold text-accent mb-2">
                        {currentLang === 'en'
                          ? `Volume ${issue.volume}, Issue ${issue.issue}`
                          : `第 ${issue.volume} 卷，第 ${issue.issue} 期`}
                      </p>
                      <h2 className="text-3xl font-bold text-primary">{issue.title}</h2>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>{issue.publicationDate}</p>
                      <p>
                        {issue.articles.length} {content.articles}
                      </p>
                    </div>
                  </div>

                  <div className="divide-y divide-border">
                    {issue.articles.map((article) => (
                      <article key={article.number} className="py-5">
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
                              {content.html}
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
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer currentLang={currentLang} />
    </div>
  );
}

