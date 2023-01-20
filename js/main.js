const inputRequestDialog = document.querySelector('#input-request-dialog');
const inputRequestBtn = document.querySelector('#input-request');
const inputRequestClose = inputRequestDialog.querySelector('#input-request-close');
const inputRequestOverlay = inputRequestDialog.querySelector('#input-request-overlay');

function handleOpenRequestDialog() {
  inputRequestDialog.classList.add('dialog_active');
}

function handleCloseRequestDialog() {
  inputRequestDialog.classList.remove('dialog_active');
}

inputRequestBtn.addEventListener('click', handleOpenRequestDialog);
inputRequestClose.addEventListener('click', handleCloseRequestDialog);
inputRequestOverlay.addEventListener('click', handleCloseRequestDialog);



function onToggle(event) {
  if (event.target.open) {
    document.querySelectorAll(".how-it-works__agreements-group > details[open]").forEach((el) => {
      // Исключаем из перебора елемент который мы только что открыли
      if (el === event.target) {
        return;
      }

      // Закрываем все остальные елементы <details>
      el.open = false;
    });
  }
}

// Вешаем наблюдатель на все елементы <details> внутри акордиона
document
  .querySelectorAll(".how-it-works__agreements-group > details")
  .forEach((el) => el.addEventListener("toggle", onToggle));

//Slider
  var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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
