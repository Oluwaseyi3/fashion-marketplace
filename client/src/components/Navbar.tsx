import React, {useState, useEffect} from 'react'
import Buttons from './Buttons'
import work from "../assets/work.jpg"
import newRequest from '../utils/newRequest';
import { useNavigate  } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(false)
    const [user, setUser] = useState<string>("")
    console.log(active);

    useEffect(() => {
   
      const currentUser = JSON.parse(localStorage.getItem("currentUser") || "")
      if (currentUser) {
        setUser(currentUser)
      }
     
      console.log(currentUser);
    }, [user])
    
    
    const navigate = useNavigate()


    
   
    const handleLogout =async () => {
      try {
        await newRequest.post("/auth/logout")

        localStorage.removeItem("currentUser") 
          
       setUser("") 
        
        navigate('/')
      } catch (error) {
        console.log(error);
        
      }
    }
    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }

    useEffect(() => {
      window.removeEventListener("scroll", isActive)
    
      return () => {
       window.removeEventListener("scroll", isActive)
      }
    }, [])
    
  return (
    <div> 
        {/* <Buttons title="login"/> */}
        <nav className="bg-white text-black ">
            <div className="flex items-center font-medium justify-between p-4">
            <div className="z-50 p-0 md:w-auto w-full flex justify-between">
               <h2 className="text-[25px] ml-7">finesse</h2>
               <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
                 <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
                </div>
              </div>
              <ul className="md:flex hidden uppercase items-center gap-8 mr-10">
          <li>
            <a href="/" className="py-4 px-3 inline-block text-black hover:bg-black hover:text-white hover:rounded">
              Explore
            </a>
          </li>
          <li>
            <a href="/services" className="py-4 px-3 inline-block text-black hover:bg-black hover:text-white hover:rounded">
              Sign In
            </a>
          </li>
          <li>
            <a href="/about" className="py-4 px-3 inline-block text-black hover:bg-black hover:text-white hover:rounded">
            Become A Seller
            </a>
          </li>

          <li>
          <img
             src={work}
             alt=""
             className='w-[50px]'
            />
          </li>
       
          {
            user ?
            <Buttons onClick={handleLogout} title='Logout' />
            :
            <Buttons title='Join us' />
          }
        
       
        </ul>
        <ul
          className={`
        md:hidden bg-black z-10 fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4 text-white
        duration-500 ${open ? "right-0" : "right-[-100%]"}
        `}
        >
          <li>
            <a href="/" className="py-7 px-3 inline-block">
              Home
            </a>
          </li>

          <li>
            <a href="/services" className="py-7 px-3 inline-block">
            Services
            </a>
          </li>
          <li>
            <a href="/about" className="py-7 px-3 inline-block">
              About Us
            </a>
          </li>
          <li>
            <a href="/membership" className="py-7 px-3 inline-block">
              Member
            </a>
          </li>

         
        
          <div className="py-5">
            
          <a href="/register" className="py-7 px-3 inline-block">
          <Buttons title="Register with us" />
          </a>
          
           
         
          </div>
        </ul>
            </div>
            
        </nav>
    </div>
  )
}

export default Navbar