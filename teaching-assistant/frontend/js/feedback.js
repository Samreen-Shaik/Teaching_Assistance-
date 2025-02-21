// Function to submit feedback
function submitFeedback() {
    let experience = document.getElementById("experience").value;
    let comments = document.getElementById("comments").value.trim();

    if (experience === "") {
        alert("Please select your experience rating.");
    } else {
        alert("Feedback Submitted! Thank you.");
        document.getElementById("feedbackForm").reset(); // Clear form after submission
    }
}

// Function to go back to Student Dashboard
function goBack() {
    window.location.href = "student-dashboard.html";
}
