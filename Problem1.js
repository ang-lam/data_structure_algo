// 1. Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

//time: O(n^2), space: O(1)
function twoNumberSum(array, targetSum) {
    // Write your code here.
      for(let i=0; i < array.length; i++){
          let currentValue = array[i]
          for(let j=i+1; j < array.length; j++){
              if(array[j] + currentValue === targetSum){
                  return [array[j], currentValue]
              }
          }
      }
      return []
}

//time: O(n), space: O(n)
function twoNumberSum(array, targetSum) {
    // Write your code here.
      const values = {}
      for (const num of array){
          let match = targetSum - num
          if(match in values){
              return [num, match]
          }
          values[num] = true
      }
      return []
  }