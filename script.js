function toggleMenu() {
  document.querySelector("nav ul").classList.toggle("active");
}

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! We'll get back to you soon.");
});