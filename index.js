let homeScoreElement = document.getElementById("home-score");
let guestScoreElement = document.getElementById("guest-score");
let homeScore = 0;
let guestScore = 0;

let add1btnHome = document.getElementById("add-1-home");
let add2btnHome = document.getElementById("add-2-home");
let add3btnHome = document.getElementById("add-3-home");

let add1btnGuest = document.getElementById("add-1-guest");
let add2btnGuest = document.getElementById("add-2-guest");
let add3btnGuest = document.getElementById("add-3-guest");

add1btnHome.addEventListener("click", function() {
    homeScore += 1;
    homeScoreElement.textContent = homeScore;
});

add2btnHome.addEventListener("click", function() {
    homeScore += 2;
    homeScoreElement.textContent = homeScore;
});

add3btnHome.addEventListener("click", function() {
    homeScore += 3;
    homeScoreElement.textContent = homeScore;
});

add1btnGuest.addEventListener("click", function() {
    guestScore += 1;
    guestScoreElement.textContent = guestScore;
});

add2btnGuest.addEventListener("click", function() {
    guestScore += 2;
    guestScoreElement.textContent = guestScore;
});

add3btnGuest.addEventListener("click", function() {
    guestScore += 3;
    guestScoreElement.textContent = guestScore;
});