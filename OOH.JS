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
    
    // SGPA Calculator "Continue" button - FIXED ID
    document.getElementById("continue-btn-sgpa").addEventListener("click", function () {
        // Generate SGPA form based on selected branch
        generateSGPAForm();
        
        // Show SGPA calculator form/interface
        document.getElementById("sgpa-form-container").style.display = "block";
        document.getElementById("sgpa-text").style.display = "none";
        document.querySelector("#slide-sgpa .sgpa-image").style.display = "none";
        this.style.display = "none";
        
        // Stop automatic sliding when calculator is open
        stopAutoSlide();
        autoSlideEnabled = false;
        
        // Create and add a back button
        createBackButton("slide-sgpa", "sgpa-form-container", "continue-btn-sgpa");
    });
    
    // CGPA Calculator "Continue" button
    document.getElementById("continue-btn-cgpa").addEventListener("click", function () {
        // Generate CGPA form
        generateCGPAForm();
        
        document.getElementById("cgpa-container").style.display = "block";
        document.getElementById("cgpa-text").style.display = "none";
        document.querySelector("#slide-cgpa .cgpa-image").style.display = "none";
        this.style.display = "none";
        
        // Stop automatic sliding
        stopAutoSlide();
        autoSlideEnabled = false;
        
        // Create and add a back button
        createBackButton("slide-cgpa", "cgpa-container", "continue-btn-cgpa");
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
        createBackButton("slide-attendance", "attendance-container", "continue-btn-attendance");
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
        createBackButton("slide-gpa-conversion", "gpa-container", "continue-btn-gpa");
    });
    
    // Function to create a back button
    function createBackButton(slideId, containerId, continueButtonId) {
        // Remove existing back button if any
        const existingBackButton = document.querySelector(`#${containerId} .back-button`);
        if (existingBackButton) {
            existingBackButton.remove();
        }
        
        let backButton = document.createElement("button");
        backButton.textContent = "← Back to Sliders";
        backButton.className = "back-button";
        backButton.style.cssText = `
            background: #ff6b6b;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            margin: 10px 0;
            font-size: 14px;
        `;
        
        backButton.addEventListener("click", function() {
            // Hide the calculator container
            document.getElementById(containerId).style.display = "none";
            
            // Show the original elements
            if (slideId === "slide-sgpa") {
                document.getElementById("sgpa-text").style.display = "block";
                document.querySelector("#slide-sgpa .sgpa-image").style.display = "block";
            } else if (slideId === "slide-cgpa") {
                document.getElementById("cgpa-text").style.display = "block";
                document.querySelector("#slide-cgpa .cgpa-image").style.display = "block";
            } else if (slideId === "slide-attendance") {
                document.getElementById("attendance-text").style.display = "block";
                document.querySelector("#slide-attendance .attendance-image").style.display = "block";
            } else if (slideId === "slide-gpa-conversion") {
                document.getElementById("gpa-text").style.display = "block";
                document.querySelector("#slide-gpa-conversion .gpa-image").style.display = "block";
            }
            
            // Show the continue button
            document.getElementById(continueButtonId).style.display = "block";
            
            // Remove the back button
            this.remove();
            
            // Re-enable automatic sliding
            autoSlideEnabled = true;
            startAutoSlide();
        });
        
        // Add the back button to the appropriate container at the beginning
        const container = document.getElementById(containerId);
        container.insertBefore(backButton, container.firstChild);
    }
    
    // Function to generate SGPA form based on branch
    function generateSGPAForm() {
        const selectedBranch = document.getElementById("branch-select").value;
        const container = document.getElementById("sgpa-form-container");
        
        // Sample subjects for different branches (you can expand this)
        const branchSubjects = {
            cse: [
                { name: "Data Structures", credits: 4 },
                { name: "Computer Networks", credits: 3 },
                { name: "Database Systems", credits: 4 },
                { name: "Operating Systems", credits: 3 },
                { name: "Software Engineering", credits: 3 }
            ],
            eec: [
                { name: "Circuit Analysis", credits: 4 },
                { name: "Digital Electronics", credits: 3 },
                { name: "Signals & Systems", credits: 4 },
                { name: "Microprocessors", credits: 3 },
                { name: "Control Systems", credits: 3 }
            ],
            mech: [
                { name: "Thermodynamics", credits: 4 },
                { name: "Fluid Mechanics", credits: 3 },
                { name: "Machine Design", credits: 4 },
                { name: "Manufacturing", credits: 3 },
                { name: "Heat Transfer", credits: 3 }
            ],
            // Add default subjects for other branches
            default: [
                { name: "Subject 1", credits: 4 },
                { name: "Subject 2", credits: 3 },
                { name: "Subject 3", credits: 4 },
                { name: "Subject 4", credits: 3 },
                { name: "Subject 5", credits: 3 }
            ]
        };
        
        const subjects = branchSubjects[selectedBranch] || branchSubjects.default;
        
        let formHTML = `
            <h3>SGPA Calculator - ${selectedBranch.toUpperCase()}</h3>
            <div class="sgpa-form">
                <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                    <thead>
                        <tr style="background: #f4f4f4;">
                            <th style="padding: 10px; border: 1px solid #ddd;">Subject</th>
                            <th style="padding: 10px; border: 1px solid #ddd;">Credits</th>
                            <th style="padding: 10px; border: 1px solid #ddd;">Grade</th>
                            <th style="padding: 10px; border: 1px solid #ddd;">Grade Points</th>
                        </tr>
                    </thead>
                    <tbody>
        `;
        
        subjects.forEach((subject, index) => {
            formHTML += `
                <tr>
                    <td style="padding: 10px; border: 1px solid #ddd;">${subject.name}</td>
                    <td style="padding: 10px; border: 1px solid #ddd;">${subject.credits}</td>
                    <td style="padding: 10px; border: 1px solid #ddd;">
                        <select id="grade-${index}" onchange="updateGradePoints(${index})" style="width: 100%; padding: 5px;">
                            <option value="">Select Grade</option>
                            <option value="10">A+</option>
                            <option value="9">A</option>
                            <option value="8">B+</option>
                            <option value="7">B</option>
                            <option value="6">C+</option>
                            <option value="5">C</option>
                            <option value="4">D</option>
                            <option value="0">F</option>
                        </select>
                    </td>
                    <td style="padding: 10px; border: 1px solid #ddd;">
                        <span id="points-${index}">-</span>
                    </td>
                </tr>
            `;
        });
        
        formHTML += `
                    </tbody>
                </table>
                <button onclick="calculateSGPA()" style="background: #4CAF50; color: white; padding: 15px 30px; border: none; border-radius: 5px; cursor: pointer; font-size: 16px;">Calculate SGPA</button>
                <div id="sgpa-result" style="margin-top: 20px; font-size: 18px; font-weight: bold;"></div>
            </div>
        `;
        
        container.innerHTML = formHTML;
        
        // Store subjects data for calculation
        window.currentSubjects = subjects;
    }
    
    // Function to generate CGPA form
    function generateCGPAForm() {
        const container = document.getElementById("cgpa-container");
        
        let formHTML = `
            <h3>CGPA Calculator</h3>
            <div class="cgpa-form">
                <div style="margin-bottom: 20px;">
                    <label>Number of Semesters:</label>
                    <select id="semester-count" onchange="generateSemesterInputs()" style="margin-left: 10px; padding: 5px;">
                        <option value="">Select</option>
                        <option value="2">2 Semesters</option>
                        <option value="4">4 Semesters</option>
                        <option value="6">6 Semesters</option>
                        <option value="8">8 Semesters</option>
                    </select>
                </div>
                <div id="semester-inputs"></div>
                <div id="cgpa-result" style="margin-top: 20px; font-size: 18px; font-weight: bold;"></div>
            </div>
        `;
        
        container.innerHTML = formHTML;
    }
    
    // Global functions for SGPA calculation
    window.updateGradePoints = function(index) {
        const gradeSelect = document.getElementById(`grade-${index}`);
        const pointsSpan = document.getElementById(`points-${index}`);
        const credits = window.currentSubjects[index].credits;
        const gradeValue = parseFloat(gradeSelect.value);
        
        if (!isNaN(gradeValue)) {
            pointsSpan.textContent = (gradeValue * credits).toFixed(1);
        } else {
            pointsSpan.textContent = '-';
        }
    };
    
    window.calculateSGPA = function() {
        let totalCredits = 0;
        let totalGradePoints = 0;
        let allGradesSelected = true;
        
        window.currentSubjects.forEach((subject, index) => {
            const gradeSelect = document.getElementById(`grade-${index}`);
            const gradeValue = parseFloat(gradeSelect.value);
            
            if (isNaN(gradeValue)) {
                allGradesSelected = false;
                return;
            }
            
            totalCredits += subject.credits;
            totalGradePoints += (gradeValue * subject.credits);
        });
        
        const resultDiv = document.getElementById("sgpa-result");
        
        if (!allGradesSelected) {
            resultDiv.innerHTML = `<span style="color: red;">Please select grades for all subjects!</span>`;
            return;
        }
        
        const sgpa = totalGradePoints / totalCredits;
        resultDiv.innerHTML = `
            <div style="background: #e8f5e8; padding: 15px; border-radius: 5px; border-left: 4px solid #4CAF50;">
                <strong>Your SGPA: ${sgpa.toFixed(2)}</strong><br>
                Total Credits: ${totalCredits}<br>
                Total Grade Points: ${totalGradePoints.toFixed(1)}
            </div>
        `;
    };
    
    // Global functions for CGPA calculation
    window.generateSemesterInputs = function() {
        const semesterCount = parseInt(document.getElementById("semester-count").value);
        const container = document.getElementById("semester-inputs");
        
        if (!semesterCount) {
            container.innerHTML = '';
            return;
        }
        
        let inputsHTML = '<h4>Enter SGPA for each semester:</h4>';
        
        for (let i = 1; i <= semesterCount; i++) {
            inputsHTML += `
                <div style="margin: 10px 0;">
                    <label>Semester ${i} SGPA:</label>
                    <input type="number" step="0.01" min="0" max="10" id="sgpa-${i}" placeholder="Enter SGPA" style="margin-left: 10px; padding: 5px;">
                </div>
            `;
        }
        
        inputsHTML += `
            <button onclick="calculateCGPA()" style="background: #2196F3; color: white; padding: 15px 30px; border: none; border-radius: 5px; cursor: pointer; font-size: 16px; margin-top: 15px;">Calculate CGPA</button>
        `;
        
        container.innerHTML = inputsHTML;
        document.getElementById("cgpa-result").innerHTML = '';
    };
    
    window.calculateCGPA = function() {
        const semesterCount = parseInt(document.getElementById("semester-count").value);
        let totalSGPA = 0;
        let validSemesters = 0;
        
        for (let i = 1; i <= semesterCount; i++) {
            const sgpaInput = document.getElementById(`sgpa-${i}`);
            const sgpaValue = parseFloat(sgpaInput.value);
            
            if (!isNaN(sgpaValue) && sgpaValue >= 0 && sgpaValue <= 10) {
                totalSGPA += sgpaValue;
                validSemesters++;
            }
        }
        
        const resultDiv = document.getElementById("cgpa-result");
        
        if (validSemesters === 0) {
            resultDiv.innerHTML = `<span style="color: red;">Please enter valid SGPA values!</span>`;
            return;
        }
        
        if (validSemesters < semesterCount) {
            resultDiv.innerHTML = `<span style="color: orange;">Please fill all semester SGPA values!</span>`;
            return;
        }
        
        const cgpa = totalSGPA / semesterCount;
        resultDiv.innerHTML = `
            <div style="background: #e3f2fd; padding: 15px; border-radius: 5px; border-left: 4px solid #2196F3;">
                <strong>Your CGPA: ${cgpa.toFixed(2)}</strong><br>
                Based on ${semesterCount} semesters<br>
                Average SGPA: ${cgpa.toFixed(2)}
            </div>
        `;
    };
    
    // Calculation functions
    window.calculateAttendance = function() {
        const totalClasses = parseFloat(document.getElementById("total-classes").value);
        const attendedClasses = parseFloat(document.getElementById("attended-classes").value);
        
        if (isNaN(totalClasses) || isNaN(attendedClasses) || totalClasses <= 0) {
            document.getElementById("attendance-output").innerHTML = 
                `<span style="color: red;">Please enter valid numbers!</span>`;
            return;
        }
        
        if (attendedClasses > totalClasses) {
            document.getElementById("attendance-output").innerHTML = 
                `<span style="color: red;">Attended classes cannot be more than total classes!</span>`;
            return;
        }
        
        const attendancePercentage = (attendedClasses / totalClasses) * 100;
        const requiredAttendance = 75;
        const classesNeeded = Math.ceil((requiredAttendance * totalClasses - attendedClasses * 100) / (100 - requiredAttendance));
        
        let resultHTML = `
            <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 15px;">
                <strong>Current Attendance: ${attendancePercentage.toFixed(2)}%</strong><br>
        `;
        
        if (attendancePercentage >= requiredAttendance) {
            resultHTML += `<span style="color: green;">✓ Good! Above minimum requirement of ${requiredAttendance}%</span>`;
        } else {
            resultHTML += `<span style="color: red;">⚠ Warning: Below minimum requirement of ${requiredAttendance}%</span><br>`;
            if (classesNeeded > 0) {
                resultHTML += `<span style="color: blue;">You need to attend ${classesNeeded} more consecutive classes to reach ${requiredAttendance}%</span>`;
            }
        }
        
        resultHTML += `</div>`;
        document.getElementById("attendance-output").innerHTML = resultHTML;
    };
    
    window.convertGPA = function() {
        const cgpa = parseFloat(document.getElementById("cgpa-input").value);
        
        if (isNaN(cgpa) || cgpa < 0 || cgpa > 10) {
            document.getElementById("gpa-output").innerHTML = 
                `<span style="color: red;">Please enter a valid CGPA (0-10)!</span>`;
            return;
        }
        
        // Multiple conversion formulas
        const gpa4Scale = (cgpa * 4) / 10;
        const gpaPercentage = (cgpa * 9.5);
        
        document.getElementById("gpa-output").innerHTML = `
            <div style="background: #fff3e0; padding: 15px; border-radius: 5px; border-left: 4px solid #ff9800; margin-top: 15px;">
                <strong>Conversion Results:</strong><br>
                <strong>4.0 Scale GPA:</strong> ${gpa4Scale.toFixed(2)}/4.0<br>
                <strong>Percentage:</strong> ${gpaPercentage.toFixed(1)}%<br>
                <small style="color: #666;">Note: Conversion formulas may vary by institution</small>
            </div>
        `;
    };
});

// Scroll to top functionality
const chevronIcon = document.querySelector(".chevron-container");

if (chevronIcon) {
    chevronIcon.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Show/hide the chevron icon on scroll
    window.addEventListener("scroll", function () {
        if (window.pageYOffset > 300) {
            chevronIcon.style.display = "block";
        } else {
            chevronIcon.style.display = "none";
        }
    });
}