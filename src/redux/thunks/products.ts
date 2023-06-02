import { createAsyncThunk } from "@reduxjs/toolkit";
import ProductAPI from "src/api/products";
import { Product, ProductCategory } from "src/types/products";

export const getProductsByCategory = createAsyncThunk(
  "products/getByCategory",
  async (category: ProductCategory, { rejectWithValue }) => {
    try {
      const products = await ProductAPI.getProductsByCategory(category);
      return products as Product[];
    } catch (e) {
      rejectWithValue(e);
    }
  }
);
