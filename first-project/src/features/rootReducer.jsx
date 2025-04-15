import { combineReducers } from 'redux'
import pizzaReducer from './Pizza/PizzaReducer'
import burgerReducer from './Burger/BurgerReducers';
import productReducer from './Products/ProductReducers';

const rootReducer=combineReducers({
    pizza:pizzaReducer,
    burger:burgerReducer,
    product:productReducer
})
export default rootReducer; 
