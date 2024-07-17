export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  set size(newsize) {
    this._size = newsize;
  }

  get location() {
    return this._location;
  }

  set location(newlocation) {
    this._location = newlocation;
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
