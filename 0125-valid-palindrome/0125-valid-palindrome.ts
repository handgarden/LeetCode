function isPalindrome(s: string): boolean {
    const sp: string[] = s.split('');
    const fil = sp.filter(c=>/[a-zA-Z0-9]/.test(c));
    const data = fil.map(f=>f.toLowerCase());
 
    let i = 0;
    let j = data.length - 1;
    // console.log(data);
    while(i<j){
        // console.log(i,j,data[i], data[j]);
        if(data[i++] !== data[j--]){
            return false;
        }
    }
    return true;
};