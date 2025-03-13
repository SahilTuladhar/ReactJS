import React, { useState } from 'react'
import styles from './ModuleStyles.module.css'

const ModuleStyles = () => {
 const [primary , setPrimary] = useState(false)

 function buttonHandler(){
    {primary ? setPrimary(false) : setPrimary(true)}
 } 

 let classname = primary ? `primary` : `secondary`
  return (
    <div>
        <h1  className = {`${styles[classname]} ${styles.fontxl}`} >StyleSheet</h1>
        <button onClick={buttonHandler}>Change Color</button>
    </div>
  )
}

export default ModuleStyles