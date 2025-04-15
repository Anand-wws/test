import React from 'react';
import { orderPizza } from '../features/Pizza/PizzaAction';
import { connect } from 'react-redux';


const PizzaBox = (props) => {
  
  console.log(props)

  return (
    <>
    <div>
        <h2>Number of Pizza Base Avaliable - {props.pizzaBase}</h2>
        <button onClick={props.orderPizza}>Order Pizza</button>
    </div>
    </>
  );
}


 const mapStateToProps=(state)=>{
   return{
     pizzaBase:state.pizza.pizzaBase
    }
  }
 
 const mapDispatchProps=(dispatch) =>{
  return{
     orderPizza:() => dispatch(orderPizza())
  }
 }
export default connect(mapStateToProps,mapDispatchProps) (PizzaBox);