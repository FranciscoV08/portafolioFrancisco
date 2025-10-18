import React from "react";

type ProyectoProps = {
    titulo: string;
    imagen: string;
    github: string
}

const Proyecto: React.FC<ProyectoProps> = ({ titulo, imagen, github }) => {
    return (
        <div className="md:hover:border-1 border-green-400 my-5 text-center md:h-52 bg-gray-800 rounded-md md:flex justify-between items-center">
            <div className='md:w-1/4'>
                <a target="_blank"
                    rel="noopener noreferrer" href={github} className="text-xl font-bold text-gray-100">Github</a>
                <p className="font-light text-xs">{`"${titulo}"`}</p>
            </div>
            <div className='md:w-3/4 h-full [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
                <img className='w-full h-full object-cover rounded-lg' src={imagen} alt="" />
            </div>
        </div>
    )
}

export default Proyecto