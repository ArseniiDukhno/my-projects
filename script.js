document.addEventListener("DOMContentLoaded", () => {
    
    /* 1. Логика формы контактов */
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault(); 
            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let message = document.getElementById("message").value;

            console.log("Name:", name);
            console.log("Email:", email);
            console.log("Nachricht:", message);

            alert("Danke! Ihre Nachricht wurde gesendet.");
            contactForm.reset(); 
        });
    }

    /* 2. Анимация появления фото (Scroll Animation) */
    const aboutImages = document.querySelectorAll(".about-grid img");
    function checkVisibility() {
        aboutImages.forEach(img => {
            const rect = img.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top < windowHeight - 100) {
                img.classList.add("visible");
            }
        });
    }
    window.addEventListener("scroll", checkVisibility);
    checkVisibility();

    /* 3. Мобильное меню (Гамбургер) */
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('nav-active');
        
        hamburger.classList.toggle('toggle');
    });

    // Закрывать меню при клике на ссылку
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('nav-active');
        });
    });

    /* 4. Кнопка "Наверх" */
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    
    window.onscroll = function() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    };

    scrollTopBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    /* 5. Лайтбокс (Просмотр фото) */
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close-lightbox");

    aboutImages.forEach(img => {
        img.addEventListener("click", () => {
            lightbox.style.display = "flex"; 
            lightboxImg.src = img.src;
        });
    });

    // Закрытие по крестику
    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    // Закрытие по клику вне картинки
    lightbox.addEventListener("click", (e) => {
        if (e.target !== lightboxImg) {
            lightbox.style.display = "none";
        }
    });
});