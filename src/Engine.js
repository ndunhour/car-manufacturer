import Steel from './Steel';

export default class Engine extends Steel {

  constructor (name, cylinders, fuelType, horsepower) {
    super(density);
    this._name = name;
    this._cylinders = cylinders;
    this._fuelType = fuelType;
    this._horsepower = horsepower;
  }
  get name() {
    return this._name;
  }
  set name(n) {
    this._name = n;
  }

  get cylinders() {
    return this._cylinders;
  }
  set cylinders(c)  {
    this._cylinders = c;
  }

  get fuelType() {
    return this._fuelType;
  }
  set fuelType(fT) {
    this._fuelType = fT;
  }

  get horsepower() {
    return this._horsepower;
  }
  set horsepower(h) {
    this._horsepower = h;
  }
}