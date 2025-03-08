const users = {
    "userA": { password: "1234", access: ["A"] },
    "userB": { password: "5678", access: ["B"] }
};

// Event details
const events = {
    "A": {
        title: "Grand Wedding",
        date: "March 10, 2025",
        location: "Hyderabad, Andhra Pradesh",
        description: "A beautiful wedding ceremony with family and friends.",
        youtubeId: "YOUR_YOUTUBE_LIVE_ID_A"  // Replace with actual live stream ID
    },
    "B": {
        title: "Music Concert",
        date: "March 12, 2025",
        location: "Vizag, Andhra Pradesh",
        description: "A live music concert featuring top artists.",
        youtubeId: "YOUR_YOUTUBE_LIVE_ID_B"  // Replace with actual live stream ID
    }
};

// Login Function
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (users[username] && users[username].password === password) {
        sessionStorage.setItem("loggedInUser", username);
        window.location.href = "index.html";
    } else {
        alert("Invalid username or password!");
    }
}

// Logout Function
function logout() {
    sessionStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
}

// Restrict Event Access & Load Data
document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const eventId = params.get('id');

    const user = sessionStorage.getItem("loggedInUser");

    if (!user) {
        window.location.href = "login.html"; // Redirect if not logged in
    } else {
        if (users[user].access.includes(eventId)) {
            document.getElementById("eventTitle").innerText = events[eventId].title;
            document.getElementById("eventDate").innerText = events[eventId].date;
            document.getElementById("eventLocation").innerText = events[eventId].location;
            document.getElementById("eventDescription").innerText = events[eventId].description;

            document.getElementById("youtubeEmbed").src = `https://www.youtube.com/embed/${events[eventId].youtubeId}`;

            document.getElementById("eventContent").classList.remove("hidden");
        } else {
            alert("Access denied!");
            window.location.href = "index.html";
        }
    }
});
