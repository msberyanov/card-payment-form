import React from "react";
import "./card-holder-input-field.css"
import { CardInputFieldProps } from "../card-input-field-props";

export const CardHolderInputField: React.FC<CardInputFieldProps> = ({
  onFocus,
  onKeyDown,
  onChange
}) => {
  return (
    <div style={{textAlign: "center"}}>
      <input
        className="card-holder-input-field card-input card-input-element-light card-text-element-light"
        onKeyDown={onKeyDown}
        onChange={onChange}
        onFocus={onFocus}
      />
    </div>
  );
}
