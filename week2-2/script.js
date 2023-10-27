import { HISTORY_DATA } from "./Data.js";

let historyArr = [];
let initBalance = 0;
let plusTotal = 0;
let minusTotal = 0;

function getHistoryObj(select, text, price, status) {
  return {
    select: select,
    text: text,
    price: price,
    status: status,
  };
}

const historyList = document.getElementById("historylist_items");
const template = document.getElementById("history-template");
const plusBalance = document.getElementsByClassName("asset-type-plus")[0];
const minusBalance = document.getElementsByClassName("asset-type-minus")[0];
const wholeBalance = document.getElementById("balance");
const inputCheckbox = document.getElementById("plus_p");
const outlayCheckbox = document.getElementById("minus_p");

// 초기 설정: inputCheckbox(수입)과 outlayCheckbox(지출) 모두 선택된 상태로 시작
inputCheckbox.checked = true;
outlayCheckbox.checked = true;

inputCheckbox.addEventListener("change", loadAndDisplayData);
outlayCheckbox.addEventListener("change", loadAndDisplayData);

function loadAndDisplayData() {
  let storedData = localStorage.getItem("historyData");
  if (storedData) {
    historyArr = JSON.parse(storedData); // localStorage에서 데이터를 가져와 historyArr에 할당
  } else {
    historyArr = JSON.parse(JSON.stringify(HISTORY_DATA)); // 새로운 배열 생성
    localStorage.setItem("historyData", JSON.stringify(historyArr)); // localStorage에 데이터가 없는 경우 초기 데이터를 설정하고 localStorage에 저장
  }

  let filteredHistoryArr;

  if (inputCheckbox.checked && outlayCheckbox.checked) {
    filteredHistoryArr = historyArr;
  } else if (inputCheckbox.checked) {
    filteredHistoryArr = historyArr.filter((item) => item.status === "plus");
  } else if (outlayCheckbox.checked) {
    filteredHistoryArr = historyArr.filter((item) => item.status === "minus");
  } else {
    filteredHistoryArr = [];
  }
  historyList.innerHTML = "";

  filteredHistoryArr.forEach((item) => {
    const templateClone = document.importNode(template.content, true); // 복사하기
    const categoryElement = templateClone.querySelector("#category");
    const textElement = templateClone.querySelector("#text");
    const priceElement = templateClone.querySelector("#price");

    categoryElement.textContent = item.select;
    textElement.textContent = item.text;

    if (item.status === "minus") {
      priceElement.textContent = `-${Math.abs(item.price)}`;
      priceElement.classList.add("minus");
    } else if (item.status === "plus") {
      priceElement.textContent = `+${item.price}`;
      priceElement.classList.add("plus");
    }

    historyList.appendChild(templateClone); //초기 데이터 등록되게 하기
  });
  updateBalance();
  updateBalanceDisplay();
}

function updateBalanceDisplay() {
  plusBalance.innerText = plusTotal.toString();
  minusBalance.innerText = minusTotal.toString();
  wholeBalance.innerText = (
    parseFloat(plusBalance.innerText) - parseFloat(minusBalance.innerText)
  ).toString();
}

function updateBalance() {
  const plusItems = historyArr.filter((item) => item.status === "plus");
  const minusItems = historyArr.filter((item) => item.status === "minus");
  plusTotal = plusItems.reduce(
    (total, item) => total + parseFloat(item.price),
    0
  );
  minusTotal = minusItems.reduce(
    (total, item) => total + parseFloat(item.price),
    0
  );
  updateBalanceDisplay();
}

function deleteHistory(listItem) {
  const priceElement = listItem.querySelector("#price");
  const price = parseFloat(priceElement.textContent.replace(/[^\d.-]/g, ""));

  historyArr = historyArr.filter((item) => item.price !== price);
  listItem.remove();
  // historyArr에서 해당 항목을 제거

  // let storedData = localStorage.getItem("historyData");
  // if (storedData) {
  //   let localStorageData = JSON.parse(storedData);
  //   localStorageData = localStorageData.filter((item) => item.price !== price);
  //   localStorage.setItem("historyData", JSON.stringify(localStorageData));
  // } //주석풀오보기
  if (price > 0) {
    plusBalance.innerText = (
      parseFloat(plusBalance.innerText) - price
    ).toString();
  } else {
    minusBalance.innerText = (
      parseFloat(minusBalance.innerText) + price
    ).toString();
  }
  wholeBalance.innerText = (
    parseFloat(plusBalance.innerText) - parseFloat(minusBalance.innerText)
  ).toString();

  localStorage.setItem("historyData", JSON.stringify(historyArr));
}

document.addEventListener("click", function (event) {
  if (event.target && event.target.id === "delete") {
    const listItem = event.target.closest("ul");
    deleteHistory(listItem);
  }
});

