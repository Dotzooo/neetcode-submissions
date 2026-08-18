class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // 找出加總目標的數值位置
        let res = []
        console.log('nums', nums.length)

        for(let i = 0;i < nums.length; i++) {
            // i: 0, 1, 2, 3
            // nums[i]: 3, 4, 5, 6
            // console.log('nums[i]:' ,nums[i])

            for(let j = i+1; j < nums.length;j++) {
                // j: 1, 2, 3
                // nums[j]: 4, 5, 6
                // console.log('nums[j]:' ,nums[j])

                if(nums[i]+nums[j] === target) {
                    console.log('nums[i]:' ,nums[i])
                    console.log('nums[j]:' ,nums[j])
                    console.log(i)
                    res.push(i, j)
                    console.log(res)
                }
                
            }
        }

        console.log('res:', res)
        return res
    }
}
