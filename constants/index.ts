import {
  RxGithubLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaOrcid, FaGraduationCap } from "react-icons/fa6";
import { SiGooglescholar } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

// ─── Navigation ──────────────────────────────────────────────
export const NAV_LINKS = [
  { title: "About", link: "#about" },
  { title: "Research", link: "#research" },
  { title: "Publications", link: "#publications" },
  { title: "Experience", link: "#experience" },
  { title: "Skills", link: "#skills" },
  { title: "CV", link: "#cv" },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/haoliu4391/personal-website",
};

// ─── Hero ────────────────────────────────────────────────────
export const HERO_CONTENT = {
  name: "Hao Liu",
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
  description:
    "I study how minds compute — bridging artificial intelligence and cognitive science to understand memory, learning, and social cognition through computational models.",
  email: "hl4220@nyu.edu",
};

// ─── Social Links ────────────────────────────────────────────
export const SOCIALS = [
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/haoliu4391",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://x.com/hao_liu_cogsci",
  },
  {
    name: "Google Scholar",
    icon: SiGooglescholar,
    link: "https://scholar.google.com/citations?user=PLACEHOLDER",
  },
  {
    name: "Email",
    icon: HiOutlineMail,
    link: "mailto:hl4220@nyu.edu",
  },
] as const;

// ─── About / Timeline ────────────────────────────────────────
export const ABOUT_TEXT =
  "I am a computational cognitive scientist with a background in computer science from Tsinghua University. My research focuses on building formal models that connect abstract computation to the capacities and constraints of human cognition — spanning memory systems, multi-agent decision-making, and social reasoning. I believe in the unity of formal models and natural phenomena, guided by standards of generalizability, coherence, and realism.";

export const TIMELINE = [
  {
    year: "2026 –",
    title: "PhD in Cognitive Sciences",
    institution: "University of California, Irvine",
    description: "Advisors: Mark Steyvers & Aaron Bornstein. Focus on computational cognitive modeling.",
    icon: "🎓",
  },
  {
    year: "2024 – 2026",
    title: "M.S. in Cognitive Psychology",
    institution: "New York University",
    description: "GPA: 3.76/4.0. Research on distributed memory representations with Sebastian Michelmann & Marcelo Mattar.",
    icon: "📚",
  },
  {
    year: "2023",
    title: "Visiting Student, Brain & Cognitive Sciences",
    institution: "Massachusetts Institute of Technology",
    description: "Worked with Joshua Tenenbaum & Tianmin Shu on multi-agent communication and Theory of Mind.",
    icon: "🧠",
  },
  {
    year: "2020 – 2024",
    title: "B.E. in Computer Science & Technology",
    institution: "Tsinghua University",
    description: "Focused on AI, neural networks, and autonomous driving. GPA: 3.23/4.0.",
    icon: "💻",
  },
] as const;

// ─── Research Areas ──────────────────────────────────────────
export const RESEARCH_AREAS = [
  {
    title: "Computational Memory Models",
    description:
      "Using generative models (Stable Diffusion) to simulate distributed memory representations. Modeling neocortical statistical knowledge and hippocampal episodic memory with Modern Hopfield Networks.",
    icon: "🧠",
    tags: ["Complementary Learning", "Hopfield Networks", "Diffusion Models"],
  },
  {
    title: "Multi-Agent Decision Making",
    description:
      "Designing environments and algorithms for studying multi-agent social behavior, communication, and adaptive decision-making with reinforcement learning.",
    icon: "🤖",
    tags: ["MAPPO", "Social Cognition", "Theory of Mind", "LLM Agents"],
  },
  {
    title: "AI × Cognitive Science",
    description:
      "Bridging artificial and biological intelligence — investigating how computational frameworks (category theory, information theory, Bayesian inference) illuminate human cognition.",
    icon: "🔬",
    tags: ["Bayesian Inference", "Neural Networks", "Formal Models"],
  },
] as const;

// ─── Publications ────────────────────────────────────────────
export const PUBLICATIONS = [
  {
    title: "BlockScan: Detecting Anomalies in Blockchain Transactions",
    authors: "Yu, J., Wu, X., Liu, H., Guo, W., & Xing, X.",
    venue: "The Thirty-ninth Annual Conference on Neural Information Processing Systems (NeurIPS 2025)",
    year: 2025,
    type: "conference" as const,
    links: {
      paper: "#",
      code: "#",
    },
  },
  {
    title:
      "AdaSociety: An Adaptive Environment with Social Structures for Multi-Agent Decision-Making",
    authors:
      "Huang, Y., Wang, X., Liu, H., Kong, F., Qin, A., Tang, M., Zhu, S., Bi, M., Qi, S., & Feng, X.",
    venue:
      "Advances in Neural Information Processing Systems, 37, Datasets and Benchmarks Track (NeurIPS 2024)",
    year: 2024,
    type: "conference" as const,
    links: {
      paper: "#",
      code: "#",
    },
  },
  {
    title:
      "Learning Distributed Representations with Complementary Components",
    authors: "Liu, H., Mattar, M., Michelmann, S.",
    venue: "In Preparation",
    year: 2025,
    type: "preprint" as const,
    links: {},
  },
] as const;

