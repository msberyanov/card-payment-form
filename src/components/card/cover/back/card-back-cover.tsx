import React from "react";
import { CoverProps } from "../cover-props";
import "./card-back-cover.css"
import { CardTape } from "../../zone/tape/card-tape";
import { CardCvvLine } from "../../zone/cvv/card-cvv-line";
import { CardBackService } from "../../zone/service/card-back-service";
import { CardCvvTitle } from "../../zone/cvv/card-cvv-title";
import { useInputContext } from "../../../../App";

export const CardBackCover : React.FC<CoverProps> = ({
  cardImage,
}) => {
  const {cardTurned} = useInputContext();

  return (
    <div className={`card-back-cover ${cardTurned ? "card-back-cover-turned" : ""}`}>
      <CardTape/>
      <CardCvvLine/>
      <CardBackService/>
      <CardCvvTitle/>
      <div className="card-back-cover-background">
        <img
          alt="cover"
          className={cardImage}
        />
      </div>
    </div>
  );
}
