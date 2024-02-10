function Dark() {
   var element = document.body;
  element.classList.toggle("dark");

   var x = document.getElementById("tdm");
  if (x.innerHTML === "Dark Mode") {
    x.innerHTML = "Light Mode";
  } else {
    x.innerHTML = "Dark Mode";
  }
}

function Go() {
document.getElementById('demo').style.display='block';
document.getElementById('demoLink').style.display='none';
}