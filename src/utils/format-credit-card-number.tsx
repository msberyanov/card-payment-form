const insertIntoString = (string: string, index: number, symbol: string) =>
  string.slice(0, index) + symbol + string.slice(index);

export const formatCreditCardNumber = (number: string) => {
  number = number.replaceAll(" ", "");

  let numberLength = number.length;
  const places = [4, 9, 14];

  for (let i of places) {
    if (i < numberLength) {
      number = insertIntoString(number, i, " ");
      numberLength++;
    }
  }

  return number;
}
