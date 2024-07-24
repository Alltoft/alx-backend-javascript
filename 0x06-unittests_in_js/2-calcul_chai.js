function calculateNumber(type, a, b) {
    const Ra = Math.round(a);
    const Rb = Math.round(b);
    if (type == 'SUM')
        return Ra + Rb;
    else if (type == 'SUBTRACT')
        return Ra - Rb
    else if (type == 'DIVIDE')
        if (Rb == 0)
            return "Error"
        else
            return Ra / Rb
}

module.exports = calculateNumber;
