class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        let res = [];

        for (let a = 0; a < nums.length - 2; a++) {

            if(a > 0 && nums[a] === nums[a - 1]) continue

            let b = a + 1
            let c = nums.length - 1

            while(b < c) {
                const sum = nums[a] + nums[b] + nums[c]
                if(sum > 0) {
                    c--
                } else if (sum < 0) {
                    b++
                } else {
                    res.push([nums[a], nums[b], nums[c]])
                    b++
                    c--

                    while(b < c && nums[b] === nums[b - 1]) b++
                    while(b < c && nums[c] === nums[c + 1]) c--
                }
            }
        }

        return res
    }
}
