import Engine from './Engine';

export default class Vehicle extends Engine {

  constructor (name, cylinders, fuelType, horsepower, body, interior) {
    super(name, cylinders, fuelType, horsepower);
    this._body = body;
    this._interior = interior;
  }

  get body() {
    return this._body;
  }
  set body(b) {
    this._body = b;
  }

  get interior() {
    return this._interior;
  }
  set interior(i) {
    this._interior = i;
  }
}