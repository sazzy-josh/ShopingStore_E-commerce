import { configureStore, createReducer } from "@reduxjs/toolkit";
import productsReducer from "./features/productsSlice"; 
import cartReducer from './features/cartslice'


const store = configureStore({
    reducer : {
        products: productsReducer,
        cart: cartReducer,
    }
})

export default store