//Initial Data
let sliderWidth = document.querySelector('.slider--width');
let totalSlides = document.querySelectorAll('.slider--items').length;

let currentSlide = 0;

//Setting Styles
sliderWidth.style.width = `calc(100vw * ${totalSlides})`;
sliderWidth.style.gridTemplateColumns = `repeat(${totalSlides}, 1fr)`;

//Functions and Conditions
function goNext() {
    currentSlide++;
    if(currentSlide > (totalSlides - 1)) {
        currentSlide = 0;
    }
    updateMargin();
}


function updateMargin() {
    let sliderItemWidth = document.querySelector('.slider--items').clientWidth;
    let newMargin = (currentSlide * sliderItemWidth);

    sliderWidth.style.marginLeft = `-${newMargin}px`;
}


setInterval(goNext, 5000);