function Dark() {
  var x = document.getElementById("myDIV");
  if (x.innerHTML === "Dark mode") {
    x.innerHTML = "light mode";
  } else {
    x.innerHTML = "Dark mode";
  }
}

function Dark() {
   var element = document.body;
  element.classList.toggle("dark");
}
