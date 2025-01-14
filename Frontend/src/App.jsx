import './App.css'
import ROUTER from './router/router'
import { createBrowserRouter, RouterProvider } from "react-router"

const routes = createBrowserRouter(ROUTER)

function App() {

  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
