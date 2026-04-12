import { stack } from "../../data"
import Container from "../layout/Container"

const Skills = () => {
  return (
    <section>
        <Container>
            <div>
                <h2>Skills</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* front end */}
                    <div className="border p-2 rounded-xl border-zinc-400 bg-(--white-90)">
                        <p className="text-xl font-semibold">Frontend</p>

                        <div className="flex flex-wrap gap-2 mt-2">
                            {stack.frontend.map((skill)=>(
                        <div className="border rounded-full px-2 py-1 border-slate-400 text-sm hover:bg-(--accent) hover:text-(--white-90) cursor-pointer transition-all duration-200">{skill}</div>
                    ))}
                        </div>
                        
                    </div>

                    {/* backend */}
                    <div className="border p-2 rounded-xl border-zinc-400 bg-(--white-90)">
                        <p className="text-xl font-semibold">Backend</p>

                        <div className="flex flex-wrap gap-2 mt-2">
                            {stack.backend.map((skill)=>(
                        <div className="border rounded-full px-2 py-1 border-slate-400 text-sm hover:bg-(--accent) hover:text-(--white-90) cursor-pointer transition-all duration-200">{skill}</div>
                    ))}
                        </div>
                        
                    </div>

                    {/* tools */}
                    <div className="border p-2 rounded-xl border-zinc-400 bg-(--white-90)">
                        <p className="text-xl font-semibold">Tools</p>

                        <div className="flex flex-wrap gap-2 mt-2">
                            {stack.tools.map((skill)=>(
                        <div className="border rounded-full px-2 py-1 border-slate-400 text-sm hover:bg-(--accent) hover:text-(--white-90) cursor-pointer transition-all duration-200">{skill}</div>
                    ))}
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Skills