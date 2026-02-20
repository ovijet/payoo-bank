let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  let inputField = document.getElementById("input-field");
  let valueTest = inputField.value;
  console.log(valueTest);
  const passwordField = document.getElementById("password-field");
  const valuePasswordtest = passwordField.value;
  console.log(valuePasswordtest);

  if (valueTest === "012345678" && valuePasswordtest === "1234") {
    alert("login-successful");
    window.location.assign('home.html')
  } else {
    alert("tu gar mara ga");
  }
});
