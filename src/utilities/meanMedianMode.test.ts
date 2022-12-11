import {describe, expect, test} from '@jest/globals';
import { meanFromList, medianFromList, modeFromList } from "./meanMedianMode";

const numList1 = [1,2,3,4,5];
const numList2 = [1,2,3,4,5,9];
const numList3 = [1,2,3,3,5,6,8];

describe("Mean Median Mode", () => {
    test('Return the currect values for mean',()=>{
        // List one
        expect(meanFromList(numList1)).toBe(3);
        expect(meanFromList(numList2)).toBe(4);
        expect(meanFromList(numList3)).toBe(4);
    })

    test('Return the currect values for median',()=>{
        // List one
        expect(medianFromList(numList1)).toBe(3);
        expect(medianFromList(numList2)).toBe(3.5);
        expect(medianFromList(numList3)).toBe(3);
    })

    test('Return the currect values for mode',()=>{
        // List one
        expect(modeFromList(numList1)).toBe(null);
        expect(modeFromList(numList2)).toBe(null);
        expect(modeFromList(numList3)).toBe(3);
    })
})

