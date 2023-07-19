function num(val) {
  document.getElementById("box").value += val;
}
function del() {
  x = document.getElementById("box").value;
  y = x.length - 1;
  z = x.slice(0, y);
  document.getElementById("box").value = z;
}
