class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}


function distanceK(root: TreeNode | null, target: TreeNode | null, k: number): number[] {
    let childParentMap = new Map<TreeNode, TreeNode>();

    function markChildParentNodes() {
        let q = [root];
        while (q.length) {
            let node = q.shift()!;
            if (node.left) {
                q.push(node.left);
                childParentMap.set(node.left, node);
            }
            if (node.right) {
                q.push(node.right);
                childParentMap.set(node.right, node);
            }
        }
    }
    markChildParentNodes();
    let res = [];

    let q = [target];
    let visited = new Set<TreeNode>();
    visited.add(target!);
    let curLevel = 0;
    while (q.length) {
        let len = q.length;
        if (curLevel == k) break;

        for (let i = 0; i < len; i++) {
            let node = q.shift()!;
            if (node.left && !visited.has(node.left)) { // left child
                q.push(node.left);
                visited.add(node.left);
            }
            if (node.right && !visited.has(node.right)) {  // right child
                q.push(node.right);
                visited.add(node.right);
            }
            if (childParentMap.has(node) && !visited.has(childParentMap.get(node)!)) { // parent node
                q.push(childParentMap.get(node)!);
                visited.add(childParentMap.get(node)!);
            }
        }
        curLevel++;
    }
    while (q.length) {
        let node = q.shift()!;
        res.push(node.val);
    }
    return res
};