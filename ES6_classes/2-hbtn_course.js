export default class HolbertonCourse {
  constructor(name, lenght, students) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    if (typeof lenght !== 'number') {
      throw TypeError('lenght must be a number');
    }
    if (!Array.isArray(students)) {
      throw TypeError('Student must be a array');
    }
    this._name = name;
    this._lenght = lenght;
    this._student = students;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = name;
  }

  get lenght() {
    return this._lenght;
  }

  set lenght(lenght) {
    if (typeof lenght !== 'lenght') {
      throw TypeError('Lenght must be a number');
  }
  this._lenght = length;
  }

  get students() {
    return this._student;
  }

  set students(students) {
    if (!Array.isArray(students)) {
      throw TypeError('Student must be an array');
    }
    this._student = students;
  }
}
