function handleSubmit() {
  document.querySelectorAll("input").forEach((input) => {
    input.classList.remove("error");
  });

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "") {
    document.getElementById("username").classList.add("error");
  }

  if (email === "") {
    document.getElementById("email").classList.add("error");
  }

  if (password === "") {
    document.getElementById("password").classList.add("error");
  }

  if (username !== "" && email !== "" && password !== "") {
    return true;
  }

  return false;
}
