export class Item {
    constructor(
        public name: string,
        public price: number,
        public weight: number
    ) {
    }
}

export class ItemList {
    constructor(
        public items: Item[],
        public totalWeight: number,
    ) {
    }

    public calc() {
        const table = [];
        for (let i = 0; i < this.items.length; i++) {
            table[i] = [];

            for (let j = 1; j <= this.totalWeight; j++) {
                const currentItem: Item = this.items[i];
                const prevPrice: number = table[i - 1]?.[j] || 0;

                const currentItemPrice = currentItem.weight <= j ? currentItem.price : 0;
                const leftWeightPrice = j - currentItem.weight > 0 ? (table[i - 1]?.[j - currentItem.weight] || 0) : 0;

                const currentPrice: number = currentItemPrice + leftWeightPrice;
                table[i][j] = Math.max(currentPrice, prevPrice);
            }
        }

        // console.table(table);

        return table[this.items.length - 1][this.totalWeight];
    }
}
