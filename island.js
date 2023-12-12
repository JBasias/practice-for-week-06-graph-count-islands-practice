function getNeighbors(x, y, G) {



  let n= G.length; let m=G[0].length;

  let ret= [];

  if(x>0 && G[x-1][y] === 1) ret.push([x-1,y]);
  if(x<n-1  && G[x+1][y] === 1) ret.push([x+1,y]);
  if(y>0 && G[x][y-1] === 1) ret.push([x,y-1]);
  if(y<m-1 && G[x][y+1] === 1) ret.push([x,y+1]);

  if(x>0 && y>0 && G[x-1][y-1] === 1) ret.push([x-1,y-1]);
  if(x>0 && y<m-1 && G[x-1][y+1] === 1) ret.push([x-1,y+1]);
  if(x<n-1 && y>0 && G[x+1][y-1] === 1) ret.push([x+1 ,y-1]);
  if(x<n-1 && y<m-1 && G[x+1][y+1] === 1) ret.push([x+1,y+1]);


  //console.log(ret);

  return ret;

  // Check top
  // Check top right
  // Check right
  // Check bottom right
  // Check bottom
  // Check bottom left
  // Check left
  // Check top left
  // Return neighbors

  // Your code here
}

function countIslands(M) {

  let B = new Set(); let m=M[0].length; let ret=0;

  function Find(x,y,M)
  {
    B.add(x*m + y);
    let Q = [[x,y]]; let cur;

    while(Q.length != 0 )
    {
       cur = Q.shift();
       for(v of getNeighbors(cur[0],cur[1],M))
       {
         if(!B.has(v[0]*m + v[1]))
         {
           B.add(v[0]*m + v[1]);
           Q.push(v);
         }
       }

    }
  }


  for(let i=0;i<M.length;i++)
  {
    for(let j=0;j<M[0].length;j++)
    {
      if(M[i][j] === 1  && !B.has(i*m + j))
      {
          ret++;
          Find(i,j,M);
      }
    }
  }

  return ret;

  // Create a visited set to store visited nodes
  // Initialize count to 0
  // Iterate through all indices in matrix
    // If an index contains a 1 and has not been visited,
    // increment island count and start traversing neighbors
      // DO THE THING (increment island count by 1)
      // Initialize a stack with current index
      // Add stringified version of current index to the visited set
      // While stack contains elements
        // Pop element from stack
        // Get valid neighbors of current element
        // Iterate over neigbors
          // If neighbor has not been visited
            // Add neighbor to stack
            // Mark neighbor as visited
  // Return island count

  // Your code here
}

// Uncomment the lines below for local testing
// const matrix = [
//                 [1,1,1,0,0],
//                 [0,1,1,0,1],
//                 [0,1,1,0,1]
//               ]

// console.log(getNeighbors(1, 1, matrix)); // [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
// console.log(getNeighbors(2,4, matrix)) // [[1,4]]

// const matrix2 = [
//                     [1,1,1,0,1],
//                     [0,0,0,0,1],
//                     [1,0,0,1,0],
//                 ]

// console.log(countIslands(matrix)) // 2
// console.log(countIslands(matrix2)); // 3

module.exports = [countIslands, getNeighbors];
