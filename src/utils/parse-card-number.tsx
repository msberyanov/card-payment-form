export const NUMBER_DIGITS_AMOUNT = 16;
const CARD_PART_NUMBER = 4;

const separateCardNumber = (number: string) : string[] =>
  number.length ? [number.slice(0, CARD_PART_NUMBER), ...separateCardNumber(number.slice(CARD_PART_NUMBER))]: [];

export const parseCardNumber = (number: string) => {
  const currentNumberDigitsAmount = number.length;
  const blankNumberDigitsAmount = NUMBER_DIGITS_AMOUNT - currentNumberDigitsAmount;

  return separateCardNumber(number.concat(...Array.from({length: blankNumberDigitsAmount}, () => "#")));
}
