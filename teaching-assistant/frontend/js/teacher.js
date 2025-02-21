// Function to create a quiz question
function createQuiz() {
    let question = document.getElementById("quizQuestion").value;
    if (question.trim() === "") {
        alert("Please enter a question!");
        return;
    }
    alert(`Quiz Question Added: ${question}`);
    document.getElementById("quizQuestion").value = "";
}

// Function to create an assignment
function createAssignment() {
    let title = document.getElementById("assignmentTitle").value;
    if (title.trim() === "") {
        alert("Please enter an assignment title!");
        return;
    }
    alert(`Assignment Created: ${title}`);
    document.getElementById("assignmentTitle").value = "";
}

// Function to add feedback questions dynamically
function addFeedbackQuestion() {
    let question = document.getElementById("feedbackQuestion").value;
    if (question.trim() === "") {
        alert("Please enter a feedback question!");
        return;
    }

    // Add the question to the feedback list
    let feedbackList = document.getElementById("feedbackList");
    let li = document.createElement("li");
    li.textContent = question;
    feedbackList.appendChild(li);

    document.getElementById("feedbackQuestion").value = ""; // Clear input
}

// Logout function
function logout() {
    alert("Logging out...");
    window.location.href = "index.html"; // Redirect to login page
}
