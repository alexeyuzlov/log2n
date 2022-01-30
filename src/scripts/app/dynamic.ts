class Cell {
    constructor(
        public names: string[],
        public price: number
    ) {
    }
}

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
        const table: Cell[][] = [];
        for (let i = 0; i < this.items.length; i++) {
            table[i] = [];

            for (let j = 1; j <= this.totalWeight; j++) {
                const currentItem: Item = this.items[i];

                const prevCell: Cell = new Cell(
                    (table[i - 1]?.[j])?.names || [],
                    (table[i - 1]?.[j])?.price || 0,
                );

                const currentItemPrice: number = currentItem.weight <= j ? currentItem.price : 0;
                const leftWeightCell: Cell = j - currentItem.weight > 0 ? (table[i - 1]?.[j - currentItem.weight] || null) : null;

                let currentPrice: number = currentItemPrice;

                if (leftWeightCell) {
                    currentPrice += leftWeightCell.price;
                }

                if (currentPrice > prevCell.price) {
                    table[i][j] = new Cell(
                        [currentItem.name],
                        currentPrice
                    );

                    if (leftWeightCell) {
                        table[i][j].names.push(...leftWeightCell.names);
                    }
                } else {
                    table[i][j] = prevCell;
                }
            }
        }

        console.table(table);

        return table[this.items.length - 1][this.totalWeight].price;
    }
}
