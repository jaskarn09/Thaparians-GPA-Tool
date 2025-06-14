document.getElementById("signupBtn").addEventListener("click", function() {
  document.getElementById("signupModal").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", function() {
  document.getElementById("signupModal").style.display = "none";
});

// Close modal if user clicks outside of it
window.onclick = function(event) {
  if (event.target === document.getElementById("signupModal")) {
      document.getElementById("signupModal").style.display = "none";
  }
}
