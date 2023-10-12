function reverseWords(s: string): string {
    const splitStr = s.split(' ').filter(f=>!!f.trim());
    return splitStr.reverse().join(' ');
};