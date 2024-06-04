export default function getListStudentIds(arrOFobj) {
  if (!Array.isArray(arrOFobj)) {
    return [];
  }
  return arrOFobj.map((elem) => elem.id);
}
