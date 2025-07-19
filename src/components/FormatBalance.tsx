export const FormatBalance = (balance: number | string, toFixed: number): string => {
  const numericBalance = typeof balance === "string" ? parseFloat(balance) : balance;
  return numericBalance.toFixed(toFixed);
};

// This function change type of string value of API to number and use toFixed to show 4 number after decimal point
