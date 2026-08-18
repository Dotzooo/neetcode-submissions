class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        console.log(n)
        const res = new Array(n).fill(1);
        // console.log("res:", res);
        // res = [1,1,1,1]

        for (let i = 1; i < n; i++) {
            res[i] = res[i - 1] * nums[i - 1];
            // res[1] = res[0] * nums[0] = 1 * 1 = 1
            // res[2] = res[1] * nums[1] = 1 * 2 = 2
            // res[3] = res[2] * nums[2] = 2 * 4 = 8
        }
        console.log("res:", res);

        let postfix = 1;
        for (let i = n - 1; i >= 0; i--) {
            res[i] *= postfix;
            postfix *= nums[i];
        }
        return res
    }
}
