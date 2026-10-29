// Everything the home page says lives here. Links inside text use [label](url).

export const BASE = "/personal-website";

export const SITE = {
  name: "Hao Liu",
  zh: "刘好",
  email: "liuh36@uci.edu",
  scholar: "https://scholar.google.com/citations?user=pzqgeLAAAAAJ",
  github: "https://github.com/HaoLiu4391",
  x: "https://x.com/hao_liu_cogsci",
  source: "https://github.com/HaoLiu4391/personal-website",
  updated: "2026-10",
};

const P = {
  steyvers: "https://steyvers.socsci.uci.edu/",
  bornstein: "https://aaron.bornstein.org/",
  michelmann: "https://as.nyu.edu/faculty/sebastian-michelmann.html",
  mattar: "https://as.nyu.edu/faculty/marcelo-mattar.html",
  shu: "https://www.tshu.io/",
  tenenbaum: "https://web.mit.edu/cocosci/josh.html",
  su: "https://www.cs.tsinghua.edu.cn/csen/info/1313/4403.htm",
  xing: "http://xinyuxing.org/",
  guo: "https://henrygwb.github.io/",
  cheng: "https://mmcheng.net/cmm/",
};

export const NAV = [
  { label: "publications", href: "/#publications" },
  { label: "projects", href: "/#projects" },
  { label: "reading", href: "/reading" },
  { label: "friends", href: "/friends" },
  { label: "cv", href: "/cv" },
];

export const INTRO = [
  `I'm a first-year PhD student in Cognitive Sciences at UC Irvine, advised by [Mark Steyvers](${P.steyvers}) and [Aaron Bornstein](${P.bornstein}). With Mark I work on how AI could help people learn, starting from what it looks like when someone is stuck. Aaron and I model how foragers spread over shared resources, and whether groups do best near the edge of chaos.`,
  `Over the past few years I've worked on models of episodic memory, theory of mind in language models, multi-agent environments, the dynamics of group behavior, human–AI interaction in learning, and, on the side, anomaly detection in blockchain transactions. Outside of projects I keep coming back to cellular automata, chaotic attractors and spiking networks, to some mathematics (algebraic topology, fractal geometry), and to philosophy of mind and of logic, especially questions about perception and consciousness.`,
  `Before UCI I did an M.S. at NYU with [Sebastian Michelmann](${P.michelmann}) and [Marcelo Mattar](${P.mattar}), working on episodic memory encoding with generative models. I studied computer science at Tsinghua and worked in BIGAI's multi-agent group from 2022 to 2024. In summer 2023 I was at MIT with [Tianmin Shu](${P.shu}) and [Josh Tenenbaum](${P.tenenbaum}), working on theory of mind.`,
];

export const NEWS = [
  { date: "2026-10", text: "Preprint on episodic memory encoding, with Marcelo Mattar and Sebastian Michelmann, is on [bioRxiv](https://www.biorxiv.org/content/10.64898/2026.10.18.759853v1). Code and data are on [Zenodo](https://doi.org/10.5281/zenodo.23093152)." },
  { date: "2026-10", text: "[HopToM](https://arxiv.org/abs/2610.17777), on higher-order theory of mind in LLMs, is on arXiv." },
  { date: "2026-09", text: "Started my PhD at UC Irvine." },
  { date: "2026-05", text: "[KnotBench](https://arxiv.org/abs/2605.09900) is on arXiv." },
];

