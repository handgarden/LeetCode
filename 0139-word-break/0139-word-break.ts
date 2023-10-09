function wordBreak(s: string, wordDict: string[]): boolean {
    const dp:boolean[] = [];
    for(let i = 0; i<s.length; i++){
        dp[i] = false;
        for(let j = i ; j>=0; j--){
            const tmp = s.substring(j,i+1);
            if(wordDict.includes(tmp)){
                if(j===0 || dp[j-1]){
                    dp[i] = true;
                }
            }
        }
    }
    
    return dp[s.length-1];
};

//cars
//c
//a ca
//r ar car -> ar이 가능 -> c가 가능한지
//s rs ars cars -> s, car
//각 단계에 저장해야되는 내용 -> 현재 만들 수 있는 경우의 수
//현재 문자부터 이전을 추가하면서 가능한 경우까지 진행, 그 이전의 문자로만 단어가 가능했는지 확인한 내용을 저장
//s car -> car이 가능하다는 내용을 저장해둬야함 -> car이 가능하려면 그 전 문자도 단어로 구성되어야함을 검증해야함
//r을 검사할 때 car로 구성해도 가능한 경우에 저장
//각 문자 검사시에 확인하고 저장할 내용
//우선 index 0일때까지 진행하면서 이전 문자와 합쳐서 가능하고, 그 이전 문자도 해당 내용으로 가능해야함
