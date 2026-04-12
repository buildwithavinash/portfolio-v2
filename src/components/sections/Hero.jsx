import Container from "../layout/Container"
import { profile } from "../../data"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { MdOutlineMail } from "react-icons/md"

const Hero = () => {
  return (
    <section className="bg-(--white-100) py-20 min-h-[90vh] flex justify-center items-center">
        <Container>
            <div className="flex flex-col items-center justify-center">
                <div className="text-center text-xs w-fit p-1 shadow-md bg-green-400 rounded-full px-2 ">
                    <p className="">{profile.status}</p>
                </div>

                <div className="text-center mt-4">
                    <h1 className="text-4xl font-bold text-(--black-100) mb-1">{profile.name}</h1>
                    <p className="text-(--black-80) text-sm mb-2">{profile.title}</p>
                    <p className="text-(--black-90) ">{profile.tagline}</p>
                </div>


                    {/* socials */}
                    <div className="flex gap-2 text-xl mt-3 items-center">
                        <a href={profile.linkedIn} title="LinkedIn" className="inline-block p-1 hover:bg-blue-100 transition-all duration-200 rounded-md"><FaLinkedinIn /></a>
                        <a href={profile.github} title="Github" className="inline-block p-1 hover:bg-blue-100 transition-all duration-200 rounded-md"><FaGithub /></a>
                        <a href={profile.email} title="Email" className="inline-block p-1 hover:bg-blue-100 transition-all duration-200 rounded-md"><MdOutlineMail /></a>
                    </div>



                    {/* actions */}
                <div className="flex gap-2 justify-center mt-4">
                    <a href="#" className="bg-(--accent) px-3 py-1 rounded-md text-(--white-90) font-semibold hover:opacity-90 transition-all duration-200">View Work</a>
                    {/* <a href="#" className="border border-(--accent) px-3 py-1 font-semibold rounded-md hover:bg-(--accent) hover:text-(--white-90) transition-all duration-200">Hire Me</a> */}
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Hero