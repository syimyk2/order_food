import React, { useContext } from 'react'
import { CartContex } from '../../store/cart-contex'
import ModalContex from '../../store/modalContex'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import CartItem from './CartItem'



const Cart = () => {
  const {onClose} = useContext(ModalContex)
  const cartData = useContext(CartContex)
   const totalPrice = cartData.totalPrice.toFixed(2)
    
   const {onAdd, onRemove} = useContext(CartContex)
  
    const cartItems = cartData.items.map(el=> <CartItem
       price = {el.price} 
       name={el.name}
        amount={el.amount}
         key={el.id}
         item={el}
         onAdd={onAdd.bind(null,el)}
         onRemove={onRemove.bind(null, el.id)}
         ></CartItem>)
  return (
    <Modal>
      {cartItems}
        <div className={classes.total}>
     <span>Total Price</span>
    <span>{totalPrice}</span>
        </div>
        <div className={classes.actions}>
        <button onClick={onClose} className={classes['button--alt']}>close</button>
        <button className={classes.button}>order</button>
        </div>
    
    </Modal>
  )
}

export default Cart