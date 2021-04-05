const slide = document.querySelector('.cover1');
const img = document.querySelectorAll(' .cover1 .img1');
//const text = document.querySelectorAll('.h1');
const prevBtn = document.getElementById('btn1');
const nextBtn = document.getElementById('btn2');
const phot = document.querySelector(".img");

let index = 0;
const arryImg = ["rest6.jpeg", "rest3.jpeg", "rest1.jpeg", "rest2.jpeg"];
let status = 0;

setInterval(function () {
  status++;
  if (status > arryImg.length - 1) {
    status = 0;
  }
  phot.src = arryImg[status];
}, 5000);

prevBtn.addEventListener('click', function () {
  index--;
  if (index < 0) {
    index = img.length - 1;
  }
  slide.style.transform = "translateX(" + -index * 100 + "%)";

});
nextBtn.addEventListener('click', function () {
  index++;
  if (index > img.length - 1) {
    index = 0;
  }
  slide.style.transform = "translateX(" + -index * 100 + "%)";
});


const mainContainer = document.querySelector(".main-section");
const slideForwardBtn = document.querySelector(".slide-ForwardBtn");
const slideBackwardBtn = document.querySelector(".slide-BackwardBtn");
const mainArray = document.querySelectorAll("div.main-img-section");
let ind = 0;

slideForwardBtn.addEventListener("click", function () {
  ind++;
  if (ind > mainArray.length - 1) {
    ind = 0;
  }
  console.log(22)
  mainContainer.style.transform = "translateX(" + -ind * 55 + "%)";
});

slideBackwardBtn.addEventListener("click", function () {
  ind--;
  if (ind < 0) {
    ind = mainArray.length - 1;
  }
  console.log(22)
  mainContainer.style.transform = "translateX(" + -ind * 55 + "%)";
});



// show Details section 

//const viewBtn = document.querySelectorAll("h3.text-btn");
//const details = document.querySelector(".details");
const slideBtn = document.querySelector(".slide-button");
const container = document.getElementById("container");
const detailsSection = document.querySelector(".details-section");

// Details View buttons
const post1Btn = document.getElementById("post1-Btn");
const post2Btn = document.getElementById("post2-Btn");
const post3Btn = document.getElementById("post3-Btn");
const post4Btn = document.getElementById("post4-Btn");
const post5Btn = document.getElementById("post5-Btn");
const post6Btn = document.getElementById("post6-Btn");
// details show sections
const post1 = document.getElementById("post1");
const post2 = document.getElementById("post2");
const post3 = document.getElementById("post3");
const post4 = document.getElementById("post4");
const post5 = document.getElementById("post5");
const post6 = document.getElementById("post6");
// details cancel button
const detail1CancelBtn = document.getElementById("detail1-cancel");
const detail2CancelBtn = document.getElementById("detail2-cancel");
const detail3CancelBtn = document.getElementById("detail3-cancel");
const detail4CancelBtn = document.getElementById("detail4-cancel");
const detail5CancelBtn = document.getElementById("detail5-cancel");
const detail6CancelBtn = document.getElementById("detail6-cancel");

// details add button functions
post1Btn.addEventListener("click", () => {
  //container.style.display = "none";
  slideBtn.style.display = "none";
  post1.style.display = "flex";
});

post2Btn.addEventListener("click", () => {
  //container.style.display = "none";
  slideBtn.style.display = "none";
  post2.style.display = "flex";
});

post3Btn.addEventListener("click", () => {
  //container.style.display = "none";
  slideBtn.style.display = "none";
  post3.style.display = "flex";
});

post4Btn.addEventListener("click", () => {
  //container.style.display = "none";
  slideBtn.style.display = "none";
  post4.style.display = "flex";
});

post5Btn.addEventListener("click", () => {
  //container.style.display = "none";
  slideBtn.style.display = "none";
  post5.style.display = "flex";
});

post6Btn.addEventListener("click", () => {
  // container.style.display = "none";
  slideBtn.style.display = "none";
  post6.style.display = "flex";
});

// details cancel button functions
detail1CancelBtn.addEventListener("click", function () {
  container.style.display = "block";
  slideBtn.style.display = "flex";
  post1.style.display = "none";
});

detail2CancelBtn.addEventListener("click", function () {
  container.style.display = "block";
  slideBtn.style.display = "flex";
  post2.style.display = "none";
});

detail3CancelBtn.addEventListener("click", function () {
  container.style.display = "block";
  slideBtn.style.display = "flex";
  post3.style.display = "none";
  console.log(22)
});

detail4CancelBtn.addEventListener("click", function () {
  container.style.display = "block";
  slideBtn.style.display = "flex";
  post4.style.display = "none";
});

detail5CancelBtn.addEventListener("click", function () {
  container.style.display = "block";
  slideBtn.style.display = "flex";
  post5.style.display = "none";
});

detail6CancelBtn.addEventListener("click", function () {
  container.style.display = "block";
  slideBtn.style.display = "flex";
  post6.style.display = "none";
});