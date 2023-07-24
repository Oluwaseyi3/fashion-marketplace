
import man from "../assets/man.jpg"
import woman from "../assets/woman.jpg"
import Buttons from "../components/Buttons"

const Home = () => {
  return (
    <div className='  bg-black   flex justify-center items-center'>
          <div className='flex lg:flex-row flex-col justify-start p-5 w-auto'>
                <div className='flex flex-col justify-start   lg:items-start items-center pt-3 max-w-[50rem] h-[70%] gap-5 p-5 '>
              
                    <div className="text-[40px] w-[80%] text-white p-3">
                          Find and Connect with the perfect freelance professionals in Africa
                        </div>
                        <div className="flex w-[80%] p-3">
                           <input className="p-2 w-[80%]" placeholder="Try 'Graphic Designs'" />
                            <button className="text-white p-3 bg-blue-500 focus:ring-blue-500 focus:border-blue-500">
                              Search
                            </button>
                        </div>
                  
                       
                </div>
                <div className='flex justify-center hidden md:block mt-10 pt-3  md:items-start items-center  items-start max-w-[50rem]  h-[70%] md:h-[50%]'> 
                      <div className="w-[500px] relative">
                         <div  className=" w-1/2 max-h-[450px]">
                           <img src={man} className="h-[90%]"/>
                         </div>
                         <div className=" w-1/2 max-h-[250px] ">
                         <img src={woman} className=" h-[50%] absolute sm:top-0 sm:right-0"/>
                         </div>
                    
                      </div>
                         
                </div>
          </div>
    </div>
  )
}

export default Home