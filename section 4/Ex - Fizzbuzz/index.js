// Divisible by 3-> Fizz
// Divisible by 5-> Buzz
// Divisible by both 3 and 5-> FizzBuzz
// Not Divisible by 3 aor 5-> 'input
// Not a number -> 'Not a number' 



const output = fizzbuzz(3);
console.log(output);

function fizzbuzz(inpur){
    if(typeof input !== 'number')
        return NaN;

    
    if ((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz';


    if (input % 3 === 0)
        return 'Fizz';

    
    if (input % 5 === 0)
        return 'Buzz';



    return input;
}