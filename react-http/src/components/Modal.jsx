import React from 'react'
import styles from './Modal.module.css'
import ReactDOM from 'react-dom'

const Modal = (props) => {
  return ReactDOM.createPortal(
   <div className={styles.mainCover}>
      <div className={styles.modalCover}>
       {props.children}
    </div>
   </div>,
    document.getElementById('modal-root')
  )
}

export default Modal