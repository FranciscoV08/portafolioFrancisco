// app donde se crea el provider y se renderiza las routes 
import { RouterProvider } from 'react-router-dom'

// importamos nuestras rutas para tenerlos separados
import routes from './routes'

function App() {
  return (
    <RouterProvider router={routes} />
  )
}

export default App
