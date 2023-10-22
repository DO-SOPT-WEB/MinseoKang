import { HISTORY_DATA } from "./Data.js";

let historyData = [];
const initBalance = 0;

window.onload = () => {
  const historyData = JSON.parse(localStorage.getItem("history_data")); // localstorage 저장된 목록 가져오기
  mylist(historyData);
};

function mylist(list) {
  const historySection = document.getElementById("historylist-wrapper"); //타겟
  const historyTemplate = document.getElementById("history-template"); //템플릿
  historySection.innerHtml = "";
  list.forEach((item) => {
    let todocontent = historyTemplate.content.cloneNode(true);

    todocontent.querySelector("#category").textContent = item.category;
    todocontent.querySelector("#content").textContent = item.content;
    todocontent.querySelector("#amount").textContent = item.amount[0].name;

    historySection.appendChild(todocontent);
  });

  //모달 입력폼
  const inputForm = document.getElementById("input-form");
  const inputPrice = inputForm.querySelector(".price-input");
  const inputContent = inputForm.querySelector(".content-input");
  const myHistory = document.getElementById("historylist-wrapper");

  const lists_key = "데이터";
  let lists = []; //빈 배열임을 표시

  window.onload = () => {
    localStorage.setItem(lists_key, JSON.stringify(lists));
  };

  function makeList(contentPrice) {
    const wrapper = document.createElement("ul");

    const content = document.createElement("li");
    content.innerText = contentPrice;

    const deletion = document.createElement("button");
    deletion.innerText = "x";
    deletion.addEventListener("click", deleteHistory);

    wrapper.appendChild(content);
    wrapper.appendChild(deletion);
    myHistory.appendChild(wrapper);
  }

  function handleHistorySubmit(event) {
    event.preventDefault(); // 새로고침 방지

    const contentPrice = inputPrice.value; //새로운 변수에 복사
    const contentValue = inputContent.value; //
    //   console.log(`가격: ${contentPrice}`);
    //   console.log(`내용: ${contentValue}`);
    lists.push(contentPrice);
    makeList(contentPrice); //makelist로 전송
    //   saveList(contentPrice); //savelist로 전송
  }

  inputForm.addEventListener("submit", handleHistorySubmit);
  function deleteHistory(event) {
    const ul = event.target.parentElement;
    ul.remove();
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
}
