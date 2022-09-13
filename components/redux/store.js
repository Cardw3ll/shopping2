import { configureStore } from '@reduxjs/toolkit';
import restaurent_gallery from './restaurentGallery';
import couterReducer from './counter'

 const store = configureStore({
  reducer: {
    reaturentFood: restaurent_gallery,
    counter : couterReducer
  }
});
export {store};