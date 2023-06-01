import { createSlice } from "@reduxjs/toolkit";
import { Product, ProductsSlice } from "src/types/products";
import { getSingleProduct, getProductsByCategory } from "../thunks/products";

const initialState: ProductsSlice = {
  products: [],
  singleProduct: null,
  error: null,
  loading: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
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
    builder.addCase(getSingleProduct.fulfilled, (state, action) => {
      state.singleProduct = action.payload as Product;
      state.loading = false;
    });
    builder.addCase(getSingleProduct.rejected, (state, action) => {
      state.error = action.payload as string;
    });
    builder.addCase(getSingleProduct.pending, (state) => {
      state.loading = true;
    });
  },
});

export default productsSlice.reducer;
