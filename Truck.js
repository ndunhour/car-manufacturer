import Vehicle from './Vehicle';

export default class Truck extends Vehicle{

  constructor (name, weight, lifted) {
    super(name, cylinders, 'gas', horsepower, true);
    this._weight = weight;
    this._lifted = lifted;
  }
}