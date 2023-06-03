import React from "react";
import "./Button.styles.scss";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "white" | "danger";
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
        break;
      case "danger":
        custom = "button-container--danger";
        break;
    }
    return ["button", custom].join(" ");
  };
  const composeButtonTextClasses = () => {
    switch (variant) {
      case "primary":
        return "button-text--primary";
      case "white":
        return "button-text--white";
      case "danger":
        return "button-text--danger";
      default:
        return "button-text--default";
    }
  };
  return (
    <button className={composeButtonClasses()} {...props}>
      <p className={composeButtonTextClasses()}>{props.text}</p>
    </button>
  );
};

export default Button;
