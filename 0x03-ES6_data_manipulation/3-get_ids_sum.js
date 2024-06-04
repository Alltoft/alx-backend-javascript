export default function getStudentIdsSum(arrOFobj) {
  return arrOFobj.reduce((idtotal, arr) => arr.id + idtotal, 0);
}
