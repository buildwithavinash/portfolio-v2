import { FaGithub, FaLinkedin, FaRegCopy } from "react-icons/fa"
import Container from "../layout/Container"
import { useState } from "react"

const Contact = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("avinashprasad.dev@gmail.com");
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }
  return (
    <section id="contact" className="py-20 bg-slate-100">
        <Container>
            <div className="text-center">

                <h2 className="text-3xl md:text-5xl text-center font-semibold text-zinc-900 mb-4">Get in Touch</h2>

                <p className="text-black">
                     I’m currently <strong>open to frontend roles</strong> and collaborations.
                </p>

                <div className="flex gap-2 items-center justify-center mt-4">

                <a href="mailto:avinashprasad.dev@gmail.com" className="underline" >
                    avinashprasad.dev@gmail.com
                </a>
                
                <div className="relative flex justify-center gap-2 items-center">
                
                <button onClick={handleCopy} className="cursor-pointer hover:bg-slate-200 rounded-md transition-all duration-200 p-2"><FaRegCopy /></button>
                {copied && (
                    <span className="bg-slate-200 rounded-md p-1 left-10 absolute font-medium">Copied!</span>
                )}
                </div>
                
                </div>


                {/* links */}
                <div className="flex gap-4 text-xl justify-center items-center mt-3">
                    <a href="" className="p-2 hover:bg-slate-200 rounded-md cursor-pointer"><FaGithub/></a>
                    <a href="" className="p-2 hover:bg-slate-200 rounded-md cursor-pointer"><FaLinkedin /></a>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Contact