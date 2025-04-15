import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { orderBurger } from '../features/Burger/BurgerAction';

const CustomerChoice = () => {

  const[number,setNumber]=useState()

  const burgerBase = useSelector(state => state.burger.BurgerBase);
  const dispatch=useDispatch();
  

  return (
    <>
      <h1>Number of Burger Base Available - {burgerBase}</h1>
      <input value={number} onChange={(e)=>setNumber(e.target.value)}></input>
      <button onClick={() => dispatch(orderBurger(number))}>Order Burger</button>
    </>
  )
}


 
export default CustomerChoice;