class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // let str = ''
        // for (let c of s ) {
        //     if(this.isAlphanumeric(c)) {
        //         str += c.toLowerCase()
        //     }
        // }
        // return str === str.split('').reverse().join('')


        let l = 0
        let r = s.length - 1

        while(l < r) {
            while(l < r && !this.isAlphanumeric(s[l])) {
                l++
            }
            while(r > l && !this.isAlphanumeric(s[r])) {
                r--
            }

            if(s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false
            }
            l++
            r--
        }
        return true
    }

    isAlphanumeric(char) {
        return (
            (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9')
        )
    }


}
