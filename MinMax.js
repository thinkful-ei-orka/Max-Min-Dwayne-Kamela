'use strict';

function Max(numbers) {
    let largest = numbers[0];
    let i = 0;
    while (i < numbers.length) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        } i++;
    } return largest;
}

function Min(numbers) {

}