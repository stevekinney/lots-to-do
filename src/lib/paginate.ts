export const hasMore = (items: unknown[], index: number) => {
  return index < items.length;
};

export const hasLess = (items: unknown[], index: number) => {
  return index > 0;
};

export const getRange = (items: unknown[], start: number, perPage: number) => {
  if (start < 0) start = 0;
  if (start > items.length) start = items.length - perPage;
  return items.slice(start, start + perPage);
};

export const incrementPage = (
  items: unknown[],
  start: number,
  perPage: number,
) => {
  if (!hasMore(items, start + perPage)) return items.length - perPage;
  return start + perPage;
};

export const decrementPage = (
  items: unknown[],
  start: number,
  perPage: number,
) => {
  if (!hasLess(items, start - perPage)) return 0;
  return start - perPage;
};
