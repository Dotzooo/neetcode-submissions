class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        let sorted = strs.map((str) => str.split("").sort().join(""))
        // console.log('sorted:', sorted)
        // sorted: [ 'act', 'opst', 'opst', 'act', 'opst', 'aht' ]

        let map = {}

        for(let i = 0;i<sorted.length;i++) {
            // console.log('sorted[i]:', sorted[i])
            if(!map[sorted[i]]) {
                map[sorted[i]] = [strs[i]]
            } else {
                map[sorted[i]].push(strs[i])
            }
        }

        return Object.values(map)

    }

}
