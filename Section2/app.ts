let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max'
if (typeof userInput === 'string') {
    userName = userInput;
}

function generateError(message:string, code: number): never {
    throw { message: message, errCode: code };
    // while (true) {} 
}

const error = generateError('An Error Occurred', 500);