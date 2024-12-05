export function calculateVacationDays(
  startDate: string,
  endDate: string,
  totalDays: number
): number {
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  // Calculate the total days in the year (considering leap years)
  const year = start.getFullYear();
  const daysInYear = isLeapYear(year) ? 366 : 365;
  
  // Calculate the days worked (including end date)
  const timeDiff = end.getTime() - start.getTime();
  const daysWorked = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1;
  
  // Calculate vacation days proportionally
  const vacationDays = (totalDays * daysWorked) / daysInYear;
  
  // Round to 2 decimal places
  return Math.round(vacationDays * 100) / 100;
}

function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}