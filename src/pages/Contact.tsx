import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

const contactContent = {
  en: {
    pageTitle: 'Contact Us',
    intro:
      'For manuscript submission and editorial inquiries, please contact the editorial office by email.',
    submissionTitle: 'Submission Information',
    submitEmail: 'Submit manuscripts via email:',
    reviewTime: 'Review timeline: typically 2-6 weeks.',
    templateNote:
      'Authors are encouraged to prepare manuscripts according to the journal template before submission.',
    contactTitle: 'Editorial Office',
  },
  zh: {
    pageTitle: '联系我们',
    intro: '如需投稿或咨询期刊相关事宜，请通过电子邮件联系编辑部。',
    submissionTitle: '投稿信息',
    submitEmail: '投稿邮箱：',
    reviewTime: '审稿周期：通常 2-6 周。',
    templateNote: '建议作者在投稿前按照本刊论文模板整理稿件格式。',
    contactTitle: '编辑部邮箱',
  },
};

export default function Contact() {
  const [currentLang, setCurrentLang] = useState<'en' | 'zh'>('en');
  const content = contactContent[currentLang];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header currentLang={currentLang} onLangChange={setCurrentLang} currentPage="/contact" />

      <main className="flex-1">
        <section className="bg-primary text-primary-foreground py-12">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{content.pageTitle}</h1>
            <p className="text-lg text-primary-foreground/90">{content.intro}</p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 bg-white rounded border border-border p-8">
                <h2 className="text-3xl font-bold text-primary mb-6">
                  {content.submissionTitle}
                </h2>

                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>{content.submitEmail}</p>
                  <p>
                    <a href="mailto:yyyfeiwang@gmail.com" className="journal-link">
                      yyyfeiwang@gmail.com
                    </a>
                    {'; '}
                    <a href="mailto:megantcy43@gmail.com" className="journal-link">
                      megantcy43@gmail.com
                    </a>
                  </p>
                  <p>{content.reviewTime}</p>
                  <p>{content.templateNote}</p>
                </div>
              </div>

              <aside className="bg-primary text-primary-foreground rounded border border-border p-6 h-fit">
                <h3 className="text-xl font-bold mb-4">{content.contactTitle}</h3>
                <div className="space-y-2 text-lg font-medium">
                  <a
                    href="mailto:yyyfeiwang@gmail.com"
                    className="block text-primary-foreground/90 hover:text-primary-foreground no-underline"
                  >
                    yyyfeiwang@gmail.com
                  </a>
                  <a
                    href="mailto:megantcy43@gmail.com"
                    className="block text-primary-foreground/90 hover:text-primary-foreground no-underline"
                  >
                    megantcy43@gmail.com
                  </a>
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