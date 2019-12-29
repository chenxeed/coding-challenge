function Node(value, left, right) {
    return {
        value,
        left,
        right
    }
}

function checkBST(node, minLeft = -Infinity, maxRight = Infinity) {

    const value = node.value
    let leftIsBST = true
    let rightIsBST = true

    // validate left node
    if (node.left) {
        const leftValue = node.left.value
        leftIsBST = checkBST(node.left, minLeft, value) && leftValue <= value && leftValue >= minLeft
    } 

    // validate right node
    if (node.right) {
        const rightValue = node.right.value
        rightIsBST = checkBST(node.right, value, maxRight) && rightValue >= value && rightValue <= maxRight
    }
    // for debugging purpose
    // console.log(value, minLeft, maxRight, leftValue, rightValue, leftIsBST, rightIsBST)

    const isBST = leftIsBST && rightIsBST

    return isBST
}
/**
 *                  5
 *          3               8
 *      1       4       7       10
 */


const node = Node(5,
    Node(3,
        Node(2),
        Node(4,
            Node(3.5),
            Node(4.5)
        )
    ),
    Node(8,
        Node(7),
        Node(10)
    )
)

console.log(checkBST(node))
