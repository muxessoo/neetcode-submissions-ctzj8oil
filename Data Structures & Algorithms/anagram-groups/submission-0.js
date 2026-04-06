class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let Obj = {}
        for (let s of strs){
            let sortedS = s.split('').sort().join('')
            if (!Obj[sortedS])
                Obj[sortedS]=[]
            Obj[sortedS].push(s)
        }
        return Object.values(Obj)
    }
}
