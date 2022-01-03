import { recursiveCount, recursive, recursiveMax } from './recursive';

describe('recursive functions', () => {
    describe('recursive sum', () => {
        let arr: number[];

        beforeEach(() => {
            arr = [7, 3, 1];
        });

        it('should correct sum', () => {
            expect(recursive(arr)).toBe(11);
        });

        it('should correct sum empty array', () => {
            expect(recursive([])).toBe(0);
        });
    });

    describe('recursive count', () => {
        let arr: number[];

        beforeEach(() => {
            arr = [7, 3, 1];
        });

        it('should correct total', () => {
            expect(recursiveCount(arr)).toBe(3);
        });

        it('should correct total empty array', () => {
            expect(recursive([])).toBe(0);
        });
    });

    describe('recursive max', () => {
        let arr: number[];

        beforeEach(() => {
            arr = [7, 3, 1];
        });

        it('should correct max', () => {
            expect(recursiveMax(arr)).toBe(7);
        });

        it('should correct max for empty array', () => {
            expect(recursiveMax([])).toBe(Number.NEGATIVE_INFINITY);
        });
    });
})

