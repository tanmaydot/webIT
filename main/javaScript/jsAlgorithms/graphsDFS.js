const findUnVisitedNode = (currentNode, graph, visitedNodes) => {
  const currentConnectedNodes = graph[currentNode];
  let neighborIdx = -1; // making it initial to -1, as no vertex is unvisited
  currentConnectedNodes.forEach((element, idx) => {
    if (element == 1 && !visitedNodes[idx] && neighborIdx == -1) {
      neighborIdx = idx;
    }
  });
  return neighborIdx;
};

const dfs = (graph, rootNode) => {
  let nodeDistance = {};
  for (let i = 0; i < graph.length; i++) {
    nodeDistance[i] = Infinity;
  }

  nodeDistance[rootNode] = 0;
  let stack = [rootNode];

  // setting the current vertex as visited as we don't want to create a loop around it
  let visitedNodes = { [rootNode]: true };
  while (stack.length) {
    const currentNode = stack.pop();
    const unvisitedNode = findUnVisitedNode(currentNode, graph, visitedNodes);
    if (unvisitedNode >= 0) {
      if (!visitedNodes[unvisitedNode]) {
        if (nodeDistance[unvisitedNode] == Infinity)
          nodeDistance[unvisitedNode] = nodeDistance[currentNode] + 1;
        visitedNodes[unvisitedNode] = true;
        stack.push(...[currentNode, unvisitedNode]);
      }
    } else {
      visitedNodes[unvisitedNode] = true;
    }
  }

  return nodeDistance;
};

const newdfsGraph = [
  [0, 1, 1, 0, 0],
  [1, 0, 0, 1, 0],
  [1, 0, 0, 1, 1],
  [0, 1, 1, 0, 0],
  [0, 0, 1, 0, 0],
];

console.log(dfs(newdfsGraph, 1));
