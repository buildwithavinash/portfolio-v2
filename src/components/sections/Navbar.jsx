import { CiDark, CiLight } from "react-icons/ci"


const Navbar = ({theme, setTheme}) => {

  const toggleTheme = () => {
  setTheme(theme === "dark" ? "light" : "dark");
};

  return (
    <header className="fixed border-b border-b-slate-100/60 py-3 top-0 right-0 left-0 z-50 backdrop-blur-xl dark:bg-zinc-900">
          <div className="px-2 max-w-3xl mx-auto">
        <nav className="flex justify-between items-center">
          <div className="flex gap-2 md:gap-6 text-slate-600 dark:text-slate-300">
            <a href="#projects" className="hover:text-zinc-900 dark:hover:text-slate-50">Work</a>
            <a href="#stack" className="hover:text-zinc-900 dark:hover:text-slate-50">Stack</a>
            <a href="#contact" className="hover:text-zinc-900 dark:hover:text-slate-50">Contact</a>
          </div>

          <div className="flex items-center gap-1 md:gap-4">
            <button onClick={toggleTheme} className="text-xl cursor-pointer hover:bg-zinc-100 dark:text-slate-300 dark:hover:text-slate-900 p-1 rounded-md transition-all duration-200">{theme === "dark" ? (
              <CiLight />
            ) : (
              <CiDark />
            )}</button>
            <a href="/Avinash-Prasad-Frontend-Developer-Resume.pdf" target="_blank" rel="noopener noreferrer" className="bg-(--accent) text-white px-2 py-1 rounded-md font-semibold hover:opacity-80 active:scale-[0.95] transition-all duration-200 font-mono">Resume</a>
          </div>
        </nav>
        </div>
    </header>
  )
}

export default Navbar