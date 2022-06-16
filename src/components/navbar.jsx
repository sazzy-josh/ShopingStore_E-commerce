import React , {useState} from 'react'
import { CartIcon } from '../icons'
import { useDispatch } from 'react-redux'
import { showCart } from '../features/cartslice'
import { useSelector } from 'react-redux'



const Navbar = ({showCartItems}) => {
 
    const { totalQuantity } = useSelector( state => state.cart)
    const dispatch = useDispatch()
   

    
  return (
      <div className='nav'>
          <div className='Shop-header'>
              Stop<span className='shop-header'>2</span>Shop🛒
          </div>
       <div className='cartIcon' onClick={showCartItems} >
       <CartIcon  />
       <p className='total'>{totalQuantity}</p>

       </div>
      </div>
  
  )
}


export default Navbar;