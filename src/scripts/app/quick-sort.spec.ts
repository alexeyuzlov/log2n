import { quickSort } from './quick-sort';

describe('quick sort', () => {
    let arr: number[];

    beforeEach(() => {
        arr = [5, 9, 4, 8, 2, 0, 6, 7, 3, 1];
    });

    it('should sort correctly', () => {
        const result1 = quickSort(arr, 1);
        expect(result1).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

        const result2 = quickSort(arr, -1);
        expect(result2).toEqual([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
    });

    it('should sort correctly with duplicates', () => {
        const arr2 = [5, 5, 4, 8, 2, 0, 6, 0, 3, 1];

        const result1 = quickSort(arr2, 1);
        expect(result1).toEqual([0, 0, 1, 2, 3, 4, 5, 5, 6, 8]);

        const result2 = quickSort(arr2, -1);
        expect(result2).toEqual([8, 6, 5, 5, 4, 3, 2, 1, 0, 0]);
    });
});
