export const CVV_DIGITS_AMOUNT = 3;

export const parseCardCvv = (number: string) => {
  const currentCvvDigitsAmount = number.length;
  const blankCvvDigitsAmount = CVV_DIGITS_AMOUNT - currentCvvDigitsAmount;

  return number.concat(...Array.from({length: blankCvvDigitsAmount}, () => "#"));
}
