
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


    
    
    
    
    const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let currentIndex = 0;
let slideInterval;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

next.addEventListener("click", () => {
  nextSlide();
  resetInterval();
});

prev.addEventListener("click", () => {
  prevSlide();
  resetInterval();
});

// Auto slide every 4s
function startAutoSlide() {
  slideInterval = setInterval(nextSlide, 4000);
}

function resetInterval() {
  clearInterval(slideInterval);
  startAutoSlide();
}
// faq question//

startAutoSlide();
const faqs = document.querySelectorAll(".faq-question");

faqs.forEach(faq => {
  faq.addEventListener("click", function () {
    const item = this.parentElement;
    item.classList.toggle("active");

    // Icon change
    const icon = this.querySelector(".icon");
    if (item.classList.contains("active")) {
      icon.textContent = "−"; // minus
    } else {
      icon.textContent = "+"; // plus
    }
  });
});

//  Review Form Script 

  document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("feedbackForm");
  const reviewList = document.getElementById("reviewList");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();
    const rating = document.getElementById("rating").value;

    if (!name || !message || !rating) return;

    // create new review card
    const newReview = document.createElement("div");
    newReview.classList.add("review-card");
    newReview.innerHTML = `
      <img src="img/default-user.png" alt="User">
      <div class="review-text">
        <h3>${name}</h3>
        <p>"${message}"</p>
        <div class="stars">${"⭐".repeat(rating)}</div>
      </div>
    `;

    // add to list
    reviewList.appendChild(newReview);

    // clear form
    form.reset();

    alert("Thank you for your feedback! Your review has been added. 😊");
  });
});