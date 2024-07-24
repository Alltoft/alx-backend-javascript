const assert = require("assert");
const calculateNumber = require('./1-calcul');

describe("calculatenumber", function() {
  it("if two floats are rounded and calculated...", function() {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
  });
  it("if two floats are rounded and calculated...", function() {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
  it("if two floats are rounded and calculated...", function() {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
  it("if two floats are rounded and calculated...", function() {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
  it("if two floats are rounded and calculated...", function() {
    assert.strictEqual(calculateNumber('SUM', 1.2, 2.5), 4);
  });
  it("if two floats are rounded and calculated...", function() {
    assert.strictEqual(calculateNumber('SUM', 1.6, 2.8), 5);
  });
  it("if two floats are rounded and calculated...", function() {
    assert.strictEqual(calculateNumber('SUM', 1.516548455, 2.32154), 4);
  });
});
