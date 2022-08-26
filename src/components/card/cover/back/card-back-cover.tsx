import React from "react";
import { CoverProps } from "../cover-props";
import "./card-back-cover.css"
import { CardTape } from "../../zone/tape/card-tape";
import { CardCvv } from "../../zone/cvv/card-cvv";
import { CardService } from "../../zone/service/card-service";
import { CardBackService } from "../../zone/service/card-back-service";
import { CardCvvTitle } from "../../zone/cvv/card-cvv-title";

export const CardBackCover : React.FC<CoverProps> = ({
  cardImage,
  toggleImageType
}) => {
  return (
    <div className="card-back-cover">
      <CardTape/>
      <CardCvv/>
      <CardBackService/>
      <CardCvvTitle/>
      <div className="card-back-cover-background">
        <img className={cardImage}/>
      </div>
    </div>
  );
}
