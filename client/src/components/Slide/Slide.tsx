import React from 'react'
import Slider from 'infinite-react-carousel';
import CartCard from '../catCard/CartCard'
import {cards} from "../../data"
 




const Slide: React.FC = () => {
  return (
    <div>
       {
        cards.map((card) =>(
          <CartCard  key={card.id} item={card}/>
        ))
       }
      <Slider dots>
    <div>
      <h3>1</h3>
    </div>
    <div>
      <h3>2</h3>
    </div>
    <div>
      <h3>3</h3>
    </div>
    <div>
      <h3>4</h3>
    </div>
    <div>
      <h3>5</h3>
    </div>
  </Slider>
    </div>
  )
}

export default Slide