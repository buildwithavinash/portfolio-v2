import Container from "../layout/Container"

const Contact = () => {
  return (
    <section className="py-20">
        <Container>
            <div className="text-center">

                <h2>Lets's build something useful.</h2>

                <p>
                     I’m currently open to frontend roles and collaborations.
                </p>

                <a href="">
                    Email Me
                </a>


                {/* links */}
                <div>
                    <a href="">Github</a>
                    <a href="">LinkedIn</a>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Contact