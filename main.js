"use strict";

function isPalindrome(str) {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    result.unshift(str[i]);
  }

  result = result.join("");

  if (str === result) {
    return true;
  }

  return false;
}

console.log(isPalindrome("radar"));
