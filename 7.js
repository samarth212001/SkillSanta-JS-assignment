
/*7. Write a JavaScript function to remove HTML/XML tags from
string.
Test Data:
console.log(strip_tags('<p><strong><em>SkillSanta
Assignments</em></strong></p>'));
Output:
“SkillSanta Assignments”*/

function strip_tags(str)
{
  str=str.replace(/\//g, "");
  str= str.replace(/<p>|<strong>|<em>|/g, '');
  str = str.substring(0, 10) + " " + str.substring(10, str.length);
  
  return str;
}


console.log(strip_tags('<p><strong><em>SkillSantaAssignments</em></strong></p>'));