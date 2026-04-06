class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = {}
        for (let n of nums)
            count[n]= (count[n] || 0) +1
        let arr = Object.entries(count).map(([num,freq])=>[
            freq,
            parseInt(num),
        ])
        arr.sort((a,b)=>b[0]-a[0])
        return arr.slice(0,k).map((a)=>(a[1]))
    }
}
