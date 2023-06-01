import React from "react";
import "./Button.styles.scss";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "white";
  text: string;
}

const Button: React.FC<IButtonProps> = (props) => {
  const variant = props.variant || "default";
  const composeButtonClasses = () => {
    let custom = "button-container--default";
    switch (variant) {
      case "primary":
        custom = "button-container--primary";
        break;
      case "white":
        custom = "button-container--white";
    }
    return ["button", custom].join(" ");
  };
  const composeButtonTextClasses = () => {
    let custom = "button-text--default";
    switch (variant) {
      case "primary":
        custom = "button-text--primary";
        break;
      case "white":
        custom = "button-text--white";
        break;
    }
    return ["button-text", custom].join(" ");
  };
  return (
    <button className={composeButtonClasses()} {...props}>
      <p className={composeButtonTextClasses()}>{props.text}</p>
    </button>
  );
};

export default Button;
