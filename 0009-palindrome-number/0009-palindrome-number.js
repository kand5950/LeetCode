/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let reverseInput = [...(x.toString())].reverse().join('');
    
    return reverseInput === x.toString();
    
};