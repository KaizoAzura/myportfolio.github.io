function sendEmail() {
  var email = document.getElementById("emailInput").value;
  var message = document.getElementById("messageInput").value;
  var subject = "Contact Form Submission";
  var mailtoLink =
    "mailto:nicolassatria07@gmail.com" +
    "?subject=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent("Email: " + email + "\n\nMessage: " + message);

  window.location.href = mailtoLink;
}
