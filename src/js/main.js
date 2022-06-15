const mainButton = document.querySelector("#alertButton");
const closeSymbol = document.querySelector("#modul_alert-close");
const alertText = document.querySelector(".modul_alert-message");
const alertBackground = document.querySelector("#modul_alert-box");
const resetBtn = document.querySelector(".modul_alert-resetButton");
const modulAlert = document.querySelector(".modul_alert");

let counter = 0;

mainButton.addEventListener("click", () => {
  alertBackground.classList.add("active");
  alertBackground.classList.remove("display");
  document.body.classList.add("opacity");
  counter++;
  alertText.textContent = `You have clicked ${counter} times to related button`;

  if (counter > 5) {
    resetBtn.classList.remove("display");
    resetBtn.addEventListener("click", () => {
      counter = 0;
      resetBtn.classList.add("display");
      alertText.textContent = `You have clicked ${counter} times to related button`;
    });
  }
});

closeSymbol.addEventListener("click", () => {
  alertBackground.classList.remove("active");
  alertBackground.classList.add("display");
});

alertBackground.addEventListener("click", e => {
  if (e.target.closest(".modul_alert")) return;
  alertBackground.classList.add("display");
});
