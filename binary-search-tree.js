class Node {

  constructor({val, left=null, right=null}) {
    this.val = val
    this.left = left
    this.right = right
  }

}

class Tree {

  constructor(rootNode) {
    this.rootNode = rootNode
  }

  size(node) {
    console.log(node)
    
    if(!node) return 0
    
    if(node.left === null && node.right === null) {
      //at leaf
      return 1;
    }
    
    return 1 + this.size(node.left) + this.size(node.right)
    
    }


    insert(node, rootNode) {

      let lastNode;
      let direction;
    
      while(rootNode && node.val !== rootNode.val) {
        if(node.val < rootNode.val) {
          lastNode = rootNode
          rootNode = rootNode.left
          direction = "left"
        }
        if(node.val > rootNode.val) {
        lastNode = rootNode
        rootNode = rootNode.right
        direction = "right"
        }
      }
    
    if(direction === "left") {
      lastNode.left = node
    } else {
      lastNode.right = node
    }
    
    }

    binarySearch(targetVal, node) {

      console.log(node)
      if(!node) return null //didnt find node
      if(node.val === targetVal) return node //found node
    
      
      if(node.val > targetVal) {
        return this.binarySearch(targetVal, node.left)
      } else {
        return this.binarySearch(targetVal, node.right)
      }
    
    
    }
    
    leafCount(node) {
    
    if(!node) return 0
    if(!node.left && !node.right) return 1
    
    return this.leafCount(node.left) + this.leafCount(node.right)
    
    }
    
    internalNodeCount(node) {
    
      return this.size(node) - this.leafCount(node)
    
    }





}