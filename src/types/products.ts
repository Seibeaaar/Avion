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
  rating: {
    count: number;
    rate: number;
  };
}

export interface ProductsSlice {
  products: Product[];
  error: string | null;
  loading: boolean;
  cart: {
    product: Product;
    quantity: number;
  }[];
}
