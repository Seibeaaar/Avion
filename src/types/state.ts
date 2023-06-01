import { Product } from "./products";

export interface State {
  products: {
    products: Product[];
    singleProduct: Product;
    error: string | null;
    loading: boolean;
  };
}
