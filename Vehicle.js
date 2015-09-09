import Engine from './Engine';

export default class Vehicle extends Engine {

  constructor (name, cylinders, fuelType, horsepower, body, interior) {
    super(name, cylinders, fuelType, horsepower);
    this._body = body;
    this._interior = interior;
  }
}