export function formatPercentage(value: number) {
  return Math.abs(value).toFixed(2) + "%";
}

export function formatCurrency(value: string | number, currency: string) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 6,
  });

  return formatter.format(Number(value));
}
