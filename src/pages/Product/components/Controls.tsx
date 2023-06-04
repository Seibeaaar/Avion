import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notification } from "antd";
import Button from "src/components/Button";
import { State } from "src/types/state";
import { addToCart, removeFromCart } from "src/redux/slices/products";
import "../Product.styles.scss";
import { Product } from "src/types/products";

interface IControlsProps {
  product: Product;
}

const ProductControls: React.FC<IControlsProps> = ({ product }) => {
  const cartItem = useSelector((state: State) =>
    state.products.cart.find((c) => c.product.id === product.id)
  );
  const [amount, setAmount] = useState<number>(
    cartItem ? cartItem.quantity : 1
  );
  const dispatch = useDispatch();
  const [notify, contextHolder] = notification.useNotification();

  const changeAmount = (action: "plus" | "minus") => {
    setAmount((value) => {
      if (action === "minus") {
        return value === 1 ? 1 : value - 1;
      }
      return value + 1;
    });
  };

  const handleAction = () => {
    if (cartItem) {
      dispatch(removeFromCart(product.id));
      setAmount(1);
    } else {
      dispatch(
        addToCart({
          product,
          quantity: amount,
        })
      );
    }
    notify.success({
      message: cartItem
        ? "Item is removed from your cart"
        : "Successfully added to the cart",
    });
  };

  return (
    <div className="product-info--controls">
      {contextHolder}
      <div className="controls-amount">
        <p className="product-info--text">Amount:</p>
        <div className="controls-amount--quantity">
          <p
            onClick={() => changeAmount("minus")}
            className="controls-amount--text controls-amount--sign"
          >
            -
          </p>
          <p className="controls-amount--text">{amount}</p>
          <p
            onClick={() => changeAmount("plus")}
            className="controls-amount--text controls-amount--sign"
          >
            +
          </p>
        </div>
      </div>
      <Button
        onClick={handleAction}
        text={cartItem ? "Remove from cart" : "Add to cart"}
        variant="primary"
      />
    </div>
  );
};

export default ProductControls;
