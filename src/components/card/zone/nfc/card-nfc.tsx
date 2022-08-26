import React from "react";
import { CardChip } from "./chip/card-chip";
import { CardWirelessTech } from "./wireless-tech/card-wireless-tech";
import "./card-nfc.css"

export const CardNfc: React.FC = () => {
  return (
    <div className="card-nfc">
      <CardChip/>
      <CardWirelessTech/>
    </div>
  )
}
