
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {

  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const error = document.getElementById("error");
  const success = document.getElementById("success");

  if (name === "" || email === "" || message === "") {

    error.textContent = "Please fill all fields.";
    error.style.display = "block";

    setTimeout(() => {

      // document.getElementById("success").style.display = "none";
      error.style.display = "none";

    }, 2000);

    return;
  }

  if (!email.includes("@")) {

    error.textContent = "Please enter a valid email.";
    error.style.display = "block";

    setTimeout(() => {

      // document.getElementById("success").style.display = "none";
      error.style.display = "none";

    }, 2000);

    return;
  }

  // error.textContent = "Message sent successfully!";

  success.textContent = "Message sent successfully!";
  success.style.display = "block";

  setTimeout(() => {

    success.style.display = "none";

    // document.getElementById("error").style.display = "none";

  }, 2000);

  form.reset();
});
