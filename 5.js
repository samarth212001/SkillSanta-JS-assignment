/*5. Write a JavaScript program to reverse a given string and also
check if string is palindrome or not.*/


let str1=prompt("Enter a string");

str1=str1.toLowerCase();
rev=str1.split("").reverse().join("");

console.log("Reverse of the string is",rev)

if(rev==str1)
  {
    console.log("Palindrome!")
  }
else
  {
    console.log("Not a Palindrome!")
  }