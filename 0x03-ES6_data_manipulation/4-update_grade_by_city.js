export default function updateStudentGradeByCity(arrOFobj, str, newGrades) {
  const bycity = arrOFobj.filter((val) => val.location === str);
  return bycity.map((val) => {
    newGrades.find((grade) => {
      if (grade.studentId === val.id) {
        val.grade = grade.grade;
      }
    });
    if (!val.grade) {
      val.grade = 'N/A';
    }
    return val;
  });
}
