const MIN = BigInt(Math.pow(2, 31)) * -1n;
const MAX = BigInt(Math.pow(2, 31)) - 1n;

function divide(dividend: number, divisor: number): number {
    const sign = (divisor > 0 && dividend > 0 || divisor < 0 && dividend < 0) ? 1 : -1;

    if (divisor === 1) {
        return dividend;
    }

    let absDividend = BigInt(Math.abs(dividend));
    let absDivisor = BigInt(Math.abs(divisor));

    if (absDividend < absDivisor) {
        return 0;   
    }

    let result = 0n;  

    for (let i = 31; i >= 0; i--) {
        let tmp = absDivisor << BigInt(i); 

        if (tmp > absDividend) {
            continue;
        }

        absDividend -= tmp;
        result += 1n << BigInt(i);  
    }

    result *= BigInt(sign);

    if (result < MIN) {
        return Number(MIN);
    }

    if (result > MAX) {
        return Number(MAX);
    }

    return Number(result);
}
