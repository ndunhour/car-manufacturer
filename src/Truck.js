import Vehicle from './Vehicle';

export default class Truck extends Vehicle{

  constructor (name, weight, lifted) {
    super(name, cylinders, 'gas', horsepower, true);
    this._weight = weight;
    this._lifted = lifted;
  }

  get weight() {
    return this._weight;
  }
  set weight(w) {
    this._weight = w;
  }

  get lifted() {
    return this._lifted;
  }
  set lifted(l) {
    this._lifted = l;
  }
}