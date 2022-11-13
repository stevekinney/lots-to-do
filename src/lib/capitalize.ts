export const capitalize = (text: string): string => {
  const first = text[0];
  return first.toUpperCase() + text.slice(1);
};
