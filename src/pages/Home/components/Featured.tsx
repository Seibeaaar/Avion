import React from "react";
import { Skeleton } from "antd";

import "../Home.styles.scss";
import { Product } from "src/types/products";

interface IFeaturedProductprops {
  featured: Product;
  loading: boolean;
}

const FeaturedProduct: React.FC<IFeaturedProductprops> = ({
  featured,
  loading,
}) => {
  return (
    <section className="featured">
      {loading || !featured ? (
        <div id="featured-loader">
          <Skeleton.Button className="featured-image--loader" block active />
          <Skeleton active />
        </div>
      ) : (
        <div className="featured-item">
          <img
            src={featured?.image}
            alt="Featured thumbnail"
            className="featured-item--image"
          />
          <div className="featured-item--view">
            <div>
              <h3 className="featured-item--title">{featured?.title}</h3>
              <p className="featured-item--description">
                {featured?.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedProduct;
