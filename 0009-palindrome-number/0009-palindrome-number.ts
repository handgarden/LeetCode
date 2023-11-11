function isPalindrome(x: number): boolean {
    if(x < 0){
        return false;
    }
    
    const xStr = x.toString();
    
    let i = 0;
    let j = xStr.length - 1;
    
    while(i<xStr.length && j >=0){
        if(xStr[i++] !== xStr[j--]){
            return false;
        }
    }
    
    return true;
}; 