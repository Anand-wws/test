
import './App.css'
import BurgerBox from './Components/BurgerBox'
import CustomerChoice from './Components/CustomerChoice'
import PizzaBox from './Components/PizzaBox'
import ProductsContainer from './features/ProductsContainer'

import store from './features/store'
import { Provider } from 'react-redux'

function App() {
 

  return (
    <>
      <Provider store={store}> 
        {/* <PizzaBox/>
        <BurgerBox />
        <CustomerChoice /> */}
        <ProductsContainer />
      </Provider>

    </>
  )
}

export default App
