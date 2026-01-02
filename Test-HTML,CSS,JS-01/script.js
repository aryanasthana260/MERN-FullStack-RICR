// CONTACT FORM
document
  .getElementById("contactForm")
  ?.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const msg = document.getElementById("message").value;

    if (!email.includes("@") || msg.length < 10) return;

    alert(`Thank you for contacting us, ${name}!`);
    this.reset();
  });

// ENROLL PAGE
const params = new URLSearchParams(window.location.search);
const course = params.get("course");
if (course && document.getElementById("courseName")) {
  document.getElementById("courseName").value = course;
}

document.getElementById("enrollForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("studentName").value;
  alert(`Thank you for Enrolling, ${name}!`);
  this.reset();
});
