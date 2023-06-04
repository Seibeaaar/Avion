import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./Product.styles.scss";
import { State } from "src/types/state";
import { Rate } from "antd";
import ProductControls from "./components/Controls";

const ProductPage = () => {
  const params = useParams();
  const product = useSelector((state: State) =>
    state.products.products.find((p) => p.id == params.id)
  );
  return product ? (
    <main>
      <section className="product">
        <img
          src={product?.image}
          alt="Product image"
          className="product-image"
        />
        <div className="product-info">
          <h1 className="product-info--title">{product?.title}</h1>
          <Rate disabled defaultValue={product?.rating.rate || 0} />
          <p className="product-info--price">{product?.price}$</p>
          <p className="product-info--text product-info--caption">
            Description
          </p>
          <p className="product-info--text">{product?.description}</p>
          <ProductControls product={product} />
        </div>
      </section>
    </main>
  ) : null;
};

export default ProductPage;
