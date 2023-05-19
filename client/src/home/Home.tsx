
import man from "../assets/man.jpg"
import woman from "../assets/woman.jpg"
import Buttons from "../components/Buttons"

const Home = () => {
  return (
    <div className='h-[70vh] bg-black w-full flex justify-center items-center'>
          <div className='flex md:flex-row flex-col w-full  p-5'>
                <div className='flex flex-col justify-center items-start p-3 w-1/2 h-[50vh] gap-5'>
                        <div className="text-[40px] text-white">
                          Find the perfect Fashion Expert for your business
                        </div>
                        <div className="flex">
                           <input className="p-2 w-[500px]" placeholder="Try 'some shorts'" />
                            <button className="text-white p-3 bg-blue-500 focus:ring-blue-500 focus:border-blue-500">
                              Search
                            </button>
                        </div>
                </div>
                <div className='flex justify-center items-center w-1/2  h-[60vh] '> 
                      <div className="w-[500px] relative">
                         <div  className=" w-1/2 ">
                           <img src={man} className="h-[50%]"/>
                         </div>
                         <div className=" w-1/2 ">
                         <img src={woman} className="h-[50%] absolute sm:top-0 sm:right-0"/>
                         </div>
                    
                      </div>
                         
                </div>
          </div>
    </div>
  )
}

export default Home