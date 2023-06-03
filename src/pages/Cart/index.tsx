import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "src/redux/slices/products";
import { Empty } from "antd";
import { State } from "src/types/state";
import { minifyText, calculateTotal } from "src/utils/product";
import "./Cart.styles.scss";
import Button from "src/components/Button";

const CartPage = () => {
  const { cart } = useSelector((state: State) => state.products);
  const dispatch = useDispatch();

  const isEmptyCart = !cart.length;

  const totalToCheckout = cart.reduce(
    (acc, ci) => acc + calculateTotal(ci.quantity, +ci.product.price),
    0
  );

  const removeItem = (id: string) => dispatch(removeFromCart(id));

  return (
    <main className="cart">
      <h1 className="cart-title">Your shopping cart</h1>
      <section className="cart-content">
        <div className="row cart-content--header">
          <p className="cart-content--caption cart-product">Product</p>
          <p className="cart-content--caption cart-quantity">Quantity</p>
          <p className="cart-content--caption cart-total">Total</p>
        </div>
        {!isEmptyCart ? (
          cart.map((ci) => (
            <>
              <div key={ci.product.id} className="row">
                <div className="cart-product">
                  <img
                    src={ci.product.image}
                    alt={ci.product.title}
                    className="cart-product--image"
                  />
                  <div className="cart-product--info">
                    <h3 className="product-info--title">{ci.product.title}</h3>
                    <p
                      className="product-info--description"
                      title={ci.product.description}
                    >
                      {minifyText(ci.product.description, 100)}
                    </p>
                    <p className="product-info--price">${ci.product.price}</p>
                  </div>
                </div>
                <div className="cart-quantity">
                  <p className="cart-quantity--number">{ci.quantity}</p>
                </div>
                <div className="cart-total">
                  <p className="cart-total--price">
                    ${calculateTotal(ci.quantity, +ci.product.price)}
                  </p>
                </div>
              </div>
              <div className="cart-remove">
                <Button
                  onClick={() => removeItem(ci.product.id)}
                  text="Remove item"
                  variant="danger"
                />
              </div>
            </>
          ))
        ) : (
          <div className="cart-empty">
            <Empty description="No items so far" />
          </div>
        )}
      </section>
      <section className="cart-checkout">
        <div className="row">
          <p className="cart-checkout--subtotal">Subtotal</p>
          <p className="cart-checkout--price">${totalToCheckout}</p>
        </div>
        <p className="cart-checkout--info">
          Taxes and shipping are calculated at checkout
        </p>
        {isEmptyCart ? null : (
          <Button text="Go to checkout" variant="primary" />
        )}
      </section>
    </main>
  );
};

export default CartPage;
