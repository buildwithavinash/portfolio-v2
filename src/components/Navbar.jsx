import { Sun } from "lucide-react"

const Navbar = () => {
    const navlinks = [
        {title: "Home", link: "#"},
        {title: "About", link: "#"},
        {title: "Projects", link: "#"},
        {title: "Contact", link: "#"},
    ]
  return (
    <header className="py-2 border-b border-slate-300">
        <div className="flex justify-between">

        <nav className="flex gap-2 text-slate-600 text-sm font-medium">
            {navlinks.map((navlink)=> (
                <a href={navlink.link} key={navlink.title} className="hover:text-slate-900 transition-all duration-200">{navlink.title}</a>
            ))}
        </nav>

        <div className="flex gap-2 text-sm">
            <button><Sun size={14}/></button>
            <button>Resume</button>
        </div>

        </div>
    </header>
  )
}

export default Navbar