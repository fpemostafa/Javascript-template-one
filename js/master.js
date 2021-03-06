// cheek if there is Local Storage Color Option
let mainColor = localStorage.getItem("color-option");

if (mainColor !== null) {
    // Set Color on Root From LocalStorage
    document.documentElement.style.setProperty("--main-color", mainColor);

    // Remove active class From all Li elements
    document.querySelectorAll(".colors-list li").forEach((element) => {
        element.classList.remove("active");
        if (element.dataset.color === mainColor) {
            element.classList.add("active");
        }
    });

    // add active class on color that equal to localStorage value
} else {
    console.log("localStorage Color Property => Null");
}

// Toggle spin class on icon
let settingIcon = document.querySelector(".toggle-setting i ");

settingIcon.onclick = function() {
    // toggle fa-spin class on element itself
    this.classList.toggle("fa-spin");
    // toggle opened class on element parent
    document.querySelector(".setting-box").classList.toggle("opened");
};

// Switch Color
const colorLi = document.querySelectorAll(".colors-list li");
// loop On All List Items
colorLi.forEach((li) => {
    // Click On every List Item
    li.addEventListener("click", (e) => {
        // Set Color on Root
        document.documentElement.style.setProperty(
            "--main-color",
            e.target.dataset.color
        );

        // Store Color Property On localStorage
        localStorage.setItem("color-option", e.target.dataset.color);

        // remove active class from all elements
        e.target.parentElement.querySelectorAll(".active").forEach((element) => {
            element.classList.remove("active");
        });
        // add active Class to current Element
        e.target.classList.add("active");
    });
});

//-----------------------------------------------------------------------------------

// Random Background Option
//.
//.
//.
// randomBoolean to control randomize Images Function
let randomBackground = true;

// Variable to control the Interval
let theBackgroundInterval;

// cheek if the is random-backgrounds value stored in local Storage
let storedRandomBackground = localStorage.getItem("random-backgrounds");
// console.log(storedRandomBackground);

if (storedRandomBackground !== null) {
    if (storedRandomBackground === "true") {
        randomBackground = true;
        randomizeImgs();
        document
            .querySelector(".background-toggle span.yes")
            .classList.add("active");
    } else {
        randomBackground = false;
        document
            .querySelector(".background-toggle span.no")
            .classList.add("active");
    }
}

// randomBackgroundSpan var will give us a list of spans located in background-toggle class
// so will use => document.querySelectorAll() <=  function
// Switch Background Option
const randomBackgroundSpan = document.querySelectorAll(
    ".background-toggle span"
);
// loop On All Spans Element
randomBackgroundSpan.forEach((span) => {
    // Click On every Span
    span.addEventListener("click", (e) => {
        // remove active class from all elements
        e.target.parentElement.querySelectorAll(".active").forEach((element) => {
            element.classList.remove("active");
        });
        // add active Class to current Element
        e.target.classList.add("active");
        // Store random-backgrounds Property On localStorage

        if (e.target.dataset.background === "yes") {
            randomBackground = true;
            randomizeImgs();
            localStorage.setItem("random-backgrounds", true);
        } else {
            randomBackground = false;
            clearInterval(theBackgroundInterval);
            localStorage.setItem("random-backgrounds", false);
        }
    });
});

// function to randomize imgs
function randomizeImgs() {
    // Landing Page Selection
    let LandingPage = document.querySelector(".landing-page");

    // Get Array Of Images
    let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg"];

    if (randomBackground) {
        theBackgroundInterval = setInterval(() => {
            // Get Random Number based on array length
            let randomNumber = Math.floor(Math.random() * imgsArray.length);

            // Change background img url
            LandingPage.style.backgroundImage = `url(../imgs/${imgsArray[randomNumber]})`;
        }, 10 * 1000);
    }
}

// Select Skill Section
let ourSkill = document.querySelector(".skills");

window.onscroll = function() {
    //* Skill Offset Top => The total Height above our Parent Element
    let skillOffsetTop = ourSkill.offsetTop;
    // console.log(`Skill Offset Top => ${skillOffsetTop}`);

    //* Skill Outer Height => the total amount of height that Element Take * check MDN website for more information
    let skillOuterHeight = ourSkill.offsetHeight;
    // console.log(`Skill Outer Height => ${skillOuterHeight}`);

    //* Window Height
    let windowHeight = this.innerHeight;
    // console.log(`Window Height => ${windowHeight}`);

    //* Window  Scroll Top => the total amount of height that we already scrolled and goes out of the page view
    let windowScrolled = this.scrollY;
    console.log(`Window  Scroll Top => ${windowScrolled}`);

    //* Learning Function by Osama Elzero
    // if (windowScrolled > (skillOffsetTop + skillOuterHeight - windowHeight)) {
    //     let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

    //     allSkills.forEach(span => {
    //         span.style.width = span.dataset.progress;
    //         span.firstElementChild.textContent = span.dataset.progress;
    //         console.log(span.firstElementChild);

    //     })

    // }
    //* My Own Function
    let allSkillPercentage = document.querySelectorAll(".skill-percentage");
    allSkillPercentage.forEach((element) => {
        elePercentage = element.parentElement.dataset.progress;
        if (windowScrolled > skillOffsetTop + skillOuterHeight - windowHeight) {
            element.parentElement.style.width = elePercentage;
            element.textContent = elePercentage;
            if (elePercentage <= "2%") {
                element.style.fontSize = "12px";
            }
        } else {
            element.parentElement.style.width = 0;
            element.textContent = "";
        }
        //   console.log(elePercentage);
    });
};