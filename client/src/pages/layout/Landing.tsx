import React from 'react'
import Home from '../../home/Home'

import styles from "../../components/constants"
import Slide from '../../components/Slide/Slide'
import Talent from '../../components/talent/Talent'
const Landing = () => {
  return (
       <div >
        <Home/>
        <Slide/>
        <Talent/>
    </div>
  )
}

export default Landing