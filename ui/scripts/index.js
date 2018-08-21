function mobileNavButton() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function disableSubbmit() {
    document.getElementsByClassName("formgroup").disabled = true;
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    let dropdowns = document.getElementsByClassName("dropdown-content");    
    for (let i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}