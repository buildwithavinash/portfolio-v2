import About from "./components/sections/About"
import Contact from "./components/sections/Contact"
import Hero from "./components/sections/Hero"
import Navbar from "./components/sections/Navbar"
import Projects from "./components/sections/Projects"
import Skills from "./components/sections/Skills"
import { useState,useEffect } from "react"

const App = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  localStorage.setItem("theme", theme);
}, [theme]);


  return (
    <div className="dark:bg-zinc-950">
    <Navbar theme={theme} setTheme={setTheme} />
    <Hero />
    <Projects />
    <Skills />
    <About />
    <Contact />
    </div>
  )
}

export default App