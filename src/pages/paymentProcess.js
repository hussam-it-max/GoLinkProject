export const simulatePayment = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const chance = Math.random();
      if (chance < 0.5) {
        resolve("Payment Successful! The Driver On the rout");
      } else {
        reject("Payment Failed. Pleas try again.");
      }
    }, 1500);
  });
};
export const showLoading = () => {
  const loader = document.getElementById("payment-loading");
  if (loader) loader.classList.remove("hidden");
};
export const hideLoading = () => {
  const loader = document.getElementById("payment-loading");
  if (loader) loader.classList.add("hidden");
};
