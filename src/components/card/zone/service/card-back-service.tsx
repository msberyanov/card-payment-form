import React, { useMemo } from "react";
import "./card-service.css"
import { revealServiceLogo } from "../../../../utils/reveal-service-logo";
import { CardServiceProps } from "./card-service-props";

export const CardBackService: React.FC<CardServiceProps> = ({
  serviceType
}) => {
  const logoSrc = revealServiceLogo(serviceType);

  const logoImg = useMemo(() => (
    <img
      key={serviceType}
      src={logoSrc}
      alt={`${serviceType}-logo`}
      className="logo card-image-element"
      style={serviceType === "mastercard" ? {marginTop: 155, width: 85, marginLeft: 320} : undefined}
    />
  ), [logoSrc, serviceType]);

  return (
    <div className="card-back-service">
      {logoImg}
    </div>
  );
}
