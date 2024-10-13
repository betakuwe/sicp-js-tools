// Examples of timing functions

function fib_recursive(n) {
    return n <= 1
    ? n
    : fib_recursive(n - 1) + fib_recursive(n - 2);
}

// function fib_30() {
//     return fib_recursive(30);
// }

// const fib_30_b = () => fib_recursive(30);

// const square = x => x*x;
// display(square(9));
// display(((x, y) => x*y)(9, 10));

// function time_fib_30() {
//     const start_time = get_time();
//     fib_30_b();
//     return get_time() - start_time;
// }
// time_fib_30();

function time_function(f) {
    const start_time = get_time();
    f();
    return get_time() - start_time;
}
// time_function(() => fib_recursive(29));

function time_function_average(f, n) {
    function time_taken_to_evaluate(time, counter) {
        return n === 0
    ? time / counter
    : time_taken_to_evaluate(time + time, n-1);
    }
    return time_function_average(time_function(f), n);
}


time_function_average(() => fib_recursive(29), 2);







