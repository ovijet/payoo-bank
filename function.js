function getInputValue(id) {
  let input = document.getElementById(id);
  const value = input.value;
  console.log(id, value);
  return value;
}
function getInputText(id) {
  let input = document.getElementById(id);
  const text = input.innerText;
  console.log(id, text);
  return text;
}

function addBtn(id) {
  let addMoney = document.getElementById("addMoney");
  let cashout = document.getElementById("cashout");

  addMoney.classList.add("hidden");
  cashout.classList.add("hidden");

  let select = document.getElementById(id);
  select.classList.remove("hidden");
}
