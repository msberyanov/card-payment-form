import React from "react";
import "./card-cvv-input-field.css"

interface CardCvvInputFieldProps {
  onFocus: React.FocusEventHandler<HTMLInputElement>;
  onKeyDown: React.KeyboardEventHandler<HTMLInputElement>;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const CardCvvInputField: React.FC<CardCvvInputFieldProps> = ({
  onFocus,
  onKeyDown,
  onChange,
}) => {
  return (
    <input
      className="card-cvv-input-field card-input card-input-element-light card-text-element-light"
      onFocus={onFocus}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
}
