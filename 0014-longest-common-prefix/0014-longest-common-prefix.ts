function longestCommonPrefix(strs: string[]): string {
    const len = strs.length;
    let str = '';
    for(let i = 0; i<strs[0].length; i++){
        const prefix = strs[0][i];
        let count = 1;
        for(let j = 1; j<len;j++){
            if(prefix === strs[j][i]){
                count++;
            }
        }
        if(count === len){
            str+=prefix;
        }else{
            return str;
        }
    }
    return str;
};