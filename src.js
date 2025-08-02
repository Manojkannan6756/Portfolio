// Typing Animation
const roles = ["Electronics Engineer", "Web Designer", "Web Developer", "Frontend Developer"];
let i = 0;
let j = 0;
let currentRole = "";
let isDeleting = false;

function typeEffect() {
  currentRole = roles[i];
  const display = document.querySelector(".typing");

  if (!isDeleting) {
    display.textContent = currentRole.slice(0, j++);
    if (j > currentRole.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }
  } else {
    display.textContent = currentRole.slice(0, j--);
    if (j < 0) {
      isDeleting = false;
      i = (i + 1) % roles.length;
    }
  }
  setTimeout(typeEffect, isDeleting ? 80 : 120);
}

typeEffect();
