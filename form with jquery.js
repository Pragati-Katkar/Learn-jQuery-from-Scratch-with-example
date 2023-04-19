$(document).ready(function() {
   $("form").submit(function(event) {
      var name = $("#name").val();
      var email = $("#email").val();
      var message = $("#message").val();
      var errorMessage = "";

      if (name == "") {
         errorMessage += "Please enter your name.<br>";
      }

      if (email == "") {
         errorMessage += "Please enter your email address.<br>";
      }

      if (message == "") {
         errorMessage += "Please enter your message.<br>";
      }

      if (errorMessage != "") {
         $("#error").html(errorMessage);
         event.preventDefault();
      }
   });
});