import { search } from './binary';

describe('binary search', () => {
    let arr: number[];

    beforeEach(() => {
        arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    });

    it('should find index if value exist', () => {
        for (let i = 0; i < arr.length - 1; i++) {
            const result = search(arr, i);
            expect(result).toBe(i);
        }
    });

    it('should not find index if value less than min value', () => {
        const result = search(arr, -100);
        expect(result).toBe(-1);
    });

    it('should not find index if value more than max value', () => {
        const result = search(arr, 100);
        expect(result).toBe(-1);
    });

    it('should not find index if value not exist in source', () => {
        const result = search(arr, 5.5);
        expect(result).toBe(-1);
    });
});
