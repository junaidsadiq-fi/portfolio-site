export const METADATA = {
  title: "Portfolio | junaid sadiq",
  description:
    "I am a full stack developer bridging the gap between design and development. I take responsibility to craft an aesthetic user experience using modern frontend architecture.",
  siteUrl: "https://junaid sadiq.net/",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I design and develop full stack applications",
  "I develop modern frontend and backend systems",
  "I create dynamic user experiences",
  "I design and implement scalable solutions",
];

export const EMAIL = "junaid.sadiq009@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/mjunaid-sadiq/",
  github: "https://github.com/Junaid-sadiq",
  twitter: "https://twitter.com/junaid_sadiq1122",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "Telefonopiu - Currency Exchnage",
    image: "/projects/telefonopiu.jpeg",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description:
      "An Italian forex exchange chain website, offering real-time exchange rates, secure transactions, and user-friendly interfaces.",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "http://telefonopiu.org/",
    tech: ["typescript", "next", "tailwind"],
  },
  {
    name: "Cloud Native Monioring App",
    image: "/projects/cloudMonitoring.png",
    blurImage: "/projects/blur/myokr-blur.jpg",
    description:
      "Cloud Monitoring App built with Flask and Next.js for real-time system monitoring and run on AWS EKS & AWS ECS for scalable and efficient deployment.",
    gradient: ["#0a0a0", "#0034"],
    url: "https://github.com/Junaid-sadiq/Cloud-Monitoring-App",
    tech: ["aws", "next", "kubernetes", "docker"],
  },
  {
    name: "Onic - Blockchain dashboard",
    image: "/projects/onic.jpeg",
    blurImage: "/projects/blur/myokr-blur.jpg",
    description: "A fully-featured blockchain landing page",
    gradient: ["#a0a0a", "#000"],
    url: "https://onic-ivory.vercel.app/",
    tech: ["react", "next", "tailwind"],
  },
  {
    name: "Akknives - an online knives store",
    image: "/projects/akknives.jpeg",
    blurImage: "/projects/blur/dl-unify-blur.jpg",
    description:
      "Built an e-commerce platform using Sanity, Next.js, and Stripe for content management, rendering, and payments.",
    gradient: ["#003052", "#167187"],
    url: "https://akknives.vercel.app/",
    tech: ["tailwind", "next", "sanity", "stripe"],
  },
  {
    name: "Smart Sip - A smart digital water bottle",
    image: "/projects/smartsip.jpeg",
    blurImage: "/projects/blur/dlt-website-blur.jpg",
    description: "Smart digital water bottle for water intake reminding",
    gradient: ["#000", "#aeaeae"],
    url: "https://smartsip.vercel.app/",
    tech: ["react", "next", "tailwind"],
  },
  {
    name: "Rental Marketplace website",
    image: "/projects/rentals.png",
    blurImage: "/projects/blur/ngx-quill-upload-blur.jpg",
    description: "Rental marketplace website built with nextjs",
    gradient: ["#3A0000", "#771E1E"],
    url: "https://rental-marketplace-wine.vercel.app/",
    tech: ["react", "next", "tailwind"],
  },
  {
    name: "Smart Digitized - Sas Website",
    image: "/projects/digitized.jpeg",
    blurImage: "/projects/blur/alpha-blur.jpg",
    description: "Smart digitalised website for a digital agency",
    gradient: ["#172839", "#334659"],
    url: "https://smartdigitalised.vercel.app/",
    tech: ["react", "next", "javascript"],
  },
  {
    name: "Coffee App",
    image: "/projects/koffeeApp.png",
    blurImage: "/projects/blur/akgec-blur.jpg",
    description: "Coffee app for a coffee shop",
    gradient: ["#0a0a0", "#000"],
    url: "https://github.com/Junaid-sadiq/CoffeeApp",
    tech: ["react", "javascript", "expo"],
  },
  {
    name: "Fashion Store",
    image: "/projects/fashionApp.png",
    blurImage: "/projects/blur/farewell18-blur.jpg",
    description: "Fashion store app built with Expo/React-Native 🔥",
    gradient: ["#efe6", "#000"],
    url: "https://github.com/junaidsadiq-fi/FashionStoreApp",
    tech: ["javascript", "expo", "react"],
  },
  {
    name: "Fitness App",
    image: "/projects/fitness.png",
    blurImage: "/projects/blur/bdc18-blur.jpg",
    description: "Built the Fitness Tracking App in React Native 🚀",
    gradient: ["#1f1221", "#1f1221"],
    url: "https://github.com/Junaid-sadiq/FitnessApp",
    tech: ["javascript", "expo", "react"],
  },
  {
    name: "Energy Consumption Analyzer - Website",
    image: "/projects/eca.png",
    blurImage: "/projects/blur/scrolls-blur.jpg",
    description:
      "Built the Energy Consumption Analzer Desktop App in Python 🚀",
    gradient: ["#201", "#010626"],
    url: "https://github.com/Junaid-sadiq/Energy-Consumption-Analyzer",
    tech: ["python"],
  },
  {
    name: "Weather App",
    image: "/projects/weatherapp.png",
    blurImage: "/projects/blur/cardize-blur.jpg",
    description: "Weather Desktop App build with Java",
    gradient: ["#1f1221", "#1f1221"],
    url: "https://github.com/Junaid-sadiq/WeatherApp",
    tech: ["java"],
  },
];

export const SKILLS = {
  frontend: [
    "javascript",
    "python",
    "java",
    "typescript",
    "react",
    "redux",
    "next",
    "expo",
    "aws",
    "kubernetes",
    "docker",
    "gsap",
    "mongodb",
    "tailwind",
    "html",
    "css",
  ],
  userInterface: ["figma", "photoshop"],
  other: ["git", "webpack"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}


export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2023",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Mobile Developer Intern at KYKY Today OY",
    size: ItemSize.SMALL,
    subtitle:
      "Enhanced authentication, developed chat features, optimized data management, and led UI/UX enhancements.",
    image: "/timeline/kykylogo.png",
    slideImage: "/timeline/kyky.jpeg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "MSc Software, Web & Cloud at Tampere University",
    size: ItemSize.SMALL,
    subtitle:
      "Completed first year, focusing on Software Design, Web Development, and Advanced Frontends.",
    image: "/timeline/tamperelogo.png",
    slideImage: "/timeline/tampere.jpeg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2022",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Front-End Developer at Expert Solutions",
    size: ItemSize.SMALL,
    subtitle:
      "Led Front-End Development, crafting web/mobile apps with React & React Native, and integrating cloud solutions.",
    image: "/timeline/ExpertSolutionlogo.png",
    slideImage: "/timeline/frontend.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Graduated with Bachelor's in Computer Science from GCUF",
    size: ItemSize.SMALL,
    subtitle:
      "Focused on Data Structures, Algorithms, OOP, and DBMS with a CGPA of 3.32.",
    image: "/timeline/gcuflogo.png",
    slideImage: "/timeline/degree.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2018",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Started Bachelor's in Computer Science at GCUF",
    size: ItemSize.SMALL,
    subtitle:
      "Began studies in core computer science subjects, laying the foundation for a career in software development.",
    image: "/timeline/gcuflogo.png",
    slideImage: "/timeline/gc.jpeg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";
