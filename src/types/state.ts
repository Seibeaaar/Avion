import { Product } from "./products";

export interface State {
  products: {
    products: Product[];
    cart: {
      product: string;
      quantity: number;
    }[];
    error: string | null;
    loading: boolean;
  };
}
