const inputForm = document.getElementById("input-form");
const inputPrice = inputForm.querySelector("input");
const myHistory = document.getElementById("history-list");
const categoryChange = document.getElementById("category");

function handleHistorySubmit(event) {
    function categoryChange


//   event.preventDefault();
//   const newHistory = inputPrice.value;
//   console.log(inputPrice.value); //새로운 변수에 복사
//   inputPrice.value = "";
// }

// inputForm.addEventListener("submit", handleHistorySubmit);


window.onload = function() {
 
    function onClick() {
        document.querySelector('.modal_wrap').style.display ='block';
        document.querySelector('.black_bg').style.display ='block';
    }   
    function offClick() {
        document.querySelector('.modal_wrap').style.display ='none';
        document.querySelector('.black_bg').style.display ='none';
    }
 
    document.getElementById('modal_btn').addEventListener('click', onClick);
    document.querySelector('.modal_close').addEventListener('click', offClick);
 
};