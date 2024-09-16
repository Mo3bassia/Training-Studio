let nav = document.querySelector("header");
let welcomeInfo = nav.nextElementSibling;

window.onscroll = function () {
  if (window.scrollY > 100) {
    nav.classList.add("top");
    // welcomeInfo.style.paddingTop = window
    //   .getComputedStyle(nav)
    //   .getPropertyValue("height");
  } else {
    nav.classList.remove("top");
    // welcomeInfo.style.paddingTop = 0;
  }
};

let choises = document.querySelector(".choises ul");
let paragraphChange = document.querySelector(".result p");
let numberChange = document.querySelector(".result h4 span");
let imageChange = document.querySelector(".result img");
let paragraphs = [
  "First Phasellus convallis mauris sed elementum vulputate. Donec posuere leo sed dui eleifend hendrerit. Sed suscipit suscipit erat, sed vehicula ligula. Aliquam ut sem fermentum sem tincidunt lacinia gravida aliquam nunc. Morbi quis erat imperdiet, molestie nunc ut, accumsan diam.",
  "Second Integer dapibus, est vel dapibus mattis, sem mauris luctus leo, ac pulvinar quam tortor a velit. Praesent ultrices erat ante, in ultricies augue ultricies faucibus. Nam tellus nibh, ullamcorper at mattis non, rhoncus sed massa. Cras quis pulvinar eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  "Third Fusce laoreet malesuada rhoncus. Donec ultricies diam tortor, id auctor neque posuere sit amet. Aliquam pharetra, augue vel cursus porta, nisi tortor vulputate sapien, id scelerisque felis magna id felis. Proin neque metus, pellentesque pharetra semper vel, accumsan a neque.",
];

Array.from(choises.children).forEach((e) => {
  e.onclick = function () {
    Array.from(choises.children).forEach((all) => {
      all.classList.remove("active");
    });
    let currentIndex = Array.from(choises.children).indexOf(this);
    this.classList.add("active");
    paragraphChange.textContent = paragraphs[currentIndex];
    imageChange.src = `images/training-image-0${currentIndex + 1}.jpg`;
    numberChange.textContent = this.getAttribute("data-set");
  };
});
