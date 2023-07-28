import React from 'react'
import {AiOutlineStar} from "react-icons/ai"
import Slider from 'infinite-react-carousel'
import Buttons from '../../components/Buttons'

const Gig = () => {
  return (
    <div className='grid grid-cols-2 container mx-auto'>
        <div className='flex flex-col gap-4 justify-between'>
          <div className='text-[24px] '>
            FINESSE <span>&gt; &gt; </span>MOBILE APPS
          </div> 

          <div className='text-[40px] font-bold'>
             I will create ai generated art for you
          </div> 

          <div className='flex gap-3 items-center justify-start py-4'>
            <div><img src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1600" className='w-[50px] h-[50px] rounded-[100%]'/></div>
            <div className='text-[24px] '>Anna Bell</div>
            <div className='flex gap-2 '>
               <AiOutlineStar/> <AiOutlineStar/> <AiOutlineStar/> <AiOutlineStar/> <AiOutlineStar/>
            </div>
          </div>

          <div>
          <Slider dots slidesToShow={1} autoplay={true} arrowsScroll={1} arrows={false} autoplayScroll pauseOnHover rows={1}>
          <img src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1600" className='w-full h-[270px] '/>
          <img src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1600" className='w-full h-[270px] '/>
          <img src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1600" className='w-full h-[270px] '/>
          <img src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1600" className='w-full h-[270px] '/>
          <img src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1600" className='w-full h-[270px] '/>

          </Slider>
          </div>

          <div className='text-[40px]'>
            About This gig
          </div>

          <div className=''>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit sunt impedit, quam sint minima deserunt esse fugiat sapiente quasi explicabo. Eum, magnam necessitatibus! Similique laborum fugit temporibus quis optio quo.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, laudantium debitis officia accusantium dolorem numquam! Quaerat similique eos incidunt cumque qui doloremque rem id fugiat quidem blanditiis? Labore, sapiente beatae.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident suscipit ullam earum nemo natus aspernatur facilis dolorum animi error voluptatibus, minima soluta quae at necessitatibus eveniet delectus veritatis recusandae sed.
            Lorem ipsum 
          </div>

          <div className='flex flex-col my-5 gap-3'>
            <div className='text-[24px]'>
              About the seller
            </div>
            <div className='flex gap-4 flex-wrap'>
              <div>
              <img src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1600" className='w-[70px] h-[70px] rounded-[100%]'/>
              </div>

              <div className='flex flex-col gap-2'>
               
                <div className='text-[24px]'>
                  Anna Bell
                </div>
                <div className='flex gap-2 item-center'>
                 <AiOutlineStar/> <AiOutlineStar/> <AiOutlineStar/> <AiOutlineStar/> <AiOutlineStar/> <div>5</div>
                </div>
                <div><Buttons title="Contact Me"/></div>
              </div>
            </div>

            <div className='border w-full'>
                 
            </div>
          </div>
        </div>



        <div>here</div>
    </div>
  )
}

export default Gig