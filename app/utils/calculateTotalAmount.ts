export const calculateTotalAmountAmount = (
  billAmount: number,
  numberOfPeople: number,
  selectedTipPercentage: number
): number => {
  return billAmount && numberOfPeople && selectedTipPercentage
    ? (billAmount / numberOfPeople) * (1 + selectedTipPercentage / 100)
    : 0;
};
