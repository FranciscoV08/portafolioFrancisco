import { createBrowserRouter } from "react-router-dom";
import { Header } from './components/Header';
import Inicio from './pages/Inicio';
import Proyectos from './pages/Proyectos';
import Videos from "./pages/Videos";

const routes = createBrowserRouter([
  {
    element: <Header />,
    children: [
      {
        path:"/",
        element: <Inicio />
      },
      {
        path:"/proyectos",
        element:<Proyectos />
      },
      {
        path:"/videos",
        element: <Videos />
      }
    ]
  },
])

export default routes