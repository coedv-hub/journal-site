import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

const editorialContent = {
  en: {
    pageTitle: 'Editorial Board',
    description:
      'The editorial board brings together scholars working across artificial intelligence, data science, digital education, and international economics.',
    membersLabel: 'Board Members',
    members: [
      {
        name: 'Zhiqiang Guo',
        credentials: 'PhD',
        position:
          'Faculty Member, School of Information, Sichuan Vocational College of Finance and Economics',
        bio:
          'Dr. Guo holds dual master’s degrees in Systems Analysis and Management and English–Russian Translation from the Siberian State University of Science and Technology, Russia. His teaching and research focus on big data technology, machine learning, evolutionary computation, and intelligent data analytics. He has led or participated in more than ten provincial, municipal, and departmental research projects, published over ten academic papers, and served as chief editor of an artificial intelligence textbook series. His recent work explores applications of data intelligence in education, industry, and social governance.',
      },
      {
        name: 'Mengyuan Cui',
        credentials: 'PhD in Economics',
        position:
          'Deputy Director, Department of International Business, School of International Economics and Trade, Xinjiang University of Finance and Economics',
        bio:
          'Dr. Cui is a lecturer and master’s supervisor. She is also a researcher at the Ministry of Education’s Kazakhstan Research Center and the Research Center for China (Xinjiang)–Central Asia Regional Economic Cooperation, a key humanities and social sciences research base for universities in Xinjiang. She has led or participated in four provincial, ministerial, and departmental research projects and published more than ten academic papers, including four in core journals. Her teaching and supervision have received awards in national and regional competitions in economics, management, and international trade.',
      },
      {
        name: 'Jingjing Ma',
        credentials: 'MSc, PhD Candidate',
        position:
          'Lecturer, Big Data Program, School of Information, Sichuan Vocational College of Finance and Economics',
        bio:
          'Ms. Ma is pursuing a doctorate in computer science at Sichuan University. Her research and teaching span big data technology, computer vision, intelligent data analytics, and digital finance. She serves as a reviewer for the International Journal of Imaging Systems and Technology and as a session chair for ISAI 2026. She has led seven research projects, contributed to more than twenty projects supported by organizations including the Ministry of Education and the Ministry of Industry and Information Technology, and published seven SCI- or EI-indexed papers as first or corresponding author. Her work in vocational education has received provincial and institutional teaching awards.',
      },
    ],
  },
  zh: {
    pageTitle: '编委会',
    description:
      '本刊编委会由人工智能、数据科学、数字教育与国际经济等领域的学者共同组成。',
    membersLabel: '编委成员',
    members: [
      {
        name: '郭志强',
        credentials: '博士',
        position: '四川财经职业学院信息学院专任教师',
        bio:
          '毕业于俄罗斯西伯利亚国立科技大学计算机科学与技术专业，获系统分析与管理、英俄翻译硕士研究生双学位。主要从事大数据技术、机器学习、进化计算与数据智能分析等领域的教学与研究工作。近年来，主持及参与省市厅级科研项目十余项，发表学术论文十余篇，主编人工智能系列教材1部。长期关注数据智能技术在教育、产业及社会治理领域的应用实践，并多次参加国内外学术会议与学术交流。',
      },
      {
        name: '崔梦媛',
        credentials: '经济学博士',
        position: '新疆财经大学国际经贸学院国际商务系副主任、讲师、硕士生导师',
        bio:
          '教育部国别和区域研究中心——哈萨克斯坦研究中心研究员，新疆高校人文社科重点研究基地中国（新疆）与中亚区域经济合作研究中心研究员。主持及参与省部级和厅局级课题共四项，公开发表学术论文10余篇，其中核心论文4篇。曾获全国高校经管类实验教学案例大赛西北赛区优秀奖、全国商业精英挑战赛优秀指导教师、全国单证大赛优秀指导教师等奖项。',
      },
      {
        name: '马京晶',
        credentials: '硕士、讲师、博士在读',
        position: '四川财经职业学院信息学院大数据专业专任教师',
        bio:
          '四川大学计算机博士在读，担任《International Journal of Imaging Systems and Technology》SCI期刊审稿人、ISAI 2026国际会议分会主席。主要从事大数据技术、计算机视觉、智能数据分析与数字财经交叉领域的教学与研究工作。近年来，主持各级课题7项，参与教育部、工信部等各级课题20余项，以第一作者或通讯作者发表SCI、EI检索论文7篇，副主编、参编专业教材2本。曾获四川省教学成果奖一等奖、校级教学成果特等奖及四川省职业院校教学能力大赛三等奖。',
      },
    ],
  },
};

export default function Editorial() {
  const [currentLang, setCurrentLang] = useState<'en' | 'zh'>('en');
  const content = editorialContent[currentLang];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header currentLang={currentLang} onLangChange={setCurrentLang} currentPage="/editorial" />

      <main className="flex-1">
        <section className="bg-primary text-primary-foreground py-12">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{content.pageTitle}</h1>
            <p className="text-lg text-primary-foreground/90 max-w-3xl">{content.description}</p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-end justify-between gap-4 pb-5 border-b-2 border-primary">
                <h2 className="text-2xl md:text-3xl font-bold text-primary">
                  {content.membersLabel}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {content.members.length}{' '}
                  {currentLang === 'en' ? 'members' : '位成员'}
                </p>
              </div>

              <div className="divide-y divide-border">
                {content.members.map((member, index) => (
                  <article
                    key={member.name}
                    className="grid grid-cols-1 md:grid-cols-[64px_240px_1fr] gap-4 md:gap-8 py-8"
                  >
                    <p className="text-sm font-bold text-accent">
                      {String(index + 1).padStart(2, '0')}
                    </p>

                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-1">{member.name}</h3>
                      <p className="text-sm font-medium text-accent mb-3">{member.credentials}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {member.position}
                      </p>
                    </div>

                    <p className="text-muted-foreground leading-7">{member.bio}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer currentLang={currentLang} />
    </div>
  );
}

