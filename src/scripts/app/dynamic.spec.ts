import { Item, ItemList } from './dynamic';

describe('dynamic', () => {
    let itemList: ItemList;

    beforeEach(() => {
        itemList = new ItemList([
            new Item('guitar', 1500, 1),
            new Item('recorder', 3000, 4),
            new Item('notebook', 2000, 3),
            new Item('phone', 2000, 1),
        ], 4);
    });

    it('should correct find best way', () => {
        expect(itemList.calc()).toBe(4000);
    });
});
