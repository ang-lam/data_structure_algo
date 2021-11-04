// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

//O(n) time | O(n) space
//use two pointers to fill squared array with larget values until all values are squared
var sortedSquares = function(nums) {
    let left = 0
	let right = nums.length-1
	let squared = new Array(nums.length)
	for(let i = nums.length-1; i >= 0; i--){
		let smaller = nums[left]**2
		let larger = nums[right]**2
		if (smaller > larger){
			squared[i] = smaller
			left++
		}
		else{
			squared[i] = larger
			right--
		}
	}
  return squared;
};

//O(nlog(n)) time | O(n) space
//sorts are nlog(n)
function sortedSquaredArray(array) {
    // Write your code here.
      let squared = []
      for (const num of array){
          let square = num**2
          squared.push(square)
      }
    return squared.sort((a,b) => a-b);
  }