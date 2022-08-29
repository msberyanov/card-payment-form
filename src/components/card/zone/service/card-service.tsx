import React, { useMemo } from "react";
import "./card-service.css"
import { ServiceType } from "../../type/service-type";

import visaLogo from "./logo/visa-logo.png"
import mastercardLogo from "./logo/mastercard-logo.png"
import mirLogo from "./logo/mir-logo.png"
import { revealServiceLogo } from "../../../../utils/reveal-service-logo";
import { CardServiceProps } from "./card-service-props";

export const CardService: React.FC<CardServiceProps> = ({
  serviceType
}) => {
  const logoSrc = revealServiceLogo(serviceType);

  const logoImg = useMemo(() => (
    <img
      key={serviceType}
      src={logoSrc}
      alt={`${serviceType}-logo`}
      className="logo card-image-element"
    />
  ), [logoSrc, serviceType]);

  return (
    <div className="card-service">
      {logoImg}
    </div>
  );
}
