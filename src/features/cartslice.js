import { createSlice , current } from "@reduxjs/toolkit"
import { ChevronLeft, ChevronRight } from "../icons"


const initialState = {
    cartItems: [],
    totalQuantity: 0,
    totalAmount:0,
    isModalOpen : false
   
}


const CartSlice = createSlice(
    {
        name: 'cart',
        initialState ,
        reducers:{
                addToCart: (state ,{payload}) => {
                  const itemId = payload.id
                  const existingItem = state.cartItems.find(item => item.id === itemId)
                  if ( existingItem ){
                      existingItem.quantity++
                  }  else{
                    state.cartItems.push({ id:payload.id  , price:payload.price ,image:payload.image , quantity:payload.quantity })
                  }               
                },
                calculateTotal: (state) => {
                    let Quantity = 0
                    let Amount = 0
                    state.cartItems.map((item) => {
                     Quantity += item.quantity
                     Amount += item.quantity * item.price
                     })
                    state.totalQuantity = Quantity 
                    state.totalAmount = Amount

                },
                
           
               removeItem: (state ,action) => {
                state.cartItems = state.cartItems.filter(item => item.id !== action.payload)
                console.log(action.payload)
               },
               increaseItem: (state , {payload}) => {  
                 state.cartItems.map(item => {
                    if(item.id == payload.id){
                         item.quantity = item.quantity + 1
                    }     
                })
               },                           
               decreaseItem: (state ,{payload}) => {
                   state.cartItems.map(item => {
                      if(item.id == payload.id){ 
                        item.quantity = item.quantity - 1
                      }
                  })
            },
            clearCart : (state) => {
                state.cartItems = []
            },
        showModal : (state , {payload}) => {
               state.isModalOpen = !state.isModalOpen
               
            } 
                

        }
    
    }
    
)

export const { addToCart ,showCart ,removeItem ,increaseItem , decreaseItem, calculateTotal ,clearCart ,showModal } = CartSlice.actions

export default CartSlice.reducer;




