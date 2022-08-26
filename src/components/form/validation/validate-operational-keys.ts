import React from "react";

export const validateOperationalKeys = (
  event: React.KeyboardEvent<HTMLInputElement>
) => event.key !== "Backspace"
  && event.key !== "Delete";
