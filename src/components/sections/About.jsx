import Container from "../layout/Container"

const About = () => {
  return (
    <section className="py-16">
        <Container>
            <div className="max-w-xl mx-auto">
                <div>
                <h2 className="text-3xl md:text-5xl text-center font-semibold text-zinc-800">About Me</h2>
                </div>

                <div className="space-y-4 mt-8">
                    <p className="leading-relaxed text-zinc-800">I’m a self-taught frontend developer focused on building clean,
            practical web applications.</p>

                    <p className="leading-relaxed text-zinc-800">
                        I enjoy working with React and JavaScript, and I care about writing
            code that is readable, maintainable, and actually useful to the user.
                    </p>

                    <p className="leading-relaxed text-zinc-800">
                        Currently, I’m looking for <mark className="bg-green-400">opportunities</mark> to grow, collaborate, and
            contribute to real-world projects.
                    </p>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default About