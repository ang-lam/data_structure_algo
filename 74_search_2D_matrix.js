// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.
//Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
//Output: true

var searchMatrix = function(matrix, target) {
    let m = matrix.length
    let n = matrix[0].length
    let start = 0
    let end = n*m-1
    while (start <= end){
        let mid = Math.floor((start+end)/2)
        let row = Math.floor(mid/n)
        let col = Math.floor(mid % n)
        if (target === matrix[row][col]) {
            return true
        }
        if (target > matrix[row][col]){
            start = mid + 1
        }
        else{
            end = mid - 1
        }
    }
    return false
};


// var searchMatrix = function(matrix, target) {
//     for (let i = 0; i < matrix.length; i++){
//         for(const num of matrix[i]){
//             if (num === target){
//                 return true
//             }
//         }
//     }
//     return false
// };