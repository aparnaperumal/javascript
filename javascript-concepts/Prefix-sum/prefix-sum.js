// Example:

// Input: nums = [1, 2, 3, 4, 5, 6], i = 1, j = 3

// Output: 9

// Explanation:
// Preprocess the array A to create a prefix sum array: P = [1, 3, 6, 10, 15, 21].

// To find the sum between indices i and j, use the formula: P[j] - P[i-1].

const input = [1,2,3,4,5,6]
let start = 1, end = 3

console.log(typeof(start), typeof(end))

const preprocessArray = [];

for(let i=0;i<input.length;i++){
    let count = 0;
    for(let j=0;j<=i;j++){
        count += input[j]
    }
    preprocessArray.push(count)
}

console.log(preprocessArray)

console.log('sum=', preprocessArray[3]-preprocessArray[0])


/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums
    let processedNum = []
    for(let i=0;i<nums.length;i++){
        let count = 0;
        for(let j=0;j<=i;j++){
            count += nums[j]
        }
        processedNum.push(count)
    }
    this.processedNum = [...processedNum]
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left,right){
    return this.processedNum[right] - this.processedNum[left-1]
}

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

