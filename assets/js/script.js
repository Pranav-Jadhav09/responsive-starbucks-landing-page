"use strict";

// Image slider function to change hero-image onclick
const imgSlider = (anything) => {
  document.querySelector(".starbucks").src = anything;
};

// On-click change the color of the circle in background
const colorChange = (color) => {
  const circle = document.querySelector(".circle");
  circle.style.backgroundColor = color;
};

// Mobile navigation toggle menu function
const toggleMenu = () => { 
  const menuToggle = document.querySelector(".toggle");
  const navigation = document.querySelector(".navigation");

  menuToggle.classList.toggle("active");
  navigation.classList.toggle("nav-active");
};
