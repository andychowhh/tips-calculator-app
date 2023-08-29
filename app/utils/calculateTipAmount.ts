export const calculateTipAmount = (
  billAmount: number,
  numberOfPeople: number,
  selectedTipPercentage: number
): number => {
  return billAmount && numberOfPeople && selectedTipPercentage
    ? (billAmount / numberOfPeople) * (selectedTipPercentage / 100)
    : 0;
};
