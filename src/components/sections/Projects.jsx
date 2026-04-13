import { projects } from "../../data"
import Container from "../layout/Container"

const Projects = () => {
  return (
    <section id="projects" className="py-20">

            <Container>
                <h2 className="text-3xl md:text-5xl text-center font-semibold text-zinc-800 dark:text-slate-300">Work</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 p-2">
                    {projects.map((project)=>(
                        <div key={project.id} className="flex flex-col border border-slate-300 rounded-xl overflow-hidden gap-1 p-2 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer dark:border-zinc-800">
                            {/* image */}
                            <div className="h-60 md:h-40 overflow-hidden bg-zinc-200 border rounded-xl border-slate-300 dark:border-zinc-700">
                                <img src={project.img} alt={project.name} className="w-full h-full object-cover" />
                            </div>

                            {/* info */}
                            <div className="flex-1 p-1">
                                <div className="flex justify-between items-center mb-2 mt-1">
                                <h3 className="font-semibold text-zinc-800 text-xl dark:text-slate-300">{project.name}</h3>

                                <div className="flex gap-2 text-xs">
                                    <a href={project.github} className="bg-(--accent) text-white p-1 rounded-md hover:opacity-90">Github</a>
                                    <a href={project.live} className="border border-(--accent) text-(--black-90) p-1 rounded-md hover:bg-(--accent) hover:text-white transition-all duration-200 dark:text-slate-200">Live</a>
                                </div>
                                </div>

                                <div className="flex flex-wrap gap-2 my-3">
                                    {project.tags.map((tag)=>{
                                        return (
                                            <div key={tag} className="bg-slate-200 dark:bg-slate-300 p-1 rounded-md font-mono text-xs">{tag}</div>
                                        )
                                    })}
                                </div>
                                <p className="line-clamp-3 text-(--black-90) leading-tight dark:text-slate-400">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
    </section>
  )
}

export default Projects