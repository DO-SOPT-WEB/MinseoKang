import { HISTORY_DATA } from "./Data.js";

let historyArr = [];
let initBalance = 0;

function getHistoryObj(select, text, price) {
  return {
    select: select,
    text: text,
    price: price,
  };
}

const historyList = document.getElementById("historylist_items");
const template = document.getElementById("history-template");
const plusBalance = document.getElementsByClassName("asset-type-plus")[0];
const minusBalance = document.getElementsByClassName("asset-type-minus")[0];
const wholeBalance = document.getElementById("balance");

window.onload = () => {
  let storedData = JSON.stringify(HISTORY_DATA);
  localStorage.setItem("historyData", storedData);
  let bringData = JSON.parse(localStorage.getItem("historyData"));

  bringData.forEach((item) => {
    const templateClone = document.importNode(template.content, true); // 복사하기
    const categoryElement = templateClone.querySelector("#category");
    const textElement = templateClone.querySelector("#text");
    const priceElement = templateClone.querySelector("#price");

    categoryElement.textContent = item.select;
    textElement.textContent = item.text;
    priceElement.textContent = item.price[0].name;

    if (item.price[0].status === "minus") {
      priceElement.textContent = `-${Math.abs(item.price[0].name)}`;
      priceElement.classList.add("minus");
    } else if (item.price[0].status === "plus") {
      priceElement.textContent = `+${item.price[0].name}`;
      priceElement.classList.add("plus");
    }

    historyList.appendChild(templateClone);
  });

  const plusItems = bringData.filter((item) => item.price[0].status === "plus");
  const minusItems = bringData.filter(
    (item) => item.price[0].status === "minus"
  );
  const plusTotal = plusItems.reduce(
    (total, item) => total + item.price[0].name,
    0
  );
  const minusTotal = minusItems.reduce(
    (total, item) => total + item.price[0].name,
    0
  );

  const finalBalance = plusTotal - minusTotal;
  plusBalance.innerText = plusTotal;
  minusBalance.innerText = minusTotal;
  wholeBalance.innerText = finalBalance;
};

// if (item.price[0].status === "minus") {
//   priceElement.textContent

//   pric
// }

//모달 입력폼
const inputForm = document.getElementById("input-form"); //전체 모달
const SelectPlusMinus = inputForm.querySelector(".inout.modal"); //수입,지출 선택
const SelectCategory = inputForm.querySelector("#select-category"); // 종류 선택
const inputPrice = inputForm.querySelector(".price-input"); // 금액 입력창
const inputContent = inputForm.querySelector(".content-input"); //내용 입력창
const myHistory = document.getElementById("historylist-wrapper"); //스크롤 되는 영역

function mylist() {
  const historySection = document.getElementById("historylist-wrapper"); //타겟
  const Template = document.getElementById("history-template"); //템플릿

  historySection.innerHTML = "";
  historyArr.forEach((item) => {
    let historycontent = Template.content.cloneNode(true);

    historycontent.querySelector("#category").textContent = item.select;
    historycontent.querySelector("#content").textContent = item.text;
    historycontent.querySelector("#amount").textContent = item.price;

    historySection.appendChild(historycontent);
  });

  const wrapper = document.createElement("ul");
  const priceItem = document.createElement("li");
  const contentItem = document.createElement("li");
  const categoryItem = document.createElement("li");

  inputPrice.innerText = insertedHistory.price;

  wrapper.appendChild(priceItem);
  wrapper.appendChild(contentItem);
  wrapper.appendChild(categoryItem);
  myHistory.appendChild(wrapper);
}

function handleHistorySubmit(event) {
  event.preventDefault(); // 새로고침 방지
  const signing = SelectPlusMinus.value;
  const select = SelectCategory.value;
  const price = parseFloat(inputPrice.value);
  const content = inputContent.value;

  if (signing === "plus" || signing === "minus") {
    const historyEntry = getHistoryObj(signing, content, price);
    historyArr.push(historyEntry);
    mylist(historyEntry);

    inputPrice.value = "";
    inputContent.value = "";
  } //새로운 변수에 복사

  inputForm.addEventListener("submit", handleHistorySubmit);
}

// 모달 열기
function modalOpen() {
  document.querySelector(".modal_wrap").style.display = "block";
  document.querySelector(".modal_background").style.display = "block";
}

function modalClose() {
  document.querySelector(".modal_wrap").style.display = "none";
  document.querySelector(".modal_background").style.display = "none";
}

document.querySelector("#modal_btn").addEventListener("click", modalOpen);
document.querySelector("#modal_close").addEventListener("click", modalClose);

//수입, 지출에 따라 선택 달라지게

const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");
const signing = document.getElementById("select");

function updateSelectbox(event) {
  signing.innerHTML = "";
  // const targetId = event.target.id;
  // console.log(targetId);

  // if targetId {

  // }
  if (checkbox1.checked) {
    checkbox2.checked = false;
    const options = ["용돈", "음식"];
    options.forEach(function (optionText) {
      const option = document.createElement("option");
      option.text = optionText;
      signing.appendChild(option);
    });
  } else if (checkbox2.checked) {
    checkbox2.checked = false;
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
