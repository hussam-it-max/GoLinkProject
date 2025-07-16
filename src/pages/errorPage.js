export const showError = (message) => {
  const errorDiv = document.getElementById("errorMessage");
  errorDiv.textContent = message;
  errorDiv.style.display = "block";
};
export const handleSearchError = (error) => {
  if (error.message.includes("NOT_FOUND")) {
    showError("Oops Could not find results. Please check your locations.");
  } else if (error.message.includes("SERVER_ERROR")) {
    showError("Server error. Please try again later");
  } else {
    showError("Network error. Please check your connection.");
  }
};
