/** Local calendar date (YYYY-MM-DD) in the visitor's timezone. */
export function todayISO(): string {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${now.getFullYear()}-${month}-${day}`;
}

/** ISO date strings compare lexicographically. */
export function isPastDate(isoDate: string): boolean {
  return isoDate < todayISO();
}

export function isCheckoutAfterCheckin(checkIn: string, checkOut: string): boolean {
  return checkOut > checkIn;
}
