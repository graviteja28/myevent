// COUNTDOWN TIMER
function startCountdown() {
    let weddingDate = new Date("2025-06-15T10:00:00").getTime(); // Set your wedding date here
    let countdownElement = document.getElementById("countdown");

    setInterval(() => {
        let now = new Date().getTime();
        let timeLeft = weddingDate - now;

        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days} Days ${hours}h ${minutes}m ${seconds}s`;

        if (timeLeft < 0) {
            countdownElement.innerHTML = "The wedding has started!";
        }
    }, 1000);
}

// RSVP FORM SUBMISSION
document.getElementById("rsvp-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let guests = document.getElementById("guests").value;
    let email = document.getElementById("email").value;

    if (name.trim() !== "" && guests.trim() !== "") {
        document.getElementById("rsvp-message").innerHTML = `Thank you, ${name}! Your RSVP has been recorded for ${guests} guest(s).`;
        document.getElementById("rsvp-form").reset();
    } else {
        document.getElementById("rsvp-message").innerHTML = "Please fill in all required fields.";
    }
});

// WHATSAPP SHARE BUTTON
document.getElementById("whatsapp-share").addEventListener("click", function() {
    let message = `You're invited to our wedding! 🎉
Date: [Your Wedding Date]
Venue: [Location Name]
Join the Live Stream: [Your Website Link]
See you there! 💖`;
    
    let whatsappURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
});

// Start Countdown Timer
startCountdown();
