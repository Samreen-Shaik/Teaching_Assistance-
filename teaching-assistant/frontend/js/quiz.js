// Function to submit quiz
function submitQuiz() {
    let q1 = document.querySelector('input[name="q1"]:checked');
    let q2 = document.querySelector('input[name="q2"]:checked');

    if (!q1 || !q2) {
        alert("Please answer all questions before submitting.");
    } else {
        alert("Quiz Submitted Successfully!");
        document.getElementById("quizForm").reset(); // Clear form after submission
    }
}

// Function to go back to Student Dashboard
function goBack() {
    window.location.href = "student-dashboard.html";
}
