import Car from './Car';

export default class Cadillac extends Car{

  constructor (name, year, model) {
    super(name, weight);
    this._year = year;
    this._model = model;
  }
  get year() {
    return this._year;
  }
  set year(y) {
    this._name = y;
  }

  get model() {
    return this._model;
  }
  set model(m) {
    this._model = m;
  }
}