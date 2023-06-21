function leftPad(value) {
  if (value >= 10) {
      return value;
  }

  return `0${value}`;
}
/**시간을 yyyy-mm-dd 형식으로 구하는 함수 */
export function getDate(source, delimiter = '-') {
  const year = source.getFullYear();
  const month = leftPad(source.getMonth() + 1);
  const day = leftPad(source.getDate());

  return [year, month, day].join(delimiter);
}