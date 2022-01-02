import { LinkedItem, LinkedList } from './linked-list';

describe('Linked List', () => {
    let list: LinkedList<number>;

    beforeEach(() => {
        list = new LinkedList<number>();
    });

    it('should have correct size after adding items', () => {
        list.add(new LinkedItem<number>(4));
        list.add(new LinkedItem<number>(3));
        list.add(new LinkedItem<number>(2));

        expect(list.toArray().length).toBe(3);
        expect(list.size).toBe(3);
    });

    it('should clear items and have correct bindings after', () => {
        list.add(new LinkedItem<number>(4));
        list.add(new LinkedItem<number>(3));
        list.add(new LinkedItem<number>(2));

        list.clear();
        list.add(new LinkedItem<number>(1));

        expect(list.toArray().length).toBe(1);
        expect(list.size).toBe(1);
    });
});
