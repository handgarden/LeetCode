function strStr(haystack: string, needle: string): number {
    if(haystack.length < needle.length){
        return -1;
    }
    
    for(let i = 0; i<=haystack.length - needle.length; i++){
        let count = 0;
        let sub = haystack.slice(i, i+needle.length);
        if(sub === needle){
            return i;
        }
    }
    return -1;
};