function calculateNumber(a, b) {
    const Ra = Math.round(a);
    const Rb = Math.round(b);
    return Ra + Rb;
}

module.exports = calculateNumber;