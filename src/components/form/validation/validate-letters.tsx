export const validateLetters = (inputSymbol: string) => {
  return /[a-zA-Z ]/.test(inputSymbol);
}
