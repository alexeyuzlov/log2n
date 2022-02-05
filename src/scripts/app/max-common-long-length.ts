export function maxCommonLongLength(first: string, second: string): string {
    const table: number[][] = [];

    let maxXY = null;

    for (let i = 0; i < first.length; i++) {
        table[i] = [];

        for (let j = 0; j < second.length; j++) {
            table[i][j] = 0;

            if (first[i] === second[j]) {
                table[i][j] = (table?.[i - 1]?.[j - 1] || 0) + 1;

                maxXY = {
                    x: i,
                    y: j
                };
            }
        }
    }

    console.table(table);

    let str: string = '';
    if (maxXY) {
        for (let i = 0; i < table[maxXY.x][maxXY.y]; i++) {
            const letter = first[maxXY.x - i];

            str = letter + str;
        }
    }

    return str;
}
