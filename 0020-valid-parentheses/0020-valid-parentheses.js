/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const leftBracket = [];
    
    for (let i=0 ; i < s.length; i++){
        if (s[i] === '(' || s[i] === '{' || s[i] === '[' ) {
            leftBracket.push(s[i]);
        }
        else if (s[i] === ')' && leftBracket.length != 0 && leftBracket[leftBracket.length -1] === '(' ){
            leftBracket.pop();
        }
        else if (s[i] === '}' && leftBracket.length != 0 && leftBracket[leftBracket.length -1] === '{' ){
            leftBracket.pop();
        }
        else if (s[i] === ']' && leftBracket.length != 0 && leftBracket[leftBracket.length -1] === '[' ){
            leftBracket.pop();
        }
        else {
            return false;
        }
    }
    
    return leftBracket.length === 0;
};