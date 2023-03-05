import { Compare_Fn_Type } from "./types/merge_sort_types";

export const CompareNumbers: Compare_Fn_Type<number> = (a, b) => {
    return a < b ? -1 : a === b ? 0 : 1;
};

export const compareStrings: Compare_Fn_Type<string> = (a, b) =>{
    return  a.localeCompare(b) as -1 | 0 | 1
}
