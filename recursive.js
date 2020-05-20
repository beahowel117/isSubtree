var isSubtree = function(s,t){
  if(t === null) return true;
  if(s === null) return false;

  if((isSame(s,t))){
  return true;
  }

  return isSubtree(s.left, t) || isSubtree(s.right,t)
};

const isSame = (root1,root2) => {
if(root1 === null && root2 === null) return true;

if(root1 !== null && root2 !== null){
  if(root1.val === root2.val && (isSame(root1.left, root2.left)) && (isSame(root1.right,root2.right))){
      return true;
      }
  }
  return false;
};

//O(m*n) time because in worst case the isSame method is called for each node, it will be O(n) with n being the size of the smaller tree. We are calling this m time with m being size of the larger tree
