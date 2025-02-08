function SUM() {
  var num1 = document.getElementById("myText").value;
  var num2 = document.getElementById("myText2").value;
  var sum = parseInt(num1) + parseInt(num2);
  document.getElementById("result").innerHTML = "THE SUM OF " + num1 + " AND " + num2 + " IS " + sum;
}

function DIFF() {
  var num1 = document.getElementById("myText").value;
  var num2 = document.getElementById("myText2").value;
  var diff = parseInt(num1) - parseInt(num2);
  document.getElementById("result").innerHTML = "THE DIFFERENCE OF " + num1 + " AND " + num2 + " IS " + diff;
}

function PROD() {
  var num1 = document.getElementById("myText").value;
  var num2 = document.getElementById("myText2").value;
  var prod = parseInt(num1) * parseInt(num2);
  document.getElementById("result").innerHTML = "THE PRODUCT OF " + num1 + " AND " + num2 + " IS " + prod;
}

function QUOT() {
  var num1 = document.getElementById("myText").value;
  var num2 = document.getElementById("myText2").value;
  var quot = parseInt(num1) / parseInt(num2);
  quot = quot.toFixed(2);
  document.getElementById("result").innerHTML = "THE QUOTIENT OF " + num1 + " AND " + num2 + " IS " + quot;
}

function REM() {
  var num1 = document.getElementById("myText").value;
  var num2 = document.getElementById("myText2").value;
  var mod = parseInt(num1) % parseInt(num2);
  document.getElementById("result").innerHTML = "THE REMAINDER OF " + num1 + " AND " + num2 + " IS " + mod;
}