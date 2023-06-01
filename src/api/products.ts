import instance from ".";
import { ProductCategory } from "src/types/products";
import categories from "src/constants/categories";

const getAllProducts = async () => {
  const { data } = await instance.get("/products");
  return data;
};

const getSingleProduct = async (id: string) => {
  const { data } = await instance.get(`/products/${id}`);
  return data;
};

const getProductsByCategory = async (category: ProductCategory) => {
  const { data } = await instance.get(`/products/category/${category}`);
  return data;
};

export default {
  getAllProducts,
  getProductsByCategory,
  getSingleProduct,
};
