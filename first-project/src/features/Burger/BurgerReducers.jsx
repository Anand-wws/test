import { ORDER_BURGER } from "./BurgerType"

const initialBurger={
    BurgerBase:200
}

const burgerReducer = (state=initialBurger,action) =>{
    switch(action.type){
        case ORDER_BURGER:
            return{
                ...state,
                BurgerBase:state.BurgerBase - action.payload,
            }
        default:
            return state

    }

}

export default burgerReducer;