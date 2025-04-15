const createSlice=require('@redux/toolkit').createSlice;
const initialState={
    pizzaBase:1000
}

const pizzaSlice=createSlice({
    name:'pizza',
    initialState,
    reducers:{
        pizza_order:(state)=>{
            state.pizzaBase--
        }
    }
})

console.log(pizzaSlice);
module.exports=pizzaSlice.reducer;
module.exports.pizzaActions=pizzaSlice.action;
