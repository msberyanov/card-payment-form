import React from "react";
import "./card-number-input-field.css"
import { CardInputFieldProps } from "../card-input-field-props";
import { formatCreditCardNumber } from "../../../../utils/format-credit-card-number";

export const CardNumberInputField: React.FC<CardInputFieldProps> = ({
  onFocus,
  onKeyDown,
  onChange
}) => {
  return (
    <div style={{textAlign: "center"}}>
      <input
        className="card-number-input-field card-input card-input-element-light card-text-element-light"
        onKeyDown={onKeyDown}
        onChange={onChange}
        onFocus={onFocus}
        onInput={event => {
          (event.target as HTMLInputElement).value = formatCreditCardNumber( (event.target as HTMLInputElement).value);
        }}
      />
    </div>
  );
}
