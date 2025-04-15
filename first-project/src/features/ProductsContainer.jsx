import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from './Products/ProductAction'

const ProductsContainer = () => {
  
   const productsData=useSelector(state => state.product)
   const dispatch=useDispatch()
    useEffect(()=>{
      dispatch(fetchProduct())
  },[])
  
    return (
    <div>
       {productsData.loading && <p>Loading...</p>}
       {productsData.error && <p>{productsData.error}</p>}
       {productsData.products && <h4>{productsData.products.map(title =><p>{title}</p>)}</h4>}
    </div>
  )
}

// const mapStateToProps=state=>{
//     return{
//         productsData:state.product
//     }
// }

// const mapDispatchToProps=dispatch=>{
//     return{
//         fetchProducts:dispatch(fetchProduct())
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps) (ProductsContainer);

export default ProductsContainer;