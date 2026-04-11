import Navbar from "./components/Navbar"
import Profile from "./components/Profile"

const App = () => {
  return (
    <div className="max-w-xl bg-slate-200 mx-auto px-4 md:px-6">
        <Navbar />
        <Profile />
    </div>
  )
}

export default App