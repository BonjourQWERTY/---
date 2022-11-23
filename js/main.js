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
