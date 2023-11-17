const windowHeight = window.innerHeight;
const topButton = document.getElementById("top_button");
const moreInfoBtn = document.createElement("button");
moreInfoBtn.innerHTML = "더보기";
moreInfoBtn.classList.add("moreInfoBtn");

document.addEventListener("scroll", () => {
  topButton.style.opacity = window.scrollY / (windowHeight * 2);
}); // 스크롤시 탑버튼 선명해짐

const springContainers = document.querySelectorAll(".part.spring");
let description = document.querySelector(".description");
