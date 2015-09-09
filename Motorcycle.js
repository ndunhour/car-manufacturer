import Vehicle from './Vehicle';

export default class Motorcycle extends Vehicle {

  constructor (name, cc, windshield, apeHangers) {
    super(name, 2, fuelType, horsepower, 'fiberglass', false);
    this._cc = cc;
    this._windshield = windshield;
    this._apeHangers = apeHangers;
  }
}