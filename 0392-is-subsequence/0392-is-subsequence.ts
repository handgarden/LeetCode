function isSubsequence(s: string, t: string): boolean {
    let i = 0;
    let j = 0;
    while(true){
        if(i>= s.length || j>=t.length){
            break;
        }
        
        if(s[i] == t[j]){
            i++;
            j++;
        }else{
            j++;
        }
    }
    if(i == s.length){
        return true;
    }
    return false;
};