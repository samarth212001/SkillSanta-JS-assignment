/*8. Write a JavaScript for loop that will iterate from 20 to 30. For
each iteration, it will check if the current number is odd or even,
and display a message to the screen. Go to the editor
Sample Output :
"20 is even"
"21 is odd"
"22 is even”*/

for(i=20;i<=30;i++)
  {
    if(i%2==0)
      {
        document.write(i," is Even. <br>");
      }
    else
      {
        document.write(i," is Odd. <br>")
      }
  }