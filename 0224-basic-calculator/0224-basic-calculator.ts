function calculate(s: string): number {
    const splitStr = s.replaceAll(' ', '').split('');
    
    const parsedStr = [];
    let spCount = 0;
    for(let i = 0; i<splitStr.length; i++){
        if(splitStr[i] === '-' || splitStr[i] === '+' || splitStr[i] === '(' || splitStr[i] === ')'){
            spCount++;
        }
        if(!isNaN(parseInt(splitStr[i]))){
            let str = splitStr[i];
            let j = i+1;
            while(j < splitStr.length && splitStr[j] <= '9' && splitStr[j]>='0'){
                str = `${str}${splitStr[j]}`;
                i=j++;
            }
            parsedStr.push(str);
            continue;
        }
        parsedStr.push(splitStr[i]);
    }
    
    if(!spCount){
        const str = splitStr.join('');

        return parseInt(str);
    }
    
    const stack = [];
    
    for(let i = 0; i<parsedStr.length;i++){
        const s = parsedStr[i];
        // console.log(stack, 's',s);
        if(s==='+'){
            continue;
        }
        // console.log(s);
        if(s === ')'){
            const tmp = [];
            console.log('test',stack);
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
                // console.log('result',result);
                pos = 1;
            }
            
            stack.push(result.toString());
            
            continue;
        }
      
        stack.push(s);
    }
    
    // console.log(stack);
    const parsedStack = [];
    for(let i = 0; i<stack.length;i++){
        if(stack[i] !== '-'){
            parsedStack.push(stack[i]);
            continue;
        }
        
        if(i+1 >= stack.length){
            continue;
        }
        
        if(stack[i+1] === '-'){
            i+=1;
            continue;
        }
        
        const num = parseInt(stack[++i]) * -1;
        parsedStack.push(num.toString());
    }
    
    // console.log(parsedStack);

    let result = 0;
    parsedStack.forEach(s=>{
        result+=parseInt(s);
    });
    // console.log(result);
    return result;
};