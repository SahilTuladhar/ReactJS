import React, { useState } from 'react'
import styles from './BackGroundDemo.module.css'
import Modal from './Modal'



const BackGroundDemo = () => {
  
  const [isModal , setIsModal] = useState() 

  const openModal = () => {
    setIsModal(true)
  }

  const closeModal = () => {
    setIsModal(false)
  }

  return (
    <div className={styles.mainCover}>

      <div className={styles.contentBlock}>
      <h1>
        This is the Content Page
      </h1>

      <button onClick={openModal}> Open Modal</button>
      </div>

      {isModal ? 
       <Modal>
       <h1>Modal Content</h1>
       <button onClick={closeModal} >Close</button>
     </Modal> :
     null
    }
        
        
    </div>
  )
}

export default BackGroundDemo