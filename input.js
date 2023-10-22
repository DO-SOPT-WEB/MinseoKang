const inputForm = document.getElementById("input-form");
const inputPrice = inputForm.querySelector("input");
const myHistory = document.getElementById("history-list");
// const categoryChange = document.getElementById("category");

function makeTodo(newHistory) {
  const box = document.createElement("li");

  const content = document.createElement("span");
  content.innerText = newHistory;

  const deletion = document.createElement("button");
  deletion.innerText = "x";

  box.appendChild(content);
  box.appendChild(deletion);
  myHistory.appendChild(box);
}

function handleHistorySubmit(event) {
  event.preventDefault();
  const newHistory = inputPrice.value;
  // inputPrice.value = "";
  makeTodo(newHistory);
}

inputForm.addEventListener("submit", handleHistorySubmit);
