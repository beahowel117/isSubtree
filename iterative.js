// Compare Approach: traverse each node of tree s and if it matches the root of tree t, call compare function, compare function will return true/false if s matches t. If all of s is traversed and compare only returned false, return false(there is no subtree).

function isSubtree(t1, t2) {
  const stack = [t1];

  while (stack.length) {
    const tree1 = stack.pop();
    if (tree1.val === t2.val) {
      const ans = compare(tree1, t2);
      if (ans) {
        return true;
      }
    }
    if (tree1.left) {
      stack.push(tree1.left);
    }
    if (tree1.right) {
      stack.push(tree1.right);
    }
  }
  return false;
}

function compare(tree1, tree2) {
  const stack1 = [tree1];
  const stack2 = [tree2];

  while (stack2.length) {
    const t1 = stack1.pop();
    const t2 = stack2.pop();

    if (t1.val === t2.val) {
      if (t1.left && t2.left) {
        stack1.push(t1.left);
        stack2.push(t2.left);
      } else if (t1.left || t2.left) {
        return false;
      }

      if (t1.right && t2.right) {
        stack1.push(t1.right);
        stack2.push(t2.right);
      } else if (t1.right || t2.right) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
}
