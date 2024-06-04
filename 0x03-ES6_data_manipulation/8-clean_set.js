// export default function cleanSet(set, startString) {
//     let newStr = '';
//     set.forEach(element => {
//         for (let i = 0; i < element.length; i++) {
//             if (i < startString.length && element[i] !== startString[i]) {
//                 break;
//             } else if (i < startString.length) {
//                 continue;
//             } else {
//                 newStr += element[i];
//             }
//         }
//         return newStr.join('-');
//     });
// }
export default function cleanSet(set, startString) {
  if (startString === '' || typeof startString !== 'string' || startString.length === 0) {
    return '';
  }
  const stringUni = [];
  for (const value of set) {
    if (value.startsWith(startString)) {
      // WE'RE SLICING value str from the index equivalent to length of startstring
      stringUni.push(value.slice(startString.length));
    }
  }
  return stringUni.join('-');
}
