import Container from "../layout/Container"

const About = () => {
  return (
    <section className="py-16">
        <Container>
            <div className="max-w-2xl">
                <div>
                <h2>About ME</h2>
                </div>

                <div className="space-y-2">
                    <p className="leading-relaxed">I’m a self-taught frontend developer focused on building clean,
            practical web applications.</p>

                    <p>
                        I enjoy working with React and JavaScript, and I care about writing
            code that is readable, maintainable, and actually useful to the user.
                    </p>

                    <p>
                        Currently, I’m looking for opportunities to grow, collaborate, and
            contribute to real-world projects.
                    </p>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default About