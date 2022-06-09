var slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1)
}

function minusSlide() {
    showSlides(slideIndex -= 1)
}

function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("resourses-slider__item");
    var dots = document.getElementsByClassName("slider-dots__item");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "")
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
///////////////////////////

var slideIndex2 = 1;
showSlides2(slideIndex2);

function currentSlide2(n) {
    showSlides2(slideIndex2 = n)
}

function showSlides2(n) {
    var i;
    var slides = document.getElementsByClassName("testimonials__slider");
    var dots = document.getElementsByClassName("testimonials-dots__item");
    if (n > slides.length) {
        slideIndex2 = 1
    }
    if (n < 1) {
        slideIndex2 = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "")
    }
    slides[slideIndex2 - 1].style.display = "block";
    dots[slideIndex2 - 1].className += " active";
}

//////////////////////////

autoSlider();
var timer;
function autoSlider() {
    timer = setTimeout(plusSlide2, 3000);
}
function plusSlide2() {
    showSlides2(slideIndex2 += 1)
    autoSlider();
}

///////////////////////////

const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');

    for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
    }

    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));
