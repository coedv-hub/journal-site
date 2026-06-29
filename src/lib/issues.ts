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
  {
    id: 'volume-1-issue-2',
    volume: 1,
    issue: 2,
    title: 'Volume 1, Issue 2',
    publicationDate: 'July 1, 2026',
    articles: [
      {
        number: '001',
        title:
          'The Binary Opposition and Dialectical Unity between the Disciplinary Essence and the Connotation of PBL: Theoretical Clarification and Practical Orientation of English PBL in Primary School',
        authors: 'Ruoyu Wang, Li Jiang, Shuyan Wang',
        htmlUrl: '/dif/article/2026-v1-i2-001/',
        pdfUrl: '/pdf/dif/2026-v1-i2-001.pdf',
      },
      {
        number: '002',
        title:
          'GAI Empowers the Inheritance, Innovation, and Risk Response of Intangible Cultural Heritage',
        authors: 'Liu Jiaheng',
        htmlUrl: '/dif/article/2026-v1-i2-002/',
        pdfUrl: '/pdf/dif/2026-v1-i2-002.pdf',
      },
      {
        number: '003',
        title:
          'Practical Research on Artificial Intelligence Empowering Mathematics Teaching in Rural Junior High Schools of Guangxi - Taking the Teaching of "Linear Equations with One Variable" as an Example',
        authors: 'Jiahao Liu',
        htmlUrl: '/dif/article/2026-v1-i2-003/',
        pdfUrl: '/pdf/dif/2026-v1-i2-003.pdf',
      },
      {
        number: '004',
        title:
          'Four-Dimensional Integration: An Innovative Path to Cultivate Sequential Thinking in Senior Kindergarten Children Using Bee-Bot Programming Robots from the TPACK Perspective',
        authors: 'Peng Zhou, Jiyue Zhao',
        htmlUrl: '/dif/article/2026-v1-i2-004/',
        pdfUrl: '/pdf/dif/2026-v1-i2-004.pdf',
      },
      {
        number: '005',
        title:
          'Research on the Intrinsic Drivers, Realistic Dilemmas, and Development Pathways of Digital Intelligence-Empowered Transformation of Skill-Oriented Higher Education Institutions',
        authors: 'Huiqian Chen, Jiaxin Liang, Yaxin Wu, Chuchu Chen, Huayang Zhang',
        htmlUrl: '/dif/article/2026-v1-i2-005/',
        pdfUrl: '/pdf/dif/2026-v1-i2-005.pdf',
      },
      {
        number: '006',
        title:
          'The Ecological Value and Spatial Reconstruction of Integrating Green Energy into Modern Commercial Space Design',
        authors: 'Yuntao Cui, Di Zhu',
        htmlUrl: '/dif/article/2026-v1-i2-006/',
        pdfUrl: '/pdf/dif/2026-v1-i2-006.pdf',
      },
      {
        number: '007',
        title:
          'Synergistic AI Governance Cooperation Between China and Kazakhstan: Pathways for Cross-Border Digital Collaboration',
        authors: 'Wulan Nuerlai',
        htmlUrl: '/dif/article/2026-v1-i2-007/',
        pdfUrl: '/pdf/dif/2026-v1-i2-007.pdf',
      },
      {
        number: '008',
        title:
          'Heart-Mind Prioritized and Narrative-Constrained Intelligent Recommendation Decision Framework',
        authors: 'Xin Xu, DongRi Bi',
        htmlUrl: '/dif/article/2026-v1-i2-008/',
        pdfUrl: '/pdf/dif/2026-v1-i2-008.pdf',
      },
      {
        number: '009',
        title:
          'Digital Intelligence and Algorithmic Animaticity: Data Indexicality, Synthetic Bodies and Embodied Viewing in AI-Generated Moving Images',
        authors: 'Hao-Liang Huang',
        htmlUrl: '/dif/article/2026-v1-i2-009/',
        pdfUrl: '/pdf/dif/2026-v1-i2-009.pdf',
      },
    ],
  },
];
