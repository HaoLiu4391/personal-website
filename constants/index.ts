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
  { title: "Experience", link: "#experience" },
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
    "Cognitive Scientist",
    2000,
    "AI Researcher",
    2000,
    "PhD Student @ UCI",
    2000,
    "Computational Neuroscientist",
    2000,
  ] as (string | number)[],
  motto: `"Use applied science, not as the end to which human beings are to be made the means, but as the means to producing a race of free individuals."`,
  mottoAuthor: "— Aldous Huxley",
  chineseMotto: "惟此独立之精神，自由之思想，历千万祀，与天壤而同久，共三光而永光。",
  description:
    "I study how minds compute — bridging artificial intelligence and cognitive science to understand memory, learning, and social cognition through computational models. I conduct scientific research from a humanistic perspective and through methods of simulation, driven by curiosity.",
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
export const ABOUT_TEXT = `I am a computational cognitive scientist with a background in computer science from Tsinghua University. Now a second year graduate student at NYU Psychology, working closely with Prof. Sebastian Michelmann and Prof. Marcelo Mattar on Memory and Learning.

The goal for my research is to understand how the brain works and what is consciousness. My research interests cover a wide range of fields related to Artificial Intelligence and Deep Learning, including Computer Vision, Natural Language Processing, and Reinforcement Learning. I'm also exploring Neuroscience and Psychology — including Theory of Mind, Spiking Neural Networks, Chaotic Attractors, Consciousness Modelling, Multi-Agent Systems & Game Theory, and Cellular Automata.

I read and learn math and philosophy as well — especially Algebraic Topology, Fractal Geometry, Philosophy of Logic, and Philosophy of Mind (Perception & Consciousness).

Now I'm focusing on computational modeling for distributed memory systems.`;

export const ABOUT_NEWS =
  "I'll join UC Irvine this fall as a PhD Student, co-supervised by Prof. Mark Steyvers and Prof. Aaron Bornstein. Focusing on a lot of new and exciting directions! Feel free to reach out!";

export const HOBBIES = "Travelling, Mountain Hiking, Photography, Reading books and Playing Minecraft. :)";

// ─── Timeline ────────────────────────────────────────────────
export const TIMELINE = [
  { year: "2026 –", title: "PhD in Cognitive Sciences", institution: "University of California, Irvine", description: "Concentration in Cognitive Neuroscience. Co-supervised by Prof. Mark Steyvers and Prof. Aaron Bornstein. Focusing on computational cognitive modeling and new exciting directions.", icon: "🎓" },
  { year: "2024 – 2026", title: "M.S. in Cognitive Psychology", institution: "New York University", description: "GPA: 3.76/4.0. Working with Prof. Sebastian Michelmann and Prof. Marcelo Mattar on memory and learning. Key courses: Cognitive Psychology (A), Neural Network Models of the Brain and Mind (A), Masters Statistics (A).", icon: "📚" },
  { year: "Summer 2023", title: "Summer Research Intern, Brain & Cognitive Sciences", institution: "Massachusetts Institute of Technology", description: "Worked with Prof. Joshua Tenenbaum and Tianmin Shu on multi-agent language communication and Theory of Mind (ToM). Developed the Watch-Talk-Help framework.", icon: "🧠" },
  { year: "2022 – 2024", title: "Research Intern, Multi-Agent Group", institution: "Beijing Institute for General Artificial Intelligence (BIGAI)", description: "Co-developed AdaSociety — an adaptive multi-agent environment with social structures. Published at NeurIPS 2024 Datasets and Benchmarks Track.", icon: "🤖" },
  { year: "2021 – 2024", title: "B.E. in Computer Science & Technology", institution: "Tsinghua University", description: "CS GPA: 3.23/4.0. Core courses: Artificial Neural Networks (4.0), Programming Fundamentals (4.0), OOP (4.0), Autonomous Driving (A+). Supervised by Prof. Hang Su.", icon: "💻" },
  { year: "2020 – 2021", title: "Electronic Engineering (transferred to CS)", institution: "Tsinghua University", description: "Started university in EE before transferring to Computer Science to pursue interests in AI and cognition.", icon: "⚡" },
  { year: "2014 – 2020", title: "High School", institution: "Tianjin No.1 High School", description: "Began research early — supervised by Prof. Mingming Cheng at Nankai University on computer vision. Built a pollution image classification system. Won Outstanding Paper and Outstanding Student awards at YINGCAIJIHUA. Invited student at China Theory Week 2018.", icon: "🏫" },
] as const;

