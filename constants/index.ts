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
  `I'm a first-year PhD student in Cognitive Sciences at UC Irvine, advised by [Mark Steyvers](${P.steyvers}) and [Aaron Bornstein](${P.bornstein}). With Mark I work on AI intervention in learning; we build Bayesian cognitive models of stuckness in problem solving and use them to decide when an AI should step in. Aaron and I study multi-agent foraging. We model how learning agents converge to the ideal free distribution and ask whether groups forage best near the edge of chaos.`,
  `Over the past few years I've worked on computational models of episodic memory, theory of mind in LLMs, visual reasoning in vision-language models, multi-agent reinforcement learning, collective behavior and nonlinear dynamics, human-AI interaction in learning, and, on the side, anomaly detection in blockchain transactions. Outside of projects I keep coming back to cellular automata, chaotic attractors and spiking neural networks, to some mathematics (algebraic topology, fractal geometry), and to philosophy of mind (perception and consciousness above all) and philosophy of logic.`,
  `Before UCI I did an M.S. at NYU with [Sebastian Michelmann](${P.michelmann}) and [Marcelo Mattar](${P.mattar}) on episodic memory encoding with generative models. I studied computer science at Tsinghua and, from 2022 to 2024, worked on multi-agent reinforcement learning at BIGAI. In summer 2023 I was at MIT with [Tianmin Shu](${P.shu}) and [Josh Tenenbaum](${P.tenenbaum}) on machine theory of mind.`,
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
// width caps the figure in CSS pixels; without it the figure spans the text column.
type Figure = { src: string; alt: string; caption: string; width?: number };

