import { CiDark } from "react-icons/ci"

const Navbar = () => {
  return (
    <header className="fixed border-b border-b-slate-200 py-3 top-0 right-0 left-0 z-50 backdrop-blur-xl">
          <div className="px-1 max-w-3xl mx-auto">
        <nav className="flex justify-between items-center">
          <div className="flex gap-2 md:gap-6 text-slate-600">
            <a href="" className="hover:text-zinc-900">Projects</a>
            <a href="#projects" className="hover:text-zinc-900">Skills</a>
            <a href="" className="hover:text-zinc-900">Contact</a>
          </div>

          <div className="flex items-center gap-1 md:gap-4">
            <button className="text-xl cursor-pointer hover:bg-zinc-200 p-1 rounded-md transition-all duration-200"><CiDark /></button>
            <a href="" className="bg-(--accent) text-white px-2 py-1 rounded-md font-semibold hover:opacity-80 active:scale-[0.95] transition-all duration-200">Resume</a>
          </div>
        </nav>
        </div>
    </header>
  )
}

export default Navbar