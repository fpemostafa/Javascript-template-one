// Toggle spin class on icon
let settingIcon = document.querySelector(".toggle-setting i ");

settingIcon.onclick = function() {
    // toggle fa-spin class on element itself
    this.classList.toggle("fa-spin");
    // toggle opened class on element parent
    document.querySelector(".setting-box").classList.toggle("opened");
};

// Landing Page Selection
let LandingPage = document.querySelector(".landing-page");

// Get Array Of Images
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg"];

setInterval(() => {
    // Get Random Number based on array length
    let randomNumber = Math.floor(Math.random() * imgsArray.length);

    // Change background img url
    LandingPage.style.backgroundImage = `url(../imgs/${imgsArray[randomNumber]})`;
}, 3 * 1000);