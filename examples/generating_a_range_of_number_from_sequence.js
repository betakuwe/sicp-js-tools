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

function pyramid(n) {
    function pyramid_iter(sum, counter) {
        return counter > n
        ? sum
        : pyramid_iter(counter * counter + sum, counter + 1);
    }
    return pyramid_iter(0, 1);
}

range_of_function(pyramid, 3, 5);
