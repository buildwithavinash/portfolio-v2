import { RiCompass3Fill } from "react-icons/ri"
import { SiGit, SiGithub, SiHtml5, SiJavascript, SiReact, SiTailwindcss } from "react-icons/si"
import { VscVscode } from "react-icons/vsc"

// profile
export const profile = {
    name: "Avinash Prasad",
    title: "Frontend Developer",
    tagline: `I build clean, functional web apps with a focus on usability,
            clarity, and maintainable code.`,
    status: "Open to work",
    statusActive: true,
    email: "avinashprasad.dev@gmail.com",
    github: "https://github.com/yourusername",
    linkedIn: "https://linkedin.com/in/yourusername",
}


// stack
export const stack = [
    {name : "React.js", icon: SiReact, color: "#61DAFB"},
    { name: "JavaScript",  icon: SiJavascript,         color: "#F7DF1E" },
  { name: "HTML5",       icon: SiHtml5,              color: "#E34F26" },
  { name: "CSS3",        icon: RiCompass3Fill,               color: "#1572B6" },
  { name: "Tailwind",    icon: SiTailwindcss,        color: "#38BDF8" },
  { name: "Git",         icon: SiGit,                color: "#F05032" },
  { name: "GitHub",      icon: SiGithub,             color: "#181717" },
  { name: "VS Code",     icon: VscVscode,   color: "#007ACC" },
]

// Projects
export const projects = [
    {
    id:          1,
    name:        "SplitSmart",
    img: `../../public/splitsmart.png`,
    description: "Group expense splitting app with a greedy settlement algorithm that minimises total transactions needed to clear all debts.",
    tags:        ["React.js", "JavaScript", "Tailwind CSS"],
    github:      "https://github.com/yourusername/splitsmart",
    live:        "https://splitsmart.vercel.app",
    year:        "2026",
  },
  {
    id:          2,
    name:        "CoverCraftAI",
    img: `../../public/covercraft.png`,
    description: "AI-powered app that generates personalised cover letters and cold emails from job descriptions using Groq API (Llama 3.3 70B).",
    tags:        ["React.js", "Groq API", "Tailwind CSS"],
    github:      "https://github.com/yourusername/covercraftai",
    live:        "https://covercraftai.vercel.app",
    year:        "2026",
  },
]

// currently
export const currently = {
    building: "My Portfolio",
    learning: "Framer Motion",
    reading: "The Pragmatic Programmer",
}