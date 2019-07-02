export const pluralize = (number, variants) => {
  const vars = variants.split("|");
  let units = number % 100;
  units = units < 20 ? units : units % 10;
  if (vars.length >= 1 && units === 1)
    return `${number} ${vars[0]}`;
  if (vars.length >= 2 && (units > 1 && units < 5))
    return `${number} ${vars[1]}`;
  if (vars.length === 3 && (units > 4 || units === 0))
    return `${number ? number : "Нет"} ${vars[2]}`;
  return `${number} ${variants}`;
}