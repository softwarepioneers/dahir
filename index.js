


let buttons = document.querySelector(".buttons");
let prevButton = document.querySelector(".prev");
let nextButton = document.querySelector(".next");

// access the testimonials
let testSlide = document.querySelectorAll(".testItem");
// access indicators
const dots = document.querySelectorAll(".dot");
let counter = 0;


function switchTest(currentTest){
    currentTest.classList.add('active');
    let testId = currentTest.getAttribute('attr');
    if(testId > counter) {
        testSlide[counter].style.animation = 'next1 .5s ease-in forwards';
        counter = testId;
        testSlide[counter].style.animation = 'next2 .5s ease-in forwards';
    }
    else if(testId == counter) {
        return ;
    }
    else {
        testSlide[counter].style.animation = 'prev1 .5s ease-in forwards';
        counter = testId;
        testSlide[counter].style.animation = 'prev2 .5s ease-in forwards';
    }
    indicators();
};

// add and remove the active class from indicators
function indicators () {
    for(let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    dots[counter].className += ' active';
}

// code for auto sliding
function slideNext() {
    testSlide[counter].style.animation = 'next1 0.5s ease-in forwards';
    if(counter >= testSlide.length - 1) {
        counter = 0;
    }
    else {
        counter++
    }
    testSlide[counter].style.animation = 'next2 .5s ease-in forwards';
    indicators();
}

function autoSliding() {
    deleteInterval = setInterval(timer, 3000);
    function timer() {
        indicators();
        slideNext();
    }
}
autoSliding();

// stop auto sliding when mouseover
const container = document.querySelector(".indicators");
container.addEventListener("mouseover", pause);
function pause() {
    clearInterval(deleteInterval);
}
container.addEventListener("mouseout", autoSliding);

buttons.addEventListener("mouseover", pause);
function pause() {
    clearInterval(deleteInterval);
}
buttons.addEventListener("mouseout", autoSliding);

prevButton.addEventListener("click", slideNext);
nextButton.addEventListener("click", slideNext);

// counting up the numbers.
let auto_increase = document.querySelectorAll(".numbers");
let interval = 7000;

auto_increase.forEach((auto_increase) => {
    let startValue = 0;
    let endValue = parseInt(auto_increase.getAttribute("data"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(() => {
        startValue += 1;
        auto_increase.textContent = startValue;
        if(startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});


