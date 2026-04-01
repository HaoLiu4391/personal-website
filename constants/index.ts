import {
  RxGithubLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { SiGooglescholar } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

// ─── Navigation ──────────────────────────────────────────────
export const NAV_LINKS = [
  { title: "About", link: "#about" },
  { title: "Research", link: "#research" },
  { title: "Publications", link: "#publications" },
  { title: "Skills", link: "#skills" },
  { title: "Books", link: "#books" },
  { title: "CV", link: "#cv" },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/HaoLiu4391/personal-website",
};

// ─── Hero ────────────────────────────────────────────────────
export const HERO_CONTENT = {
  name: "Hao Liu",
  chineseName: "刘好",
  roles: [
    "Memory",
    2000,
    "Cognition",
    2000,
    "Curiosity",
    2000,
    "Simulation",
    2000,
    "Consciousness",
    2000,
  ] as (string | number)[],
  motto: `"Use applied science, not as the end to which human beings are to be made the means, but as the means to producing a race of free individuals."`,
  mottoAuthor: "— Aldous Huxley",
  chineseMotto: "惟此独立之精神，自由之思想，历千万祀，与天壤而同久，共三光而永光。",
  description:
    "I study how minds compute — bridging artificial intelligence and cognitive science to understand memory, learning, and social cognition through computational models.",
  email: "hl4220@nyu.edu",
  wechat: "Jeffery0101010101",
};

// ─── Social Links ────────────────────────────────────────────
export const SOCIALS = [
  { name: "GitHub", icon: RxGithubLogo, link: "https://github.com/haoliu4391" },
  { name: "Twitter", icon: RxTwitterLogo, link: "https://x.com/hao_liu_cogsci" },
  { name: "Google Scholar", icon: SiGooglescholar, link: "https://scholar.google.com/citations?user=PLACEHOLDER" },
  { name: "Email", icon: HiOutlineMail, link: "mailto:hl4220@nyu.edu" },
] as const;

// ─── About ───────────────────────────────────────────────────
export const ABOUT_TEXT = `I'm a graduate researcher in computational cognitive science, with a background in computer science from Tsinghua University. Currently a second year student at NYU Psychology, working closely with Prof. Sebastian Michelmann and Prof. Marcelo Mattar on Memory and Learning.

The goal for my research is to understand how the brain works and what is consciousness. My research interests cover a wide range of fields related to Artificial Intelligence and Deep Learning, including Computer Vision, Natural Language Processing, and Reinforcement Learning. I'm also exploring Neuroscience and Psychology — including Theory of Mind, Spiking Neural Networks, Chaotic Attractors, Consciousness Modelling, Multi-Agent Systems & Game Theory, and Cellular Automata.

I read and learn math and philosophy as well — especially Algebraic Topology, Fractal Geometry, Philosophy of Logic, and Philosophy of Mind (Perception & Consciousness).

Now I'm focusing on computational modeling for distributed memory systems.`;

export const ABOUT_NEWS =
  "I'll join UC Irvine this fall as a PhD Student, co-supervised by Prof. Mark Steyvers and Prof. Aaron Bornstein. Focusing on a lot of new and exciting directions! Feel free to reach out!";

export const HOBBIES = "Travelling, Mountain Hiking, Photography, Reading books and Playing Minecraft. :)";

// ─── Timeline ────────────────────────────────────────────────
export const TIMELINE = [
  { year: "2026 –", title: "PhD in Cognitive Sciences", institution: "University of California, Irvine", description: "Concentration in Cognitive Neuroscience. Co-supervised by Prof. Mark Steyvers and Prof. Aaron Bornstein.", icon: "🎓" },
  { year: "2024 – 2026", title: "M.S. in Cognitive Psychology", institution: "New York University", description: "Working with Prof. Sebastian Michelmann and Prof. Marcelo Mattar on memory and learning.", icon: "📚" },
  { year: "Summer 2023", title: "Summer Research Intern, Brain & Cognitive Sciences", institution: "Massachusetts Institute of Technology", description: "Worked with Prof. Joshua Tenenbaum and Tianmin Shu on multi-agent language communication and Theory of Mind (ToM). Developed the Watch-Talk-Help framework.", icon: "🧠" },
  { year: "2022 – 2024", title: "Research Intern, Multi-Agent Group", institution: "Beijing Institute for General Artificial Intelligence (BIGAI)", description: "Co-developed AdaSociety — an adaptive multi-agent environment with social structures. Published at NeurIPS 2024 Datasets and Benchmarks Track.", icon: "🤖" },
  { year: "2021 – 2024", title: "B.E. in Computer Science & Technology", institution: "Tsinghua University", description: "Supervised by Prof. Hang Su. Focused on AI and neural networks.", icon: "💻" },
  { year: "2020 – 2021", title: "Electronic Engineering (transferred to CS)", institution: "Tsinghua University", description: "Started university in EE before transferring to Computer Science to pursue interests in AI and cognition.", icon: "⚡" },
  { year: "2014 – 2020", title: "High School", institution: "Tianjin No.1 High School", description: "Began research early — supervised by Prof. Mingming Cheng at Nankai University on computer vision. Built a pollution image classification system. Won Outstanding Paper and Outstanding Student awards at YINGCAIJIHUA. Invited student at China Theory Week 2018.", icon: "🏫" },
] as const;

// ─── Research Areas ──────────────────────────────────────────
export const RESEARCH_FOCUS = [
  { label: "Computational Memory & Learning", icon: "🧠" },
  { label: "Multi-Agent Systems & Social Cognition", icon: "🤖" },
  { label: "Theory of Mind & Communication", icon: "💬" },
  { label: "Reinforcement Learning & Meta-Learning", icon: "🎯" },
  { label: "Consciousness & Philosophy of Mind", icon: "🔮" },
  { label: "NLP & Language Models", icon: "📝" },
] as const;

export const RESEARCH_PROJECTS = [
  {
    title: "Learning Distributed Representations with Complementary Components",
    description: "Main MA project. Using Stable Diffusion to simulate distributed memory representations. Neo-cortical knowledge modeled by network weights; hippocampus as Modern Hopfield Network.",
    details: [
      "The model performs the Mnemonic Similarity Task (MST) with various depth of encoding. Its output patterns mirror findings from memory impairment in human behavior.",
      "Fine-tuned 'expert' models can learn new information more effectively if the stimulus material pertains to the area of expertise.",
      "Related representational similarity in model's latent space to the Natural Scenes Dataset (NSD). Deeper encoding yields better alignment with medial temporal lobe (MTL) regions.",
      "Tested model predictions by designing a human behavioral experiment where participants reconstruct masked images.",
    ],
    advisors: "Sebastian Michelmann & Marcelo Mattar / NYU",
    period: "Oct 2024 – Present",
    tags: ["Diffusion Models", "Hopfield Networks", "fMRI", "Memory", "PsychoPy"],
  },
  {
    title: "Watch-Talk-Help: Multi-Agent Communication with Theory of Mind",
    description: "Determining when to engage in natural language communication to align human-robot goals. Added LLM-based agent belief parsing to the watch-and-help framework.",
    details: [
      "Improved on 'watch-and-help' (Puig et al., 2020) and 'online-watch-and-help' (Puig et al., 2023) by adding LLM-based agents' belief parsing.",
      "Defined rules for updating agent beliefs and goals through natural language interaction.",
    ],
    advisors: "Tianmin Shu & Joshua Tenenbaum / MIT",
    period: "Jun – Sep 2023",
    tags: ["LLM", "Theory of Mind", "Multi-Agent"],
  },
  {
    title: "AdaSociety: Adaptive Environment for Multi-Agent Decision-Making",
    description: "Grid-world environment benchmark for studying generalized social behavior. Dynamics consist of resources, events, and agents. Published at NeurIPS 2024.",
    details: [
      "Agents gather resources to make higher products through engaging events.",
      "Deployed MAPPO, MADDPG via RLLib for benchmarking.",
    ],
    advisors: "Siyuan Qi, Xue Feng / PKU & BIGAI",
    period: "Jun 2023 – Jun 2024",
    tags: ["MAPPO", "Social Cognition", "RLLib", "NeurIPS 2024"],
  },
  {
    title: "Emergent Communication in Multi-Agent RL",
    description: "Generalizing beyond traditional referential game settings using cooperative, interactive environments for emergent language communication.",
    details: [],
    advisors: "Hang Su / Tsinghua",
    period: "2023 – 2024",
    tags: ["Emergent Communication", "RL", "Language"],
  },
  {
    title: "Hierarchical RL & Meta-RL for Task Representations",
    description: "Exploring hierarchical reinforcement learning and meta-RL for task representations and goal compositionality in sparse-rewarded environments.",
    details: [],
    advisors: "Marcelo Mattar & Qihong Lu / NYU",
    period: "2025",
    tags: ["Meta-RL", "Hierarchical RL"],
  },
  {
    title: "Citation Network as Climate Model",
    description: "Building a citation network using arXiv and Google Scholar. Encoding the graph in high-dimensional space where nodes = density, edges = flow — a continuous climate model analogy.",
    details: [],
    advisors: "Self-directed / NYU",
    period: "Summer 2025",
    tags: ["Graph Networks", "Topology"],
  },
  {
    title: "BlockScan: Blockchain Anomaly Detection",
    description: "LLM-based anomaly detection on Solana blockchain transactions. Multi-threaded preprocessing, LoRA fine-tuning. Published at NeurIPS 2025.",
    details: [],
    advisors: "Xinyu Xing & Wenbo Guo / Northwestern",
    period: "Mar – Jun 2024",
    tags: ["LLM", "Blockchain", "NeurIPS 2025"],
  },
  {
    title: "Chinese Financial Model for Stock Prediction",
    description: "Transformer-based model trained on 15GB crawled market text. Fine-tuning pipeline across Macro, Meso, and Micro levels.",
    details: [],
    advisors: "Maosong Sun / Tsinghua",
    period: "Feb – Sep 2022",
    tags: ["NLP", "Transformers", "Finance"],
  },
  {
    title: "Self-Supervised ViT on ImageNet-1K",
    description: "Hand-implemented ViT backbone in encoder-decoder-unmasker architecture. Competitive transfer to classification and low-level vision.",
    details: [],
    advisors: "Self-directed",
    period: "Dec 2021 – Feb 2022",
    tags: ["Self-supervised", "ViT", "Computer Vision"],
  },
  {
    title: "QA Model with BM25 & BERT Retrieval",
    description: "Curated 1M+ Zhihu QA pairs. Built BM25 and BERT retrieval, integrated into LongLM pretraining. Surpassed baselines on BLEU/ROUGE.",
    details: [],
    advisors: "Minlie Huang / Tsinghua",
    period: "Sep 2021 – Nov 2022",
    tags: ["QA", "Retrieval", "LLM"],
  },
  {
    title: "Pollution Image Classification",
    description: "High school project. Crawled 10k+ images, SVM classifier with hand-crafted features. Won Outstanding Paper Award at YINGCAIJIHUA.",
    details: [],
    advisors: "Mingming Cheng / Nankai University",
    period: "Dec 2017 – Oct 2019",
    tags: ["Computer Vision", "SVM"],
  },
];

// ─── Publications ────────────────────────────────────────────
export const PUBLICATIONS = [
  { title: "BlockScan: Detecting Anomalies in Blockchain Transactions", authors: "Yu, J., Wu, X., **Liu, H.**, Guo, W., & Xing, X.", venue: "The Thirty-ninth Annual Conference on Neural Information Processing Systems (NeurIPS 2025)", year: 2025, type: "conference", links: { paper: "https://arxiv.org/pdf/2410.04039" } },
  { title: "AdaSociety: An Adaptive Environment with Social Structures for Multi-Agent Decision-Making", authors: "Huang, Y., Wang, X., **Liu, H.**, Kong, F., Qin, A., Tang, M., Zhu, S., Bi, M., Qi, S., & Feng, X.", venue: "Advances in Neural Information Processing Systems, 37, Datasets and Benchmarks Track (NeurIPS 2024)", year: 2024, type: "conference", links: { paper: "https://neurips.cc/virtual/2024/poster/97511" } },
  { title: "Learning Distributed Representations with Complementary Components", authors: "**Liu, H.**, Mattar, M., Michelmann, S.", venue: "In Preparation", year: 2025, type: "preprint", links: {} },
];

// ─── Skills ──────────────────────────────────────────────────
export const SKILL_CATEGORIES = [
  { title: "Programming Languages", skills: ["Python", "C", "C++", "CUDA", "JavaScript", "HTML/CSS", "FPGA"] },
  { title: "ML / Research Frameworks", skills: ["PyTorch", "Ray / RLLib", "Triton", "PsychoPy", "Gym", "MATLAB"] },
  { title: "Research Areas", skills: ["Computational Neuroscience", "Deep Learning & Neural Networks", "Reinforcement Learning", "Cognitive Psychology", "Natural Language Processing", "Computer Vision", "Multi-Agent Systems", "Theory of Mind", "Consciousness Modelling", "Algebraic Topology"] },
  { title: "Languages", skills: ["Mandarin Chinese (Native)", "English (TOEFL 113/120)"] },
];

export const COURSES = [
  { name: "Stanford CS231n", topic: "Computer Vision", period: "Sep–Dec 2020" },
  { name: "Introduction to RL", topic: "Reinforcement Learning", period: "May–Aug 2021" },
  { name: "Stanford CS224w", topic: "Graph Neural Networks", period: "May–Aug 2021" },
  { name: "UCB CS285", topic: "Deep Reinforcement Learning", period: "May–Aug 2021" },
  { name: "Next Step of ML", topic: "Machine Learning", period: "Jan–Feb 2021" },
  { name: "Stanford CS224n", topic: "NLP with Deep Learning", period: "Jan–Feb 2022" },
  { name: "Geometric Deep Learning", topic: "Geometry & DL", period: "Jun–Sep 2022" },
  { name: "Stanford CS330", topic: "Deep Multi-Task & Meta Learning", period: "Sep–Dec 2022" },
  { name: "Categories for AI", topic: "Category Theory & AI", period: "Mar–Dec 2023" },
];

// ─── Reading List ────────────────────────────────────────────
export const BOOKS = [
  { title: "The Emotion Machine", author: "Marvin Minsky", category: "AI & Mind" },
  { title: "Descartes' Error: Emotion, Reason and the Human Brain", author: "Antonio Damasio", category: "Neuroscience" },
  { title: "Letters Written During a Short Residence in Sweden, Norway and Denmark", author: "Mary Wollstonecraft", category: "Literature" },
  { title: "Discours préliminaire de l'Encyclopédie", author: "D'Alembert", category: "Philosophy" },
  { title: "南渡北归", author: "岳南", category: "History / 历史" },
  { title: "一百个人的十年", author: "冯骥才", category: "History / 历史" },
  { title: "红太阳是怎样升起的", author: "高华", category: "History / 历史" },
  { title: "The Secrets of Words", author: "Noam Chomsky & Andrea Moro", category: "Linguistics" },
  { title: "Brave New World", author: "Aldous Huxley", category: "Literature" },
  { title: "The Handmaid's Tale", author: "Margaret Atwood", category: "Literature" },
  { title: "Les années d'utopie (1968–1969)", author: "Jean-Claude Carrière", category: "History / 历史" },
  { title: "Mathematics: The Loss of Certainty", author: "Morris Kline", category: "Mathematics" },
  { title: "In Other Worlds: SF and the Human Imagination", author: "Margaret Atwood", category: "Literature" },
  { title: "邮编100084", author: "邢周/南飞熊", category: "文学" },
  { title: "En agosto nos vemos", author: "García Márquez", category: "Literature" },
  { title: "Art as Therapy", author: "Alain de Botton", category: "Philosophy" },
  { title: "The Testaments", author: "Margaret Atwood", category: "Literature" },
  { title: "纽约客", author: "白先勇", category: "文学" },
  { title: "故国人民有所思", author: "陈徒手", category: "History / 历史" },
  { title: "Active Inference: The Free Energy Principle in Mind, Brain, and Behavior", author: "Thomas Parr, Giovanni Pezzulo, Karl J. Friston", category: "Neuroscience" },
  { title: "Respiración artificial", author: "Ricardo Piglia", category: "Literature" },
  { title: "What Are You Looking At? 150 Years of Modern Art", author: "Will Gompertz", category: "Art" },
  { title: "The Lost Salt Gift of Blood", author: "Alistair MacLeod", category: "Literature" },
  { title: "The Psychology of Invention in the Mathematical Field", author: "Jacques Hadamard", category: "Mathematics" },
  { title: "聋哑时代", author: "双雪涛", category: "文学" },
  { title: "比山更高", author: "宋明蔚", category: "文学" },
  { title: "\"读书的料\"及其文化生产", author: "程猛", category: "社会学" },
  { title: "当代小说二十家", author: "王德威", category: "文学" },
  { title: "Eclaircissements", author: "Michel Serres & Bruno Latour", category: "Philosophy" },
  { title: "Exhalation", author: "Ted Chiang", category: "Literature" },
  { title: "重走——在公路、河流和驿道上寻找西南联大", author: "杨潇", category: "History / 历史" },
  { title: "遍地风流", author: "阿城", category: "文学" },
  { title: "Brief History of the Paradox", author: "Roy Sorensen", category: "Philosophy" },
  { title: "Philosophy: A Historical Survey with Essential Readings", author: "Stumpf & Fieser", category: "Philosophy" },
  { title: "外面是夏天", author: "金爱灿", category: "文学" },
  { title: "The Phenomenological Mind", author: "Shaun Gallagher", category: "Philosophy" },
  { title: "我的二本学生", author: "黄灯", category: "社会学" },
  { title: "平原上的摩西", author: "双雪涛", category: "文学" },
  { title: "The Revelations", author: "Erik Hoel", category: "Neuroscience" },
  { title: "Nous n'avons jamais été modernes", author: "Bruno Latour", category: "Philosophy" },
  { title: "The River of Consciousness", author: "Oliver Sacks", category: "Neuroscience" },
];

// ─── Professor Links ────────────────────────────────────────
export const PROFESSOR_LINKS: Record<string, string> = {
  "Sebastian Michelmann": "https://as.nyu.edu/faculty/sebastian-michelmann.html",
  "Marcelo Mattar": "https://as.nyu.edu/faculty/marcelo-mattar.html",
  "Hang Su": "https://www.cs.tsinghua.edu.cn/csen/info/1313/4403.htm",
  "Joshua Tenenbaum": "https://web.mit.edu/cocosci/josh.html",
  "Tianmin Shu": "https://www.tshu.io/",
  "Mark Steyvers": "https://steyvers.socsci.uci.edu/",
  "Aaron Bornstein": "https://aaron.bornstein.org/",
  "Mingming Cheng": "https://mmcheng.net/cmm/",
  "Xinyu Xing": "http://xinyuxing.org/",
  "Wenbo Guo": "https://henrygwb.github.io/",
};

// ─── Footer ──────────────────────────────────────────────────
export const FOOTER_DATA = [
  { title: "Academic", data: [
    { name: "Google Scholar", icon: SiGooglescholar, link: "https://scholar.google.com/citations?user=PLACEHOLDER" },
    { name: "GitHub", icon: RxGithubLogo, link: "https://github.com/haoliu4391" },
  ]},
  { title: "Social", data: [
    { name: "Twitter / X", icon: RxTwitterLogo, link: "https://x.com/hao_liu_cogsci" },
    { name: "LinkedIn", icon: RxLinkedinLogo, link: "https://linkedin.com" },
  ]},
  { title: "Contact", data: [
    { name: "hl4220@nyu.edu", icon: HiOutlineMail, link: "mailto:hl4220@nyu.edu" },
  ]},
] as const;
