import {
  mobile,
  backend,
  creator,
  web,
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
} from "../assets";
import img from "./lax.png";
import img1 from "./vic.jpg";
import img2 from "./nic.jpeg";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web App Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Hybrid Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "CSS 3",
    icon: css,
  },
];

const experiences = [
  {
    title: "Full Stack Engineer",
    company_name: "@Rapptr Labs",
    icon: rapptr,
    iconBg: "#000",
    date: "March 2024 - Present",
    points: [
      "Implemented server-side functionality for an application using Node.js and Express.js.",
      "Integrated third-party APIs into existing applications for data retrieval and manipulation purposes.",
      "Developed responsive design layouts for mobile devices using media queries and Bootstrap framework.",
      "Configured databases like MySQL, PostgreSQL, and Oracle for optimal performance of applications.",
      "Built reusable UI components that could be used across multiple projects.",
      "Collaborated with other developers on coding projects utilizing Git version control system",
      "Optimized frontend performance by implementing caching strategies such as Redis.",
      "Analyzed customer feedbacks and recommended improvements accordingly based on their needs and preferences.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "@Access Wealth",
    icon: accesswealth,
    iconBg: "#383E56",
    date: "April 2023 - June 2025",
    points: [
      "Architected and implemented scalable backend solutions, optimizing system performance, and enhancing overall eﬃciency.",
      "Led cross-functional Agile development teams, ensuring on-time delivery of high-quality software solutions.",
      "Developed and maintained robust RESTful APIs, fostering seamless integration and data exchange between systems.",
      "Innovated front-end applications, incorporating user-centric design principles for optimal user experience.",
      "Championed DevOps practices, implementing CI/CD pipelines to streamline software delivery and deployment processes.",
      "Played a pivotal role in end-to-end development, from designing backend databases to implementing user interfaces.",
    ],
  },
  {
    title: "Head Of Mobile | React-Native Developer",
    company_name: "@Sabi",
    icon: starbucks,
    iconBg: "#383E56",
    date: "October 2021 - April 2025",
    points: [
      "I started off at Sabi as a React-Native developer focused on building, managing and tracking the product-cart-checkout process of users. I achieved these by;",
      "Planned and built the products search functionality of the application using Algolia which had a 95% customer positive feedback for its simplicity of usage and result accuracy",
      "Built and tracked the v2 of the cart and checkout pages which resulted in a much more seamless cart-checkout user experience and records over $7m in transaction volume monthly.",
      "Skills: Android · iOS · Java script · HTML5 · Android Development · React native · Git · Team Management · TypeScript",
      "Led the Mobile team that was responsible for building the commercial infrastructure for the seamless distribution of services across parts of Africa",
      "Contributed to the TDD using react-native-testing-library and Jest",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "CHOWDECK",
    icon: tesla,
    iconBg: "#fff",
    date: "May 2020 - Sep 2020",
    points: [
      "Helped create apple store and google play-store profile to make updates seamless.",
      "Helped setup Microsoft code push to enable OTA pushes , which improves how users receive updates and quick fixes on their application.",
      "Structured the platform's React-Native design system to be reused across multiple projects, greatly improving development time, using modern component design patterns.",
      "Skills: Android · iOS · Java script · Android Development · React native · Git.",
    ],
  },
  {
    title: "Full-stack Developer",
    company_name: "GitStart (YC S19)",
    icon: shopify,
    iconBg: "#000",
    date: "Apr 2020 - Sep 2020",
    points: [
      "Location: Remote",
      "Skills: Hasura · Java script · HTML5 · Node.js · Git · Express.js · GraphQL · Apollo GraphQL",
    ],
  },
  {
    title: "Full-stack Developer",
    company_name: "Hollaport Technologies Ltd",
    icon: meta,
    iconBg: "#fff",
    date: "Apr 2020 - Sep 2020",
    points: [
      "Took control of the Instant messaging feature which made use of socket.io connection, handled socket reconnection on timeout which improved the instant messaging flow.",
      "Created a framework to migrate legacy code to modern design patterns, by shifting from class-based to functional components and migrating the store management process from old redux tools to the latest hooks.",
      "Implemented interface that handled over one thousand transactions daily.",
      "Helped Set up CI/CD workflow for deployment and testing",
      "Skills: Android · iOS · Java script · Android Development · React native · Git · TypeScript",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Sponsorlytix - Part-time",
    icon: sponsor,
    iconBg: "#fff",
    date: "May 2020 - Sep 2020",
    points: [
      "Location: London, England, United Kingdom",
      "Skills: Java script · HTML5 · Node.js · Git · Team Management · Express.js · GraphQL · Apollo GraphQL",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Pallymate · Freelance",
    icon: pally,
    iconBg: "#6800af",
    date: "Oct 2019 - Jan 2020",
    points: ["Location: Nigeria", "Skills: Java script · HTML5 · Git"],
  },
];

const testimonials = [
  {
    testimonial:
      "I'm thoroughly impressed by Tega My Music site; it was executed exceptionally and delivered well ahead of schedule.",
    name: "LAX",
    designation: "Musical Artist",
    // company: "Acme Co",
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
    name: "Femi Akinbote ",
    designation: "Coperate Strategist",
    company: "CI finesser",
    image: img2,
  },
];

const projects = [
  {
    name: "Sellfire",
    description:
      "Get an AI-powered Sales Machine that will deliver proven results in 90 days",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Style components",
        color: "pink-text-gradient",
      },
    ],
    image: sellfire,
    source_code_link: "https://sellfire.com/",
  },
  {
    name: "Shobizzy",
    description:
      "Production staffing and entertainment network built for production co's.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Style components",
        color: "pink-text-gradient",
      },
    ],
    image: shobizzy,
    source_code_link: "https://www.shobizzy.com/",
  },
  {
    name: "Alter",
    description:
      "No more guesswork. AlterMe uses your DNA and real-time data from the AlterMe wearable to build a plan that’s tailored to you. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Style components",
        color: "pink-text-gradient",
      },
    ],
    image: alter,
    source_code_link: "https://www.alterme.com/",
  },
  {
    name: "Access Wealth",
    description:
      "Explore investment opportunities across multiple asset classes to add diversification beyond a traditional portfolio.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Style components",
        color: "pink-text-gradient",
      },
    ],
    image: accesswealthImage,
    source_code_link: "https://www.accesswealth.io/",
  },
  {
    name: "Web Wealth buddy Mobile-App",
    description:
      "Do you need to save more, reduce debt, make progress towards long-term financial targets.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Style components",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.merristem.wealthbuddy&hl=en&gl=US&pli=1",
  },
  {
    name: "Hollaport",
    description:
      "A premium mobile payment service with cutting-edge social features. Send money directly to phone numbers and make card-less cash withdrawals on ATMs instantly.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Style components",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://hollaport.net/",
  },
  {
    name: "Chowdeck Vendor Hub",
    description:
      "Have meals delivered to you within minutes from a wide variety of restaurants ranging from African to Continental cuisines to satisfy your cravings.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Style components",
        color: "pink-text-gradient",
      },
    ],
    image: lvd,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.chowdeck.vendor",
  },
  {
    name: "Uburu Health",
    description:
      "Uburu AI enables health institutions offer on-demand data collection services to match rising local and foreign demand. Researchers can monitor the progress of service delivery remotely.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Style components",
        color: "pink-text-gradient",
      },
    ],
    image: uburu,
    source_code_link: "https://www.uburu.ai/",
  },
  {
    name: "Sabi",
    description:
      "Using Sabi has given me the opportunity to sell more, my customers keep coming back because they know I always have what they want",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Style components",
        color: "pink-text-gradient",
      },
    ],
    image: sabi,
    source_code_link: "https://sabi.am/",
  },
  {
    name: "Chowdeck",
    description:
      "Have meals delivered to you within minutes from a wide variety of restaurants ranging from African to Continental cuisines to satisfy your cravings.",
    tags: [
      {
        name: "React-Native",
        color: "blue-text-gradient",
      },
      {
        name: "Style components",
        color: "pink-text-gradient",
      },
    ],
    image: chowdeck,
    source_code_link:
      "https://apps.apple.com/us/app/chowdeck-food-delivery/id1530676376",
  },
];

export { services, technologies, experiences, testimonials, projects };
