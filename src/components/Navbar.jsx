import { Sun } from "lucide-react"

const Navbar = () => {
    const navlinks = [
        {title: "Home", link: "#"},
        {title: "Projects", link: "#"},
        {title: "Contact", link: "#"},
    ]
  return (
    <header className="fixed bg-slate-200 top-0 left-0 right-0 px-2 max-w-xl mx-auto py-2 border-b border-slate-300">
        <div className="flex justify-between items-center">

        <nav className="flex gap-2 text-slate-600">
            {navlinks.map((navlink)=> (
                <a href={navlink.link} key={navlink.title} className="hover:text-neutral-900 transition-all duration-200">{navlink.title}</a>
            ))}
        </nav>

        <div className="flex gap-2">
            <button className="cursor-pointer"><Sun size={16}/></button>
            <button className="cursor-pointer border border-slate-500 bg-blue-400 text-slate-100 px-2 py-1 rounded-xl font-mono hover:opacity-80">Resume</button>
        </div>

        </div>
    </header>
  )
}

export default Navbar