document.getElementById("add-money-btn").addEventListener("click", function () {
  let selectInput = getInputValue("select-input");
  if (selectInput == "select back") {
    alert("select a bank");
    return;
  }
  let bankAcc = getInputValue("bank-acc");

    if (bankAcc.length == 11) {
      alert('success')
    }else{
      alert('invalid number')
    }

  let amountAdd = getInputValue("amount-add");
  console.log(amountAdd);

  let balance = getInputText("balance");
  let addBalance = Number(balance) + Number(amountAdd);
//   console.log(addBalance);

  let addMoneyBtn=getInputValue('add-pin')
  if(addMoneyBtn=='1234'){
    alert('pin success')
    let Balance=document.getElementById('balance')
    Balance.innerText=addBalance
    return
  }else{
    alert('invalid pin')
    return
  }
  
});
