// import { historyList } from "./Data.js";

// const historylistForm = document.getElementById("history-template");
// const

// function accountdetails(list) {
//   const historySection = document.getElementsByClassName("history-wrapper"); //내역 영역 전체를 차지하는 부모 노드
//   const historyTemplate = document.getElementById("history-template"); //컨텐츠를 차지하는 템플릿

//   historyWrapper.replaceChildren();
//     list.forEach((category, content, amount, button) => {
//       let historyListNewHtml = accountdetails()
//   } ));
// }

// 모달 열기
function modalOpen() {
  document.querySelector(".modal_wrap").style.display = "block";
  document.querySelector(".modal_background").style.display = "block";
}

// 모달 끄기
function modalClose() {
  document.querySelector(".modal_wrap").style.display = "none";
  document.querySelector(".modal_background").style.display = "none";
}

//버튼 클릭리스너 달기
document.querySelector("#modal_btn").addEventListener("click", modalOpen);
document.querySelector("#modal_close").addEventListener("click", modalClose);

function deleteHistory(event) {
  const ul = event.target.parentElement;
  ul.remove();
}

//모달 입력 정보
const inputForm = document.getElementById("input-form");
const inputPrice = inputForm.querySelector("input");
const myHistory = document.getElementById("historylist-wrapper");

function makeList(newHistory) {
  const wrapper = document.createElement("ul");

  const content = document.createElement("li");
  content.innerText = newHistory;

  const deletion = document.createElement("button");
  deletion.innerText = "x";
  deletion.addEventListener("click", deleteHistory);

  wrapper.appendChild(content);
  wrapper.appendChild(deletion);
  myHistory.appendChild(wrapper);
}

function handleHistorySubmit(event) {
  event.preventDefault(); // 새로고침 방지
  const newHistory = inputPrice.value; //새로운 변수에 복사
  inputPrice.value = "";
  makeList(newHistory); //makelist로 전송
}

inputForm.addEventListener("submit", handleHistorySubmit);
