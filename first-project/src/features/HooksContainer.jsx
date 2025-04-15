import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { orderPizza } from '../features/Pizza/PizzaAction'

const HooksContainer = () => {
  
  const pizzaBase = useSelector(state => state.pizzaBase);
  const dispatch=useDispatch();
  

  return (
    <>
      <h1>Number of Hooks pizza Base Available - {pizzaBase}</h1>
      <button onClick={() => dispatch(orderPizza())}>Order Pizza.</button>
    </>
  )
}


 
export default HooksContainer;