loadAndDisplayData();

const inputForm = document.getElementById("input-form"); //전체 모달
const saveButton = inputForm.querySelector(".button.save");
const SelectCategory = inputForm.querySelector("#select-category"); // 종류 선택

function handleSaveButtonClick() {
  const SelectPlusMinus = inputForm.querySelector(".inout.modal"); //수입,지출 선택
  const textHolderContent = inputForm.querySelector(".content-input"); //내용 입력창
  const textHolderPrice = inputForm.querySelector(".price-input"); // 금액 입력창

  const inputStatus = SelectPlusMinus.value ? "minus" : "plus";
  const inputSelect = SelectCategory.value;
  const inputText = textHolderContent.value;
  const inputPrice = parseFloat(textHolderPrice.value);

  if (inputStatus === "minus") {
    plusBalance.innerText = parseFloat(plusBalance.innerText) + inputPrice;
  } else {
    minusBalance.innerText = parseFloat(minusBalance.innerText) - inputPrice;
  }
  wholeBalance.innerText =
    parseFloat(plusBalance.innerText) - parseFloat(minusBalance.innerText);

  const historyEntry = getHistoryObj(
    inputSelect,
    inputText,
    inputPrice,
    inputStatus
  );
  historyArr.push(historyEntry);

  localStorage.setItem("historyData", JSON.stringify(historyArr));

  addList(historyEntry);
  loadAndDisplayData();

  textHolderPrice.value = "";
  textHolderContent.value = "";
}

function addList(insertedHistory) {
  const historySection = document.getElementById("historylist-wrapper"); //타겟
  const Template = document.getElementById("history-template"); //템플릿

  const wrapper = document.createElement("ul");
  const categoryItem = document.createElement("li");
  const priceItem = document.createElement("li");
  const textItem = document.createElement("li");
  const deleteButton = document.createElement("button");
  const deleteIcon = document.createElement("i");

  wrapper.id = "historylist-items";
  categoryItem.id = "category";
  priceItem.id = "price";
  textItem.id = "text";

  deleteButton.id = "delete";
  deleteIcon.className = "fa-solid fa-x fa-2xs";
  deleteIcon.style.color = "#a8b6ca";

  deleteButton.appendChild(deleteIcon);

  categoryItem.innerText = insertedHistory.select;
  textItem.innerText = insertedHistory.text;

  if (insertedHistory.status === "minus") {
    priceItem.textContent = `-${Math.abs(insertedHistory.price)}`;
    priceItem.classList.add("minus");
  } else {
    priceItem.textContent = `+${insertedHistory.price}`;
    priceItem.classList.add("plus");
  }

  wrapper.appendChild(priceItem);
  wrapper.appendChild(textItem);
  wrapper.appendChild(categoryItem);
  wrapper.appendChild(deleteButton);
  historySection.appendChild(wrapper);

  historyArr.push(insertedHistory);
  localStorage.setItem("historyData", JSON.stringify(historyArr));
}

function modalOpen() {
  document.querySelector(".modal_wrap").style.display = "block";
  document.querySelector(".modal_background").style.display = "block"; // 모달 열기
}

function modalClose() {
  document.querySelector(".modal_wrap").style.display = "none";
  document.querySelector(".modal_background").style.display = "none";
} //모달 닫기

document.getElementById("modal_btn").addEventListener("click", function () {
  modalOpen();
  saveButton.addEventListener("click", handleSaveButtonClick);
});
document.querySelector(".button.close").addEventListener("click", function () {
  modalClose();
  saveButton.removeEventListener("click", handleSaveButtonClick);
});
document.getElementById("modal_close").addEventListener("click", modalClose); //모달 버튼 이벤트

updateSelectbox({ target: checkbox1 });

const signPlus = document.getElementById("checkbox1");
const signMinus = document.getElementById("checkbox2");

checkbox1.addEventListener("change", function () {
  if (checkbox1.checked) {
    checkbox2.checked = false;
  }
  updateSelectbox();
});

checkbox2.addEventListener("change", function () {
  if (checkbox2.checked) {
    checkbox1.checked = false;
  }
  updateSelectbox();
});

function updateSelectbox() {
  SelectCategory.innerHTML = "";
  const options = [];

  if (checkbox1.checked) {
    options.push("외주", "용돈");
  }

  if (checkbox2.checked) {
    options.push("식비", "교통비");
  }

  options.forEach(function (optionText) {
    const option = document.createElement("option");
    option.text = optionText;
    SelectCategory.appendChild(option);
  });
}

// 초기 설정: checkbox1을 선택한 상태로 시작
checkbox1.checked = true;
updateSelectbox();
