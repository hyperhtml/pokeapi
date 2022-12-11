"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const meanMedianMode_1 = require("./meanMedianMode");
const numList1 = [1, 2, 3, 4, 5];
const numList2 = [1, 2, 3, 4, 5, 9];
const numList3 = [1, 2, 3, 3, 5, 6, 8];
(0, globals_1.describe)("Mean Median Mode", () => {
    (0, globals_1.test)('Return the currect values for mean', () => {
        // List one
        (0, globals_1.expect)((0, meanMedianMode_1.meanFromList)(numList1)).toBe(3);
        (0, globals_1.expect)((0, meanMedianMode_1.meanFromList)(numList2)).toBe(4);
        (0, globals_1.expect)((0, meanMedianMode_1.meanFromList)(numList3)).toBe(4);
    });
    (0, globals_1.test)('Return the currect values for median', () => {
        // List one
        (0, globals_1.expect)((0, meanMedianMode_1.medianFromList)(numList1)).toBe(3);
        (0, globals_1.expect)((0, meanMedianMode_1.medianFromList)(numList2)).toBe(3.5);
        (0, globals_1.expect)((0, meanMedianMode_1.medianFromList)(numList3)).toBe(3);
    });
    (0, globals_1.test)('Return the currect values for mode', () => {
        // List one
        (0, globals_1.expect)((0, meanMedianMode_1.modeFromList)(numList1)).toBe(null);
        (0, globals_1.expect)((0, meanMedianMode_1.modeFromList)(numList2)).toBe(null);
        (0, globals_1.expect)((0, meanMedianMode_1.modeFromList)(numList3)).toBe(3);
    });
});
//# sourceMappingURL=meanMedianMode.test.js.map