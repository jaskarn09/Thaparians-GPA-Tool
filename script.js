document.addEventListener("DOMContentLoaded", function () {
    // Get all slides
    let slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
    let slideInterval;
    let autoSlideEnabled = true;
    
    // Function to show a specific slide
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }
    
    // Function to advance to the next slide
    function nextSlide() {
        currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
        showSlide(currentSlide);
    }
    
    // Function to go to the previous slide
    function prevSlide() {
        currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
        showSlide(currentSlide);
    }
    
    // Function to start automatic sliding
    function startAutoSlide() {
        if (autoSlideEnabled) {
            slideInterval = setInterval(nextSlide, 7000);
        }
    }
    
    // Function to stop automatic sliding
    function stopAutoSlide() {
        clearInterval(slideInterval);
    }
    
    // Initialize the slider with the first slide
    showSlide(currentSlide);
    
    // Start automatic sliding
    startAutoSlide();
    
    // Set up navigation buttons
    document.getElementById("prev-slide").addEventListener("click", function () {
        prevSlide();
        // Reset the interval timer when manually navigating
        stopAutoSlide();
        startAutoSlide();
    });
    
    document.getElementById("next-slide").addEventListener("click", function () {
        nextSlide();
        // Reset the interval timer when manually navigating
        stopAutoSlide();
        startAutoSlide();
    });
    
    // SGPA Calculator "Continue" button
    document.getElementById("continue-btn").addEventListener("click", function () {
        // Show SGPA calculator form/interface
        // This will depend on your HTML structure, but might be something like:
        document.getElementById("sgpa-form-container").style.display = "block";
        document.getElementById("sgpa-text").style.display = "none";
        document.querySelector("#slide-sgpa .sgpa-image").style.display = "none";
        this.style.display = "none";
        
        // Stop automatic sliding when calculator is open
        stopAutoSlide();
        autoSlideEnabled = false;
        
        // Create and add a back button
        createBackButton("slide-sgpa", "sgpa-form-container");
    });
    
    // CGPA Calculator "Continue" button
    document.getElementById("continue-btn-cgpa").addEventListener("click", function () {
        document.getElementById("cgpa-container").style.display = "block";
        document.getElementById("cgpa-text").style.display = "none";
        document.querySelector("#slide-cgpa .cgpa-image").style.display = "none";
        this.style.display = "none";
        
        // Stop automatic sliding
        stopAutoSlide();
        autoSlideEnabled = false;
        
        // Create and add a back button
        createBackButton("slide-cgpa", "cgpa-container");
    });
    
    // Attendance Manager "Continue" button
    document.getElementById("continue-btn-attendance").addEventListener("click", function () {
        document.getElementById("attendance-container").style.display = "block";
        document.getElementById("attendance-text").style.display = "none";
        document.querySelector("#slide-attendance .attendance-image").style.display = "none";
        this.style.display = "none";
        
        // Stop automatic sliding
        stopAutoSlide();
        autoSlideEnabled = false;
        
        // Create and add a back button
        createBackButton("slide-attendance", "attendance-container");
    });
    
    // GPA Conversion "Continue" button
    document.getElementById("continue-btn-gpa").addEventListener("click", function () {
        document.getElementById("gpa-container").style.display = "block";
        document.getElementById("gpa-text").style.display = "none";
        document.querySelector("#slide-gpa-conversion .gpa-image").style.display = "none";
        this.style.display = "none";
        
        // Stop automatic sliding
        stopAutoSlide();
        autoSlideEnabled = false;
        
        // Create and add a back button
        createBackButton("slide-gpa-conversion", "gpa-container");
    });
    
    // Function to create a back button
    function createBackButton(slideId, containerId) {
        let backButton = document.createElement("button");
        backButton.textContent = "Back to Sliders";
        backButton.className = "back-button";
        backButton.addEventListener("click", function() {
            // Hide the calculator container
            document.getElementById(containerId).style.display = "none";
            
            // Show the original elements
            if (slideId === "slide-sgpa") {
                document.getElementById("sgpa-text").style.display = "block";
                document.querySelector("#slide-sgpa .sgpa-image").style.display = "block";
                document.getElementById("continue-btn").style.display = "block";
            } else if (slideId === "slide-cgpa") {
                document.getElementById("cgpa-text").style.display = "block";
                document.querySelector("#slide-cgpa .cgpa-image").style.display = "block";
                document.getElementById("continue-btn-cgpa").style.display = "block";
            } else if (slideId === "slide-attendance") {
                document.getElementById("attendance-text").style.display = "block";
                document.querySelector("#slide-attendance .attendance-image").style.display = "block";
                document.getElementById("continue-btn-attendance").style.display = "block";
            } else if (slideId === "slide-gpa-conversion") {
                document.getElementById("gpa-text").style.display = "block";
                document.querySelector("#slide-gpa-conversion .gpa-image").style.display = "block";
                document.getElementById("continue-btn-gpa").style.display = "block";
            }
            
            // Remove the back button
            this.remove();
            
            // Re-enable automatic sliding
            autoSlideEnabled = true;
            startAutoSlide();
        });
        
        // Add the back button to the appropriate container
        document.getElementById(containerId).appendChild(backButton);
    }
    
    // Calculation functions
    window.calculateAttendance = function() {
        const totalClasses = parseFloat(document.getElementById("total-classes").value);
        const attendedClasses = parseFloat(document.getElementById("attended-classes").value);
        
        if (isNaN(totalClasses) || isNaN(attendedClasses)) {
            document.getElementById("attendance-output").innerHTML = "Please enter valid numbers";
            return;
        }
        
        const attendancePercentage = (attendedClasses / totalClasses) * 100;
        document.getElementById("attendance-output").innerHTML = 
            `Current attendance: ${attendancePercentage.toFixed(2)}%<br>` +
            (attendancePercentage < 75 ? "Warning: Below minimum requirement of 75%" : "Good! Above minimum requirement");
    };
    
    window.convertGPA = function() {
        const cgpa = parseFloat(document.getElementById("cgpa-input").value);
        
        if (isNaN(cgpa)) {
            document.getElementById("gpa-output").innerHTML = "Please enter a valid CGPA";
            return;
        }
        
        // Simple conversion formula (adjust as needed for your institution)
        const gpa = (cgpa * 4) / 10;
        document.getElementById("gpa-output").innerHTML = 
            `Equivalent GPA: ${gpa.toFixed(2)}/4.0`;
    };
});

// Get the existing chevron icon for scroll-to-top
const chevronIcon = document.querySelector(".chevron-container");

// Add click listener to the chevron icon
if (chevronIcon) {
    chevronIcon.addEventListener("click", function () {
        console.log("Scroll to top triggered"); // Debug line
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

   // Show/hide the chevron icon on scroll
   window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
        chevronIcon.style.display = "block";
    } else {
        chevronIcon.style.display = "none";
    }
});

// Add debug message
console.log("Scroll to top functionality added to existing chevron icon");

 // CORRECT CODE IS THIS ONE...........................................................................