const banner = document.querySelector(".banner");
const prevBtn = document.querySelector(".main-slider-btn-prev");
const nextBtn = document.querySelector(".main-slider-btn-next");
let counterImg = 0;

const images = [
  "images/banner-ap-ui@1X.png",
  "images/053debeb9a39810a7a4872651cd4ba15.jpg",
  "images/15583195591_a57d595bb2_k.jpg",
  "images/poberezhe_more_pliazh_180396_2560x1440.jpg",
  "images/poberezhe_pliazh_more_180184_2560x1440.jpg",
];

const setImg = () => {
  banner.style.backgroundImage = `url(${images[counterImg]})`;
};

const prevImg = () => {
  if (counterImg == 0) {
    counterImg = images.length - 1;
  } else {
    counterImg -= 1;
  }

  setImg();
  changeColor(circles, paint);
};

const nextImg = () => {
  if (counterImg == images.length - 1) {
    counterImg = 0;
  } else {
    counterImg += 1;
  }

  setImg();
  changeColor(circles, paint);
};

const sliderInterval = setInterval(() => {
  nextImg();
}, 4000);

prevBtn.onclick = prevImg;
nextBtn.onclick = nextImg;

const parent = document.querySelector(".banner");
const wrapperCircles = document.querySelector(".group-circles");
let marginCount = 0;

for (let i = 0; i < images.length; i++) {
  let circle = document.createElement("div");
  circle.setAttribute("data-number", i);
  circle.classList.add("circle");
  wrapperCircles.append(circle);
  circle.style.marginRight += marginCount + "px";
  marginCount += 25;
}
parent.append(wrapperCircles);

const circles = document.querySelectorAll(".group-circles .circle");

for (let i = 0; i < circles.length; i++) {
  circles[i].onclick = function () {
    counterImg = parseFloat(this.dataset.number);

    setImg();
    changeColor(circles, paint);
  };
}

const paint = (elem) => {
  circles[elem].classList.add("active");
};

paint(counterImg);

const changeColor = (arr, func) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].classList.contains("active")) {
      arr[i].classList.remove("active");
    }
  }

  func(counterImg);
};
