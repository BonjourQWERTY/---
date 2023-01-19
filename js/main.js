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
