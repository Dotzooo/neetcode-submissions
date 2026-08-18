class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // 先排序
        // 當下的值要比後一位值小

        let numSet = new Set(nums);
        let maxLen = 0
        // console.log(numSet);

        for (let i = 0; i < nums.length; i++) {
            console.log(('numSet:', nums[i]))
            if(!numSet.has((nums[i] - 1))) {
                let length = 1
                let current = nums[i]
                while(numSet.has(current + 1)) {
                    current++
                    length++
                }
                maxLen = Math.max(maxLen, length)
            }                                                                    
        }

        return maxLen
    }
}
