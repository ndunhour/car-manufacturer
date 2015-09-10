import Vehicle from './Vehicle';

export default class Car extends Vehicle{

  constructor (name, weight) {
    super(name, cylinders, fuelType, horsepower, body, true);
    this._weight = weight;
  }

  get weight() {
    return this._weight;
  }
  set weight(w) {
    this._weight = w;
  }
}