import { FaRegCopy } from "react-icons/fa"
import Container from "../layout/Container"

const Contact = () => {
  return (
    <section className="py-20 bg-slate-100">
        <Container>
            <div className="text-center">

                <h2 className="text-3xl md:text-5xl text-center font-semibold text-zinc-900 mb-4">Lets's build something useful.</h2>

                <p className="text-xl text-black">
                     I’m currently open to frontend roles and collaborations.
                </p>

                <div className="flex gap-4 items-center justify-center">

                <a href="" >
                    avinashprasad.dev@gmail.com
                </a>

                <button><FaRegCopy /></button>
                </div>


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