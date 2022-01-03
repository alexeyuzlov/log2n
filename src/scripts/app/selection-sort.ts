function findMinOrMaxIndex<T>(arr: T[], minOrMax: 1 | -1 = 1): number {
    let index: number = 0;

    for (let i = 0; i < arr.length; i++) {
        if (minOrMax < 0 ? arr[index] <= arr[i] : arr[index] >= arr[i]) {
            index = i;
        }
    }

    return index;
}

export function selectionSort<T>(arr: T[], direction: 1 | -1 = 1): T[] {
    const copy: T[] = [...arr];
    const result: T[] = [];

    for (let i = 0; i < arr.length; i++) {
        const index = findMinOrMaxIndex(copy, direction);

        const item = copy[index];
        copy.splice(index, 1);
        result.push(item);
    }

    return result;
}
