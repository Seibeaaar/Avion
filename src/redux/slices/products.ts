import { createSlice } from "@reduxjs/toolkit";
import { Product, ProductsSlice } from "src/types/products";
import { getProductsByCategory } from "../thunks/products";

const initialState: ProductsSlice = {
  products: [],
  error: null,
  loading: false,
  cart: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((c) => c.product !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProductsByCategory.fulfilled, (state, action) => {
      state.products = action.payload as Product[];
      state.loading = false;
    });
    builder.addCase(getProductsByCategory.rejected, (state, action) => {
      state.error = action.payload as string;
    });
    builder.addCase(getProductsByCategory.pending, (state) => {
      state.loading = true;
    });
  },
});

export const { addToCart, removeFromCart } = productsSlice.actions;

export default productsSlice.reducer;
