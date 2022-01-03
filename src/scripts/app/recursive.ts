export function recursive(arr: number[]): number {
    if (arr.length === 0) {
        return 0;
    }

    const item: number = arr.pop();
    return item + recursive(arr);
}

export function recursiveCount<T>(arr: T[]): number {
    if (arr.length === 0) {
        return 0;
    }

    arr.pop();
    return 1 + recursiveCount(arr);
}

export function recursiveMax(arr: number[]): number {
    if (arr.length === 0) {
        return Number.NEGATIVE_INFINITY;
    }

    if (arr.length === 1) {
        return arr[0];
    }

    if (arr.length === 2) {
        return arr[0] > arr[1] ? arr[0] : arr[1];
    }

    arr.pop();
    return recursiveMax(arr);
}
