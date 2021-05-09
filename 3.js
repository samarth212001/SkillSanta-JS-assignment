/*3. Write a JavaScript program function to convert temperatures
from Celsius to Fahrenheit and from Fahrenheit to Celsius as per user
arguments provided in functions.*/


function fahrenheit(temp) 
{

  var fahrenheit_temperature = temp * 9 / 5 + 32;
  var result = temp+'\xB0C is ' + fahrenheit_temperature + ' \xB0F.';
    console.log(result);
}

function celsius(temp) 
{
  var celsius_temperature = (temp - 32) * 5 / 9;
  var result = temp+'\xB0F is ' + celsius_temperature + '\xB0C.';
    console.log(result);
} 

let temp= prompt("Please enter a temperature. <br>");
let type= prompt("Please enter 'f' for fahrenheit to celsius conversion or 'c' for celsius to fahrenheit conversion. <br> ");
type= type.toLowerCase()

if(type=='f')
  {
    fahrenheit(temp);
  }
else
  {
    celsius(temp);
  }