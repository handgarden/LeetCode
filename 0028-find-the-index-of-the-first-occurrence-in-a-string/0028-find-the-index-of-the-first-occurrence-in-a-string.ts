function strStr(haystack: string, needle: string): number {
    if(haystack.length < needle.length){
        return -1;
    }
    
    for(let i = 0; i<=haystack.length - needle.length; i++){
        let count = 0;
        for(let j = 0; j<needle.length;j++){
            if(haystack[i+j] === needle[j]){
                count++;
            }
        }
        if(count === needle.length){
            return i;
        }
    }
    return -1;
};