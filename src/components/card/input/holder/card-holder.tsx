import React from "react";
import "./card-holder.css"
import { useInputContext } from "../../../../card-app";
import { CardHolderSymbol } from "./symbol/card-holder-symbol";

export const CardHolder: React.FC = () => {
  const {cardHolder} = useInputContext();

  return (
    <div className="card-holder card-text-element">
      {[...cardHolder].map((cardHolderSymbol, index) =>
        <CardHolderSymbol symbolKey={cardHolderSymbol + index} symbol={cardHolderSymbol}/>)
      }
    </div>
  );
}
