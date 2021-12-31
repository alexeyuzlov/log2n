import "../styles/style.scss";
import { search } from "./app/binary";
import { DateUtils } from "./app/utils/date/date";

const resultIndex: number = search([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 0);
console.info("binary search result", resultIndex);

// const date = DateUtils.now();
// console.info(date);
