document.addEventListener("DOMContentLoaded", function () {
  // Select all slide elements
  const slides = [
    document.querySelector(".slide1"),
    document.querySelector(".slide2"),
    document.querySelector(".slide3"),
    document.querySelector(".slide4"),
  ];

  let currentSlide = 0;

  // Function to show the slide at the given index
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  // Function to move to the next slide
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  // Show the first slide initially
  showSlide(currentSlide);

  // Change slide every 7 seconds
  setInterval(nextSlide, 7000);
});

document.addEventListener("DOMContentLoaded", function () {
  const logoContainer = document.querySelector(".logo-container");
  let arrows = document.querySelector(".arrow1, .arrow2");
  let logos = document.querySelectorAll(".logo");
  let isHovered = false;
  let scrollInterval;

  // Function to scroll the logos
  function scrollLogos() {
    if (!isHovered) {
      logoContainer.style.transition = "transform 2s linear"; // Slower and smoother transition
      logoContainer.appendChild(logos[0]); // Move the first logo to the end

      logos = document.querySelectorAll(".logo"); // Update the logos list
    }
  }

  // Start the automatic scrolling every 5 seconds
  scrollInterval = setInterval(scrollLogos, 5000);

  //increase arrow margin

  // Hover effect to pause the automatic scrolling
  logoContainer.addEventListener("mouseenter", () => {
    isHovered = true;
    clearInterval(scrollInterval); // Pause the interval when hovered
  });

  arrows.addEventListener("mouseenter", () => {
    isHovered = true;
    clearInterval(scrollInterval); // Pause the interval when hovered
  });

  document.querySelector(".arrow2").addEventListener("mouseenter", () => {
    isHovered = true;
    clearInterval(scrollInterval); // Pause the interval when hovered
  });

  logoContainer.addEventListener("mouseleave", () => {
    isHovered = false;
    scrollInterval = setInterval(scrollLogos, 7000); // Resume the interval when hover ends
  });

  // Click event for manual control with left arrow
  document.querySelector(".arrow1").addEventListener("click", () => {
    logoContainer.style.transition = "transform 1s linear";
    logoContainer.prepend(logos[logos.length - 1]); // Move the last logo to the beginning
    logos = document.querySelectorAll(".logo"); // Update the logos list
  });

  // Click event for manual control with right arrow
  document.querySelector(".arrow2").addEventListener("click", () => {
    logoContainer.style.transition = "transform 1s linear";
    logoContainer.prepend(logos[logos.length - 1]); // Move the last logo to the beginning
    logos = document.querySelectorAll(".logo"); // Update the logos list
  });
});

document.getElementById("menu-toggle").addEventListener("click", function () {
  const mobileMenu = document.getElementById("mobile-menu");
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const closeIcon = document.getElementById("close-icon");

  // Toggle the menu visibility
  mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("open");

  // Toggle the transform classes
  if (mobileMenu.classList.contains("open")) {
    mobileMenu.classList.remove("-translate-x-full");
    mobileMenu.classList.add("translate-x-0");
    document.body.classList.add("no-scroll");
  } else {
    mobileMenu.classList.remove("translate-x-0");
    mobileMenu.classList.add("-translate-x-full");
    document.body.classList.remove("no-scroll");
  }

  // Toggle the hamburger and close icons
  hamburgerIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});

// Select all list items that should trigger the dropdown behavior
document.querySelectorAll("#mobile-menu > ul > li").forEach((item) => {
  item.addEventListener("click", function () {
    // Get the corresponding div class based on the list item text content
    const targetClass = this.textContent.trim() + "2";

    // Find the div with the matching class
    const targetDiv = document.querySelector(`.${targetClass}`);

    // If the target div is found and is currently hidden
    if (targetDiv) {
      if (targetDiv.classList.contains("hidden")) {
        // Close all open dropdowns
        document.querySelectorAll("#mobile-menu > ul > div").forEach((div) => {
          div.classList.add("hidden");
        });

        // Open the clicked dropdown
        targetDiv.classList.remove("hidden");
      } else {
        // If the clicked dropdown is open, close it
        targetDiv.classList.add("hidden");
      }
    }
  });
});
