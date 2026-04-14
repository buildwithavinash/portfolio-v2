import { fadeUp } from "../../utils/animation"
import Container from "../layout/Container"
import { motion } from "framer-motion"

const About = () => {
  return (
    <section className="py-20">
        <Container>
            <motion.div variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}>
                <div className="max-w-xl mx-auto">
                <div>
                <h2 className="text-3xl md:text-5xl text-center font-semibold text-zinc-800 dark:text-slate-300">About Me</h2>
                </div>

                <div className="space-y-4 mt-8 ">
                    <p className="leading-relaxed text-zinc-800 dark:text-slate-300">I’m a self-taught frontend developer focused on building clean,
            practical web applications.</p>

                    <p className="leading-relaxed text-zinc-800 dark:text-slate-300">
                        I enjoy working with React and JavaScript, and I care about writing
            code that is readable, maintainable, and actually useful to the user.
                    </p>

                    <p className="leading-relaxed text-zinc-800 dark:text-slate-300">
                        Currently, I’m looking for <mark className="bg-green-400">opportunities to grow, collaborate, and
            contribute</mark> to real-world projects.
                    </p>
                </div>
            </div>
            </motion.div>
            
        </Container>
    </section>
  )
}

export default About