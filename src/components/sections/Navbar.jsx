
const Navbar = () => {
  return (
    <header className="fixed py-2 top-0 right-0 left-0 z-50">
          <div className="px-1 max-w-5xl mx-auto">
        <nav className="flex justify-between items-center">
          <div className="flex gap-1">
            <a href="">Projects</a>
            <a href="">Skills</a>
            <a href="">About</a>
            <a href="">Contact</a>
          </div>

          <div>
            <a href="">Resume</a>
          </div>
        </nav>
        </div>
    </header>
  )
}

export default Navbar