// **Hao Liu** marks my name in author lists.
export const PUBLICATIONS = [
  {
    title: "Learning distributed representations with complementary components: A generative approximation framework for episodic memory encoding",
    authors: "**Hao Liu**, Marcelo Mattar, Sebastian Michelmann",
    venue: "bioRxiv, 2026",
    links: [
      { label: "bioRxiv", url: "https://www.biorxiv.org/content/10.64898/2026.10.18.759853v1" },
      { label: "code & data", url: "https://doi.org/10.5281/zenodo.23093152" },
    ],
    bib: `@article{liu2026learning,
  title   = {Learning distributed representations with complementary components: A generative approximation framework for episodic memory encoding},
  author  = {Liu, Hao and Mattar, Marcelo and Michelmann, Sebastian},
  journal = {bioRxiv},
  year    = {2026},
  doi     = {10.64898/2026.10.18.759853}
}`,
  },
  {
    title: "Beyond Belief Nesting: Rethinking Higher-Order Theory of Mind in Large Language Models",
    authors: "Shanshan You, Zhengqi Wang, **Hao Liu**, Yuqin Liu, Ya He, Xin Hao, Liyuan Wang",
    venue: "arXiv:2610.17777, 2026",
    links: [{ label: "arXiv", url: "https://arxiv.org/abs/2610.17777" }],
    bib: `@article{you2026beyond,
  title   = {Beyond Belief Nesting: Rethinking Higher-Order Theory of Mind in Large Language Models},
  author  = {You, Shanshan and Wang, Zhengqi and Liu, Hao and Liu, Yuqin and He, Ya and Hao, Xin and Wang, Liyuan},
  journal = {arXiv preprint arXiv:2610.17777},
  year    = {2026}
}`,
  },
  {
    title: "The Gordian Knot for VLMs: Diagrammatic Knot Reasoning as a Hard Benchmark",
    authors: "**Hao Liu**, Jicheng Liu",
    venue: "arXiv:2605.09900, 2026",
    links: [{ label: "arXiv", url: "https://arxiv.org/abs/2605.09900" }],
    bib: `@article{liu2026gordian,
  title   = {The Gordian Knot for VLMs: Diagrammatic Knot Reasoning as a Hard Benchmark},
  author  = {Liu, Hao and Liu, Jicheng},
  journal = {arXiv preprint arXiv:2605.09900},
  year    = {2026}
}`,
  },
  {
    title: "BlockScan: Detecting Anomalies in Blockchain Transactions",
    authors: "Jiahao Yu, Xian Wu, **Hao Liu**, Wenbo Guo, Xinyu Xing",
    venue: "NeurIPS 2025",
    links: [{ label: "arXiv", url: "https://arxiv.org/abs/2410.04039" }],
    bib: `@inproceedings{yu2025blockscan,
  title     = {BlockScan: Detecting Anomalies in Blockchain Transactions},
  author    = {Yu, Jiahao and Wu, Xian and Liu, Hao and Guo, Wenbo and Xing, Xinyu},
  booktitle = {Advances in Neural Information Processing Systems},
  year      = {2025}
}`,
  },
  {
    title: "AdaSociety: An Adaptive Environment with Social Structures for Multi-Agent Decision-Making",
    authors: "Yizhe Huang, Xingbo Wang, **Hao Liu**, Fanqi Kong, Aoyang Qin, Min Tang, Song-Chun Zhu, Mingjie Bi, Siyuan Qi, Xue Feng",
    venue: "NeurIPS 2024, Datasets and Benchmarks",
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2411.03865" },
      { label: "code", url: "https://github.com/bigai-ai/AdaSociety" },
    ],
    bib: `@inproceedings{huang2024adasociety,
  title     = {AdaSociety: An Adaptive Environment with Social Structures for Multi-Agent Decision-Making},
  author    = {Huang, Yizhe and Wang, Xingbo and Liu, Hao and Kong, Fanqi and Qin, Aoyang and Tang, Min and Zhu, Song-Chun and Bi, Mingjie and Qi, Siyuan and Feng, Xue},
  booktitle = {Advances in Neural Information Processing Systems},
  volume    = {37},
  year      = {2024}
}`,
  },
];

type Link = { label: string; url: string };
type Figure = { src: string; alt: string; caption: string };

// Newest first. `paper` decides the filled or open dot. Projects with
// `bullets` get the long form, the rest are one line.
export type Project = {
  years: string;
  title: string;
  where?: string;
  paper: boolean;
  ongoing?: boolean;
  links?: Link[];
  figure?: Figure;
  bullets?: string[];
};

