export const DATE_PARTS_AMOUNT = 4;
const CARD_DATE_PART_NUMBER = 2;

const separateExpirationDate = (number: string) : string[] =>
  number.length ? [number.slice(0, CARD_DATE_PART_NUMBER), ...separateExpirationDate(number.slice(CARD_DATE_PART_NUMBER))]: [];

export const parseCardExpirationDate = (date: string) => {
  const currentDatePartsAmount = date.length;
  const blankDatePartsAmount = DATE_PARTS_AMOUNT - currentDatePartsAmount;

  return separateExpirationDate(date.concat(...Array.from({length: blankDatePartsAmount}, () => "#")));
}
