//Include example here


//Random die generator
// function throwdie() {
//     return math_floor(math_random() * 6) + 1;
// }

// function test_throw_die(counter) {
//     function test(counter) {
//         const n = throwdie();
//         display(stringify(n) + " | " + stringify(counter));
//         return counter === 1
//         ? true
//         : n < 1  || n >= 7
//         ? false
//         : test(counter - 1);
//     }
//     return test(counter);
// }
// test_throw_die(2000);



// Two digit random number generator
// function two_digit() {
//     return math_floor(math_random() * 89) + 10;
// }

// function test_two_digit(counter, upperbound, lowerbound) {
//     function test(counter) {
//         const n = two_digit();
//         display(stringify(n) + " | " + stringify(counter));
//         return counter === 1
//         ? true
//         : n < lowerbound  || n >= upperbound 
//         ? false
//         : test(counter - 1);
//     }
//     return test(counter);
// }
// test_two_digit(2000, 100, 10);


//Two digit random number generator
function two_digit() {
    return math_floor(math_random() * 89) + 10;
}

function test_two_digit(counter, upperbound, lowerbound) {
    function test(counter) {
        if (counter === 1) {
            return true;
        } else {
            const n = two_digit();
            display(stringify(n) + " | " + stringify(counter));
            return n >= lowerbound && n < upperbound && test(counter - 1);
            // if (n < lowerbound || n >= upperbound) {
            //     return false;
            // } else {
            //     return test(counter - 1);
            // }
        }
    }
    return test(counter);
}
test_two_digit(10, 100, 10);





