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
  meta,
  Tata,
  bikaner,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  cpp,
  nextjs,
} from "../assets";

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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Next.JS Developer",
    icon: backend,
  },
  {
    title: "Backend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
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
    name: "C++",
    icon: cpp,
  },
  {
    name: "NextJs",
    icon: nextjs,
  },
];

const experiences = [
  {
    title: "Floor Manager",
    company_name: "Tata Motors",
    icon: Tata,
    iconBg: "#383E56",
    date: "October 2019 - November 2020",
    points: [
      "Guided and supervised service technicians, ensuring efficient vehicle maintenance and repair.",
      "Implemented resource allocation strategies, reducing wait times and optimizing workflow processes.",
      "Enforced strict quality control measures, ensuring vehicles met high service standards.",
      "Prioritized customer needs, cultivating strong client relationships and boosting repeat business.",
      "Implemented safety protocols, minimizing workplace accidents and ensuring a secure working environment.",
    ],
  },
  {
    title: "Instructor",
    company_name: "Shri Bikaner Motor Driving School",
    icon: bikaner,
    iconBg: "#E6DEDD",
    date: "November 2020 - May 2021",
    points: [
      "Delivered comprehensive training on automotive components, imparting knowledge about their functions and applications for both four-wheelers and heavy-duty vehicles.",
      "Successfully managed administrative tasks, including scheduling, resource allocation, and student progress tracking.",
      "Utilized state-of-the-art simulation setups to teach safe driving practices, enhancing students' vehicle handling skills and road safety awareness.",
      "Developed and updated training materials to ensure relevancy and alignment with industry standards.",
      "Fostered an interactive learning environment, encouraging active participation and providing personalized guidance for improved comprehension.",
    ],
  },
];

const projects = [
  {
    name: "AI Image Generation App",
    description:
      "Explore the future of creativity with our AI Image Generation App! 🤖🖼️ Powered by the incredible DALL-E model, this MERN stack marvel lets you turn ideas into stunning visuals. Express your imagination and design in a whole new way.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "OpenAIs",
        color: "white-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/gourang123/AI-Image-Generation-App",
    live_link: "https://relaxed-praline-f5d8ea.netlify.app/",
  },
  {
    name: "3D Website",
    description:
      " a Responsive 3D Portfolio Website! 🌐 Explore my work in a stunning 3D environment, all thanks to React and Three.js",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "Netlify",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/gourang123/3D-Portfolio-Website",
    live_link: "https://relaxed-praline-f5d8ea.netlify.app/",
  },
  {
    name: "Threads App",
    description:
      "Threads App! Nextjs 13.4, MongoDB, Clerk authentication, and more. Deployed successfully on Vercel",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/gourang123/threads_app",
    live_link: "https://threads-app-six.vercel.app/",
  },
];

export { services, technologies, experiences, projects };
