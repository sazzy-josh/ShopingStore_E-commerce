import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartslice';


export const Products = () => {
    const items = useSelector(state => state.products)
    const dispatch = useDispatch()
   return (
       <div>
           <h3 className='header'>Products</h3>
          <div className='grid-template'>
          {items.map(item => {
                 const { id,title,price,image,quantity, category } = item 
              return (
                <div className='product-card' key={id}>
                <div className='img-product'>
                <img src={image} alt="cloth"  className='img' />
                </div>
                <div className='details'>
                    <div  className='product-detals'>
                    <span>
                    <strong> Name:</strong> {title}
                    </span>
                    <span>
                    <strong> Category:</strong> {category}
                    </span>
                    
                <p><strong>Price:</strong>${price}</p>
                    </div>
                    
                    <div className='addToCart' onClick={() => {
                      dispatch(addToCart({
                        id:item.id,
                        image: item.image,
                        price: item.price,
                        quantity,
                      }))
                    }}>
                      <div className='add'>+</div>
                    </div>
                </div>
            </div>
              )
          }) }

          </div>

       </div> 
  )
}

export default Products;
