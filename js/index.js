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