var count = 1;
function game(control) {
  if (count <= 8) {
    if (count % 2 != 0) {
      document.getElementById(control.id).innerHTML = "X";
      document.getElementById(control.id).style.color = "red";
    } else {
      document.getElementById(control.id).innerHTML = "O";
      document.getElementById(control.id).style.color = "blue";
    }
    count++;
    if (win()) {
      alert("winner");
      reset();
    }
  } else {
    alert("match draw");
    reset();
    count = 1;
  }
}
function reset() {
  for (var i = 1; i <= 9; i++) {
    document.getElementById("div" + i).innerHTML = "";
  }
}
function win() {
  if (
    checkCondition("div1", "div2", "div3") ||
    checkCondition("div1", "div4", "div7") ||
    checkCondition("div1", "div5", "div9") ||
    checkCondition("div4", "div5", "div6") ||
    checkCondition("div7", "div8", "div9") ||
    checkCondition("div3", "div2", "div1") ||
    checkCondition("div3", "div6", "div9") ||
    checkCondition("div3", "div5", "div7") ||
    checkCondition("div6", "div5", "div4") ||
    checkCondition("div9", "div8", "div7") ||
    checkCondition("div2", "div5", "div8")
  ) {
    return true;
  }
}
function checkCondition(div1, div2, div3) {
  if (
    getData(div1) != "" &&
    getData(div2) != "" &&
    getData(div3) != "" &&
    getData(div1) == getData(div2) &&
    getData(div2) == getData(div3)
  ) {
    return true;
  }
}

function getData(div) {
  return document.getElementById(div).innerHTML;
}
