import { Compare_Fn_Type } from "./types/merge_sort_types";

export const CompareNumbers: Compare_Fn_Type<number> = (a, b) => {
    let result: number;
    if (a < b) {
        result = -1;
    } else if (a === b) {
        result = 0;
    } else {
        result = 1;
    }
    return result;
};

export const compareStrings: Compare_Fn_Type<string> = (a, b) =>{
    return  a.localeCompare(b) as -1 | 0 | 1
}
