/*2. Write a JS function and ask for user DOB ex: 10/June/1998 and if
user age is between 18 to 44 then this link should be open
automatically in browser “https://selfregistration.cowin.gov.in”.
*/

function eligibility(year)
{
  if(year[2]>=1977 && year[2]<=2003)
    {
      document.write("You are eligible for inoculation.<br>Please get yourself registered.")
      window.open('https://selfregistration.cowin.gov.in', '_blank');
    }
  else
    {
      document.write("You are not eligible for inoculation.")
    }
}

function dob()
{
  let birthdate=prompt("Enter your date of birth in the format DD/MM/YYYY ");
  
  year=birthdate.split('/');
  
  document.write("You are ",2021-year[2]," years old. <br>")
  
  eligibility(year);
}
dob()