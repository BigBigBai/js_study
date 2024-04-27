// Soln 1
// function palindrome(str) {
//     const reversed = str.split('').reverse().join('');
//     return str === reversed;
// }

// Soln 2
function palindrome(str) {
    return str.split('').every((char, index) => {
        return char === str[str.length - index - 1];
    });
}

module.exports = palindrome;