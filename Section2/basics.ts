function add(n1: number, n2: number, showResult: boolean, phrase: string) {

    const sum = n1 + n2
    if (showResult) {
        console.log(phrase + sum);        
    } else {
        return sum
    }
}

let number1: number;
number1 = 10;
const number2 = 3.2
const printResult = true;
const resultPhrase = 'Result is: '

add(number1, number2, printResult, resultPhrase)