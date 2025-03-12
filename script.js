document.addEventListener("DOMContentLoaded", function () {
  let slides = document.querySelectorAll(".slides img");
  let index = 0;

  function nextSlide() {
    slides[index].style.display = "none";
    index = (index + 1) % slides.length;
    slides[index].style.display = "block";
  }
  setInterval(nextSlide, 3000);

  let popup = document.getElementById("popup");
  let closeBtn = document.querySelector(".close");

  setTimeout(() => {
    popup.style.display = "block";
  }, 5000);

  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

  function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
  }
});
