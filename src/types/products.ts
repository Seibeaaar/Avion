export type ProductCategory =
  | "jewelery"
  | "men's clothing"
  | "women's clothing"
  | "electronics";

export interface Product {
  id: string;
  title: string;
  price: string;
  category: ProductCategory;
  description: string;
  image: string;
}

export interface ProductsSlice {
  products: Product[];
  singleProduct: Product | null;
  error: string | null;
  loading: boolean;
}
