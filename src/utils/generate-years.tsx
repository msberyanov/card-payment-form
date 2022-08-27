export const generateYears = () => {
  const year = new Date().getFullYear();

  return Array.from({length: 10}, (_, index) => year + index);
}