export const PROJECTS: Project[] = [
  {
    years: "2026–",
    title: "Stuckness and AI intervention in learning",
    where: `UC Irvine, with [Mark Steyvers](${P.steyvers})`,
    paper: false,
    ongoing: true,
    bullets: [
      "When should an AI step in to help someone learn, and with what? People often learn most from problems they fail some of the time, so help that comes too early can backfire.",
      "We start by telling productive struggle apart from being stuck, using only moves, restarts and timing in Sokoban puzzles of graded difficulty.",
      "Next come experiments in which an AI steps in at different moments and with different kinds of help.",
    ],
  },
  {
    years: "2026–",
    title: "Group foraging and the edge of chaos",
    where: `UC Irvine, with [Aaron Bornstein](${P.bornstein})`,
    paper: false,
    ongoing: true,
    bullets: [
      "How does a group spread itself over shared resources, and what does each forager need to predict, or hear from others, to get there?",
      "Our working idea is that groups do best near the edge of chaos, where they don't waste moves but can still follow resources that shift.",
      "We study this with agent-based simulations of foragers who forecast yield and crowding and pass on what they saw, and plan a version of the task for groups of people.",
    ],
  },
  {
    years: "2026",
    title: "Higher-order theory of mind in LLMs (HopToM)",
    where: "Tsinghua, with Liyuan Wang's group",
    paper: true,
    links: [{ label: "arXiv", url: "https://arxiv.org/abs/2610.17777" }],
    figure: { src: "/figures/hoptom.webp", alt: "Figure 2 of the HopToM paper: belief nesting can overstate effective order", caption: "Fig. 2 of the paper" },
    bullets: [
      "Many nominally higher-order theory-of-mind questions admit lower-order shortcuts; defining a question's effective order by the distinct events behind each belief prefix shows this inflation across existing benchmarks.",
      "HopToM has questions certified to need full-order reasoning. Four frontier LLMs fall from 73.5% at first order to 20.0% at fourth order, and human participants also struggle.",
      "HopTrace encodes each interaction once into perspective records and answers nested queries from them, gaining 22.0 and 38.5 points at fourth and fifth order with 20 to 39 times fewer tokens than multi-call methods.",
    ],
  },
  {
    years: "2026",
    title: "Knot diagrams as a test for vision-language models (KnotBench)",
    where: "with Jicheng Liu",
    paper: true,
    links: [{ label: "arXiv", url: "https://arxiv.org/abs/2605.09900" }],
    figure: { src: "/figures/knotbench.webp", alt: "Three drawings of the trefoil knot with 3, 5 and 7 crossings", caption: "Fig. 2 of the paper: three drawings of the same knot" },
    bullets: [
      "858,318 knot diagrams from 1,951 prime knots with 3 to 19 crossings. Answers are checked automatically against each knot's canonical signature in Regina.",
      "14 tasks in four families: whether two diagrams show the same knot, what a move will do, which knot it is, and translating between the drawing and a symbolic code. Each task comes in an image and a symbol version, which separates failures of perception from failures of operating on the structure.",
      "Frontier models, with and without extended thinking, sit near random on many tasks. They seem to pick up features of a diagram but cannot simulate moves on them.",
    ],
  },
  {
    years: "2024–26",
    title: "Episodic memory encoding as generative approximation",
    where: `NYU, with [Sebastian Michelmann](${P.michelmann}) & [Marcelo Mattar](${P.mattar})`,
    paper: true,
    links: [
      { label: "bioRxiv", url: "https://www.biorxiv.org/content/10.64898/2026.10.18.759853v1" },
      { label: "code", url: "https://doi.org/10.5281/zenodo.23093152" },
    ],
    figure: { src: "/figures/memory.webp", alt: "Figure 2A to C of the memory paper: reconstructions over inversion steps and the encoding and reinstatement schematic", caption: "Fig. 2A–C of the paper" },
    bullets: [
      "A memory is encoded by searching for a starting point from which a pretrained generative model can regenerate the input with its frozen weights. No separate inverse mapping between cortex and hippocampus is needed, and searching longer buys a more precise memory.",
      "Implemented with a toy model and with Stable Diffusion and StyleGAN-XL. Shallow encoding selectively impairs lure rejection on the Mnemonic Similarity Task, as in older adults, and models fine-tuned on a domain need fewer steps for images from that domain.",
      "The latent starting points have a representational geometry like the medial temporal lobe, and reinstatement passes through the visual hierarchy in reverse order.",
    ],
  },
  {
    years: "2025",
    title: "Hierarchical and meta-RL for task representations in sparse-reward environments.",
    where: `NYU, with [Marcelo Mattar](${P.mattar}) & Qihong Lu`,
    paper: false,
  },
  {
    years: "2025",
    title: "A side project that treats a citation graph like a weather map, with paper density as pressure and citations as flow.",
    paper: false,
  },
  {
    years: "2024",
    title: "Anomaly detection in blockchain transactions (BlockScan)",
    where: `Northwestern, with [Xinyu Xing](${P.xing}) & [Wenbo Guo](${P.guo})`,
    paper: true,
    links: [{ label: "arXiv", url: "https://arxiv.org/abs/2410.04039" }],
    figure: { src: "/figures/blockscan.webp", alt: "Figure 1 of the BlockScan paper: how transactions are tokenized", caption: "Fig. 1 of the paper" },
    bullets: [
      "A Transformer built for blockchain transactions, which mix chain-specific tokens, text and numbers. A modular tokenizer keeps the three in balance, and pretraining uses a masked language modeling objective adapted to long transaction sequences.",
      "On Ethereum and Solana it keeps false positives low. On Solana it was the only method tested that found the anomalous transactions with high accuracy.",
    ],
  },
  {
    years: "2023–24",
    title: "Emergent communication in cooperative multi-agent RL, beyond referential games.",
    where: `Tsinghua, with [Hang Su](${P.su})`,
    paper: false,
  },
  {
    years: "2023",
    title: "LLM-based agents that track each other's beliefs and decide when talking helps in a household task (Watch-Talk-Help).",
    where: `MIT, with [Tianmin Shu](${P.shu}) & [Josh Tenenbaum](${P.tenenbaum})`,
    paper: false,
  },
  {
    years: "2022–24",
    title: "A multi-agent environment with changing social structure (AdaSociety)",
    where: "BIGAI, with Siyuan Qi & Xue Feng",
    paper: true,
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2411.03865" },
      { label: "code", url: "https://github.com/bigai-ai/AdaSociety" },
    ],
    figure: { src: "/figures/adasociety.webp", alt: "Figure 1 of the AdaSociety paper: physical and social components of the environment", caption: "Fig. 1 of the paper" },
    bullets: [
      "A customizable multi-agent environment whose state and action spaces grow as agents act. Social structure is explicit and can change, decides how rewards and information are shared, and is varied across three mini-games.",
      "Some social structures improve both individual and group outcomes, but current RL and LLM-based agents make little use of them.",
    ],
  },
  {
    years: "2022",
    title: "A Chinese financial language model trained on 15 GB of market text.",
    where: "Tsinghua, with Maosong Sun",
    paper: false,
  },
  {
    years: "2021–22",
    title: "Retrieval-based QA over a million Zhihu question–answer pairs, with BM25 and BERT.",
    where: "Tsinghua, with Minlie Huang",
    paper: false,
  },
  {
    years: "2021–22",
    title: "Self-supervised ViT on ImageNet-1K, written from scratch.",
    paper: false,
  },
  {
    years: "2017–19",
    title: "Classifying pollution images with hand-crafted features, my high school project.",
    where: `Nankai, with [Ming-Ming Cheng](${P.cheng})`,
    paper: false,
  },
];

export const EDUCATION = [
  { years: "2026–", text: "PhD, Cognitive Sciences, UC Irvine" },
  { years: "2024–26", text: "M.S., Cognitive Psychology, New York University" },
  { years: "2023", text: "Summer research intern, Brain and Cognitive Sciences, MIT" },
  { years: "2022–24", text: "Research intern, multi-agent group, BIGAI" },
  { years: "2020–24", text: "B.E., Computer Science and Technology, Tsinghua University (first year in Electronic Engineering)" },
];
