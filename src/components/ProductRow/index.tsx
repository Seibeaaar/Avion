import React from "react";
import { Product } from "src/types/products";
import { Skeleton } from "antd";
import "./ProductRow.styles.scss";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Button from "../Button";

interface IProductItemProps {
  products: Product[];
  loading: boolean;
}

const ProductRow: React.FC<IProductItemProps> = ({ products, loading }) => {
  if (loading) {
    return (
      <section className="product-row">
        {[...Array(4)].map((_, i) => (
          <div key={Date.now() + i} className="product-item">
            <Skeleton.Image />
            <Skeleton paragraph />
          </div>
        ))}
      </section>
    );
  }
  return (
    <AnimationOnScroll
      initiallyVisible
      animateOnce
      animateIn="animate__fadeInLeft"
    >
      <section className="product-row">
        {products.map((product) => (
          <div
            className="product-item product-item--container"
            key={product.id}
          >
            <div className="product-item--content">
              <img
                src={product.image}
                alt={product.title}
                className="product-item--image"
              />
              <h4 className="product-item--text">{product.title}</h4>
              <p className="product-item--text product-item--price">
                ${product.price}
              </p>
            </div>
            <div className="product-item--view">
              <Button variant="white" text="View product" />
            </div>
          </div>
        ))}
      </section>
    </AnimationOnScroll>
  );
};

export default ProductRow;
