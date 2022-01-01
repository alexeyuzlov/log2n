/**
 * Binary search (Olog2n)
 * @param arrSorted should be sorted
 * @param item element to find
 * @returns index of exist element or -1 otherwise
 */
export function search<T>(arrSorted: T[], item: T): number {
    let lowIndex: number = 0;
    let highIndex: number = arrSorted.length - 1;

    while (lowIndex <= highIndex) {
        const middleIndex: number = Math.floor((lowIndex + highIndex) / 2);
        const find: T = arrSorted[middleIndex];

        if (find === item) {
            return middleIndex;
        }

        if (find < item) {
            lowIndex = middleIndex + 1;
        } else {
            highIndex = middleIndex - 1;
        }
    }

    return -1;
}
