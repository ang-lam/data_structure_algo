//Given an integer numRows, return the first numRows of Pascal's triangle.

//In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]

var generate = function(numRows) {
    const rows = new Array(numRows)
    for(let i=0; i < numRows; i++){
        const newRow = new Array(i+1)
        newRow[0] = 1
        newRow[i] = 1
        for (let j=1; j <= i-1; j++){
            newRow[j] = rows[i-1][j-1] + rows[i-1][j]
        }
        console.log(newRow)
        rows[i] = newRow
    }
    return rows
};