// ─── Research Areas ──────────────────────────────────────────
export const PRIMARY_RESEARCH = [
  {
    title: "Computational Memory Models & Complementary Learning Systems",
    shortTitle: "Memory & Learning",
    description: "My main MA project. I use generative neural network models (Stable Diffusion) to simulate distributed memory representations learned with various levels of encoding strength.",
    details: [
      "Neo-cortical statistical knowledge is modeled by the network weights; hippocampus is implemented as a Modern Hopfield Network that stores starting points to re-generate distributed representations from a low-dimensional latent.",
      "The model performs the Mnemonic Similarity Task (MST) with various depth of encoding. Its output patterns mirror findings from memory impairment in human behavior.",
      "Fine-tuned 'expert' models can learn new information more effectively if the stimulus material pertains to the area of expertise.",
      "I related representational similarity between images in our model's latent representations to the representational similarity in the Natural Scenes Dataset (NSD). Deeper encoding yields better alignment with medial temporal lobe (MTL) regions.",
      "I tested model predictions by designing a human behavioral experiment where participants reconstruct masked images in a modified mnemonic similarity task.",
    ],
    advisors: "Sebastian Michelmann & Marcelo Mattar / NYU",
    period: "Oct 2024 – Present",
    tags: ["Diffusion Models", "Hopfield Networks", "fMRI", "Memory", "PsychoPy"],
    icon: "🧠",
  },
  {
    title: "Multi-Agent Social Cognition & Communication",
    shortTitle: "Multi-Agent & ToM",
    description: "Designing environments and algorithms to study how agents develop social behavior, language communication, and Theory of Mind in cooperative settings.",
    details: [
      "Watch-Talk-Help (MIT): Determined when to engage in natural language communication to align goals between humans and robots. Improved on 'watch-and-help' (Puig et al., 2020) and 'online-watch-and-help' (Puig et al., 2023) by adding LLM-based agents' belief parsing. Defined rules for updating agent beliefs and goals through natural language interaction.",
      "AdaSociety (BIGAI/PKU): Built a grid-world based environment benchmark for studying generalized social behavior. Environment dynamics consist of resources, events, and agents. Agents gather resources to make higher products through engaging events. Deployed MAPPO, MADDPG via RLLib. Published at NeurIPS 2024.",
      "Emergent Communication (Tsinghua): With Prof. Hang Su, worked on multi-agent RL with emergent communication, generalizing beyond traditional referential game settings using cooperative, interactive environments.",
    ],
    advisors: "Joshua Tenenbaum, Tianmin Shu / MIT; Siyuan Qi, Xue Feng / PKU; Hang Su / Tsinghua",
    period: "2022 – Present",
    tags: ["Theory of Mind", "LLM Agents", "MAPPO", "Reinforcement Learning", "NeurIPS"],
    icon: "🤖",
  },
] as const;

