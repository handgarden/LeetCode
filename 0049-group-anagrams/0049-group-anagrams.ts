function groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string, string[]>();
    strs.forEach(s => {
        const key = keygen(s);
        if(map.has(key)){
            map.get(key).push(s);
            return;
        }
        map.set(key, [s]);
    })
    
    return [...map.values()];
};

function keygen(word: string){
    const charCount = [];
    return word.split('').sort().join('');
}