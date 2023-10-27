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

springContainers.forEach((springContainer) => {
  springContainer.addEventListener("mouseenter", () => {
    let detailText = springContainer.querySelector(".description");
    let title = description.querySelector("p.title");
    let detail = description.querySelector("p.detail");
  });
});
// if (detailText.length >= 94) {
//   springContainer.classList.add("moreInfo");
//   let description = springContainer.querySelector(".description");
//   if (!description.querySelector(".moreInfoBtn")) {
//     description.appendChild(moreInfoBtn);
//   }

// detail.style.display = "-webkit-box";
// moreInfoBtn.style.display = "block";

// const contents = document.querySelectorAll(".content");
// contents.forEach((content) => {
//   const contentDescription = content.children[1];
//   if (contentDescription.innerText.length >= 85) {
//     const moreBtn = document.createElement("button"); //button 요소 생성
//     moreBtn.innerText = "more";
//     moreBtn.setAttribute("class", "content-more-btn"); //button 클래스명 지정

//     content.appendChild(moreBtn);

//     /* 클릭 이벤트시 버튼 사라짐 */
//     content.addEventListener("click", () => {
//       contentDescription.style.display = "block"; //말줄임 표시를 없앰
//       moreBtn.style.display = "none";
//     });
//   }
// });

// /* 미리보기 섹션 스크롤 버튼 */
// const preveiwLeftBtn = document.getElementById("scroll-left-btn");
// const previewlRightBtn = document.getElementById("scroll-right-btn");

// const onboardingScroll = document.getElementById("onboarding-scroll");
// const maxScrollWidth = onboardingScroll.scrollWidth;

// scrollLeftBtn.addEventListener("click", () => {
//   onboardingScroll.scrollTo({ top: 0, left: 0, behavior: "smooth" });
// });

// scrollRightBtn.addEventListener("click", () => {
//   onboardingScroll.scrollTo({
//     top: 0,
//     left: maxScrollWidth,
//     behavior: "smooth",
//   });
// });
