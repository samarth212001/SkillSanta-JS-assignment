/*1. Write a Javascript program to take three numbers from the user
as input and print the largest number on the document.*/


let var1=parseInt(prompt("Enter 1st number."));
let var2=parseInt(prompt("Enter 2nd number."));
let var3=parseInt(prompt("Enter 3rd number."));
let result=(var1>var2 && var1>var3)? var1:(var2>var1 && var2>var3)? var2:var3;
document.write("The greatest of ",var1,", ",var2," and ",var3," is ",result,".");