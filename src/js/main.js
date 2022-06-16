const mainButton = document.querySelector("#alertButton");
const closeSymbol = document.querySelector("#modul_alert-close");
const alertText = document.querySelector(".modul_alert-message");
const modalBackground = document.querySelector("#modul_alert-box");
const resetBtn = document.querySelector(".modul_alert-resetButton");
const modulAlert = document.querySelector(".modul_alert");

window.onload = () => {
  if (localStorage.getItem("isModalOpen") === "true") {
    openModal();
    updateModalContent();

    if (getCounterValue() > 5) {
      showResetButton();
    }
  }
};

mainButton.addEventListener("click", () => {
  openModal();
  setCounterValue(getCounterValue() + 1);
  updateModalContent();

  if (getCounterValue() > 5) {
    showResetButton();
  }
});

resetBtn.addEventListener("click", () => {
  setCounterValue(0);
  hideResetButton();
  updateModalContent();
});

closeSymbol.addEventListener("click", closeModal);

modalBackground.addEventListener("click", closeModal);

function getCounterValue() {
  const counter = localStorage.getItem("counter");
  return Number(counter);
}
function setCounterValue(newValue) {
  localStorage.setItem("counter", newValue);
}

function updateModalContent() {
  const counter = getCounterValue();
  alertText.textContent = `You have clicked ${counter} times to related button`;
}

function openModal() {
  modalBackground.classList.add("active");
  modalBackground.classList.remove("hidden");
  document.body.classList.add("opacity");
  localStorage.setItem("isModalOpen", true);
}

function closeModal() {
  modalBackground.classList.remove("active");
  modalBackground.classList.add("hidden");
  localStorage.setItem("isModalOpen", false);
}

function hideResetButton() {
  resetBtn.classList.add("hidden");
}

function showResetButton() {
  resetBtn.classList.remove("hidden");
}
