import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  pally,
  sponsor,
  jobit,
  tripguide,
  threejs,
  lvd,
  uburu,
  sabi,
  chowdeck,
  accesswealth,
  rapptr,
  sellfire,
  shobizzy,
  alter,
  accesswealthImage,
  chalktalk,
  sponsorlytix,
  pennytree,
  borderguide,
  spree,
} from "../assets";
import img from "./lax.png";
import img1 from "./vic.jpg";
import img2 from "./nic.jpeg";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

export const socialLinks = {
  github: "https://github.com/tryrone",
  twitter: "https://x.com/King_Tyrrent",
  linkedin: "https://www.linkedin.com/in/tega-oboraruvwe-879328a8/",
  email: "tegararuvwe@gmail.com",
};

const services = [
  {
    title: "Web Architecture",
    description: "Building robust, scalable backends using Node.js and Go. Focused on performance and reliability for enterprise applications.",
    icon: "database",
    tags: ["NODE.JS", "POSTGRES", "GRAPHQL"],
  },
  {
    title: "Frontend Mastery",
    description: "Creating pixel-perfect, responsive interfaces with React and modern frameworks. Bridging design and engineering.",
    icon: "web",
    tags: ["REACT", "NEXT.JS", "TYPESCRIPT"],
  },
  {
    title: "Mobile Development",
    description: "Developing high-performance mobile applications for iOS and Android using React Native with native integrations.",
    icon: "smartphone",
    tags: ["REACT NATIVE", "EXPO", "IOS/ANDROID"],
  },
];

