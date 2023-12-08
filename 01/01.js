function palindrome(str) {
  let newStr = str.toLowerCase().replace(/[^a-z\d]/g, "");
  let reversedStr = newStr.split("").reverse().join("");

  if (newStr === reversedStr) {
    return true;
  } else {
    return false;
  }
}

palindrome("My age is 0, 0 si ega ym.");
