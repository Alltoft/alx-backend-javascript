export default class car {
    constructor(brand, motor, color) {
        this._brand = brand;
        this._motor = motor;
        this._color = color;
    }
    cloneCar() {
        const Species = this.constractor[Symbol.species];
        return new Species();
    }
}
