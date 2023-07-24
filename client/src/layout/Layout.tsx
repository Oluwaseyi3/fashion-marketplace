import React from 'react'
import Home from '../home/Home'

import styles from "../components/constants"
import Slide from '../components/Slide/Slide'
const Layout = () => {
  return (
       <div className={`${styles}`}>
        <Home/>
        <Slide/>
    </div>
  )
}

export default Layout