import { stack } from "../../data";
import Container from "../layout/Container";

const Skills = () => {
  return (
    <section className="py-20">
      <Container>
        <div>
          <h2 className="text-3xl md:text-5xl text-center font-semibold text-zinc-800">
            Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 p-2">
            {/* front end */}
            <div className="border p-2 rounded-md border-slate-300">
              <p className="text-xl font-semibold text-zinc-700">Frontend</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {stack.frontend.map((skill) => (
                  <div key={skill} className="border font-mono rounded-xl px-2 py-1 border-zinc-300 text-sm hover:bg-(--accent) hover:text-white cursor-pointer transition-all duration-200">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* backend */}
            <div className="border p-2 rounded-md border-slate-300">
              <p className="text-xl font-semibold text-zinc-700">Backend</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {stack.backend.map((skill) => (
                  <div key={skill} className="border font-mono rounded-full px-2 py-1 border-zinc-300 text-sm hover:bg-(--accent) hover:text-(--white-90) cursor-pointer transition-all duration-200">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* tools */}
            <div className="border p-2 rounded-md border-slate-300">
              <p className="text-xl font-semibold text-zinc-700">Tools</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {stack.tools.map((skill) => (
                  <div key={skill} className="border font-mono rounded-xl px-2 py-1 border-zinc-300 text-sm hover:bg-(--accent) hover:text-white cursor-pointer transition-all duration-200">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
