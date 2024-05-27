export default function returnHowManyArguments(...theArgs) {
  let length = 0;
  // eslint-disable-next-line
  for (const arg of theArgs) {
    length += 1;
  }
  return length;
}
