import React from "react";
import "./Input.styles.scss";

interface IInputProps extends React.HTMLProps<HTMLInputElement> {
  error?: string;
  label?: string;
}

const Input: React.FC<IInputProps> = (props) => {
  return (
    <>
      {props.label ? (
        <label className="label" htmlFor={props.id}>
          {props.label}
          <input className="input" {...props} />
        </label>
      ) : (
        <input className="input" {...props} />
      )}
    </>
  );
};

export default Input;
