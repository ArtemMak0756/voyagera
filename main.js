document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".header__burger");
    const nav = document.querySelector(".header__navigation");
    const overlay = document.querySelector(".menu-overlay");
    const closeBtn = document.querySelector(".menu-close");

    function closeMenu() {
        burger.classList.remove("active");
        nav.classList.remove("active");
        overlay.classList.remove("active");
        document.body.classList.remove("lock");
    }

    burger.addEventListener("click", () => {
        burger.classList.toggle("active");
        nav.classList.toggle("active");
        overlay.classList.toggle("active");
        document.body.classList.toggle("lock");
    });

    overlay.addEventListener("click", closeMenu);
    closeBtn.addEventListener("click", closeMenu);
});

// -------------------------

document.addEventListener("DOMContentLoaded", () => {
    const countryPopup = document.getElementById("countryPopup");
    const yesBtn = countryPopup.querySelector(".yes");
    const noBtn = countryPopup.querySelector(".no");

    const cookieBanner = document.getElementById("cookieBanner");
    const acceptBtn = document.getElementById("acceptCookies");
    const necessaryBtn = document.getElementById("necessaryCookies");

    if (!localStorage.getItem("countryConfirmed")) {
        countryPopup.style.display = "flex";
    } else {
        showCookies();
    }

    yesBtn.addEventListener("click", () => {
        localStorage.setItem("countryConfirmed", "yes");
        countryPopup.style.display = "none";
        showCookies();
    });

    noBtn.addEventListener("click", () => {
        localStorage.setItem("countryConfirmed", "no");
        window.location.href = "https://google.com";
    });

    function showCookies() {
        if (!localStorage.getItem("cookiesAccepted")) {
            cookieBanner.style.display = "block";
        }
    }

    acceptBtn.addEventListener("click", () => {
        localStorage.setItem("cookiesAccepted", "all");
        cookieBanner.style.display = "none";
    });

    necessaryBtn.addEventListener("click", () => {
        localStorage.setItem("cookiesAccepted", "necessary");
        cookieBanner.style.display = "none";
    });
});