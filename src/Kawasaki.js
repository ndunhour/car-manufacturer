import Motorcycle from './Motorcycle';

export default class Kawasaki extends Motorcycle{

  constructor (name, year, model, apeHangers) {
    super(name, 600, false, apeHangers);
    this._year = year;
    this._model = model;
  }

  get year() {
    return this._year;
  }
  set year(y) {
    this._year = y;
  }

  get model() {
    return this._model;
  }
  set model(m) {
    this._model = m;
  }
}