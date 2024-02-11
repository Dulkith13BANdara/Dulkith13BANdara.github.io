function Dark() {
   var element = document.body;
  element.classList.toggle("dark");

   var x = document.getElementById("Mod");
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


var modal = document.getElementById("myModal");


var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
