var x = document.getElementById("tot").value;
var text = document.getElementById("tot");

function subtract() {
    var txtVal = document.getElementById("tot").value;
    var text = document.getElementById("tot");
    var newVal = parseInt(txtVal) - 1;
    text.value = newVal;
    style(newVal);
}
function add() {
    var txtVal = document.getElementById("tot").value;
    var text = document.getElementById("tot");
    var newVal = parseInt(txtVal) + 1;
    text.value = newVal;
    style(newVal);
}
function style(val) {
    var text = document.getElementById("tot")
    if (val % 2 === 0) {
        text.classList.add("red");
    }
    if (val % 2 !== 0) {
        text.classList.remove("red");
    }
    if (val % 3 === 0) {
        text.classList.add("bold");
    }
    if (val % 3 !== 0) {
        text.classList.remove("bold");
    }
    if (val % 5 === 0) {
        text.classList.add("italic");
    }
    if (val % 5 !== 0) {
        text.classList.remove("italic");
    }
}