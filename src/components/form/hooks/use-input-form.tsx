import React, { useCallback, useMemo, useState } from "react";
import { tuple } from "../../../utils/tuple";
import { validateCardNumber } from "../validation/validate-card-number";
import { validateCardHolder } from "../validation/validate-card-holder";
import { CardHolderInputField } from "../input/holder/card-holder-input-field";
import { CardHolderInputFieldTitle } from "../input/holder/card-holder-input-field-title";
import { CardNumberInputFieldTitle } from "../input/number/card-number-input-field-title";
import { CardNumberInputField } from "../input/number/card-number-input-field";
import { CardExpirationDateInputFieldTitle } from "../input/expiration-date/card-expiration-date-input-field-title";
import { CardExpirationDateSelect } from "../input/expiration-date/card-expiration-date-select";
import { CardCvvInputField } from "../input/cvv/card-cvv-input-field";
import { CardCvvInputFieldTitle } from "../input/cvv/card-cvv-input-field-title";
import "../input/card-input.css"
import "./../card-input-form.css"
import { validateCardCvv } from "../validation/validate-card-cvv";
import { CardSubmitButton } from "../submit/card-submit-button";

const CARD_HOLDER_DEFAULT_TEXT = "####### #######";
const CARD_EXPIRATION_DATE_DEFAULT_TEXT = "##";
export const CARD_CVV_DEFAULT_TEXT = "###";

export const useInputForm = () => {
  const [cardNumber, setCardNumber] = useState<string>("");
  const [cardHolder, setCardHolder] = useState<string>(CARD_HOLDER_DEFAULT_TEXT);
  const [cardCvv, setCardCvv] = useState<string>(CARD_CVV_DEFAULT_TEXT);

  const [cardExpirationDateMonth, setCardExpirationDateMonth] = useState<string>(CARD_EXPIRATION_DATE_DEFAULT_TEXT);
  const [cardExpirationDateYear, setCardExpirationDateYear] = useState<string>(CARD_EXPIRATION_DATE_DEFAULT_TEXT);

  const [cardTurned, setCardTurned] = useState<boolean>(false);

  const turnCardFront = useCallback(() => {
    setCardTurned(false);
  }, []);

  const turnCardBack = useCallback(() => {
    setCardTurned(true);
  }, []);

  const CardInputForm = useMemo(() =>
    <div className="card-input-form-zone">
      <div className="card-input-form">
        <CardNumberInputFieldTitle/>
        <CardNumberInputField
          onFocus={turnCardFront}
          onKeyDown={keyDownEvent => validateCardNumber(keyDownEvent, cardNumber.length)}
          onChange={changeEvent => setCardNumber(changeEvent.target.value.replaceAll(" ", ""))}
        />

        <CardHolderInputFieldTitle/>
        <CardHolderInputField
          onFocus={turnCardFront}
          onKeyDown={keyDownEvent => validateCardHolder(keyDownEvent, cardHolder.length)}
          onChange={changeEvent => {
            if (!changeEvent.target.value) {
              setCardHolder(CARD_HOLDER_DEFAULT_TEXT);
            } else {
              setCardHolder(changeEvent.target.value)
            }
          }}
        />

        <CardExpirationDateInputFieldTitle/>
        <CardCvvInputFieldTitle/>

        <div className="card-expiration-date-cvv-zone">
          <CardExpirationDateSelect
            onFocus={turnCardFront}
            onMonthChange={event => setCardExpirationDateMonth(event.target.value)}
            onYearChange={event => setCardExpirationDateYear(event.target.value.substring(2))}
          />
          <CardCvvInputField
            onFocus={turnCardBack}
            onKeyDown={keyDownEvent => validateCardCvv(keyDownEvent, cardCvv !== CARD_CVV_DEFAULT_TEXT ? cardCvv.length : 0)}
            onChange={changeEvent => {
              if (!changeEvent.target.value) {
                setCardCvv(CARD_CVV_DEFAULT_TEXT);
              } else {
                setCardCvv(changeEvent.target.value)
              }
            }}
          />
        </div>
        <CardSubmitButton/>
      </div>
    </div>, [cardNumber.length, cardHolder.length, cardCvv, turnCardBack, turnCardFront]);

  return tuple(
    cardNumber,
    cardHolder,
    cardCvv,
    cardExpirationDateMonth,
    cardExpirationDateYear,
    CardInputForm,
    cardTurned,
    turnCardFront
  );
}
