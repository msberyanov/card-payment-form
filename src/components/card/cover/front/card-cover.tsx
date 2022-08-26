import React from "react";
import "./card-cover.css"
import { CardNfc } from "../../zone/nfc/card-nfc";
import { CardService } from "../../zone/service/card-service";
import { CardNumber } from "../../input/number/card-number";
import { CardHolderZone } from "../../zone/holder/card-holder-zone";
import { CardExpirationDateZone } from "../../zone/expiration-date/card-expiration-date-zone";
import { CoverProps } from "../cover-props";

export const CardCover : React.FC<CoverProps> = ({
  cardImage,
  toggleImageType
}) => {
  return (
    <div className={`card-cover ${cardImage}-cover`}
         onClick={toggleImageType}>
      <CardService/>
      <CardNfc/>
      <CardNumber/>
      <CardHolderZone/>
      <CardExpirationDateZone/>
    </div>
  );
}
