class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const store = new Set(nums);
        let res = 0;
        
        for (let num of nums) {
            if (!store.has(num - 1)) {
                let streak = 0;
                let curr = num;
                
                while (store.has(curr)) {
                    streak++;
                    curr++;
                }
                res = Math.max(res, streak);
            }
        }
        return res;
    }
}
