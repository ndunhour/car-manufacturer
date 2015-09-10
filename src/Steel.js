export default class Steel {

  constructor (density) {
    this._density = density;
  }
  get density() {
    return this._density;
  }
  set density(d) {
    this._density = d;
  }
}