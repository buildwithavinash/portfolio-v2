import { stack } from "../../data";
import Container from "../layout/Container";
import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animation";

const Skills = () => {
  return (
    <section id="stack" className="py-20">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-3xl md:text-5xl text-center font-semibold text-zinc-800 dark:text-slate-300">
              Stack
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 p-2">
              {/* front end */}
              <motion.div variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ delay: 0 * 0.1 }}>
                <div className="border py-4 px-3 rounded-md border-slate-300 dark:border-zinc-800 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
                <p className="text-xl font-semibold text-zinc-700 dark:text-slate-400">
                  Frontend
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {stack.frontend.map((skill) => (
                    <div
                      key={skill}
                      className="border font-mono rounded-xl px-2 py-1 border-zinc-300 dark:border-zinc-700 dark:text-slate-400 text-sm hover:bg-(--accent) hover:text-white cursor-pointer transition-all duration-200"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              </motion.div>
              

              {/* backend */}
              <motion.div variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ delay: 1 * 0.1 }}>
                  <div className="border py-4 px-3 rounded-md border-slate-300 dark:border-zinc-800 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
                <p className="text-xl font-semibold text-zinc-700 dark:text-slate-400">
                  Backend
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {stack.backend.map((skill) => (
                    <div
                      key={skill}
                      className="border font-mono rounded-full px-2 py-1 border-zinc-300 dark:border-zinc-700 dark:text-slate-400 text-sm hover:bg-(--accent) hover:text-(--white-90) cursor-pointer transition-all duration-200"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              </motion.div>
              

              {/* tools */}
              <motion.div variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ delay: 2 * 0.1 }}>
                  <div className="border py-4 px-3 rounded-md border-slate-300 dark:border-zinc-800 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
                <p className="text-xl font-semibold text-zinc-700 dark:text-slate-400">
                  Tools
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {stack.tools.map((skill) => (
                    <div
                      key={skill}
                      className="border font-mono rounded-xl px-2 py-1 border-zinc-300 dark:border-zinc-700 dark:text-slate-400 text-sm hover:bg-(--accent) hover:text-white cursor-pointer transition-all duration-200"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              </motion.div>
              
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Skills;
