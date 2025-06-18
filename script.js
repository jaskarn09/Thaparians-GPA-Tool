function toggleForm() {
  const signup = document.getElementById('signup-container');
  const login = document.getElementById('login-container');

  if (signup.style.display === 'none') {
    signup.style.display = 'block';
    login.style.display = 'none';
  } else {
    signup.style.display = 'none';
    login.style.display = 'block';
  }
}

function showForm(type) {
  const formArea = document.getElementById('form-area');
  const signup = document.getElementById('signup-container');
  const login = document.getElementById('login-container');

  formArea.style.display = 'flex';

  if (type === 'signup') {
    signup.style.display = 'block';
    login.style.display = 'none';
  } else {
    signup.style.display = 'none';
    login.style.display = 'block';
  }

  formArea.scrollIntoView({ behavior: 'smooth' });
}

// 🔥 NEW: Add the missing handleBranchSelection function
function handleBranchSelection() {
  const branchSelect = document.querySelector("select");
  const selectedBranch = branchSelect.value;
  
  if (selectedBranch !== "select") {
    localStorage.setItem("selectedBranch", selectedBranch);
    const gpaSection = document.getElementById("gpa-section");
    if (gpaSection) {
      gpaSection.classList.add("show-section");
      gpaSection.scrollIntoView({ behavior: "smooth" });
    }
    
    // Trigger React context update
    window.dispatchEvent(new CustomEvent('branchChanged', { 
      detail: { branch: selectedBranch } 
    }));
  }
}

// ✅ Branch selection → localStorage + show slider + React compatibility
const branchSelect = document.querySelector("select");
const gpaSection = document.getElementById("gpa-section");

if (branchSelect) {
  branchSelect.addEventListener("change", () => {
    const selectedBranch = branchSelect.value;
    if (selectedBranch !== "select") {
      localStorage.setItem("selectedBranch", selectedBranch);
      if (gpaSection) {
        gpaSection.classList.add("show-section");
        gpaSection.scrollIntoView({ behavior: "smooth" });
      }
      
      // 🔥 Trigger React context update
      window.dispatchEvent(new CustomEvent('branchChanged', { 
        detail: { branch: selectedBranch } 
      }));
    }
  });
}