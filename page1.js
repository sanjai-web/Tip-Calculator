


function calculate() {
    var bill = parseFloat(document.getElementById("bill_amount").value);
    var tip = parseFloat(document.getElementById("tip_percent").value);
    var tipamount = (bill * tip) / 100;
    var total=bill+tipamount;
    document.getElementById("total_amount").innerText = "Total Bill Amount: " + total.toFixed(2);
  }