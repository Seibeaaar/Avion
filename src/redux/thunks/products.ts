import { createAsyncThunk } from "@reduxjs/toolkit";
import ProductAPI from "src/api/products";
import { Product, ProductCategory } from "src/types/products";

export const getSingleProduct = createAsyncThunk(
  "products/getSingle",
  async (id: string, { rejectWithValue }) => {
    try {
      const product = await ProductAPI.getSingleProduct(id);
      return product as Product;
    } catch (e: any) {
      rejectWithValue(e.message as string);
    }
  }
);

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
