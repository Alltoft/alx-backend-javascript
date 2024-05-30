/*eslint-disable*/
export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if ((!Array.isArray(students) || !students.every((student) => typeof student === 'string'))) {
      throw new TypeError('Students must be an array of Strings');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(newname) {
    if (typeof newname !== 'string') {
        throw new TypeError('Name must be a string');
      }
    return this._name = newname;
  }

  get length() {
    return this._name;
  }

  set length(newlength) {
    if (typeof newlength !== 'number') {
        throw new TypeError('Length must be a number');
      }
    return this._length = newlength;
  }

  get students() {
    return this._students;
  }

  set students(newstudents) {
    if (!Array.isArray(value) || !value.every((student) => typeof student === 'string')) {
        throw new TypeError('Students must be an array of strings');
    }
    return this._students = newstudents;
  }
}
