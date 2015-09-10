import Vehicle from './Vehicle';

export default class Motorcycle extends Vehicle {

  constructor (name, cc, windshield, apeHangers) {
    super(name, 2, fuelType, horsepower, 'fiberglass', false);
    this._cc = cc;
    this._windshield = windshield;
    this._apeHangers = apeHangers;
  }

  get cc() {
    return this._cc;
  }
  set cc(cC) {
    this._cc = cC;
  }

  get windshield() {
    return this._windshield;
  }
  set windshield(w) {
    this._windshield = w;
  }

  get apeHangers() {
    return apeHangers;
  }
  set apeHangers(aH) {
    this._apeHangers = aH;
  }
}