import Motorcycle from './Motorcycle';

export default class Kawasaki extends Motorcycle{

  constructor (name, year, model, apeHangers) {
    super(name, 600, false, apeHangers);
    this._year = year;
    this._model = model;
  }
}