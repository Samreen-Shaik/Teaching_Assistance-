// Function to submit assignment
function submitAssignment() {
    let assignmentText = document.getElementById("assignmentText").value.trim();
    if (assignmentText === "") {
        alert("Please write something before submitting.");
    } else {
        alert("Assignment Submitted Successfully!");
        document.getElementById("assignmentText").value = ""; // Clear textarea after submission
    }
}

// Function to go back to Student Dashboard
function goBack() {
    window.location.href = "student-dashboard.html";
}
