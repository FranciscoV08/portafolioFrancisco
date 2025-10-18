import type React from "react";
import { Link } from "react-router-dom";

interface RedesProps {
    image: string;
    name: string;
    link: string
}

const Redes: React.FC<RedesProps> = ({ image, name, link }) => {
    return (

        <Link to={link}>
            <div className="m-5 flex items-center hover:font-bold justify-items-start gap-5 hover:text-violet-500  transform hover:scale-105 transition duration-300">
                <div>
                    <img className='mx-auto w-10 object-cover shadow-lg' src={image} alt={name} />
                </div>
                <p>{name}</p>
            </div>
        </Link>
    )
}
export default Redes