export default function hasValuesFromArray(set, arr) {
  const me = arr.every((val) => set.has(val));
  return me;
}
