function calculate(s: string): number {
    const parsedStr = [];
    let spCount = 0;
    for(let i = 0; i<s.length; i++){
        if(s[i] === ' '){
            continue;
        }
        if(s[i] === '-' || s[i] === '+' || s[i] === '(' || s[i] === ')'){
            spCount++;
        }
        if(!isNaN(parseInt(s[i]))){
            let str = s[i];
            let j = i+1;
            while(j < s.length && s[j] <= '9' && s[j]>='0'){
                str = `${str}${s[j]}`;
                i=j++;
            }
            parsedStr.push(str);
            continue;
        }
        parsedStr.push(s[i]);
    }
    
    if(!spCount){
        const str = parsedStr.join('');

        return parseInt(str);
    }
    
    const stack = [];
    
    for(let i = 0; i<parsedStr.length;i++){
        const s = parsedStr[i];
       
        if(s==='+'){
            continue;
        }
        if(s === ')'){
            const tmp = [];
             while(stack.length && stack[stack.length - 1] !== '('){
                 tmp.push(stack.pop());
             }
            stack.pop();
            let result = 0;
            let pos = 1;
            while(tmp.length){
               const elem = tmp.pop();
                if(elem === '-'){
                    pos *= -1;
                    continue;
                }
                result+= pos * parseInt(elem);
                pos = 1;
            }
            
            stack.push(result.toString());
            
            continue;
        }
      
        stack.push(s);
    }
    
    const parsedStack = [];
    console.log(stack);
    let result = 0;
    for(let i = 0; i<stack.length;i++){
        if(stack[i] !== '-'){
            result+=parseInt(stack[i]);
            continue;
        }
        
        if(i+1 >= stack.length){
            continue;
        }
        
        if(stack[i+1] === '-'){
            i+=1;
            continue;
        }
        
        result += parseInt(stack[++i]) * -1;
    }

    return result;
};