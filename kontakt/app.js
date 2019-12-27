const bird = document.querySelector("img.contactPic");
const btn = document.querySelector("button.btn");

const moveBird = function() {
  bird.classList.add("jumpIt");
  let randNum = "sepia(" + Math.random() * 1.1 + ")"; //ES5 : `sepia(${Math.random()*1.1})`
  bird.style.filter = randNum;
};

bird.addEventListener("click", moveBird);
btn.addEventListener("click", function() {
  location.href = "../thx.html";
});
