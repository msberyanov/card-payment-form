import React from "react";
import { validateServiceKeys } from "./validate-service-keys";
import { validateDigits } from "./validate-digits";
import { validateOperationalKeys } from "./validate-operational-keys";
import { validateLetters } from "./validate-letters";

export const MAX_CARD_HOLDER_LENGTH = 27;

export const validateCardHolder = (
  event: React.KeyboardEvent<HTMLInputElement>,
  currentCardHolderLength: number
) => {
  if ((validateServiceKeys(event) && !validateLetters(event.key))
    || (validateServiceKeys(event) && currentCardHolderLength >= MAX_CARD_HOLDER_LENGTH)) {
    event.preventDefault();
  }
}
