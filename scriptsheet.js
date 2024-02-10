function Dark() {
  var x = document.getElementByClassName("tdm");
  if (x.innerHTML === "Dark mode") {
    x.innerHTML = "Light mode";
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