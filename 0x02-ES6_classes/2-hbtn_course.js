/*eslint-disable*/
export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'String') {
      throw new Error('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new Error('Length must be a number');
    }
    if ((!Array.isArray(students) || !students.every((student) => typeof student === 'string'))) {
      throw new Error('students must be an array of Strings');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(newname) {
    return this._name = newname;
  }

  get length() {
    return this._name;
  }

  set length(newlength) {
    return this._length = newlength;
  }

  get students() {
    return this._students;
  }

  set students(newstudents) {
    return this._students = newstudents;
  }
}