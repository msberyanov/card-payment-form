import React, { useMemo, useState } from "react";
import { tuple } from "../../../utils/tuple";
import { validateCardNumber } from "../validation/validate-card-number";
import { validateCardHolder } from "../validation/validate-card-holder";
import "./../card-input-form.css"
import { CardHolderInputField } from "../input/holder/card-holder-input-field";
import { CardHolderInputFieldTitle } from "../input/holder/card-holder-input-field-title";
import { CardNumber } from "../../card/input/number/card-number";
import { CardNumberInputFieldTitle } from "../input/number/card-number-input-field-title";
import { CardNumberInputField } from "../input/number/card-number-input-field";
import { CardExpirationDateInputFieldTitle } from "../input/expiration-date/card-expiration-date-input-field-title";

const CARD_HOLDER_DEFAULT_TEXT = "####### #######";
const CARD_EXPIRATION_DATE_DEFAULT_TEXT = "####";

export const useInputForm = () => {
  const [cardNumber, setCardNumber] = useState<string>("");
  const [cardHolder, setCardHolder] = useState<string>(CARD_HOLDER_DEFAULT_TEXT);
  const [cardExpirationDate, setCardExpirationDate] = useState<string>(CARD_EXPIRATION_DATE_DEFAULT_TEXT);

  const CardNumberInputForm = useMemo(() => {
    return (
      <input
        type="text"
        onKeyDown={keyDownEvent => validateCardNumber(keyDownEvent, cardNumber.length)}
        onChange={changeEvent => setCardNumber(changeEvent.target.value)}>
      </input>
    )
  }, [cardNumber.length]);

  const CardHolderInputForm = useMemo(() => {
    return (
      <input
        type="text"
        onKeyDown={keyDownEvent => validateCardHolder(keyDownEvent, cardHolder.length)}
        onChange={changeEvent => {
          if (!changeEvent.target.value) {
            setCardHolder(CARD_HOLDER_DEFAULT_TEXT);
          } else {
            setCardHolder(changeEvent.target.value)
          }
        }}
      >
      </input>
    )
  }, [cardHolder.length]);

  const CardExpirationDateInputForm = useMemo(() => {
    return (
      <input
        type="text"
        onChange={changeEvent => {
          if (!changeEvent.target.value) {
            setCardExpirationDate(CARD_EXPIRATION_DATE_DEFAULT_TEXT);
          } else {
            setCardExpirationDate(changeEvent.target.value)
          }
        }}
      >
      </input>
    )
  }, []);

  const CardInputForm = useMemo(() =>
    <div className="card-input-form-zone">
      <div className="card-input-form">
        <CardNumberInputFieldTitle/>
        <CardNumberInputField/>

        <CardHolderInputFieldTitle/>
        <CardHolderInputField/>

        <CardExpirationDateInputFieldTitle/>
      </div>
    </div>, []);

  return tuple(
    cardNumber,
    setCardNumber,
    cardHolder,
    setCardHolder,
    cardExpirationDate,
    setCardExpirationDate,
    CardNumberInputForm,
    CardHolderInputForm,
    CardExpirationDateInputForm,
    CardInputForm
  );
}
