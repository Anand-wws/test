import { FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS } from "./ProductTypes";
import  axios  from "axios";

export const fetchRequest =() =>{
    return{
        type:FETCH_REQUEST
    }
}

export const fetchSuccess= (products) => {
    return{
        type:FETCH_SUCCESS,
        payload:products
    }
}

export const fetchError =(error) =>{
    return{
        type:FETCH_ERROR,
        payload:error
    }
}

 export const fetchProduct=()=>{
    return(dispatch) =>{
        dispatch(fetchRequest());
        axios.get('https://fakestoreapi.com/products')
        .then(res =>{
            const products=res.data.map(product => product.title);
            dispatch(fetchSuccess(products))
        }).catch(err=>{
            const errorMsg = err.message;
            dispatch(fetchError(errorMsg))
            console.log(err)
        })
    }
 }