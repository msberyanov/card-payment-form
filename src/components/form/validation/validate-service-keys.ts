import React from "react";
import { validateOperationalKeys } from "./validate-operational-keys";

export const validateServiceKeys = (
  event: React.KeyboardEvent<HTMLInputElement>
) => validateOperationalKeys(event)
  && event.key !== "Tab"
  && event.key !== "ArrowLeft"
  && event.key !== "ArrowRight";
