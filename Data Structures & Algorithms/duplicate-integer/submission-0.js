class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // 如果有重複的 return true

        const numsArr = new Set(nums)


        console.log("numsArr:", numsArr.size)
        if(numsArr.size !== nums.length) return true

        return false
        
    }
}
