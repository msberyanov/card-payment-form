import { ServiceType } from "../components/card/type/service-type";

export const revealService = (cardNumber: string) : ServiceType => {
  if (cardNumber.length) {
    switch (cardNumber[0]) {
      case "4":
        return "visa";
      case "5":
        return "mastercard";
    }
  }

  return "mir";
}
