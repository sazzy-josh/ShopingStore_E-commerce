import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { removeItem , decreaseItem, increaseItem  } from '../features/cartslice';
import { ChevronLeft ,ChevronRight ,Trash } from '../icons';

export const Cart = () => {

    const dispatch = useDispatch()
    const {  cartItems , totalAmount } = useSelector(state => state.cart)
  return (
    <div className='Cart'>
          <div>
              {
                 cartItems.length == 0 ? <p>  Your bag is Empty</p> : <div>You have {cartItems.length} items In cart</div>
              }

          </div>
           


        <div className="cart-list">

          {cartItems.length == 0? <h2>No Items In Cart</h2> :
            cartItems && cartItems.map(item => {
                const { id , image , price , title , quantity  } = item
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
                        <div className='up' onClick={() => dispatch(decreaseItem(id))}> <ChevronLeft /> </div>
                        <div className='cart-price'>{quantity}</div>
                        <div className='down'onClick={() => dispatch(increaseItem(id))} > <ChevronRight /></div>
    
                    </div>     
                    </div>
                )
           
            })
         }
          <div className="clear-cart">
              <button className='remove-btn'>ClearCart</button>
          </div>

        </div>
        
        <div >
            <hr />
            <div className='cart-total'>
            <span>Total</span>
            <span> ${totalAmount} </span>
            </div>
            

        </div>

        

    </div>
  )
}
