const mainButton = document.querySelector("#alertButton");
const closeSymbol = document.querySelector("#modul_alert-close");
const alertText = document.querySelector(".modul_alert-message");
const modalBackground = document.querySelector("#modul_alert-box");
const resetBtn = document.querySelector(".modul_alert-resetButton");
const modulAlert = document.querySelector(".modul_alert");

let counter = 0;

mainButton.addEventListener("click", () => {
  openModal();
  counter = counter + 1;
  updateModalContent();

  if (counter > 5) {
    showResetButton();
  }
});

resetBtn.addEventListener("click", () => {
  counter = 0;
  hideResetButton();
  updateModalContent();
});

closeSymbol.addEventListener("click", closeModal);

modalBackground.addEventListener("click", closeModal);

function updateModalContent() {
  alertText.textContent = `You have clicked ${counter} times to related button`;
}

function openModal() {
  modalBackground.classList.add("active");
  modalBackground.classList.remove("hidden");
  document.body.classList.add("opacity");
}

function closeModal() {
  modalBackground.classList.remove("active");
  modalBackground.classList.add("hidden");
}

function hideResetButton() {
  resetBtn.classList.add("hidden");
}

function showResetButton() {
  resetBtn.classList.remove("hidden");
}
