export default function returnHowManyArguments(...theArgs) {
    let length = 0;
    for (const arg of theArgs) {
        length += 1;
    }
    return length;
}