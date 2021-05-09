/*10. Write a JS function to find out the number of vowels from a
user input string.
Test Data:
console.log(vowels(“Hey This is Skillsanta JS Training”))
Output:
A: 3
E: 1
I: 5*/

let str=prompt("Enter a string");
str=str.toLowerCase();
var a=0,e=0,i=0,o=0,u=0;
for(var j=0;j<str.length;j++)
  {
    if(str.charAt(j)=='a')
      {
        a++;
      }
    if(str.charAt(j)=='e')
      {
        e++;
      }
    if(str.charAt(j)=='i')
      {
        i++;
      }
    if(str.charAt(j)=='o')
      {
        o++;
      }
    if(str.charAt(j)=='u')
      {
        u++;
      }
  }


if(a>0)
      {
        console.log('A: ',a);
      }
if(e>0)
      {
        console.log('E: ',e);
      }
if(i>0)
      {
        console.log('I: ',i);
      }
if(o>0)
      {
        console.log('O: ',o);
      }
if(u>0)
      {
        console.log('U: ',u);
      }


