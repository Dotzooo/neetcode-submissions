class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let letter = strs.map((str) => `${str.length}#${str}`).join("")
        console.log('letter:', letter)

        return letter;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = []
        let i = 0
        
        while(i < str.length) {

            let j = i
            while(str[j] !== '#') {
                j++
            }

            let length = parseInt(str.slice(i, j))
            // console.log('length:', length)


            // 2. '#' 的下一個位置開始,往後數 length 個字元,就是原始字串
            let start = j + 1;
            let end = start + length;
            res.push(str.slice(start, end));

            // 3. 移動指標到下一段的開頭
            i = end;
        }
        return res
    }
}
