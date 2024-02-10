function Dark() {
  var x = document.getElement("body");
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

function Go() {
document.getElementById('demo').style.display='block';
document.getElementById('demoLink').style.display='none';
}