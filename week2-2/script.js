import { HISTORY_DATA } from "./Data.js";

let historyArr = [];
let initBalance = 0;

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

function loadAndDisplayData() {
  let storedData = localStorage.getItem("historyData");
  if (!storedData) {
    localStorage.setItem("historyData", JSON.stringify(HISTORY_DATA));
    storedData = JSON.stringify(HISTORY_DATA);
  }

  historyArr = JSON.parse(storedData);

  historyList.innerHTML = "";
  historyArr.forEach((item) => {
    const templateClone = document.importNode(template.content, true); // 복사하기
    const categoryElement = templateClone.querySelector("#category");
    const textElement = templateClone.querySelector("#text");
    const priceElement = templateClone.querySelector("#price");

    categoryElement.textContent = item.select;
    textElement.textContent = item.text;
    priceElement.textContent = item.price;
    console.log(historyArr);

    if (item.status === "minus") {
      priceElement.textContent = `-${Math.abs(item.price)}`;
      priceElement.classList.add("minus");
    } else if (item.status === "plus") {
      priceElement.textContent = `+${item.price}`;
      priceElement.classList.add("plus");
    }

    historyList.appendChild(templateClone); //초기 데이터 등록되게 하기
  });
}

function updateBalance() {
  const plusItems = historyArr.filter((item) => item.status === "plus");
  const minusItems = historyArr.filter((item) => item.status === "minus"); // 빨간색, 파란색, - 뜨게 하기
  const plusTotal = plusItems.reduce((total, item) => total + item.price, 0);
  const minusTotal = minusItems.reduce((total, item) => total + item.price, 0);

  const finalBalance = plusTotal - minusTotal;
  plusBalance.innerText = plusTotal;
  minusBalance.innerText = minusTotal;
  wholeBalance.innerText = finalBalance;

  loadAndDisplayData();
} //총 자산 계산 }
updateBalance();
window.onload = () => {
  loadAndDisplayData();
};

const deleteHistory = document.getElementById("historylist-wrapper");
deleteHistory.addEventListener("click", function (event) {
  if (event.target && event.target.id === "delete") {
    const listItem = event.target.closest("ul"); // "삭제" 버튼이 속한 부모 <ul> 요소를 찾기
    const priceElement = listItem.querySelector("#price");
    const price = priceElement.value;

    historyArr = historyArr.filter((item) => item !== historyArr[listItem]);

    let storedData = localStorage.getItem("historyData");
    if (storedData) {
      let localStorageData = JSON.parse(storedData);
      localStorageData = localStorageData.filter(
        (item) => item.price !== price
      );
      localStorage.setItem("historyData", JSON.stringify(localStorageData));
    }
    if (price > 0) {
      plusBalance.value = plusBalance.value - price;
    } else {
      minusBalance.value = minusBalance.value + price;
    }
    wholeBalance.value = wholeBalance.value - price;
    listItem.remove();
    loadAndDisplayData();
  }
}); //삭제 가능하게 하는 코드

//모달 입력폼
const inputForm = document.getElementById("input-form"); //전체 모달
const saveButton = inputForm.querySelector(".button.save");

saveButton.addEventListener("click", function () {
  const SelectPlusMinus = inputForm.querySelector(".inout.modal"); //수입,지출 선택
  const SelectCategory = inputForm.querySelector("#select-category"); // 종류 선택
  const textHolderContent = inputForm.querySelector(".content-input"); //내용 입력창
  const textHolderPrice = inputForm.querySelector(".price-input"); // 금액 입력창

  const inputStatus = SelectPlusMinus.value ? "minus" : "plus";
  const inputSelect = SelectCategory.value;
  const inputText = textHolderContent.value;
  const inputPrice = textHolderPrice.value;

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

  function addList(insertedHistory) {
    const historySection = document.getElementById("historylist-wrapper"); //타겟
    const Template = document.getElementById("history-template"); //템플릿

    const signPlus = document.getElementById("checkbox1");
    const signMinus = document.getElementById("checkbox2");

    const wrapper = document.createElement("ul");
    const categoryItem = document.createElement("li");
    const priceItem = document.createElement("li");
    const textItem = document.createElement("li");
    const deleteButton = document.createElement("button");

    categoryItem.id = "category";
    priceItem.id = "price";
    textItem.id = "text";
    deleteButton.id = "delete"; //

    categoryItem.innerText = insertedHistory.select;
    textItem.innerText = insertedHistory.text;

    if (signMinus.checked) {
      priceItem.textContent = `-${Math.abs(insertedHistory.price)}`;
      priceItem.classList.add("minus");
    } else if (signPlus.checked) {
      priceItem.textContent = `+${insertedHistory.price}`;
      priceItem.classList.add("plus");
    }

    wrapper.appendChild(priceItem);
    wrapper.appendChild(textItem);
    wrapper.appendChild(categoryItem);
    wrapper.appendChild(deleteButton);
    historySection.appendChild(wrapper);
  }
});

// 모달 열기
function modalOpen() {
  document.querySelector(".modal_wrap").style.display = "block";
  document.querySelector(".modal_background").style.display = "block";
}

function modalClose() {
  document.querySelector(".modal_wrap").style.display = "none";
  document.querySelector(".modal_background").style.display = "none";
}

document.getElementById("modal_btn").addEventListener("click", modalOpen);
document.querySelector(".button.close").addEventListener("click", modalClose);
document.getElementById("modal_close").addEventListener("click", modalClose);

//수입, 지출에 따라 선택 달라지게

const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");
const signing = document.getElementById("select-category");

function updateSelectbox(event) {
  signing.innerHTML = "";
  if (checkbox1.checked) {
    const options = ["알바", "용돈"];
    options.forEach(function (optionText) {
      const option = document.createElement("option");
      option.text = optionText;
      signing.appendChild(option);
    });
  } else if (checkbox2.checked) {
    const options = ["식비", "교통비"];
    options.forEach(function (optionText) {
      const option = document.createElement("option");
      option.text = optionText;
      signing.appendChild(option);
    });
  }
}

checkbox1.addEventListener("change", updateSelectbox);
checkbox2.addEventListener("change", updateSelectbox);
// updateSelectbox();
