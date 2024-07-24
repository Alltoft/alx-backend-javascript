const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

describe("calculatenumber", function() {
    describe("type == 'SUM'", () => {
        it("if two floats are rounded and calculated...", function() {
            expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
        }),
        it("if two floats are rounded and calculated...", function() {
            expect(calculateNumber('SUM', 1.6, 2.8)).to.equal(5);
        }),
        it("if two floats are rounded and calculated...", function() {
            expect(calculateNumber('SUM', 1.2, 2.5)).to.equal(4);
        }),
        it("if two floats are rounded and calculated...", function() {
            expect(calculateNumber('SUM', 1.516548455, 2.32154)).to.equal(4);
        });
    }),
    describe("type == 'SUBTRACT'", () => {
        it("if two floats are rounded and calculated...", function() {
            expect(calculateNumber('SUBTRACT'   , 1.4, 4.5)).to.equal(-4);
        });
    }),
    describe("type == 'DIVIDE'", () => {
        it("if two floats are rounded and calculated...", function() {
            expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
        }),
        it("if two floats are rounded and calculated...", function() {
          expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
        });
    });
});