// ─── Experience ──────────────────────────────────────────────
export const EXPERIENCES = [
  {
    period: "Oct 2024 – Present",
    role: "Graduate Research Assistant",
    organization: "NYU — Michelmann & Mattar Labs",
    description:
      "Building computational models of complementary memory systems using diffusion models and Modern Hopfield Networks. Designing human behavioral experiments and aligning model representations with fMRI data from the Natural Scenes Dataset.",
    tags: ["Diffusion Models", "Memory", "fMRI", "PsychoPy"],
  },
  {
    period: "Jun – Sep 2023",
    role: "Research Intern",
    organization: "MIT — Brain & Cognitive Sciences",
    description:
      "Developed LLM-based multi-agent communication framework integrating Bayesian Theory of Mind. Worked on the Watch-Talk-Help project with Prof. Joshua Tenenbaum and Tianmin Shu.",
    tags: ["LLM", "Theory of Mind", "Multi-Agent", "Bayesian"],
  },
  {
    period: "Sep 2022 – Jun 2024",
    role: "Research Intern",
    organization: "BIGAI — Multi-Agent Group",
    description:
      "Co-developed AdaSociety, an adaptive multi-agent environment with social structures. Deployed MAPPO and MADDPG algorithms using RLLib for benchmarking.",
    tags: ["Reinforcement Learning", "RLLib", "NeurIPS"],
  },
  {
    period: "Mar – Jun 2024",
    role: "Remote Research Assistant",
    organization: "Northwestern University — Xinyu Xing Lab",
    description:
      "Contributed to BlockScan — an LLM-based blockchain anomaly detection system. Developed multi-threaded data preprocessing pipelines and fine-tuned models with LoRA.",
    tags: ["Blockchain", "LLM", "LoRA", "NeurIPS"],
  },
  {
    period: "Jun – Sep 2022",
    role: "Research Intern",
    organization: "UCSD — Zhiting Hu Lab",
    description:
      "Worked on paired learning and function embedding approaches for representation learning.",
    tags: ["Representation Learning", "Deep Learning"],
  },
] as const;

// ─── Skills ──────────────────────────────────────────────────
export const SKILL_CATEGORIES = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 95 },
      { name: "C/C++", level: 80 },
      { name: "CUDA", level: 70 },
      { name: "JavaScript", level: 65 },
      { name: "HTML/CSS", level: 60 },
      { name: "MATLAB", level: 60 },
    ],
  },
  {
    title: "AI / ML Frameworks",
    skills: [
      { name: "PyTorch", level: 95 },
      { name: "Stable Diffusion", level: 85 },
      { name: "RLLib / Ray", level: 80 },
      { name: "Triton", level: 65 },
      { name: "PsychoPy", level: 75 },
    ],
  },
  {
    title: "Research Domains",
    skills: [
      { name: "Computational Neuroscience", level: 90 },
      { name: "Deep Learning", level: 90 },
      { name: "Reinforcement Learning", level: 85 },
      { name: "Cognitive Psychology", level: 85 },
      { name: "NLP / LLM", level: 80 },
      { name: "Computer Vision", level: 75 },
    ],
  },
] as const;

export const COURSES = [
  "Stanford CS231n — Computer Vision",
  "Stanford CS224n — NLP with Deep Learning",
  "Stanford CS224w — Graph Neural Networks",
  "Stanford CS330 — Deep Multi-Task & Meta Learning",
  "UC Berkeley CS285 — Deep Reinforcement Learning",
  "Geometric Deep Learning",
] as const;

// ─── Footer ──────────────────────────────────────────────────
export const FOOTER_DATA = [
  {
    title: "Academic",
    data: [
      {
        name: "Google Scholar",
        icon: SiGooglescholar,
        link: "https://scholar.google.com/citations?user=PLACEHOLDER",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/haoliu4391",
      },
    ],
  },
  {
    title: "Social",
    data: [
      {
        name: "Twitter / X",
        icon: RxTwitterLogo,
        link: "https://x.com/hao_liu_cogsci",
      },
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com",
      },
    ],
  },
  {
    title: "Contact",
    data: [
      {
        name: "hl4220@nyu.edu",
        icon: HiOutlineMail,
        link: "mailto:hl4220@nyu.edu",
      },
    ],
  },
] as const;
