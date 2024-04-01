// Obsługa licznika odwiedzin
let visitCount = 0;
if (localStorage.getItem('visitCount')) {
    visitCount = parseInt(localStorage.getItem('visitCount'));
}
visitCount++;
document.getElementById('visit-count').textContent = visitCount;
localStorage.setItem('visitCount', visitCount.toString());


// TODO DODANIE funkcjonalnosci aby była możliwosc przewijania zdjęc w lightboxie

function openLightbox() {
    document.getElementById('lightbox').style.display = 'block';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n, event) {
    event.stopPropagation();
    showSlides(slideIndex += n);
}

function currentSlide(n, event) {
    event.stopPropagation();
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}