const technologies = [
  { name: "React", icon: reactjs },
  { name: "React Native", icon: reactjs },
  { name: "TypeScript", icon: typescript },
  { name: "JavaScript", icon: javascript },
  { name: "Node.js", icon: nodejs },
  { name: "Next.js", icon: reactjs },
  { name: "GraphQL", icon: mongodb },
  { name: "PostgreSQL", icon: mongodb },
  { name: "MongoDB", icon: mongodb },
  { name: "Redux", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Docker", icon: docker },
  { name: "Git", icon: git },
  { name: "Figma", icon: figma },
  { name: "HTML5", icon: html },
  { name: "CSS3", icon: css },
  { name: "Three.js", icon: threejs },
  { name: "Express.js", icon: nodejs },
  { name: "Firebase", icon: nodejs },
  { name: "AWS", icon: docker },
];

const experiences = [
  {
    title: "Full Stack Engineer",
    company_name: "Rapptr Labs",
    icon: rapptr,
    iconBg: "#000",
    date: "March 2024 - Present",
    points: [
      "Implemented server-side functionality using Node.js, Express.js, and integrated third-party APIs for data retrieval and manipulation.",
      "Built reusable UI components and optimized frontend performance with caching strategies including Redis.",
      "Configured databases (PostgreSQL, MySQL) for optimal application performance and collaborated via Git workflows.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "Access Wealth",
    icon: accesswealth,
    iconBg: "#383E56",
    date: "April 2023 - June 2025",
    points: [
      "Architected scalable backend solutions, optimizing system performance and enhancing overall efficiency.",
      "Led cross-functional Agile teams, ensuring on-time delivery of high-quality software with CI/CD pipelines.",
      "Developed robust RESTful APIs and innovated front-end applications with user-centric design principles.",
    ],
  },
  {
    title: "Head Of Mobile",
    company_name: "Sabi",
    icon: starbucks,
    iconBg: "#383E56",
    date: "October 2021 - April 2025",
    points: [
      "Built the product search functionality using Algolia — achieving 95% positive customer feedback for accuracy.",
      "Led the v2 cart & checkout rewrite, resulting in a seamless UX processing over $7M in monthly transaction volume.",
      "Led the Mobile team building commercial infrastructure for service distribution across Africa.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Chowdeck",
    icon: tesla,
    iconBg: "#fff",
    date: "Mar 2022 - Dec 2022",
    points: [
      "Set up Microsoft CodePush for OTA updates, dramatically improving how users receive fixes and updates.",
      "Structured the React Native design system for reuse across multiple projects, accelerating development time.",
      "Established Apple/Google store profiles and deployment pipelines for seamless app releases.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "GitStart (YC S19)",
    icon: shopify,
    iconBg: "#000",
    date: "Aug 2019 – Dec 2019",
    points: [
      "Contributed to full-stack development using Hasura, GraphQL, and Apollo in a Y Combinator startup environment.",
      "Built Node.js/Express.js backend services with GraphQL APIs for efficient data management.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Hollaport Technologies",
    icon: meta,
    iconBg: "#fff",
    date: "Jan 2020 – Apr 2021",
    points: [
      "Owned the instant messaging feature using Socket.io, handling reconnection logic that improved real-time messaging flow.",
      "Migrated legacy class-based components to functional components with modern Redux hooks patterns.",
      "Implemented interfaces handling 1,000+ daily transactions and set up CI/CD workflows.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Sponsorlytix",
    icon: sponsor,
    iconBg: "#fff",
    date: "Feb 2019 - Aug 2019",
    points: [
      "Built frontend interfaces for a London-based sports analytics platform using React and GraphQL.",
      "Collaborated with cross-functional teams delivering data-driven UI solutions with Apollo GraphQL.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Pallymate",
    icon: pally,
    iconBg: "#6800af",
    date: "Jun 2018 - Jan 2020",
    points: [
      "Started professional career building frontend interfaces with JavaScript, HTML5, and version control with Git.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I'm thoroughly impressed by Tega — the music site was executed exceptionally and delivered well ahead of schedule.",
    name: "LAX",
    designation: "Musical Artist",
    image: img,
  },
  {
    testimonial:
      "His dedication, coding expertise, and problem-solving skills have greatly contributed to our success. Tega's commitment to quality and meeting deadlines makes him an invaluable asset.",
    name: "Uwadia Victor",
    designation: "COO",
    company: "Incognito Tech Solutions",
    image: img1,
  },
  {
    testimonial:
      "After Tega optimized our app, our traffic increased by 50%. We can't thank him enough!",
    name: "Femi Akinbote",
    designation: "Corporate Strategist",
    company: "CI Finesser",
    image: img2,
  },
];

const projects = [
  {
    name: "PennyTree",
    description:
      "Financial management application allowing users to track spending across Nigerian bank accounts, with savings goals and linked accounts features.",
    tags: [
      { name: "React Native", color: "blue-text-gradient" },
      { name: "Node.js", color: "pink-text-gradient" },
    ],
    image: pennytree,
    source_code_link: "https://pennytree.netlify.app/",
    featured: true,
  },
  {
    name: "BorderGuide",
    description:
      "Comprehensive travel platform providing essential information on visa requirements, customs regulations, and travel documentation all in one place.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "pink-text-gradient" },
    ],
    image: borderguide,
    source_code_link: "https://border-guide.netlify.app/",
    featured: true,
  },
  {
    name: "Spree",
    description:
      "Escrow-protected social commerce platform helping merchants and buyers track products, handle orders, and turn social sales into trusted transactions.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Node.js", color: "pink-text-gradient" },
    ],
    image: spree,
    source_code_link: "https://spree-app.netlify.app/",
    featured: true,
  },
  {
    name: "Sabi",
    description:
      "Commercial infrastructure platform for seamless distribution of services across Africa. Processed $7M+ in monthly transactions.",
    tags: [
      { name: "React Native", color: "blue-text-gradient" },
      { name: "Node.js", color: "pink-text-gradient" },
    ],
    image: sabi,
    source_code_link: "https://sabi.am/",
    featured: true,
  },
  {
    name: "Access Wealth",
    description:
      "Investment platform enabling users to explore opportunities across multiple asset classes for portfolio diversification.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Node.js", color: "pink-text-gradient" },
    ],
    image: accesswealthImage,
    source_code_link: "https://www.accesswealth.io/",
    featured: true,
  },
  {
    name: "Chowdeck",
    description:
      "Nigeria's leading food delivery app — meals delivered within minutes from a wide variety of restaurants across African and Continental cuisines.",
    tags: [
      { name: "React Native", color: "blue-text-gradient" },
      { name: "TypeScript", color: "pink-text-gradient" },
    ],
    image: chowdeck,
    source_code_link: "https://apps.apple.com/us/app/chowdeck-food-delivery/id1530676376",
    featured: true,
  },
  {
    name: "ChalkTalk",
    description:
      "Personalized learning software for ELA & Math — real-time, remote, or in-person education platform.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Styled Components", color: "pink-text-gradient" },
    ],
    image: chalktalk,
    source_code_link: "https://chalktalk.com/",
    featured: true,
  },
  {
    name: "Alter",
    description:
      "Health-tech platform using DNA and real-time wearable data to build personalized wellness plans.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Node.js", color: "pink-text-gradient" },
    ],
    image: alter,
    source_code_link: "https://www.alterme.com/",
  },
  {
    name: "Sellfire",
    description:
      "AI-powered sales platform delivering proven results in 90 days with automated lead generation.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "TypeScript", color: "pink-text-gradient" },
    ],
    image: sellfire,
    source_code_link: "https://sellfire.com/",
  },
  {
    name: "Shobizzy",
    description:
      "Production staffing and entertainment network built for production companies and talent management.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Node.js", color: "pink-text-gradient" },
    ],
    image: shobizzy,
    source_code_link: "https://www.shobizzy.com/",
  },
  {
    name: "Uburu Health",
    description:
      "AI platform enabling health institutions to offer on-demand data collection services with remote monitoring.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
    ],
    image: uburu,
    source_code_link: "https://www.uburu.ai/",
  },
  {
    name: "Chowdeck Vendor Hub",
    description:
      "Vendor management portal for restaurant partners to manage menus, orders, and analytics in real-time.",
    tags: [
      { name: "React Native", color: "blue-text-gradient" },
      { name: "TypeScript", color: "pink-text-gradient" },
    ],
    image: lvd,
    source_code_link: "https://play.google.com/store/apps/details?id=com.chowdeck.vendor",
  },
  {
    name: "Hollaport",
    description:
      "Premium mobile payment service with social features — send money to phone numbers and make card-less ATM withdrawals.",
    tags: [
      { name: "React Native", color: "blue-text-gradient" },
      { name: "Socket.io", color: "pink-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://hollaport.net/",
  },
  {
    name: "Sponsorlytix",
    description: "Sports analytics platform powered by AI and computer vision for sponsorship tracking.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "GraphQL", color: "pink-text-gradient" },
    ],
    image: sponsorlytix,
    source_code_link: "https://sponsorlytix.ai/",
  },
  {
    name: "Wealth Buddy",
    description:
      "Mobile financial planning app helping users save more, reduce debt, and track long-term financial goals.",
    tags: [
      { name: "React Native", color: "blue-text-gradient" },
      { name: "Node.js", color: "pink-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://play.google.com/store/apps/details?id=com.merristem.wealthbuddy",
  },
];

export { services, technologies, experiences, testimonials, projects };
