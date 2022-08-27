import React from "react";
import { validateServiceKeys } from "./validate-service-keys";
import { validateDigits } from "./validate-digits";

export const MAX_CARD_CVV_LENGTH = 3;

export const validateCardCvv = (
  event: React.KeyboardEvent<HTMLInputElement>,
  currentCardCvvLength: number
) => {
  if ((validateServiceKeys(event) && !validateDigits(event.key))
    || (validateServiceKeys(event) && currentCardCvvLength >= MAX_CARD_CVV_LENGTH)) {
    event.preventDefault();
  }
}
