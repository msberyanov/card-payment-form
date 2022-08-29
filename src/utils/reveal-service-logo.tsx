import visaLogo from "../components/card/zone/service/logo/visa-logo.png";
import mastercardLogo from "../components/card/zone/service/logo/mastercard-logo.png";
import mirLogo from "../components/card/zone/service/logo/mir-logo.png";
import { ServiceType } from "../components/card/type/service-type";

export const revealServiceLogo = (serviceType: ServiceType) => {
  switch (serviceType) {
    case "visa":
       return visaLogo;
    case "mastercard":
      return  mastercardLogo;
    case "mir":
      return mirLogo;
  }
}
