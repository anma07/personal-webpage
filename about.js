// SlideShow of my birdies

let slideIndex = 0;
let slideTimer;

const slideImages = document.querySelectorAll('.imagec'); 

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    if (slides.length === 0) return;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

    clearTimeout(slideTimer);
    slideTimer = setTimeout(showSlides, 2000); 
}

showSlides();

slideImages.forEach(img => {
    img.addEventListener('mouseenter', () => {
        clearTimeout(slideTimer);
    });

    img.addEventListener('mouseleave', () => {
        clearTimeout(slideTimer); 
        slideTimer = setTimeout(showSlides, 2000);
    });
});

// Typed Text Animation

class TypedText {
    constructor(element, config) {
        this.el = element;
        this.strings = config.strings;
        this.typingSpeed = config.typingSpeed;
        this.eraseSpeed = config.eraseSpeed;
        this.pauseDuration = config.pauseDuration;

        this.stringIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;

        this.run();
    }

    run() {
        const current = this.strings[this.stringIndex];

        if (this.isDeleting) {
            this.charIndex--;
        } else {
            this.charIndex++;
        }

        this.el.textContent = current.substring(0, this.charIndex);

        let delay = this.isDeleting ? this.eraseSpeed : this.typingSpeed;

        if (!this.isDeleting && this.charIndex === current.length) {
            delay = this.pauseDuration;
            this.isDeleting = true;
        }

        else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.stringIndex = (this.stringIndex + 1) % this.strings.length;
        }

        setTimeout(() => this.run(), delay);
    }
}

new TypedText(document.getElementById("typed"), {
    strings: ["Student", "Developer", "Amateur Naturalist", "Reader", "Idio-"],
    typingSpeed: 100,
    eraseSpeed: 50,
    pauseDuration: 1000
});

// Add section wise animations

const sections = document.querySelectorAll(".fade-section");
const sections2 = document.querySelectorAll(".fade-section2");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

sections.forEach(section => {
    observer.observe(section);
});

sections2.forEach(section =>{
    observer.observe(section);
})