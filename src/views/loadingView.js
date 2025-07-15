export const creatLodingElement = () => {
  const element = document.createElement("div");
  element.id = "processLoading";
  element.classList.add("process-loading");
  element.innerHTML = String.raw`
    <div class='loader'></div>
<p>Searching Results...</p>
    `;
  return element;
};
export const removeLoadingElement = () => {
  const el = document.getElementById("processLoading");
  if (el) {
    el.remove();
  }
};
