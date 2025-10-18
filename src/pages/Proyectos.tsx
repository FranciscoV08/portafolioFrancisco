import Proyecto from "../components/Proyecto"
import Imagen from '../img/sobremi.jpg'
import Imagen2 from '../img/proyecto1.png'

const Proyectos = () => {
  return (
    <div className="text-white">
        <h1>Hola Proyectos</h1>
        <section>
          <Proyecto titulo="Sistema de login" imagen={Imagen} github="https://github.com/FranciscoV08/Sistema-de-Login-MERN"/>
          <Proyecto titulo="Sistema de login" imagen={Imagen2} github="https://github.com/FranciscoV08/AnimeFavoritos"/>
        </section>
    </div>
  )
}

export default Proyectos