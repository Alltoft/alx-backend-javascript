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
/* eslint-disable */
function cleanSet(set, start_string) {
  if (
    start_string === ''
      || typeof start_string !== 'string'
      || start_string.length === 0
  ) {
    return '';
  }
  return [...set]
    .filter((str) => str.startsWith(start_string))
    .map((str) => str.slice(start_string.length))
    .join('-');
}

export default cleanSet;
