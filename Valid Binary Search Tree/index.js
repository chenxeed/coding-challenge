function Node(value, left, right) {
    return {
        value,
        left,
        right
    }
}

function checkBST(node) {
    
    function recursiveCheckBST (node, minLeft = -Infinity, maxRight = Infinity) {
        const value = node.value
        let leftNode
        let leftValue
        let leftIsBST = true
        let rightNode
        let rightValue
        let rightIsBST = true
    
        // validate left node
        if (node.left) {
            leftNode = recursiveCheckBST(node.left, minLeft, value)
            leftValue = leftNode.value
            leftIsBST = leftNode.isBST && leftValue <= value && leftValue >= minLeft
        }
    
        // validate right node
        if (node.right) {
            rightNode = recursiveCheckBST(node.right, value, maxRight)
            rightValue = rightNode.value
            rightIsBST = rightNode.isBST && rightValue >= value && rightValue <= maxRight
        }
        // for debugging purpose
        // console.log(value, minLeft, maxRight, leftValue, rightValue, leftIsBST, rightIsBST)
    
        const isBST = leftIsBST && rightIsBST
    
        return {
            value,
            isBST
        }
    }

    return recursiveCheckBST(node).isBST
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
