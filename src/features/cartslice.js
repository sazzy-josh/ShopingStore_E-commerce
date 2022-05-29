import { createSlice , current } from "@reduxjs/toolkit"



const initialState = {
    cartItems: [],
    totalQuantity: 0,
    totalAmount:0,
    isCartOpen: false,
   
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
                    state.cartItems.map((item) => {
                     Quantity += item.quantity
                     }).reduce((prev,current) => prev + current , 0)
                    state.totalQuantity = Quantity 

                },
                // calculateTotalAmount : (state) => {
                //    let itemTotal = 0;
                //    state.cartItems.map(item => {
                //        const { amount , price } = item
                //        itemTotal += amount * price
                //        console.log(itemTotal)
                //    })
                //    state.totalAmount = itemTotal
                //    console.log(state.totalAmount)
                // },
                showCart: (state) => { 
                    state.isCartOpen = !state.isCartOpen 
                 
               },
               removeItem: (state ,action) => {
                state.cartItems = state.cartItems.filter(item => item.id !== action.payload)
               },
               increaseItem: (state , {payload}) => {  
                    state.cartItems.map(item => {
                        if(item.id == payload.id){
                              console.log("item.id:" + item.id , "payload.id:"+ payload.id ) 
                        }  
                     })
                    
                     

               },                           
               decreaseItem: (state ,{payload}) => {
                const existingItem =  state.cartItems.find(item => {
                    console.log("item.id:" + item.id , "payload.id:"+ payload.id ) 
                })
            },
                

        }
    
    }
    
)

export const { addToCart ,showCart ,removeItem ,increaseItem , decreaseItem, calculateTotal, calculateTotalAmount } = CartSlice.actions

export default CartSlice.reducer;




