import { FaGithub, FaLinkedin, FaRegCopy } from "react-icons/fa"
import Container from "../layout/Container"
import { useState } from "react"
import { motion } from "framer-motion"
import { fadeUp } from "../../utils/animation"
import { profile } from "../../data"
import Toast from "../ui/toast"

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
    <>
  
    <section id="contact" className="py-20 bg-slate-100 dark:bg-zinc-900">
        <Container>
            <motion.div  variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}>
                 <div className="text-center">

                <h2 className="text-3xl md:text-5xl text-center font-semibold text-zinc-900 mb-4 dark:text-slate-300">Get in Touch</h2>

                <p className="text-black font-medium dark:text-slate-300">
                     I’m currently <strong className="text-sky-600 dark:text-sky-400">open to frontend roles</strong> and collaborations.
                </p>

                <div className="flex gap-2 items-center justify-center mt-4">

                <a href="mailto:avinashprasad.dev@gmail.com" className="underline dark:text-slate-300" >
                    avinashprasad.dev@gmail.com
                </a>
                
                <div className="relative w-fit flex justify-center gap-2 items-center">
                
                <button onClick={handleCopy} className="cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-800 dark:text-slate-200 rounded-md transition-all duration-200 p-2"><FaRegCopy /></button>
                </div>
                
                </div>


                {/* links */}
                <div className="flex gap-4 text-xl justify-center items-center mt-3">
                    <a href={profile.github} className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-md cursor-pointer dark:text-slate-200 transition-all duration-200"><FaGithub/></a>
                    <a href={profile.linkedIn} className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-md cursor-pointer dark:text-slate-200 transition-all duration-200"><FaLinkedin /></a>
                </div>
            </div>
            </motion.div>
           
        </Container>
    </section>

    <Toast 
  show={copied} 
  message="Email copied. I’ll be waiting 👀" 
/>
  </>
  )
}

export default Contact