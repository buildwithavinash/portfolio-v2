import About from "./components/sections/About"
import Contact from "./components/sections/Contact"
import Hero from "./components/sections/Hero"
import Navbar from "./components/sections/Navbar"
import Projects from "./components/sections/Projects"
import Skills from "./components/sections/Skills"
import { useState,useEffect } from "react"
import Toast from "./components/ui/toast"

const App = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });
  const [showStayToast, setShowStayToast] = useState(false);
const [hasShownStay, setHasShownStay] = useState(false);

  useEffect(() => {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  localStorage.setItem("theme", theme);
}, [theme]);

useEffect(() => {
  if (hasShownStay) return;

  const timer = setTimeout(() => {
    setShowStayToast(true);
    setHasShownStay(true);

    // auto hide after 2.5s
    setTimeout(() => {
      setShowStayToast(false);
    }, 2500);

  }, 20000); // 20 sec

  return () => clearTimeout(timer);
}, [hasShownStay]);


  return (
    <div className="dark:bg-zinc-950">
    <Navbar theme={theme} setTheme={setTheme} />
    <Hero />
    <Projects />
    <Skills />
    <About />
    <Contact />
    <Toast show={showStayToast} message="You’re still here… that’s a good sign."/>
    </div>
  )
}

export default App