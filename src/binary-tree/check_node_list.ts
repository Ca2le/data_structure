
import { expect_Node } from "./expect_Node"

export function check_Node_List<T>(list: Array<number>, cb: (expect_Node: { value: number }) => void) {
    list.forEach(value => {
        cb(expect_Node(value))
    })

}