export const SECONDARY_RESEARCH = [
  { title: "Hierarchical RL & Meta-RL for Task Representations", description: "Exploring hierarchical reinforcement learning and meta-RL for task representations and goal compositionality in sparse-rewarded environments.", advisors: "Marcelo Mattar & Qihong Lu / NYU", period: "2025", tags: ["Meta-RL", "Hierarchical RL", "Goal Compositionality"] },
  { title: "Citation Network as Climate Model", description: "Building a citation network using arXiv and Google Scholar datasets. Encoding the citation graph in high-dimensional space where nodes represent 'density' and edges represent 'flow' — treating it as a continuous climate model.", advisors: "Self-directed / NYU", period: "Summer 2025", tags: ["Graph Networks", "Citation Analysis", "Topology"] },
  { title: "Blockchain Anomaly Detection (BlockScan)", description: "Built and tested LLM-based anomaly detection on blockchain transactions. Developed multi-threaded data preprocessing pipelines and fine-tuned models with LoRA. Published at NeurIPS 2025.", advisors: "Xinyu Xing & Wenbo Guo / Northwestern", period: "Mar – Jun 2024", tags: ["LLM", "Blockchain", "LoRA", "NeurIPS"] },
  { title: "Stock Prediction with Large-Scale Pretrained Models", description: "Built a transformer-based Chinese financial model by crawling 15GB of market text and designing a fine-tuning pipeline across Macro, Meso, and Micro levels.", advisors: "Maosong Sun / Tsinghua", period: "Feb – Sep 2022", tags: ["NLP", "Transformers", "Finance"] },
  { title: "Self-Supervised Pretraining (Encoder-Decoder-Masker)", description: "Hand-implemented ViT backbone on ImageNet-1K in a self-supervised encoder-decoder-unmasker architecture. Achieved competitive transfer to classification and low-level vision tasks.", advisors: "Self-directed", period: "Dec 2021 – Feb 2022", tags: ["Self-supervised Learning", "ViT", "Computer Vision"] },
  { title: "Question-Answering with Query Mechanisms", description: "Curated 1M+ Zhihu QA pairs, built BM25 and BERT-based retrieval mechanisms, integrated into LongLM pretraining, surpassing baselines on BLEU/ROUGE.", advisors: "Minlie Huang / Tsinghua", period: "Sep 2021 – Nov 2022", tags: ["QA", "Retrieval", "LLM Pretraining"] },
  { title: "Pollution Image Classification (High School)", description: "Crawled 10k+ pollution images, trained an SVM classifier using hand-crafted features (dark channel, information entropy, HSV color histograms). Won Outstanding Paper Award.", advisors: "Mingming Cheng / Nankai University", period: "Dec 2017 – Oct 2019", tags: ["Computer Vision", "SVM", "Feature Engineering"] },
] as const;

// ─── Publications ────────────────────────────────────────────
export const PUBLICATIONS = [
  { title: "BlockScan: Detecting Anomalies in Blockchain Transactions", authors: "Yu, J., Wu, X., **Liu, H.**, Guo, W., & Xing, X.", venue: "The Thirty-ninth Annual Conference on Neural Information Processing Systems (NeurIPS 2025)", year: 2025, type: "conference", links: { paper: "https://arxiv.org/pdf/2410.04039" } },
  { title: "AdaSociety: An Adaptive Environment with Social Structures for Multi-Agent Decision-Making", authors: "Huang, Y., Wang, X., **Liu, H.**, Kong, F., Qin, A., Tang, M., Zhu, S., Bi, M., Qi, S., & Feng, X.", venue: "Advances in Neural Information Processing Systems, 37, Datasets and Benchmarks Track (NeurIPS 2024)", year: 2024, type: "conference", links: { paper: "https://neurips.cc/virtual/2024/poster/97511" } },
  { title: "Learning Distributed Representations with Complementary Components", authors: "**Liu, H.**, Mattar, M., Michelmann, S.", venue: "In Preparation", year: 2025, type: "preprint", links: {} },
];

