// Dummy user authentication (Replace with a real database in the future)
const users = {
    "userA": { password: "1234", access: ["A"] },
    "userB": { password: "5678", access: ["B"] }
};

// Login Function
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (users[username] && users[username].password === password) {
        sessionStorage.setItem("loggedInUser", username);
        window.location.href = "index.html"; // Redirect to events list
    } else {
        alert("Invalid username or password!");
    }
}

// Logout Function
function logout() {
    sessionStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
}

// Event Page Access Control
document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const eventId = params.get('id');

    const user = sessionStorage.getItem("loggedInUser");

    if (!user) {
        window.location.href = "login.html"; // Redirect if not logged in
    } else {
        if (users[user].access.includes(eventId)) {
            document.getElementById("eventTitle").innerText = `Welcome to Event ${eventId}`;
            document.getElementById("eventContent").classList.remove("hidden");
            document.querySelector("iframe").src = `https://www.youtube.com/embed/YOUR_LIVE_STREAM_ID`; // Replace with real ID
        } else {
            alert("Access denied!");
            window.location.href = "index.html"; // Redirect to home
        }
    }
});
