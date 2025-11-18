function login() {
  console.log("Login Button Clicked");
  alert("Login button clicked");

  const em = document.getElementById("LoginEmail").value;
  const ps = document.getElementById("LoginPassword").value;

  console.log("Email : " + em);
  console.log("Password : " + ps);

  alert("Login Done");

  document.getElementById("LoginEmail").value = "";
  document.getElementById("LoginPassword").value = "";
}

function registration() {
  console.log("Registration Button Clicked");
  alert("Register button clicked");

  const nm = document.getElementById("RegistrationFullName").value;
  const em = document.getElementById("RegistrationEmail").value;
  const cp = document.getElementById("RegistrationCreatePassword").value;
  const cfp = document.getElementById("RegistrationConfirmPassword").value;

  console.log("Full Name : " + nm);
  console.log("Email : " + em);
  console.log("Create Password : " + cp);
  console.log("Confirm Password : " + cfp);

  alert("Registration Done");

  document.getElementById("RegistrationFullName").value = "";
  document.getElementById("RegistrationEmail").value = "";
  document.getElementById("RegistrationCreatePassword").value = "";
  document.getElementById("RegistrationConfirmPassword").value = "";
}
