function validateForm() {
  clearWarnings();

  let errors = [];

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const age = document.getElementById("age").value;

  const usernamePattern = /^[a-z0-9]{4,12}$/;
  const emailPattern = /^[^@]+@[^@]+\.(com|net|org|edu)$/;
  const phonePattern = /^\(\d{3}\)-\d{3}-\d{4}$/;
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{9,}$/;

  if (!username) {
    errors.push("Please enter a username.");
  } else if (!usernamePattern.test(username)) {
    errors.push("Please enter a valid username (lowercase letters or numbers, 4–12 characters).");
  }

  if (!email) {
    errors.push("Please enter an email.");
  } else if (!emailPattern.test(email)) {
    errors.push("Please enter a valid email ending in .com, .net, .org, or .edu.");
  }

  if (!phone) {
    errors.push("Please enter a phone number.");
  } else if (!phonePattern.test(phone)) {
    errors.push("Please enter a valid phone number in format (123)-456-7890.");
  }

  if (!password) {
    errors.push("Please enter a password.");
  } else if (!passwordPattern.test(password)) {
    errors.push("Password must include uppercase, lowercase, number, special character and be >8 characters.");
  }
  
  if (!confirmPassword) {
  errors.push("Please confirm your password.");
} else if (password !== confirmPassword) {
  errors.push("Passwords do not match.");
    return;
}

  if (!gender) {
    errors.push("Please select a gender.");
  }

  if (!age) {
    errors.push("Please select an age group.");
  }

  if (errors.length > 0) {
    const errorDiv = document.getElementById("error-messages");
    errorDiv.innerHTML = errors.map(e => `<div style="color: red;">${e}</div>`).join('');
  } else {
    alert("Form submitted successfully!");
  }
}

function clearWarnings() {
  document.getElementById("error-messages").innerHTML = "";
}
