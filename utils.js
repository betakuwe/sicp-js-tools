// Function that allows you to generate the result of a given range
function range_of_function(func, start, end) {
    function iter(sequence, counter) {
        return counter >= end
        ? sequence
        : counter <= start
        ? iter(sequence + stringify(func(counter)), counter + 1)
        : iter(sequence + " " + stringify(func(counter)), counter + 1);
    }
    return iter("", start);
}

// Function that allows you to calculate the time taken to evaluate another function
function time_function_average(f, n) {
    function time_taken_to_evaluate(time, new_time, counter) {
        return counter === 0
        ? time / n
        : time_taken_to_evaluate(time + time_function(f), time, counter-1);
    }
    return time_taken_to_evaluate(0, 0, n);
}
