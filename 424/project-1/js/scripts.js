const checkbox = document.getElementById("scale-checkbox");
const elementToScale = document.querySelector(".element-to-scale");


checkbox.addEventListener("change", function() {
  if (checkbox.checked) {
    elementToScale.classList.add("scale-up");
  } else {
    elementToScale.classList.remove("scale-up");
  }
  
});
