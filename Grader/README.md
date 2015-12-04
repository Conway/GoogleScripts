#Grader

##What does this script is

Grader is a script that can grade multiple choice Google forms, and email respondants of their results. This is useful for practice tests, and in situations where the test proctor has little value in seeing the results.

##How to use this script

1. Create a new Google Form
2. Make sure that the second column (first question) is a name slot, and the third column (second question) is an email slot. It's recommended that the email slot uses Google Forms's built in Data Validation to make sure that the email provided by the user is valid.
3. Add multiple choice questions to the form. All of the answers must be preceded by an identifying letter, as this script compares the letter to the key in the same way that a Scantron machine would.
4. Open the results spreadsheet, and add [Grader.gs](https://github.com/Conway/GoogleScripts/blob/master/Grader/grader.gs). 

##Customization notes:

- When adding the script, be sure to modify the answers array ([Line 9](https://github.com/Conway/GoogleScripts/blob/master/Grader/grader.gs#L9)) to contain your correct answers. 
- The total number of questions is a variable on [Line 7](https://github.com/Conway/GoogleScripts/blob/master/Grader/grader.gs#L7) that must match the length of the answers array.
- The message String at the bottom of the page ([Line 26](https://github.com/Conway/GoogleScripts/blob/master/Grader/grader.gs#L26)) can be updated to provide a custom message
- The subject String should be filled on [Line 6](https://github.com/Conway/GoogleScripts/blob/master/Grader/grader.gs#L6).
