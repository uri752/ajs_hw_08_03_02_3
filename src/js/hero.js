
export default class Hero {
  constructor(distance, stoned, attack) {
    this.distance = distance; // колво клеток - дистанция, расстояние
    this.stoned = stoned; // дурман - есть или нет
    this.attack = attack; // атака - сила атаки без дурмана линейно, с дурманом через log2
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get attack() {
    let result = -10 * this.distance + 110;
    if (this.stoned) {
      result -= Math.log2(this.distance) * 5;
    }

    return result;
  }

  set attack(value) {
    this._attack = value;
  }
}
