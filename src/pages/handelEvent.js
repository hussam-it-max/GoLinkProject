import { creatPymentModal } from "../views/pymentView.js";
import { simulatePayment, showLoading, hideLoading } from "./paymentProcess.js";

export const attachSubmitListeners = () => {
  const submitButtons = document.querySelectorAll(".btn-submit");
  submitButtons.forEach((submitbtn) => {
    submitbtn.addEventListener("click", () => {
      const modal = creatPymentModal();
      modal.style.display = "block";
      document.body.appendChild(modal);

      const payNowBtn = modal.querySelector("#payNowBtn");
      const close = modal.querySelector(".close");
      const messageResult = modal.querySelector("#messageResult");

      payNowBtn.addEventListener("click", () => {
        showLoading();
        simulatePayment()
          .then((result) => {
            hideLoading();
            messageResult.classList.remove("hidden");
            messageResult.querySelector(".result-text").textContent = result;
            messageResult.querySelector(".result-icon").innerHTML = "✅";
            messageResult.style.borderColor = "green";
          })
          .catch((message) => {
            hideLoading();
            messageResult.classList.remove("hidden");
            messageResult.querySelector(".result-text").textContent = message;
            messageResult.querySelector(".result-icon").innerHTML = "❌";
            messageResult.style.borderColor = "red";
          });
      });

      close.addEventListener("click", () => {
        hideLoading();
        modal.remove();
      });
    });
  });
};
