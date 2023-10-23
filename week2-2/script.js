import { HISTORY_DATA } from "./Data.js";

let historyArr = [];
let initBalance = 0;

function getHistoryObj(select, text, price) {
  return {
    id: String(Date.now()),
    select: select,
    text: text,
    price: price,
  };
}

window.onload = () => {
  let storedData = JSON.parse(localStorage.getItem("history_data")); // localstorage 저장된 목록 가져오기
  if (!Array.isArray(storedData)) {
    localStorage.setItem("history_data", JSON.stringify(HISTORY_DATA));
    storedData = HISTORY_DATA;
  }
  historyArr = storedData;
  mylist();
};

function mylist() {
  const historySection = document.getElementById("historylist-wrapper"); //타겟
  const historyTemplate = document.getElementById("history-template"); //템플릿
  historySection.innerHTML = "";

  historyArr.forEach((item) => {
    let historycontent = historyTemplate.content.cloneNode(true);

    historycontent.querySelector("#category").textContent = item.select;
    historycontent.querySelector("#content").textContent = item.text;
    historycontent.querySelector("#amount").textContent = item.price;

    historySection.appendChild(historycontent);
  });

  //모달 입력폼
  const inputForm = document.getElementById("input-form"); //전체 모달
  const SelectPlusMinus = inputForm.querySelector(".inout.modal"); //수입,지출 선택
  const SelectCategory = inputForm.querySelector("#select-category"); // 종류 선택
  const inputPrice = inputForm.querySelector(".price-input"); // 금액 입력창
  const inputContent = inputForm.querySelector(".content-input"); //내용 입력창
  const myHistory = document.getElementById("historylist-wrapper"); //스크롤 되는 영역

  function paintHistory(insertedHistory) {
    const wrapper = document.createElement("ul");
    const inputPrice = document.createElement("li");
    const inputItem = document.createElement("li");
    const inputCategory = document.createElement("li");

    inputPrice.innerText = insertedHistory.price;
    inputItem.innnerText = insertedHistory.text;
    inputCategory.innerText = insertedHistory.select;

    wrapper.appendChild(inputPrice);
    wrapper.appendChild(inputItem);
    wrapper.appendChild(inputCategory);
    myHistory.appendChild(wrapper);
  }

  function handleHistorySubmit(event) {
    event.preventDefault(); // 새로고침 방지

    const select = SelectPlusMinus.value;
    const category = SelectCategory.value;
    const price = parseFloat(inputPrice.value);
    const content = inputContent.value;

    const historyEntry = getHistoryObj(select, content, price);

    historyArr.push(historyEntry); //historyEntry로 전송
    paintHistory(historyEntry); //paintHistory로 전송

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
