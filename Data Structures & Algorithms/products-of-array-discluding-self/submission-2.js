class Solution {
    /**
     * @param {number[]} nums
     *  take 1, n array>prev no. ko guna krna
     * > last no ko 1 se guna aur post ko nya res dena
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length
        let res = new Array(n).fill(1)

        for (let i = 1; i<n; i++)
            res[i] = res[i-1] * nums[i-1]

        let postno = 1
        for (let i=n-1; i>=0; i--){
            res[i]*=postno
            postno*= nums[i]
        }
        return res
    }
}
