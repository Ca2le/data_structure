
import { Compare_Fn_Type, Data_Array_Type } from "./types/merge_sort_types";

function sort_array<T>(
  data_array: Array<T>,
  compare_fn: Compare_Fn_Type<T>
): Data_Array_Type<T> {
  const data = data_array;

  const result = data.sort(compare_fn);

  return result;
}

export function mergeSort<T>(
  data_input: Data_Array_Type<T> | T,
  compare_fn: Compare_Fn_Type<T>
): Data_Array_Type<T> {
  let data = data_input;
  let result: Data_Array_Type<T>;
  // transform the data to an array.

  if (!Array.isArray(data) && typeof data !== "object") {
    data = [data];
  }

  if (Array.isArray(data)) {
    if (typeof data[0] === "number") {
      result = sort_array(data, compare_fn);
      return result;
    }
    if (typeof data[0] === "string") {
      result = sort_array(data, compare_fn);
      return result;
    }
  }

  return []
}
