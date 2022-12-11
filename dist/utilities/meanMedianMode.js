"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modeFromList = exports.medianFromList = exports.meanFromList = void 0;
const meanFromList = (numbers) => {
    // Mean - Total/length
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
};
exports.meanFromList = meanFromList;
const medianFromList = (numbers) => {
    let median;
    // Sort
    numbers.sort((a, b) => a - b);
    if (numbers.length % 2 === 0) {
        const midIndex = numbers.length / 2;
        // Even - divide middle numbers
        median = (numbers[numbers.length / 2 - 1] + numbers[numbers.length / 2]) / 2;
        median = (numbers[numbers.length / 2 - 1] + numbers[numbers.length / 2]) / 2;
    }
    else {
        // Odd - Return middle index, divide by two round down.
        median = numbers[Math.floor(numbers.length / 2)];
    }
    return median;
};
exports.medianFromList = medianFromList;
const modeFromList = (numbers) => {
    // TODO: Return number that has most frequency, if all the same, return null
    return numbers[1];
};
exports.modeFromList = modeFromList;
//# sourceMappingURL=meanMedianMode.js.map