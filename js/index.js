// Storing Product Info:
function addToCart(btn) {
  const product = btn.closest('.product');
  const id = product.dataset.id;
  const price = product.dataset.price;
  console.log(`Adding product ${id} with price ${price}`);
}
// Toggle Sections (Accordion):
function toggleAnswer(btn) {
  const targetId = btn.dataset.target;
  const target = document.querySelector(targetId);
  target.style.display = target.style.display === 'none' ? 'block' : 'none';
}
// Multilingual Content:
function switchLanguage(lang) {
  document.querySelectorAll('[data-lang-en]').forEach(el => {
    el.textContent = el.dataset[`lang${lang}`];
  });
}
// Image Gallery Thumbnails:
function previewImage(img) {
  const full = img.dataset.full;
  document.getElementById('preview').src = full;
}
// Quiz Questions:
function checkAnswer(btn) {
  if (btn.dataset.correct === 'true') {
    alert("Correct!");
  } else {
    alert("Try again!");
  }
}
// Tracking User Actions (Analytics):
function track(btn) {
  const action = btn.dataset.action;
  console.log(`User did: ${action}`);
  // send to analytics server
}
// Dynamic Form Field Rules:
function validateInput(input) {
  if (input.dataset.required === 'true' && input.value === '') {
    alert("This field is required.");
  }
  if (input.dataset.maxlength && input.value.length > input.dataset.maxlength) {
    alert("Too long!");
  }
}
// Carousel/Slider Dots:
document.querySelectorAll('.dot').forEach(dot => {
  dot.addEventListener('click', () => {
    const index = dot.dataset.slide;
    goToSlide(index);
  });
});

const dragElement = document.getElementById("dragMe");

  dragElement.addEventListener("dragstart", function(event) {
    event.dataTransfer.setData("text", event.target.id);
  });

  document.addEventListener("dragover", function(event) {
    event.preventDefault(); // Needed to allow dropping
  });

  document.addEventListener("drop", function(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const draggedElement = document.getElementById(data);
    draggedElement.style.position = "absolute";
    draggedElement.style.left = event.clientX + "px";
    draggedElement.style.top = event.clientY + "px";
  });
// Shopping Cart (Drag product to cart):
  document.getElementById("product").addEventListener("dragstart", e => {
  e.dataTransfer.setData("text", e.target.id);
});

document.getElementById("cart").addEventListener("dragover", e => {
  e.preventDefault();
});

document.getElementById("cart").addEventListener("drop", e => {
  e.preventDefault();
  const id = e.dataTransfer.getData("text");
  const product = document.getElementById(id);
  e.target.appendChild(product);
});
