import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { removeItem , decreaseItem, increaseItem , clearCart , showModal } from '../features/cartslice';
import { Trash } from '../icons';


export const Cart = () => {
    const {  cartItems , totalAmount  } = useSelector(state => state.cart)
  
    const dispatch = useDispatch()
    
  return (
    <div className='Cart'>
          <div>
              {
                 cartItems.length == 0 ? <h3>  Your Cart is Empty</h3> : <div>You have {cartItems.length} items In cart</div>
              }

          </div>
           


        <div className="cart-list">

          {cartItems.length == 0? <h5 className='no-item'>No Item In Cart 🛒</h5> :
            cartItems && cartItems.map(item => {
                const { image , price , title , quantity , id } = item
                return (
                    <div className='cart-items' key={id}>
                    <div className='cart-image'>
                        <img src={image} alt={title} />
                        <div className='remove-item' onClick={() => dispatch(removeItem(id))}><Trash /></div>
                    </div>
    
                    <div className='price'>
                        <span>Price</span>
                        <span>${price} x {quantity} </span>
                    </div>
    
                    <div className='cart-up-down'> 
                        <button disabled = {quantity === 1} className='up' onClick={() =>{
                                dispatch(decreaseItem({ id }))
                        } }> - </button>
                        <div className='cart-price'>{quantity}</div>
                        <button  className='down'onClick={() => dispatch(increaseItem({ id }))} > + </button>
    
                    </div>     
                    </div>
                )
           
            })
         }
          <div className="clear-cart">
              <button className='remove-btn' onClick={() =>  dispatch(showModal())}>ClearCart</button>
          </div>

        </div>
        
        <div >
            <hr />
            <div className='cart-total'>
            <span><strong>Total</strong></span>
            <span> ${totalAmount.toFixed(2)} </span>
            </div>
            

        </div>

        

    </div>
  )
}
