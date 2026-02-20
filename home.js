// let btn = document.getElementById("withdraw-btn");
// btn.addEventListener("click", function () {
//   let cashOutNumber = document.getElementById("caseout-number");
//   let cashOut = cashOutNumber.value;
//   console.log(cashOut);
//   //2
//   let amountInput = document.getElementById("amount-input");
//   let amountCashOut = amountInput.value;
//   console.log(amountCashOut);
//   //3
//   let balance = document.getElementById("balance");
//   let balancevalue = balance.innerText;
//   console.log(balancevalue);
//   let replase = balancevalue.replace("$", "");

//   const newBalance = Number(replase) - Number(amountCashOut);
//   // balance.innerTex = "$" - newBalance;

//   if (newBalance < 0) {
//     alert("Invalid Amount");
//     return;
//   }

//   let pin = document.getElementById("pin");
//   let pinValue = pin.value;
//   console.log(pinValue);
//   if (pinValue === "1234") {
//     alert("login successfull");
//     console.log(newBalance);
//     balance.innerText = newBalance;
//   } else {
//     alert("fail");
//   }
// });

document.getElementById("withdraw-btn").addEventListener("click", function () {
  let cashout = getInputValue("caseout-number");
  if (cashout != 11) {
    alert("successfully");
  }
  let amount = getInputValue("amount-input");
  console.log(amount);

  let balance = document.getElementById("balance");
  let balancevalue = balance.innerText;
  console.log(balancevalue);
  let newBalance = parseInt(balancevalue - amount);
  // console.log(newBalance);
  if (newBalance < 0) {
    alert("invalid amount");
    return
  }

  let pin = getInputValue("pin");
  if (pin == "1234") {
    // alert("pin successful");
    balance.innerText = newBalance;
  } else {
    alert("invalid pin");
  }
});
