import { validateServiceKeys } from "./validate-service-keys";
import { validateDigits } from "./validate-digits";
import { NUMBER_DIGITS_AMOUNT } from "../../../utils/parse-card-number";
import React from "react";

export const validateCardNumber = (
  event: React.KeyboardEvent<HTMLInputElement>,
  currentCardNumberLength: number
) => {
  if ((validateServiceKeys(event) && !validateDigits(event.key))
    || (validateServiceKeys(event) && currentCardNumberLength >= NUMBER_DIGITS_AMOUNT)) {
    event.preventDefault();
  }
}
