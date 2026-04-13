// Logical AND (&&)
// Returns TRUE if both operator are TRUE

console.log(true && true);
console.log(true && false);


// let highIncome = true;
// let goodCreditScore= true;
// let eligibleForLoan = highIncome && goodCreditScore;


// console.log(eligibleForLoan);


// Logical OR (||)
// Returns TRUE if one of the operands is TRUE

let highIncome = false;
let goodCreditScore= true;
let eligibleForLoan = highIncome || goodCreditScore;

console.log('Eligable', eligibleForLoan);
// NOT (!)

let applicationRefused = !eligibleForLoan;

console.log('Application Refused', applicationRefused);
