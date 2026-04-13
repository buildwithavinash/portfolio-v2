import Container from "../layout/Container"
import { profile } from "../../data"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { MdOutlineMail } from "react-icons/md"

const Hero = () => {
  return (
    <section className="bg-(--white-100) dark:bg-zinc-950 pt-36 pb-16 min-h-[90vh] flex justify-center items-center">
        <Container>
            <div className="flex flex-col items-center justify-center">
                <div className="text-center text-xs w-fit p-1 shadow-md bg-green-400 rounded-full text-green-900 font-medium px-2 md:px-3">
                    <p className="font-mono">{profile.status}</p>
                </div>

                <div className="text-center mt-4 mb-2 flex flex-col items-center justify-center">
                    <h1 className="text-4xl tracking-tight md:text-7xl font-semibold text-zinc-800 mb-1 dark:text-slate-100">{profile.name}</h1>
                    <p className="text-(--accent) font-semibold font-mono text-sm md:text-lg mb-3">{profile.title}</p>
                    <p className="text-zinc-800 leading-tight max-w-120 md:text-xl text-center dark:text-slate-400">{profile.tagline}</p>
                </div>


  {/* actions */}
                <div className="flex font-mono gap-2 justify-center my-4 md:text-xl">
                    <a href="#projects" className="bg-(--accent) px-3 py-1 rounded-md text-(--white-90) font-semibold hover:opacity-90 transition-all duration-200">View Work</a>
                    {/* <a href="#" className="border border-(--accent) px-3 py-1 font-semibold rounded-md hover:bg-(--accent) hover:text-(--white-90) transition-all duration-200">Hire Me</a> */}
                </div>

                    {/* socials */}
                    <div className="flex gap-2 text-xl mt-3 items-center dark:text-slate-400 ">
                        <a href={profile.linkedIn} title="LinkedIn" className="inline-block p-1 hover:bg-blue-100 transition-all duration-200 rounded-md dark:hover:text-zinc-800"><FaLinkedinIn /></a>
                        <a href={profile.github} title="Github" className="inline-block p-1 hover:bg-blue-100 transition-all duration-200 rounded-md dark:hover:text-zinc-800"><FaGithub /></a>
                        <a href="mailto:avinashprasad.dev@gmail.com" title="Email" className="inline-block p-1 hover:bg-blue-100 transition-all duration-200 rounded-md dark:hover:text-zinc-800"><MdOutlineMail /></a>
                    </div>



                  
            </div>
        </Container>
    </section>
  )
}

export default Hero