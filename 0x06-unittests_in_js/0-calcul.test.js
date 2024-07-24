const assert = require("assert");
const calculateNumber = require('./0-calcul');

describe("calculatenumber", function() {
  it("if two floats are rounded and calculated...", function() {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });
  it("if two floats are rounded and calculated...", function() {
    assert.strictEqual(calculateNumber(1.2, 2.0), 3);
  });
  it("if two floats are rounded and calculated...", function() {
    assert.strictEqual(calculateNumber(1.0, 2.3), 3);
  });
  it("if two floats are rounded and calculated...", function() {
    assert.strictEqual(calculateNumber(1.5, 2.3), 4);
  });
  it("if two floats are rounded and calculated...", function() {
    assert.strictEqual(calculateNumber(1.2, 2.5), 4);
  });
  it("if two floats are rounded and calculated...", function() {
    assert.strictEqual(calculateNumber(1.6, 2.8), 5);
  });
  it("if two floats are rounded and calculated...", function() {
    assert.strictEqual(calculateNumber(1.516548455, 2.32154), 4);
  });
});
