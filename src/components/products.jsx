import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartslice';


export const Products = () => {
    const items = useSelector(state => state.products)
    const dispatch = useDispatch()
   return (
       <div className='products'>
           <h3 className='header'>Products</h3>
          <div className='grid-template'>
          {items.map(item => {
                 const { id,title,price,image,quantity, category } = item 
              return (
                <div className='product-card' key={id}>
                  <div className='category'>
                    <strong> {category}</strong> 
                    </div>
                <div className='img-product'>
                <img src={image} alt="cloth"  className='img' />
                </div>
                <div className='details'>
                    <div  className='product-detals'>
                    <div className='title'><h3>
                    <strong>{title.slice(0,40)+"...." }</strong> 
                    </h3></div> 
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
                <div className='price-tag'>Price:${price}</div>
            </div>
              )
          }) }

          </div>

       </div> 
  )
}

export default Products;
