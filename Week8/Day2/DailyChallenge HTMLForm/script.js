const firstName =
  document.getElementById("firstName");
const lastName =
  document.getElementById("lastName");
const button = document.getElementById("button");
button.addEventListener("click", function () {
  data = {
    Name: firstName.value,
    lastName: lastName.value,
  };
  const output = document.createElement("p");
  output.innerHTML = JSON.stringify(data);
  document.body.appendChild(output);
  form.reset();
});
