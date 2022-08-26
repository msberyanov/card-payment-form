import React from "react";
import "./card-holder-symbol.css"
import "./card-holder-symbol-animation.css"

interface CardHolderSymbolProps {
  symbolKey: string;
  symbol: string;
}

export const CardHolderSymbol: React.FC<CardHolderSymbolProps> = ({
  symbolKey,
  symbol
}) => {
  return (
    <div key={symbolKey} className="card-holder-symbol card-holder-symbol-appearance">
      {symbol}
    </div>
  )
}
