import './App.css'
import { calculateTotal } from './features/cartslice'
import Navbar from './components/navbar'
import Products from './components/products'
import { Cart } from './components/cart'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react'
import Modal from './components/modal'



function App() {
  const { isCartOpen ,cartItems ,isModalOpen } = useSelector(state => state.cart)
  const dispatch = useDispatch()
   
  useEffect(() => {
   dispatch(calculateTotal())
  }, [cartItems]);
  

  
  return (
    <div className="App">
      <Navbar />
      <Products />
      {isCartOpen && < Cart />}
      {isModalOpen && <Modal id={cartItems.id} />}
    </div>
  )
}

export default App
