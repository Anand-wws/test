import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { orderBurger } from '../features/Burger/BurgerAction';

const BurgerBox = () => {
  
  const burgerBase = useSelector(state => state.burger.BurgerBase);
  const dispatch=useDispatch();
  

  return (
    <>
      <h1>Number of Burger Base Available - {burgerBase}</h1>
      <button onClick={() => dispatch(orderBurger())}>Order Burger</button>
    </>
  )
}


 
export default BurgerBox;