class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let res = [];

        let l = 0
        let r = numbers.length - 1
        console.log('l:', l)
        console.log('r:', r)

        while(l < r) {
            if(numbers[l] + numbers[r] > target) {
              r--  
            }

            if(numbers[l] + numbers[r] < target) {
                l++
            }

            if(numbers[l] + numbers[r] === target) {
                res.push(l +1, r+1)
                break
            }
        }

        return res

    }
}
