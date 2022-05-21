let navLinks = document.querySelectorAll(".navbar .navbar-nav .nav-link");
console.log(navLinks);
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.target.parentElement.parentElement
      .querySelectorAll(".active")
      .forEach((ele) => {
        ele.classList.remove("active");
      });
    e.target.classList.add("active");
  });
});

let filterFields = document.querySelectorAll(".our-work ul li");
let images = document.querySelectorAll(".our-work .row .image-div");
let imagesContainer = document.querySelector(".our-work .row");
console.log(images);

filterFields.forEach((field) => {
  field.addEventListener("click", function (e) {
    e.target.parentElement.querySelectorAll(".active").forEach((ele) => {
      ele.classList.remove("active");
    });
    e.target.classList.add("active", "rounded-pill");
    filtration(e.target);
  });
});

function filtration(param) {
  //   if(param.dataSet.filter === ){}
  images.forEach((img) => {
    img.style.cssText = "display: none";
    if (param.dataset.filter === "All") {
      img.style.cssText = "display: block";
    }
    if (img.classList.contains(param.dataset.filter)) {
      img.style.cssText = "display: block";
      imagesContainer.classList.add("text-center");
    }
  });
}
