export const pxToRem = (px: number, decimalPlaces = 3): string => {
  const rem = parseFloat((px / 16).toFixed(decimalPlaces));
  return `${rem}rem`;
};
