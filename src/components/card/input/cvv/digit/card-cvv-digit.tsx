import React from "react";
import "./card-cvv-digit.css"
import "./card-cvv-digit-animation.css"

interface CardCvvDigitProps {
  cvvDigitKey: string;
  cvvDigit: string;
}

export const CardCvvDigit: React.FC<CardCvvDigitProps> = ({
  cvvDigitKey,
  cvvDigit
}) => {
  return (
    <div className="card-cvv-digit card-cvv-digit-appearance" key={cvvDigitKey}>
      {cvvDigit}
    </div>
  )
}
