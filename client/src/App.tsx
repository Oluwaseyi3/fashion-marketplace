
import Navbar from './components/Navbar'
import Landing from './pages/layout/Landing.tsx'
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom"
import Gigs from './pages/gigs/Gigs'
import Gig from './pages/gig/Gig.tsx'
import Login from './pages/login/Login.tsx'


function App() {

  
  
  const AppLayout = () => {
    return (
      <div className=' max-w-[1580px] w-full overflow-hidden m-auto'>
      <Navbar/>
      <Outlet/>
      {/* <Landing/> */}
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
          element: <Landing/>
        },
        {
          path: "/gigs",
          element: <Gigs/>
        },
        {
          path: "/gig",
          element: <Gig/>
        },
        {
          path:'/login',
          element: <Login/>
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
