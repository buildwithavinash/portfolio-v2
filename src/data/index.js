import { RiCompass3Fill } from "react-icons/ri";
import {
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

// profile
export const profile = {
  name: "Avinash Prasad",
  title: "Frontend Developer",
  tagline: `I build clean, functional web apps with a focus on usability,
            clarity, and maintainable code.`,
  status: "Open to work",
  statusActive: true,
  email: "avinashprasad.dev@gmail.com",
  github: "https://github.com/buildwithavinash",
  linkedIn: "https://www.linkedin.com/in/avinash-prasad-dev",
};

// stack
export const stack = {
  frontend: ["React.js", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
  backend: ["REST Api"],
  tools: ["Git", "Github", "VS Code", "Chrome DevTools"],
};

// Projects
export const projects = [
  {
    id: 1,
    name: "SplitSmart",
    img: `/splitsmart.png`,
    description:
      "Group expense splitting app with a greedy settlement algorithm that minimises total transactions needed to clear all debts.",
    tags: ["React.js", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/yourusername/splitsmart",
    live: "https://splitsmart.vercel.app",
    year: "2026",
  },
  {
    id: 2,
    name: "CoverCraftAI",
    img: `/covercraft.png`,
    description:
      "AI-powered app that generates personalised cover letters and cold emails from job descriptions using Groq API (Llama 3.3 70B).",
    tags: ["React.js", "Groq API", "Tailwind CSS"],
    github: "https://github.com/yourusername/covercraftai",
    live: "https://covercraftai.vercel.app",
    year: "2026",
  },
];

// currently
export const currently = {
  building: "My Portfolio",
  learning: "Framer Motion",
  reading: "The Pragmatic Programmer",
};
