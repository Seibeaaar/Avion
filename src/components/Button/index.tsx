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
  return (
    <button className={composeButtonClasses()} {...props}>
      <p>{props.text}</p>
    </button>
  );
};

export default Button;
