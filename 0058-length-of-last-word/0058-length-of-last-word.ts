function lengthOfLastWord(s: string): number {
    const t = s.split(' ').filter(c=>c.trim()!='');
    if(t.length < 1){
        return 0;
    }
    return t[t.length - 1].length;
};