// Newest first. `paper` decides the filled or open dot. Projects with
// `bullets` get the long form, the rest are one line.
export type Project = {
  years: string;
  title: string;
  where?: string;
  paper: boolean;
  ongoing?: boolean;
  links?: Link[];
  figures?: Figure[];
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
      "When should an AI intervene while someone is learning to solve problems, and with what kind of help? Stepping in too early can cut short productive struggle, which often helps people learn.",
      "We build Bayesian cognitive models that infer, from moves, restarts and response times, whether a solver is in productive struggle or stuck.",
      "Data come from online Sokoban experiments. Later ones vary hint timing and hint type, next-step versus strategy-level.",
    ],
    figures: [
      { src: "/figures/sokoban_game.webp", alt: "The puzzle screen of the online Sokoban experiment: board, boxes on goals, move count, timer and a restart button", caption: "The puzzle screen in the online experiment", width: 600 },
      { src: "/figures/sokoban_boxchanges.webp", alt: "Scatter plot of box changes against designer difficulty ratings for 831 Sokoban levels, with the median rating per box-change count", caption: "Box changes along the shortest solution vs. designer difficulty, 831 levels. We grade puzzles by box changes.", width: 760 },
    ],
  },
  {
    years: "2026–",
    title: "Multi-agent foraging and the edge of chaos",
    where: `UC Irvine, with [Aaron Bornstein](${P.bornstein})`,
    paper: false,
    ongoing: true,
    bullets: [
      "Our working hypothesis is that collective foraging is most efficient near the edge of chaos, between ordered and chaotic regimes.",
      "How do groups of learning agents converge to the ideal free distribution, and what does each forager need to predict about the patches and the other foragers?",
      "Agent-based models with depleting patches, in which foragers forecast yield and crowding and share what they saw by word of mouth. We analyze them with bifurcation diagrams and Lyapunov exponents, and plan a multiplayer version for human groups.",
    ],
    figures: [
      { src: "/figures/foraging_regimes.webp", alt: "Two maps over memory alpha and choice sharpness beta: long-run regimes from fixed point to chaos, and the largest Lyapunov exponent", caption: "Long-run regimes of the crowd model over memory α and choice sharpness β, and the largest Lyapunov exponent" },
      { src: "/figures/foraging_period3.webp", alt: "Bifurcation diagram over beta with a highlighted period-3 window inside a chaotic region, and the Lyapunov exponent below", caption: "Bifurcation diagram over β with a period-3 window inside the chaotic region; Lyapunov exponent below", width: 760 },
    ],
  },
  {
    years: "2026",
    title: "Higher-order theory of mind in LLMs (HopToM)",
    where: "Tsinghua, with Liyuan Wang's group",
    paper: true,
    links: [{ label: "arXiv", url: "https://arxiv.org/abs/2610.17777" }],
    figures: [{ src: "/figures/hoptom.webp", alt: "Figure 2 of the HopToM paper: belief nesting can overstate effective order", caption: "Fig. 2 of the paper" }],
    bullets: [
      "Many benchmark questions that look higher-order can be answered with lower-order reasoning. We define a question's effective order by the distinct events behind each belief prefix, and by that measure existing benchmarks overstate the order they test.",
      "HopToM has questions certified to need full-order reasoning. Accuracy of four frontier LLMs falls from 73.5% at first order to 20.0% at fourth order.",
      "HopTrace encodes each interaction once into perspective records and answers nested queries from them, gaining 22.0 and 38.5 points at fourth and fifth order with 20 to 39 times fewer tokens than multi-call methods.",
    ],
  },
  {
    years: "2026",
    title: "Diagrammatic knot reasoning in vision-language models (KnotBench)",
    where: "with Jicheng Liu",
    paper: true,
    links: [{ label: "arXiv", url: "https://arxiv.org/abs/2605.09900" }],
    figures: [{ src: "/figures/knotbench.webp", alt: "Three drawings of the trefoil knot with 3, 5 and 7 crossings", caption: "Fig. 2 of the paper: three drawings of the same knot" }],
    bullets: [
      "858,318 knot diagrams from 1,951 prime knots with crossing numbers 3 to 19. Answers are checked against Regina's canonical knot signature, so no human labels are involved.",
      "14 tasks in four families (equivalence judgment, move prediction, identification, cross-modal grounding). Each task has an image and a symbolic version, which separates failures of perception from failures of operating on the structure.",
      "Frontier VLMs, with and without reasoning modes, stay near chance on many tasks. They seem to encode features of a diagram but cannot simulate Reidemeister moves on it.",
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
    figures: [{ src: "/figures/memory.webp", alt: "Figure 2A to C of the memory paper: reconstructions over inversion steps and the encoding and reinstatement schematic", caption: "Fig. 2A–C of the paper" }],
    bullets: [
      "A pretrained generative network approximates each input through its frozen weights, and the memory is the starting point from which the same weights reinstate it. This removes the need for mutually invertible cortical-hippocampal mappings and trades computational effort for mnemonic precision.",
      "Implemented with a toy model and with large image generators (Stable Diffusion, StyleGAN-XL). Shallow encoding selectively impairs lure rejection on the Mnemonic Similarity Task, as in aging, and domain-finetuned models need fewer approximation steps for in-domain images.",
      "The representational geometry of the latent starting points resembles the medial temporal lobe, while reinstatement traverses the visual hierarchy in reverse order.",
    ],
  },
  {
    years: "2025",
    title: "Hierarchical and meta-reinforcement learning of task representations in sparse-reward environments.",
    where: `NYU, with [Marcelo Mattar](${P.mattar}) & Qihong Lu`,
    paper: false,
  },
  {
    years: "2025",
    title: "A side project that renders citation networks as weather maps, with paper density as pressure and citation flow as wind.",
    paper: false,
  },
  {
    years: "2024",
    title: "Anomaly detection in blockchain transactions (BlockScan)",
    where: `Northwestern, with [Xinyu Xing](${P.xing}) & [Wenbo Guo](${P.guo})`,
    paper: true,
    links: [{ label: "arXiv", url: "https://arxiv.org/abs/2410.04039" }],
    figures: [{ src: "/figures/blockscan.webp", alt: "Figure 1 of the BlockScan paper: how transactions are tokenized", caption: "Fig. 1 of the paper" }],
    bullets: [
      "A Transformer built for blockchain transactions, which mix chain-specific tokens with text and numbers. A modular tokenizer balances information across these modalities, and pretraining uses a masked language modeling objective adapted to long transaction sequences.",
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
    title: "LLM agents with theory of mind that decide when to communicate in embodied household tasks (Watch-Talk-Help).",
    where: `MIT, with [Tianmin Shu](${P.shu}) & [Josh Tenenbaum](${P.tenenbaum})`,
    paper: false,
  },
  {
    years: "2022–24",
    title: "Multi-agent environment with adaptive social structures (AdaSociety)",
    where: "BIGAI, with Siyuan Qi & Xue Feng",
    paper: true,
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2411.03865" },
      { label: "code", url: "https://github.com/bigai-ai/AdaSociety" },
    ],
    figures: [{ src: "/figures/adasociety.webp", alt: "Figure 1 of the AdaSociety paper: physical and social components of the environment", caption: "Fig. 1 of the paper" }],
    bullets: [
      "A customizable multi-agent environment whose state and action spaces grow as agents act. Social structure is an explicit, changeable part of the state and decides how rewards and information are shared. Three mini-games vary it.",
      "Some social structures improve both individual and group outcomes, but current RL and LLM-based agents make little use of them.",
    ],
  },
  {
    years: "2022",
    title: "A Chinese financial language model pretrained on 15 GB of market text.",
    where: "Tsinghua, with Maosong Sun",
    paper: false,
  },
  {
    years: "2021–22",
    title: "Retrieval-based question answering over a million Zhihu question-answer pairs, with BM25 and BERT.",
    where: "Tsinghua, with Minlie Huang",
    paper: false,
  },
  {
    years: "2021–22",
    title: "Self-supervised ViT pretraining on ImageNet-1K, implemented from scratch.",
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
