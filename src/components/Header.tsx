import { Link, Outlet } from "react-router-dom"

export const Header = () => {
  return (
    <>

      <div className="text-white text my-5">
        <div>
          <p className="text-2xl font-light my-2">Francisco Villavicencio</p>
        </div>
        <div className=" font-bold">
          <Link className="mx-2 hover:text-gray-400 tracking-wide" to={"/"}>inicio</Link>
          <Link className="mx-2 hover:text-gray-400 tracking-wide" to={"/proyectos"}>proyectos</Link>
          <Link className="mx-2 hover:text-gray-400 tracking-wide" to={"/videos"}>videos</Link>
        </div>
      </div>
          <Outlet />
    </>

  )
}
