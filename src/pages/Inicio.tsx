import Redes from "../components/Redes"

import fotoPerfil from '../img/foto-perfil-anime.jpg'
import instagramI from '../img/instagram.png'
import githubI from '../img/github (1).png'
import linkedinI from '../img/linkedin.png'
import sobremiI from '../img/sobremi.jpg'

const Inicio = () => {
    return (
        <>
            <main className="text-white flex flex-col md:flex-none gap-5">
                {/* <div className="text-sm md:text-blue-700 ">
                    Texto que cambia de tamaño según la pantalla
                </div> */}
                <div>
                    <section className="lg:flex lg:items-center justify-center">
                        <div className="">
                            <img className="mx-auto w-50 h-50 object-cover rounded-full border-4 border-indigo-500 shadow-lg" src={fotoPerfil} alt="" />
                        </div>
                        <section className="">
                            <div>
                                <h2 className="text-3xl font-bold tracking-wider font-roboto">Hola, soy francisco. <span className="text-gray-400">Programador fullstack y creador de contenido</span></h2>
                            </div>
                            <div className="lg:flex">
                                <Redes image={instagramI} name="Instagram" link="#" />
                                <Redes image={linkedinI} name="Linkedin" link="#" />
                                <Redes image={githubI} name="Github" link="#" />
                            </div>
                        </section>
                    </section>
                </div>
                <section>
                    <h2 className="text-2xl font-bold ">Sobre mi</h2>
                    <div>
                        <img className="w-80 h-35 object-cover rounded-lg mx-auto my-5" src={sobremiI} alt="" />
                    </div>
                    <p className="font-light my-5 font-roboto tracking-wider text-xl">Soy un desarrollador web en formación con pasión por la tecnología y el aprendizaje constante. Me gusta transformar ideas en proyectos funcionales, aplicando HTML, CSS y JavaScript para dar vida a interfaces interactivas.
                        Mi objetivo es crecer profesionalmente en el mundo del desarrollo web, aportar valor en cada proyecto y nunca dejar de mejorar 🚀.</p>
                </section>
            </main>
        </>
    )
}

export default Inicio