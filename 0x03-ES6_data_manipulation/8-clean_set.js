export default function cleanSet(set, startString) {
    const me = startString.map((val) => set.has(val));
    return me;
}