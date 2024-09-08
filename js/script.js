var modal = document.getElementById('id01');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function abriNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  function FecharNav() {
    document.getElementById("myNav").style.height = "0%";
  }