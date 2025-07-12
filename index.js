// Your code here

const dodger = document.getElementById("dodger");
const game = document.getElementById("game"); 

function moveDodgerLeft() {
 
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

  function moveDodgerRight() {
  
  const currentLeftStyle = dodger.style.getPropertyValue("left");

  const left = parseFloat(currentLeftStyle);

  const rightBoundary = 360;

  if (left < rightBoundary) {
    dodger.style.left = `${left + 1}px`;
  }
}

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});