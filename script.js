// Newsletter form JS
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".newsletter-form");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      if (form.checkValidity()) {
        alert("Thank you for subscribing!");
        form.reset();
      } else {
        alert("Please enter a valid email address.");
      }
    });
  });
  