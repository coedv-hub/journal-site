export interface Article {
  number: string;
  title: string;
  authors: string;
  htmlUrl: string;
  pdfUrl: string;
}

export interface Issue {
  id: string;
  volume: number;
  issue: number;
  title: string;
  publicationDate: string;
  articles: Article[];
}

export const issues: Issue[] = [
  {
    id: 'volume-1-issue-1',
    volume: 1,
    issue: 1,
    title: 'Volume 1, Issue 1',
    publicationDate: 'April 1, 2026',
    articles: [
      {
        number: '001',
        title:
          'AI-Enabled Cultural Tourism in Sichuan: The Bashu Cultural Narrative Chain and Intelligent Resource Matching',
        authors: 'Yifei Wang',
        htmlUrl: '/dif/article/2026-v1-i1-001/',
        pdfUrl: '/pdf/dif/001.pdf',
      },
      {
        number: '002',
        title:
          'Research on the Construction of a Data-Driven Evaluation System for General Artificial Intelligence Courses in Higher Vocational Education',
        authors: 'Tan Chaoying, Ma Jingjing, Guo Zhiqiang',
        htmlUrl: '/dif/article/2026-v1-i1-002/',
        pdfUrl: '/pdf/dif/002.pdf',
      },
      {
        number: '003',
        title: 'The Value and Practical Approaches of Artificial Intelligence in Enhancing English Teaching',
        authors: 'Li Jiang, Ruoyu Wang, Meng Wei, Wei Wang, Minzhen Du',
        htmlUrl: '/dif/article/2026-v1-i1-003/',
        pdfUrl: '/pdf/dif/003.pdf',
      },
      {
        number: '004',
        title: 'Application and Practical Exploration of Artificial Intelligence in College Mathematics Teaching',
        authors: 'Xiangrui Meng, Ke Wang',
        htmlUrl: '/dif/article/2026-v1-i1-004/',
        pdfUrl: '/pdf/dif/004.pdf',
      },
      {
        number: '005',
        title:
          "From Quantitative Indexes' Stability to that of Stylometry: A Homogeneous Texts Approach to EFL Academic Writing",
        authors: 'Youjun Tang, Xiaomei Ma',
        htmlUrl: '/dif/article/2026-v1-i1-005/',
        pdfUrl: '/pdf/dif/005.pdf',
      },
      {
        number: '006',
        title:
          'Review and Reconstruction of Autonomous Vehicle Governance Frameworks from a Comparative Law Perspective',
        authors: 'Chenyang Guo, Tuolihong Dailian',
        htmlUrl: '/dif/article/2026-v1-i1-006/',
        pdfUrl: '/pdf/dif/006.pdf',
      },
      {
        number: '007',
        title:
          'Supervised Pre-trained Model Fine-tuning Chinese Corpus for Gender Bias Detection, Classification and Mitigation Challenge',
        authors: 'Kongqiang Wang, Peng Zhang, Qingli Tan',
        htmlUrl: '/dif/article/2026-v1-i1-007/',
        pdfUrl: '/pdf/dif/007.pdf',
      },
      {
        number: '008',
        title:
          'Realistic Challenges and Optimization Strategies for High-Quality Development of Cross-Border E-Commerce in Xinjiang, China in the Context of Digital Technology',
        authors: 'Cui Mengyuan, Yang Tianxiang',
        htmlUrl: '/dif/article/2026-v1-i1-008/',
        pdfUrl: '/pdf/dif/008.pdf',
      },
    ],
  },
];
