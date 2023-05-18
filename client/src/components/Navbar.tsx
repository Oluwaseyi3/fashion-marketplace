import React, {useState} from 'react'
import Buttons from './Buttons'


const Navbar = () => {
    const [open, setOpen] = useState(false);
  return (
    <div> 
        {/* <Buttons title="login"/> */}
        <nav className="bg-white text-black">
            <div className="flex items-center font-medium justify-around p-4">
            <div className="z-50 p-0 md:w-auto w-full flex justify-between">
               <h2 className="text-[25px] mr-10">finesse</h2>
               <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
                 <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
                </div>
              </div>
              <ul className="md:flex hidden uppercase items-center gap-8 ">
          <li>
            <a href="/" className="py-4 px-3 inline-block">
              Home
            </a>
          </li>
          <li>
            <a href="/services" className="py-4 px-3 inline-block">
              Services
            </a>
          </li>
          <li>
            <a href="/about" className="py-4 px-3 inline-block">
              About Us
            </a>
          </li>

          <li>
            <a href="/membership" className="py-4 px-3 inline-block">
             Members
            </a>
          </li>
       
        </ul>
            </div>
            
        </nav>
    </div>
  )
}

export default Navbar