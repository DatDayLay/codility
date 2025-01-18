class Tree {
  constructor(x) {
    this.x = x;
    this.l = null;
    this.r = null;
  }
}

function solution(T) {
  let maxZigzag = 0;

  function dfs(node, direction, currentLength) {
    if (!node) return;

    maxZigzag = Math.max(maxZigzag, currentLength);

    if (direction === "left") {
      dfs(node.l, "left", 0);
      dfs(node.r, "right", currentLength + 1);
    } else if (direction === "right") {
      dfs(node.r, "right", 0);
      dfs(node.l, "left", currentLength + 1);
    } else {
      dfs(node.l, "left", 1);
      dfs(node.r, "right", 1);
    }
  }

  dfs(T, null, 0);
  return maxZigzag;
}
