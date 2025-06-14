document.getElementById("loginBtn").addEventListener("click", function() {
  document.getElementById("loginModal").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", function() {
  document.getElementById("loginModal").style.display = "none";
});

// Close modal if user clicks outside of it
window.onclick = function(event) {
  if (event.target === document.getElementById("loginModal")) {
      document.getElementById("loginModal").style.display = "none";
  }
}
