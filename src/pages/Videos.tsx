import VideoCard from "../components/VideoCard"

const Videos = () => {

    return (
        <div className="text-white">
            <h2 className="text-2xl font-light my-2">Videos</h2>
            <section className="md:flex md:flex-wrap md:justify-center gap-5">
                <VideoCard url="https://www.youtube.com/embed/5eYo8DGpND4?si=XEuRpaw2b3tAdd4M" title="5 Formas de Ganar Plata Programando en Argentina"/>
                <VideoCard url="https://www.youtube.com/embed/0w6-kBQM-2g?si=05hbosyurOTqu2l6" title="💻 Cómo optimicé mi CV como Fullstack Developer en Argentina 🇦🇷"/>
                <VideoCard url="https://www.youtube.com/embed/Mga5p55AXmo?si=GEdYRQeB_cZBKuaV" title="Personaliza tu perfil de Github así | Genera tu perfil de github"/>
            </section>
        </div>
    )
}

export default Videos


