export type Expected_Node_Type<T> = (value: T) => { value: T }
export type CBType<T> = (fn: Expected_Node_Type<T>) => void