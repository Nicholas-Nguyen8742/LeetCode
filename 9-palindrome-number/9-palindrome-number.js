/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const array = x.toString().split('');
    var end = array.length - 1;
    
    let start = 0;
    
    while (start < end) {
        if (array[start] !== array[end]) return false;
        start++;
        end--;
        
    }
    return true;    
};

// Convert to string, split at each character
    // Number is now an array
// Check start to end of the array matches
    // Start off with false statement to check\
    // 
