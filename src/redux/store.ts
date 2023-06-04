import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/products";

const store = configureStore({
  reducer: {
    products: productsSlice,
  },
});

export type AppDispatch = typeof store.dispatch;

export default store;
