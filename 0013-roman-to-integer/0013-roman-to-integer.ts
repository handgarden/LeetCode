function romanToInt(s: string): number { 
    let symbolMap = new Map();
    
    symbolMap.set('I',1);
    symbolMap.set('V',5);
    symbolMap.set('X',10);
    symbolMap.set('L', 50);
    symbolMap.set('C',100);
    symbolMap.set('D',500);
    symbolMap.set('M',1000);
    
    let num = 0;
    let prev = 'I';
    
    for(let i = s.length - 1; i>=0;i--){
        if(symbolMap.get(prev) <= symbolMap.get(s[i])){
            num+=symbolMap.get(s[i]);
        }else{
            num-=symbolMap.get(s[i]);
        }
        prev = s[i];
    }
    
    return num;
};