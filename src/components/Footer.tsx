interface FooterProps {
  currentLang: 'en' | 'zh';
}

const footerContent = {
  en: {
    about: 'Digital Intelligence Frontiers is a peer-reviewed, fully open-access journal based in Hong Kong.',
    contact: 'Contact',
    email: 'yyyfeiwang@gmail.com',
    copyright: '© 2026 Digital Intelligence Frontiers. All rights reserved.',
    license: 'Licensed under CC BY',
  },
  zh: {
    about: '《数字智能前沿》为立足香港的同行评审、完全开放获取学术期刊。',
    contact: '联系我们',
    email: 'yyyfeiwang@gmail.com',
    copyright: '© 2026 数字智能前沿。版权所有。',
    license: '采用 CC BY 许可协议',
  },
};

export default function Footer({ currentLang }: FooterProps) {
  const content = footerContent[currentLang];

  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-3">
              {currentLang === 'en' ? 'Digital Intelligence Frontiers' : '数字智能前沿'}
            </h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              {content.about}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-base font-bold mb-3">
              {currentLang === 'en' ? 'Quick Links' : '快速链接'}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-primary-foreground/80 hover:text-primary-foreground no-underline">
                  {currentLang === 'en' ? 'Current Issue' : '最新期刊'}
                </a>
              </li>
              <li>
                <a href="/archives" className="text-primary-foreground/80 hover:text-primary-foreground no-underline">
                  {currentLang === 'en' ? 'Archives' : '过刊'}
                </a>
              </li>
              <li>
                <a href="/about" className="text-primary-foreground/80 hover:text-primary-foreground no-underline">
                  {currentLang === 'en' ? 'About' : '期刊简介'}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-bold mb-3">{content.contact}</h4>
            <a
              href={`mailto:${content.email}`}
              className="text-primary-foreground/80 hover:text-primary-foreground text-sm no-underline"
            >
              {content.email}
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <p>{content.copyright}</p>
            <p>{content.license}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
