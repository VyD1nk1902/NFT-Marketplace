export const FormatBalance = (balance: number | string): string => {
  const numericBalance = typeof balance === "string" ? parseFloat(balance) : balance;
  return numericBalance.toFixed(4);
};
