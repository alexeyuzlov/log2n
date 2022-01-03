export function quickSort(arr: number[], direction: 1 | -1 = 1): number[] {
    if (arr.length < 2) {
        return arr;
    }

    const less: number[] = [];
    const more: number[] = [];

    const pivot = arr[0];

    for (let i = 1; i < arr.length; i++) {
        const check = direction > 0
            ? pivot < arr[i]
            : pivot > arr[i];

        if (check) {
            more.push(arr[i]);
        } else {
            less.push(arr[i]);
        }
    }

    return quickSort(less, direction).concat(pivot, quickSort(more, direction));
}
