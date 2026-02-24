export const formatNumber = (num: number) => {
  // add prefix 0 if number is less than 10
  if (num < 10) return `0${num}`;

  return new Intl.NumberFormat("en-US").format(num);
};
