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
    let smallest = numbers[0];
    let i = 0;

    while (i < numbers.length) {
        if(numbers[i] < smallest) {
            smallest = numbers[i];
        }
        i++;
    }
    return smallest;

}

const figures = [1, 6, 14, 7, 12];

console.log(Max(figures));
console.log(Min(figures));


///compute the average 

function average (numbers) {
    let sum = 0;
    numbers.forEach(num => {
        sum += num;
    });
    return sum / array.length;
}

}
console.log(average(figures));