export const toDate = (date: string | Date): Date => {
  if (date instanceof Date) return date;
  return new Date(date);
};
