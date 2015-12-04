function sendDocument(e) {
  var docTemplate = ''; //The ID of the Document that is being used as the template
  var docName = ''; //The beginning of the new Document's name (the full_name of a user is appended to the end of this)
  var subject = "Your Registration";
   
// Full name and email address values come from the spreadsheet form
  var email_address = e.values[1]; // Assumes that the email is in the second column (B), 
                                   // as this is where Google Forms places it automatically if 
                                   // "collect username on submission" is selected
  var first_name = e.values[2]; // Assumes that the first name is taken from the third column (C)
  var last_name = e.values[3]; // Assumes that the last name is taken from the fourth column (D)
  var full_name = first_name + ' ' + last_name; //Combines the first and last names to create a full name, used for Document title
  
// Get document template, copy it as a new temp doc, and save the Doc’s id
   var copyId   = DriveApp.getFileById(docTemplate)
                  .makeCopy(docName+' for '+full_name)
                  .getId();
   var copyDoc  = DocumentApp.openById(copyId);
   var copyBody = copyDoc.getBody();
// Replace place holder keys
   copyBody.replaceText('keyFirstName', first_name);
   copyBody.replaceText('keyLastName', last_name);
// Save and close the temporary document
   copyDoc.saveAndClose();
// Convert temporary document to PDF by using the getAs blob conversion
   var pdf = DriveApp.getFileById(copyId).getAs("application/pdf"); 
// Attach PDF and send the email
   var body = "Hi " + first_name + ".\n\n\nYour registration form is attached to this email. Please print it out, and bring it to the next meeting with the registration fee. \n\n\n Thanks!";
   MailApp.sendEmail(email_address, subject, body, {htmlBody: body, attachments: pdf}); 
// Delete temp file
   DriveApp.getFileById(copyId).setTrashed(true);
}
