import React from "react";
import { useSelector } from "react-redux";
import Qualities from "src/components/Qualities";
import "./Home.styles.scss";
import ProductRow from "src/components/ProductRow";
import FeaturedProduct from "./components/Featured";
import { State } from "src/types/state";

const HomePage = () => {
  const { products, loading } = useSelector((state: State) => state.products);

  const featured = products[0];
  const otherProducts = products.slice(1);

  return (
    <main className="home">
      <section>
        <FeaturedProduct loading={loading} featured={featured} />
      </section>
      <h2 className="home-title">More items from category</h2>
      <ProductRow loading={loading} products={otherProducts} />
      <Qualities />
    </main>
  );
};

export default HomePage;
