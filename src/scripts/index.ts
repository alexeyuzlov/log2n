import '../styles/style.scss';

import { search } from './app/binary';
import { selectionSort } from './app/selection-sort';

const arr: number[] = [5, 9, 4, 8, 2, 0, 6, 7, 3, 1];
const selectionSortedArr: number[] = selectionSort(arr);
// const resultIndex: number = search(selectionSortedArr, 0);

console.info('selection sort result', selectionSortedArr, arr);
// console.info("binary search result", resultIndex);
