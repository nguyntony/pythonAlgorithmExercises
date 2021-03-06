// 1. Check if a word is a palindrome or not. A palindrome is a word that is spelt the exact same way if you reverse it. Your function should return true or false.
// Ex) racecar reversed is still racecar
// Ex) kayak reversed is still kayak
// console.log(palindrome('racecar')) 
// // expected output: True

// 1. we need to create a function that will accept a string
// 2. we need to reverse the string then make sure that the letters are the same reversed.
// 3. can we do this using a cache system?

const palidrome = str => {
    str = str.toLowerCase().split("")
    let newStr = str.reverse()
    return newStr === str;
}

console.log(palidrome("racecar"))


// 2. Given two variables that are equal to any integer. Swap the values of those variables without using a third variable
let a = 22;
let b = 14;

// a = a + b;
// b = a - b;
// a = a - b;

a = a + b; // 15
b = a - b // 5
a = a - b

console.log(`a ${a}`)
console.log(`b ${b}`)




// 1) Given an array of strings, return another array containing all of its longest strings.
// For inputArray = [“aba”, “aa”, “ad”, “vcd”, “aba”], the output should be allLongestStrings(inputArray) = [“aba”, “vcd”, “aba”].

// will probably have to loop and then figure this out
