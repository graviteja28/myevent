const users = {
    "userA": { password: "1234", access: ["A"] },
    "userB": { password: "5678", access: ["B"] }
};

// Function to check login status
function checkLogin() {
    const user = sessionStorage.getItem("loggedInUser");

    // If user is not logged in and not on login page, redirect to login
    if (!user && !window.location.href.includes("login.html")) {
        window.location.href = "login.html";
    }
}

// Function to handle login
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (users[username] && users[username].password === password) {
        sessionStorage.setItem("loggedInUser", username);
        window.location.href = "index.html"; // Redirect to home page after login
    } else {
        alert("Invalid username or password!");
    }
}

// Function to handle logout
function logout() {
    sessionStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
}

// Function to load event details
function loadEvent() {
    const params = new URLSearchParams(window.location.search);
    const eventId = params.get('id');
    const user = sessionStorage.getItem("loggedInUser");

    if (!user) {
        window.location.href = "login.html"; // Redirect if not logged in
        return;
    }

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

// Call checkLogin only when necessary
if (!window.location.href.includes("login.html")) {
    checkLogin();
}
