class Solution {
    /**
     * @param {string[]} strs
     * l=0,return">res"siz[],>sz-lpush>resme,>end#>againSdal
     * @returns {string}
     */
    encode(strs) {
        if (strs.length ===0)
            return ''
        let res = '',
            sizes = []
        for (let s of strs)
            sizes.push(s.length)
        for (let sz of sizes)
            res+= sz + ','
        res += '#'
        for (let s of strs)
            res += s
        return res
    }

    /**
     * @param {string} str
     * ret[]>res[]sz[]>cur''>curmeno.>noint>slice
     * @returns {string[]}
     */
    decode(str) {
        if (str.length ===0)
            return []
        let res = [],
            sizes = [],
            i =0
        while (str[i] !=='#'){
            let curr = ''
            while (str[i] !==','){
                    curr+= str[i]
                    i++
            }
            sizes.push(parseInt(curr))
            i++
        }
        i++
        for (let sz of sizes){
            res.push(str.substr(i,sz))
            i += sz
        }
        return res               
    }
}
