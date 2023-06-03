import { Product } from "./products";

export interface State {
  products: {
    products: Product[];
    cart: {
      product: Product;
      quantity: number;
    }[];
    error: string | null;
    loading: boolean;
  };
}
