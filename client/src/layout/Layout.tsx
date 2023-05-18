import React from 'react'
import Home from '../home/Home'
import styles from "../components/constants"
const Layout = () => {
  return (
       <div className={`${styles.boxWidth}`}>
        <Home/>
    </div>
  )
}

export default Layout