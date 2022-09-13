import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  products:[],
  cartItems:[]
}


const restaurentGallerySlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
      displayProduct: (state, action) => {
          state.products = action.payload;
      },
      addedToCart: (state, action) => {
          state.cartItems.push(action.payload);
      },
      removeToCart: (state, action) => {
          state.cartItems = state.cartItems.filter((sta) => sta.id !== action.payload.id);          
      }        
  }
})
export const { displayProduct, addedToCart, removeToCart } = restaurentGallerySlice.actions
export default restaurentGallerySlice.reducer