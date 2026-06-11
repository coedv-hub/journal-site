import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

const guidelineSections = [
  {
    title: 'Scope and Content Requirements',
    body: 'Digital Intelligence Frontiers welcomes manuscripts related to digital intelligence, artificial intelligence, education technology, data governance, platform studies, digital policy, ethics, social computing, and interdisciplinary research. Submissions should not involve political, illegal, confidential, defamatory, discriminatory, or other sensitive content unsuitable for public academic publication.',
  },
  {
    title: 'Manuscript Template',
    body: 'Authors should prepare manuscripts according to the journal template. The template can be downloaded from the homepage. Please ensure that the title, author information, abstract, keywords, main text, references, figures, and tables are clearly formatted before submission.',
  },
  {
    title: 'Submission Method',
    body: 'Please submit manuscripts by email to the editorial office. The email should include the manuscript file and basic author contact information.',
  },
  {
    title: 'Review Process',
    body: 'The editorial office will conduct an initial review after receiving the manuscript. Suitable manuscripts will proceed to editorial review. The review timeline is typically 2-6 weeks.',
  },
  {
    title: 'Publication-Related Fees',
    body: 'No submission fee is charged at the time of manuscript submission. For accepted manuscripts, publication-related fees may apply to support manuscript review, editing, typesetting, online publication, and journal operation and maintenance. Specific payment instructions will be provided after the final manuscript is confirmed.',
  },
  {
    title: 'Acceptance and Publication',
    body: 'After the final manuscript is confirmed and the relevant publication process is completed, the editorial office will issue an official Acceptance Letter and arrange subsequent publication work.',
  },
];

export default function Instructions() {
  const [currentLang, setCurrentLang] = useState<'en' | 'zh'>('en');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header currentLang={currentLang} onLangChange={setCurrentLang} currentPage="/instructions" />

      <main className="flex-1">
        <section className="bg-primary text-primary-foreground py-12">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Instructions to Authors</h1>
            <p className="text-lg text-primary-foreground/90">
              Guidelines for preparing and submitting manuscripts to Digital Intelligence Frontiers.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-6">
                {guidelineSections.map((section) => (
                  <div key={section.title} className="bg-white rounded border border-border p-8">
                    <h2 className="text-2xl font-bold text-primary mb-4">{section.title}</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">{section.body}</p>
                  </div>
                ))}
              </div>

              <aside className="space-y-6">
                <div className="bg-primary text-primary-foreground rounded border border-border p-6">
                  <h3 className="text-xl font-bold mb-4">Editorial Office</h3>
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
                </div>

                <div className="bg-white rounded border border-border p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">Before Submission</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>Use the journal manuscript template.</li>
                    <li>Check author names and affiliations carefully.</li>
                    <li>Include an abstract, keywords, and references.</li>
                    <li>Avoid sensitive or unsuitable content.</li>
                  </ul>
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
