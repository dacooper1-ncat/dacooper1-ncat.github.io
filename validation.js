function validateForm() {
  clearWarnings();

  let valid = true;

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const age = document.getElementById("age").value;

  // Regex patterns
  const usernamePattern = /^[a-z0-9]{4,12}$/;
  const emailPattern = /^[^@]+@[^@]+\.(com|net|org|edu)$/;
  const phonePattern = /^\(\d{3}\)-\d{3}-\d{4}$/;
  const passwordPattern = /^[A-Za-z0-9_]{9,}$/;
  const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{9,}$/;

  // Validate each field
  if (!username) {
    markError("label-username", "red");
    valid = false;
  } else if (!usernamePattern.test(username)) {
    markError("label-username", "orange");
    valid = false;
  }

  if (!email) {
    markError("label-email", "red");
    valid = false;
  } else if (!emailPattern.test(email)) {
    markError("label-email", "orange");
    valid = false;
  }

  if (!phone) {
    markError("label-phone", "red");
    valid = false;
  } else if (!phonePattern.test(phone)) {
    markError("label-phone", "orange");
    valid = false;
  }

  if (!password) {
    markError("label-password", "red");
    valid = false;
  } else if (!passwordPattern.test(password)) {
    markError("label-password", "orange");
    valid = false;
  }

  // Bonus validation
  if (password && !strongPassword.test(password)) {
    console.warn("Password does not meet bonus criteria.");
  }

  if (!confirmPassword) {
    markError("label-confirm-password", "red");
    valid = false;
  } else if (password !== confirmPassword) {
    alert("Passwords do not match.");
    markError("label-confirm-password", "orange");
    valid = false;
  }

  if (!gender) {
    alert("Please select a gender.");
    valid = false;
  }

  if (!age) {
    markError("label-age", "red");
    valid = false;
  }

  if (valid) {
    alert("Form submitted successfully!");
  }
}

function markError(labelId, color) {
  document.getElementById(labelId).style.color = color;
}

function clearWarnings() {
  const labels = document.querySelectorAll("label");
  labels.forEach(label => {
    label.style.color = "";
  });
}
