import Truck from './Truck';

export default class Dodge extends Truck{

  constructor (name, year, model, bedCover) {
    super(name, weight, true);
    this._year = year;
    this._model = model;
    this._bedCover = bedCover;
  }

  get year() {
    return this._year;
  }
  set year(y) {
    this._year = y;
  }
  get model() {
    return this._model;
  }set model(m) {
    this._model =m;
  }
  get bedCover() {
    return this._bedCover;
  }
  set bedCover(bC) {
    this._bedCover = bC;
  }

}