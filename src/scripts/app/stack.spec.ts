import { Stack } from './stack';

describe('Stack', () => {
    let stack: Stack<number>;

    beforeEach(() => {
        stack = new Stack<number>();
    });

    it('should push and pop items correctly', () => {
        stack.push(1);
        stack.push(2);
        stack.push(3);

        const item1 = stack.pop();
        const item2 = stack.pop();
        const item3 = stack.pop();
        const item4 = stack.pop();
        const item5 = stack.pop();

        stack.push(1);
        stack.push(2);

        const item6 = stack.pop();
        const item7 = stack.pop();

        expect(item1).toBe(3);
        expect(item2).toBe(2);
        expect(item3).toBe(1);
        expect(item4).toBe(null);
        expect(item5).toBe(null);
        expect(item6).toBe(2);
        expect(item7).toBe(1);
    });
});
