class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        let map = {}
        for(let i = 0; i< nums.length;i++) {
            map[nums[i]] = (map[nums[i]] || 0) + 1
        }
        // console.log('map:', map)
        // map: { '1': 1, '2': 2, '3': 3 }

        let bucket = new Array(nums.length + 1)
        for(let i = 0;i < bucket.length; i++) {
            bucket[i] = []
        }
        // [], [], [], []

        for(let key in map) {
            let freq = Number(key)
            let value = map[key]
            bucket[value].push(freq)
        }

        let res = []
        for(let freq = bucket.length - 1; freq >=0; freq-- ){
            for(const num of bucket[freq]){
                res.push(num)
                if(res.length === k) return res
            }
        }

        return res
    }
}
