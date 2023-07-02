const list = document.querySelectorAll(".imgSlader ul li")
const buttons = document.querySelectorAll(".imgSlader .imgSlader__button")
const prevButton = document.querySelector(".imgSlader__button--previous");
const nextButton = document.querySelector(".imgSlader__button--next");
let currentIndex = 0;

list.forEach((li,index) =>{
   
})
prevButton.addEventListener("click", function () {
    currentIndex = (currentIndex-1 < 0) ?0 : currentIndex-1;
    nextButton.classList.remove("dNone")
    if(currentIndex == 0){
        prevButton.classList.add("dNone")
    }
    showSlide(currentIndex)
  });
  nextButton.addEventListener("click", function () {
    currentIndex = (currentIndex+1 < list.length) ?currentIndex+1 : 0;
    prevButton.classList.remove("dNone")
    if(currentIndex+1 == list.length){
        nextButton.classList.add("dNone")
    }
    showSlide(currentIndex)
  });
// buttons.forEach((button, index) => {
//     if (index === 0) {
//       button.addEventListener("click", function () {
//         currentIndex = (currentIndex-1 < 0) ?0 : currentIndex-1;

//         showSlide(currentIndex)
//       });
//     } else {
//       button.addEventListener("click", function () {
//         currentIndex = (currentIndex+1 < list.length) ?currentIndex+1 : 0;

//         showSlide(currentIndex)
//       });
//     }
//   });

  function showSlide(index) {
    list.forEach((slide) => {
      slide.classList.remove("active");
    });
    list[index].classList.add("active");
  }
// feedBackCurrentIndex =
//         (feedBackCurrentIndex - 1 + feedBackComments.length) %
//         feedBackComments.length;