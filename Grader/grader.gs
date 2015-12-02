function grader(e) {
  var spread = SpreadsheetApp.getActiveSheet();
  var headers = spread.getRange(1,1,1,spread.getLastColumn()).getValues()[0]; //This gets the headers
  var email = e.namedValues[headers[2]].toString(); //This assumes that the third column (C) is where the email is recorded
  var name = e.namedValues[headers[1]].toString(); //This assumes that the second column (B) is where the name of the submitter is stored
  var subject = ""; //This is the email subject
  var total = 10; //The total number of questions
  var correctTotal = 0; 
  var correct = ["C", "A", "A", "A", "B", "A", "C", "B", "A", "D"]; //An Array that contains the correct letter answers as Strings
  var results = "";
  for(var i = 3; i < total+3; i++)
  {
    var answer = e.namedValues[headers[i]].toString().substring(0,1);
    var correctAns = correct[i-3];
    if(answer==correctAns)
    {
      correctTotal++;
      results += "Question " + (i-2) + ": \n\tYour answer: " + answer + " (Correct!)\n\n";
    }
    else
    {
      results += "Question " + (i-2) + ": \n\tYour answer: " + answer + "\n\tCorrect answer: " + correctAns + "\n\n"
    }
  }
  var percent = correctTotal/total * 100;
  var message = "Hi " + name + ",\n\n" + 
                "Thank you for completing this practice exam. Your total score was a " + correctTotal + " out of " + total + " (" + percent + "% correct)\n\n" + results;
  message += "\n\n\n\nIf you have any questions about this form, please reply to this email."; //It's helpful to include a link to the full test somewhere in the message
  MailApp.sendEmail(email, subject, message);
}
