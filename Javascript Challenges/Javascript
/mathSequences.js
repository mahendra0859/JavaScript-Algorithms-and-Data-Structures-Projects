/** Airthmetic, Geometric or No pattern, No negative numbers */
const mathSequences = (arr) => {
    let airthmetic = new Set();
    let geometric = new Set();
    for (let i = 1; i < arr.length; i++) {
        airthmetic.add(arr[i] - arr[i - 1]);
        geometric.add(arr[i] / arr[i - 1]);
    }
    if (airthmetic.size === 1)
        return "Airthmetic";
    if (geometric.size === 1)
        return "Geometic";
    return -1;
};
/** Airthmetic (Sum)*/
console.log(mathSequences([2, 4, 6, 8]));
/** Geometric (Multiplication)*/
console.log(mathSequences([3, 9, 27]));
/** No negative numbers (No Pattern / No negative)*/
console.log(mathSequences([2, 5, 14, 89]));
