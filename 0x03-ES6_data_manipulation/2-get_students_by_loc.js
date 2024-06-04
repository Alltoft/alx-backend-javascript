export default function getStudentsByLocation(arr, str) {
  return arr.filter((val) => val.location === str);
}
