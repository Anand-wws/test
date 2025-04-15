// import { applyMiddleware, createStore } from 'redux'
// import rootReducer from './rootReducer';
// import logger from 'redux-logger';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { thunk } from 'redux-thunk';

// const store=createStore(rootReducer,composeWithDevTools(
//     applyMiddleware(logger,thunk),
// ))
// export default store; 

const configureStore=require( '@reduxjs/toolkit').configureStore;
const pizzaReducer= require('../features/Pizza/pizzaSlice')
const store=configureStore({
    reducer:{
        pizza:pizzaReducer,
    }
})

module.exports=store;