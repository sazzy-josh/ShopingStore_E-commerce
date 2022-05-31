import React from 'react'
import { CartIcon } from '../icons'
import { useDispatch } from 'react-redux'
import { showCart } from '../features/cartslice'
import { useSelector } from 'react-redux'



const Navbar = () => {
    const dispatch = useDispatch()
    const { totalQuantity } = useSelector( state => state.cart)

    
  return (
      <div className='nav'>
          <div className='Shop-header'>
              Stop<span className='shop-header'>2</span>Shop🛒
          </div>
       <div className='cartIcon' onClick={()=>dispatch(showCart())}>
       <CartIcon />
       <p className='total'>{totalQuantity}</p>

       </div>
      </div>
  
  )
}


export default Navbar;