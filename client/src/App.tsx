
import Navbar from './components/Navbar'
import Layout from './layout/Layout'
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom"
import Gigs from './pages/gigs/Gigs'


function App() {

  
  
  const AppLayout = () => {
    return (
      <div className=' max-w-[1580px] w-full overflow-hidden m-auto'>
      <Navbar/>
      <Layout/>
     </div>
    )
  }
  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout/>,
      children:[
        {
          path: "/",
          element: <Layout/>
        },
        {
          path: "/gigs",
          element: <Gigs/>
        },
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
