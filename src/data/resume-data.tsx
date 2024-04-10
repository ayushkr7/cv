import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Ayush Kumar",
  initials: "AK",
  location: "Bengaluru, India, IST",
  locationLink: "https://www.google.com/maps/place/Bengaluru",
  about:
    "Full Stack Engineer focused on building products with extra attention to detail",
  summary:
    "Fullstack Developer proficient with MERN(MongoDB, Express.js, React.js, Node.js) stack. Currently, I work mostly work with React, Redux, and Node.js. Apart from these, I also have a strong command of Data Structures and Algorithms.",
  avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "krayush.ak@gmail.com",
    tel: "+918709870878",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ayushkr7",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/krayush-ak/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/krayush.ak",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "SRM Institute of Science and Technology",
      degree: "Bachelor's Degree in Computer Science and Engineering",
      start: "2019",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Victoria's Secret",
      link: "https://parabol.co",
      badges: ["Remote"],
      title: "Assoc. Frontend Web Developer",
      logo: ParabolLogo,
      start: "Sept 2023",
      end: "Present",
      description:
        "Developing features for better user experience of our product. Technologies: React, TypeScript, GraphQL",
    },
    {
      company: "Honeywell",
      link: "https://clevertech.biz",
      badges: ["On-site"],
      title: "Software Engineer Intern",
      logo: ClevertechLogo,
      start: "Jan 2023",
      end: "June 2023",
      description: `• Worked on remotely monitoring network devices using version 3 of Simple Network Management Protocol(SNMPv3).

        • Installed Net-SNMP and PySNMP library and configured SNMP Manager and SNMP Agent on virtual machines hosted on virtualbox, PCs, and raspberry pi.
        
        • Developed Dash app integrated Django GUI for SNMP Manager with role-based feature enabled and created new OIDs using bash script.
        
        • Fetched real-time telemetry from remote network devices using Dash callback and rendered it as text and Graphs with hot-reloading on the Django application.`,
    },
  ],
  skills: ["JavaScript", "React.js", "Node.js", "MongoDB", "C++"],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",

        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Howdy is a place for you to join communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;
