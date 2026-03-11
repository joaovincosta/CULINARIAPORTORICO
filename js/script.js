let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// modal
document.addEventListener("DOMContentLoaded", function(){

  const modal = document.getElementById("foodModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalText = document.getElementById("modalText");

  const cards = document.querySelectorAll(".modal-trigger");
  const closeBtn = document.querySelector(".close");

  cards.forEach(card => {

    card.addEventListener("click", () => {

      const title = card.dataset.title;

      const template = card.querySelector(".modal-data");
      const content = template ? template.innerHTML : "";

      modalTitle.textContent = title;
      modalText.innerHTML = content;

      modal.style.display = "block";

    });

  });

  closeBtn.onclick = function(){
    modal.style.display = "none";
  }

  window.onclick = function(event){
    if(event.target === modal){
      modal.style.display = "none";
    }
  }

});