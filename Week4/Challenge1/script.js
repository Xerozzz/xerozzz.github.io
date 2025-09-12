function calculate() {
  // YOUR CODE GOES HERE
  var no1 = document.getElementById("number1").value;
  var no2 = document.getElementById("number2").value;

  var sum = Number(no1) + Number(no2);
  document.getElementById("result").innerHTML = sum;
}
