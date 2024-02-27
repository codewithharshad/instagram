import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers : {
        addToCart(state, action){
            state.push(action.payload)       
        },
        deleteFromCart(state,action){
 
            return state.filter(item => item.$id != action.payload.$id);
        },
        clearCart(state) {
            // Clear the cart
            return [];
        },
    }
})

export const {addToCart, deleteFromCart, clearCart} = cartSlice.actions;

export default cartSlice.reducer;