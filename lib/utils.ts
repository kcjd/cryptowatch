import dayjs, { ManipulateType } from "dayjs";

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

export function formatDate(date: number, unit?: ManipulateType) {
  let format = "MM/DD/YYYY HH:mm";

  if (unit === "d") format = "MM/DD";
  if (unit === "h") format = "HH:mm";

  return dayjs(date).format(format);
}

export function getUnit(dates: number[]): ManipulateType {
  const startDate = dates[0];
  const endDate = dates[dates.length - 1];
  const diffInDays = dayjs(endDate).diff(dayjs(startDate), "d");

  return diffInDays > 1 ? "d" : "h";
}

export function getTicks(dates: number[]) {
  const unit = getUnit(dates);
  const ticks = dates.map((x) => dayjs(x).startOf(unit).valueOf());

  return ticks.filter((x, i) => ticks.indexOf(x) === i).slice(1);
}
