type Combinable = number | string
type conversionDescriptor = 'as-number' | 'as-text'

function combine(input1: Combinable, input2: Combinable, resultType: conversionDescriptor) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultType === 'as-number') {
        result = +input1 + +input2
    } else {
        result = input1.toString() + input2.toString();
    }

    return result
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedAges2 = combine('Max', 'Ana', 'as-text')
console.log(combinedAges2);

const combinedAges3 = combine('30', '26', 'as-text');
console.log(combinedAges3);
 