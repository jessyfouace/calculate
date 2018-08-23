document.getElementById("number1").onclick = function() {valueInput(1)};
document.getElementById("number2").onclick = function() {valueInput(2)};
document.getElementById("number3").onclick = function() {valueInput(3)};
document.getElementById("number4").onclick = function() {valueInput(4)};
document.getElementById("number5").onclick = function() {valueInput(5)};
document.getElementById("number6").onclick = function() {valueInput(6)};
document.getElementById("number7").onclick = function() {valueInput(7)};
document.getElementById("number8").onclick = function() {valueInput(8)};
document.getElementById("number9").onclick = function() {valueInput(9)};
document.getElementById("number0").onclick = function() {valueInput(0)};

document.getElementById("add").onclick = function() {calculatedAdd("+")};
document.getElementById("minus").onclick = function() {calculatedAdd("-")};
document.getElementById("multiply").onclick = function() {calculatedAdd("*")};
document.getElementById("divide").onclick = function() {calculatedAdd("/")};
document.getElementById("clear").onclick = function() {calculatedAdd("c")};
document.getElementById("egal").onclick = function() {calculatedAdd("=")};

var number = "";
var number2 = "";
var valn = "";

function valueInput(e){
  number = document.getElementById("result").value = number + e;
  return number;
}

function calculatedAdd(n) {
  valn = n

  if (valn == "+") {
    if (number2 == ""){
      number2 = number;
      number = "";
      valn = "";
    } else {
      number2 = Number(number2) + Number(number);
      number = "";
      document.getElementById("result").value = number2;
      valn = "";
      return number2;
    }
  } else if (valn == "-") {
    if (number2 == ""){
      number2 = number;
      number = "";
      valn = "";
    } else {
      number2 = Number(number2) - Number(number);
      number = "";
      document.getElementById("result").value = number2;
      valn = "";
      return number2;
    }
  } else if (valn == "*") {
    if (number2 == ""){
      number2 = number;
      number = "";
      valn = "";
    } else {
      number2 = Number(number2) * Number(number);
      number = "";
      document.getElementById("result").value = number2;
      valn = "";
      return number2;
    }
  } else if (valn === "/") {
    if (number2 == ""){
      number2 = number;
      number = "";
      valn = "";
    } else {
      number2 = Number(number2) / Number(number);
      number = "";
      document.getElementById("result").value = number2;
      valn = "";
      return number2;
    }
  } else if (valn === "=") {
      document.getElementById("result").value = String("Result is ") + number2;
  } else if (valn === "c") {
    document.getElementById("result").value = "";
    number2 = "";
    number= "";
  }
  return valn;
}
