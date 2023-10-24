document.getElementById("profileBtn").addEventListener("click", function() {
  var dropdown = document.getElementById("profileDropdown");
  dropdown.classList.toggle("show");
});

window.onclick = function(event) {
  if (!event.target.matches("#profileBtn")) {
      var dropdowns = document.getElementsByClassName("dropdown");
      for (var i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains("show")) {
              openDropdown.classList.remove("show");
          }
      }
  }
};