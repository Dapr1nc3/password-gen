function generatePass() {
  var numeric;
  var lowerCase;
  var upperCase;
  var special;
  var notselected = 0;

  //  password length
  var passLength = prompt(
    "How long will your password be. The length should be bwtween 8 and 128 characters"
  );
  while (passLength < 8 || passLength > 128) {
    passLength = prompt(" Password should be between 8 and 128 characters.");
  }

  // Option to add lowercase
  var lowercase = confirm(
    "Would you like to use lowercase characters in your password?" +
      "\n" +
      "\n" +
      "OK = 'include'" +
      "\n" +
      "Cancel = 'Don't include'"
  );

  if (lowercase == true) {
    lowerCase = "abcdefghijklmnopqrstuvwxyz";
  } else if (lowercase == false) {
    lowerCase = "";
    notselected = notselected + 1;
    prompt(
      "choose 1 character type! You have none selected " +
        notselected +
        " character types."
    );
  }

  // Option to add uppercase
  var uppercase = confirm(
    "Would yo ulike to use uppercase characters in your password?" +
      "\n" +
      "\n" +
      "OK = 'include'" +
      "\n" +
      "Cancel = 'Don't include'"
  );
  if (uppercase == true) {
    upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else if (uppercase == false) {
    upperCase = "";
    notselected = notselected + 1;
    prompt(
      "choose 1 character type! You have none selected  " +
        notselected +
        " character types."
    );
  }

  //  Option to add numbers
  var numeric = confirm(
    "Would you like to use numbers in your password?" +
      "\n" +
      "\n" +
      "OK = 'include'" +
      "\n" +
      "Cancel = 'Don't include'"
  );
  if (numeric == true) {
    numeric = "0123456789";
  } else if (numeric == false) {
    numeric = "";
    notselected = notselected + 1;
    prompt(
      "choose 1 character type! You have none selected  " +
        notselected +
        " character types."
    );
  }

  // Option to add special characters
  var special = confirm(
    "would you like to use special characters in your password?" +
      "\n" +
      "\n" +
      "OK = 'include'" +
      "\n" +
      "Cancel = 'Don't include'"
  );
  if (special == true) {
    special = "!#$%&*+/@";
  } else if (special == false) {
    special = "";
    notselected = notselected + 1;
    while (notselected > 3) {
      prompt("choose 1 character type! You have none selected ");
      generatePass();
    }
  }

  var choices = lowerCase + upperCase + numeric + special;
  var securepassword = "";
  for (var i = 0; i < passLength; i++) {
    securepassword += choices.charAt(
      Math.floor(Math.random() * choices.length)
    );
    document.getElementById("password").innerHTML =
      "Your Secure Password was generated" + "\n" + "\n" + securepassword;
  }
}
