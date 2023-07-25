import React from 'react'
import Slider from 'infinite-react-carousel';
import CartCard from '../catCard/CartCard'
import {cards} from "../../data"
 




const Slide: React.FC = () => {
  return (
    <div className='container mx-auto px-4 5 mt-[100px] mb-[100px]'>
     
      <Slider dots slidesToShow={4} autoplay={true} arrowsScroll={1} arrows={false} autoplayScroll pauseOnHover rows={1}>
      {
        cards.map((card) =>(
          <CartCard  key={card.id} item={card}/>
        ))
       }
  </Slider>
    </div>
  )
}

export default Slide