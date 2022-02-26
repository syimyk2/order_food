import React, { Fragment, useContext } from 'react'
import classes from './Modal.module.css'
import ReactDOM from 'react-dom'
import ModalContex from '../../store/modalContex'

const Modal = (props) => {
  const {onClose}= useContext(ModalContex)

    const  Backdrop =(props)=>{
        return(
             <div onClick={onClose} className={classes.backdrop}/>
        )
    }

  const  ModalOverlay =(props)=>{
        return(
             <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>

        </div>
        )
    }
  return (
    <Fragment>
       {ReactDOM.createPortal(
           <Backdrop />, document.getElementById('backdrop-root')
       )}
        {ReactDOM.createPortal(
           <ModalOverlay>{props.children}</ModalOverlay>,document.getElementById('modal-root')
       )}
       
    </Fragment>
  )
}

export default Modal