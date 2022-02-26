import React, { useContext, useState } from 'react';
import { CartContex } from '../../store/cart-contex';
import Input from '../UI/Input';
import classes from './MealItemForm.module.css'

const MealItemForm = (props) => {
  const [addNumber, setAddnumber]= useState('')
  const {onAdd}= useContext(CartContex)
 const submitHandler =(e)=>{
   e.preventDefault()
  
  
 }
 const changeAddInput =(e)=>{
   setAddnumber(e.target.value)
   
 }
 
  
  return(
  <form className={classes.form} onSubmit={submitHandler}>
      <Input onChange={changeAddInput} label ={"Amount"}
      input ={{
        id: "amount_" + props.id,
        type: "number",
        min: "1",
        max: "5",
        step: '1',
        defaultValue: '1'
    
      } }/>
      <button onClick={()=> onAdd(props.data, addNumber)} >+Add</button>
  </form>
  ) 
};

export default MealItemForm;
