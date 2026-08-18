class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // 橫條/直行，1~9 不能重複
        // 3x3 ，1~9 不能重複
        // console.log("board:", board);
        const length = board.length;

        const rowSet = Array.from({ length }, () => new Set());
        const colSet = Array.from({ length }, () => new Set());
        const boxSet = Array.from({ length }, () => new Set());

        // console.log(board[1][0])
        for (let r = 0; r < length; r++) {
            for (let c = 0; c < length; c++) {
                const val = board[r][c];
                if (val === ".") continue;

                const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

                if (rowSet[r].has(val) || colSet[c].has(val) || boxSet[boxIndex].has(val)) {
                    return false;
                }

                rowSet[r].add(val)
                colSet[c].add(val)
                boxSet[boxIndex].add(val)
            }
        }
        return true
    }
}