// ─── Experience ──────────────────────────────────────────────
export const EXPERIENCES = [
  { period: "Oct 2024 – Present", role: "Graduate Research Assistant", organization: "NYU — Michelmann & Mattar Labs", description: "Main MA project: Building computational models of complementary memory systems using Stable Diffusion and Modern Hopfield Networks. Simulating distributed memory representations with varying encoding strength. Designing human behavioral experiments and aligning model representations with fMRI data from the Natural Scenes Dataset. Also exploring hierarchical RL and meta-RL for task representations with Marcelo and Qihong Lu.", tags: ["Diffusion Models", "Hopfield Networks", "fMRI", "Memory", "Behavioral Experiments"] },
  { period: "Jun – Sep 2023", role: "Summer Research Intern", organization: "MIT — Brain & Cognitive Sciences (Tenenbaum Lab)", description: "Developed the Watch-Talk-Help framework — determining when to engage in natural language communication to align human-robot goals. Improved on 'watch-and-help' series by adding LLM-based agent belief parsing. Defined rules for updating agent beliefs and goals through natural language interaction.", tags: ["LLM", "Theory of Mind", "Multi-Agent Communication", "Bayesian Inference"] },
  { period: "Sep 2022 – Jun 2024", role: "Research Intern, Multi-Agent Group", organization: "Beijing Institute for General Artificial Intelligence (BIGAI)", description: "Co-developed AdaSociety — an adaptive grid-world environment with social structures for multi-agent decision-making. Environment dynamics consist of resources, events, and agents. Deployed MAPPO and MADDPG algorithms using RLLib. Published at NeurIPS 2024 Datasets & Benchmarks Track.", tags: ["Multi-Agent RL", "Social Cognition", "RLLib", "NeurIPS 2024"] },
  { period: "Mar – Jun 2024", role: "Remote Research Assistant", organization: "Northwestern University — Xinyu Xing Lab", description: "Contributed to BlockScan — LLM-based blockchain anomaly detection on Solana transactions. Developed multi-threaded data preprocessing pipelines. Trained and tested different LLM models with LoRA fine-tuning. Published at NeurIPS 2025.", tags: ["Blockchain", "LLM", "LoRA", "Anomaly Detection", "NeurIPS 2025"] },
  { period: "Jun – Sep 2022", role: "Remote Research Intern", organization: "UCSD — Zhiting Hu Lab", description: "Developed a unified framework of data & parameter space by learning pairs of data, leveraging CNNs and Transformers for pairwise learning and functional embedding.", tags: ["Representation Learning", "Meta Learning", "CNNs", "Transformers"] },
  { period: "Feb – Sep 2022", role: "Undergraduate Researcher", organization: "Tsinghua University — Maosong Sun Lab", description: "Built a transformer-based Chinese financial model by crawling 15GB of market text and designing a fine-tuning pipeline across Macro, Meso, and Micro levels for stock prediction.", tags: ["NLP", "Transformers", "Financial AI"] },
  { period: "Sep 2021 – Nov 2022", role: "Undergraduate Researcher", organization: "Tsinghua University — Minlie Huang Lab (CoAI Group)", description: "Built a QA model using database querying. Curated 1M+ Zhihu QA pairs, built BM25 and BERT-based retrieval mechanisms, integrated retrieval into LongLM pretraining, surpassing baselines on BLEU/ROUGE.", tags: ["QA Systems", "Retrieval", "LLM", "Pretraining"] },
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
  { title: "南渡北归", author: "岳南", category: "历史" },
  { title: "一百个人的十年", author: "冯骥才", category: "历史" },
  { title: "红太阳是怎样升起的", author: "高华", category: "历史" },
  { title: "The Secrets of Words", author: "Noam Chomsky & Andrea Moro", category: "Linguistics" },
  { title: "Brave New World", author: "Aldous Huxley", category: "Literature" },
  { title: "The Handmaid's Tale", author: "Margaret Atwood", category: "Literature" },
  { title: "Les années d'utopie (1968–1969)", author: "Jean-Claude Carrière", category: "History" },
  { title: "Mathematics: The Loss of Certainty", author: "Morris Kline", category: "Mathematics" },
  { title: "In Other Worlds: SF and the Human Imagination", author: "Margaret Atwood", category: "Literature" },
  { title: "邮编100084", author: "邢周/南飞熊", category: "文学" },
  { title: "En agosto nos vemos", author: "García Márquez", category: "Literature" },
  { title: "Art as Therapy", author: "Alain de Botton", category: "Philosophy" },
  { title: "The Testaments", author: "Margaret Atwood", category: "Literature" },
  { title: "纽约客", author: "白先勇", category: "文学" },
  { title: "故国人民有所思", author: "陈徒手", category: "历史" },
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
  { title: "重走——在公路、河流和驿道上寻找西南联大", author: "杨潇", category: "历史" },
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
