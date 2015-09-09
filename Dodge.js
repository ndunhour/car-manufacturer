import Truck from './Truck';

export default class Dodge extends Truck{

  constructor (name, year, model, bedCover) {
    super(name, weight, true);
    this._year = year;
    this._model = model;
    this._bedCover = bedCover;
  }
}