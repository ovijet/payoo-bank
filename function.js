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
