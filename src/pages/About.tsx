import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

const aboutContent = {
  en: {
    pageTitle: 'About the Journal',
    description: 'Digital Intelligence Frontiers is a peer-reviewed, fully open-access journal based in Hong Kong. It publishes interdisciplinary research on digital intelligence and its impact on technology, governance, and society.',
    scopeTitle: 'Research Scope',
    scopeDesc: 'We welcome submissions on (but not limited to): AI & society, data governance, platform studies, algorithmic governance, ethics & accountability, social computing, digital policy, and interdisciplinary methods.',
    modelTitle: 'Publishing Model',
    frequency: 'Frequency: Semiannual',
    format: 'Format: Online (PDF / HTML)',
    firstIssue: 'First issue planned: April 1, 2026',
    license: 'License: CC BY',
    language: 'Language: Chinese (primary); English submissions are welcome',
    submissionTitle: 'Submission Guidelines',
    submitEmail: 'Submit manuscripts via email: yyyfeiwang@gmail.com',
    reviewTime: 'Review timeline: typically 2–6 weeks.',
    contactTitle: 'Contact Information',
    contactEmail: 'yyyfeiwang@gmail.com / megantcy43@gmail.com‘
  },
  zh: {
    pageTitle: '期刊简介',
    description: '《数字智能前沿》为立足香港的同行评审、完全开放获取学术期刊，聚焦数字智能及其在技术、治理与社会领域的跨学科影响研究。',
    scopeTitle: '研究范围',
    scopeDesc: '欢迎但不限于以下方向：AI与社会、数据治理、平台研究、算法治理、伦理与问责、社会计算、数字政策与跨学科方法。',
    modelTitle: '出版模式',
    frequency: '出版周期：半年刊',
    format: '出版形式：在线（PDF / HTML）',
    firstIssue: '首期计划：2026 年 4 月 1 日',
    license: '许可协议：CC BY',
    language: '语言：中文为主，欢迎英文来稿',
    submissionTitle: '投稿指南',
    submitEmail: '投稿邮箱：yyyfeiwang@gmail.com',
    reviewTime: '审稿周期：通常 2–6 周。',
    contactTitle: '联系方式',
    contactEmail: 'yyyfeiwang@gmail.com / megantcy43@gmail.com’
  },
};

export default function About() {
  const [currentLang, setCurrentLang] = useState<'en' | 'zh'>('en');
  const content = aboutContent[currentLang];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header currentLang={currentLang} onLangChange={setCurrentLang} currentPage="/about" />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-primary text-primary-foreground py-12">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{content.pageTitle}</h1>
            <p className="text-lg text-primary-foreground/90">{content.description}</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="md:col-span-2 space-y-8">
                {/* Scope */}
                <div className="bg-white rounded border border-border p-8">
                  <h2 className="text-3xl font-bold text-primary mb-4">{content.scopeTitle}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">{content.scopeDesc}</p>
                </div>

                {/* Publishing Model */}
                <div className="bg-white rounded border border-border p-8">
                  <h2 className="text-3xl font-bold text-primary mb-6">{content.modelTitle}</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1">✓</span>
                      <span className="text-muted-foreground text-lg">{content.frequency}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1">✓</span>
                      <span className="text-muted-foreground text-lg">{content.format}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1">✓</span>
                      <span className="text-muted-foreground text-lg">{content.firstIssue}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1">✓</span>
                      <span className="text-muted-foreground text-lg">{content.license}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1">✓</span>
                      <span className="text-muted-foreground text-lg">{content.language}</span>
                    </li>
                  </ul>
                </div>

                {/* Submission */}
                <div className="bg-white rounded border border-border p-8">
                  <h2 className="text-3xl font-bold text-primary mb-6">{content.submissionTitle}</h2>
                  <div className="space-y-4">
                    <p className="text-lg text-muted-foreground">{content.submitEmail}</p>
                    <p className="text-lg text-muted-foreground">{content.reviewTime}</p>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="space-y-6">
                {/* Contact Card */}
                <div className="bg-primary text-primary-foreground rounded border border-border p-6">
                  <h3 className="text-xl font-bold mb-4">{content.contactTitle}</h3>
                  <a
                    href={`mailto:${content.contactEmail}`}
                    className="text-primary-foreground/90 hover:text-primary-foreground text-lg font-medium no-underline"
                  >
                    {content.contactEmail}
                  </a>
                </div>

                {/* Quick Stats */}
                <div className="bg-white rounded border border-border p-6 space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {currentLang === 'en' ? 'Publication Status' : '发布状态'}
                    </p>
                    <p className="text-lg font-bold text-primary">
                      {currentLang === 'en' ? 'Coming Soon' : '即将推出'}
                    </p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="text-sm text-muted-foreground mb-1">
                      {currentLang === 'en' ? 'First Issue' : '首期'}
                    </p>
                    <p className="text-lg font-bold text-primary">April 2026</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="text-sm text-muted-foreground mb-1">
                      {currentLang === 'en' ? 'Access Model' : '访问模式'}
                    </p>
                    <p className="text-lg font-bold text-accent">
                      {currentLang === 'en' ? 'Open Access' : '开放获取'}
                    </p>
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
