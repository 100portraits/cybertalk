

var modal = document.getElementsByClassName("modal");

function openModal(name) {
  var modal = document.getElementById("modal"+name);
  modal.style.display = 'flex'; 
}  
function closeModal() {
  var modal = document.getElementsByClassName("modal");
  var i;
  for (i = 0; i < modal.length; i++) {
      modal[i].style.display = 'none';
  }
}

window.onclick = function(event) {

  var modal = document.getElementsByClassName("modal");
  var i;
  for (i = 0; i < modal.length; i++) {
    if (event.target == modal[i]) {
      closeModal();
    }
  }
}