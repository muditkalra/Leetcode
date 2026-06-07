/**
 * Definition for a binary tree node.
 */
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

function createBinaryTree(descriptions: number[][]): TreeNode | null {
    let parentSet = new Set<number>();
    let childrenSet = new Set<number>();
    let n = descriptions.length;

    let pcLink = new Map<number, number[][]>();

    for (let i = 0; i < n; i++) {
        let [parent, child, isLeft] = descriptions[i];
        parentSet.add(parent);
        childrenSet.add(child);

        if (pcLink.has(parent)) {
            pcLink.get(parent)?.push([child, isLeft]);
        } else {
            pcLink.set(parent, [[child, isLeft]]);
        }
    }

    let root = null;
    for (let i = 0; i < n; i++) {
        let parent = descriptions[i][0];
        if (parentSet.has(parent) && !childrenSet.has(parent)) {
            root = new TreeNode(parent);
            break;
        }
    }

    let q = [root];

    while (q.length) {
        let node = q.shift();

        if (node) {
            if (pcLink.has(node.val)) {
                let childrens = pcLink.get(node.val)!;

                for (let i = 0; i < childrens.length; i++) {
                    let [child, isLeft] = childrens[i];
                    let childNode = new TreeNode(child);
                    if (isLeft) {
                        node.left = childNode;
                    } else {
                        node.right = childNode;
                    }
                    q.push(childNode);
                }
            }

        }
    }
    return root;
};