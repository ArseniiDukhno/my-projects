function scrollToContact() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Nachricht:", message);

    alert("Danke! Ihre Nachricht wurde gesendet.");
});

/*animations*/

document.addEventListener("DOMContentLoaded", () => {
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
  checkVisibility(); // сразу проверяем
});