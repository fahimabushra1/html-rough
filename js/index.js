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
// drag and drop:
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
// Temporarily Hide a "Thank You" Message:
  function showMessage() {
    document.getElementById("thankYouMsg").hidden = false;
  }

  // Simulate admin login
const isAdmin = true;
if (isAdmin) {
  document.getElementById("adminPanel").hidden = false;
}
// Multi-Step Form:
  function next() {
    document.getElementById("step1").hidden = true;
    document.getElementById("step2").hidden = false;
  }
// modal using inert:
   const modal = document.getElementById('modal');
    const content = document.getElementById('content');
    const backdrop = document.getElementById('backdrop');

    function openModal() {
      modal.showModal();
      content.inert = true;
      backdrop.classList.add('active');
    }

    function closeModal() {
      modal.close();
      content.inert = false;
      backdrop.classList.remove('active');
    }

//  Extended input fields with validation:
    class EmailInput extends HTMLInputElement {
  connectedCallback() {
    this.addEventListener('blur', () => {
      if (!this.value.includes('@')) {
        this.setCustomValidity('Invalid email!');
      } else {
        this.setCustomValidity('');
      }
    });
  }
}

customElements.define('email-input', EmailInput, { extends: 'input' });

// fancy btn:
class FancyButton extends HTMLButtonElement {
  connectedCallback() {
    this.style.color = 'red';
    this.addEventListener('click', () => {
      alert('Fancy Button Clicked!');
    });
  }
}
// part attribute:
customElements.define('fancy-button', FancyButton, { extends: 'button' });


 class DialogBox extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });

      shadow.innerHTML = `
        <style>
          :host {
            display: block;
            border: 1px solid #ccc;
            border-radius: 8px;
            overflow: hidden;
            width: 300px;
            font-family: sans-serif;
          }
        </style>
        <header part="header">Dialog Title</header>
        <section part="body">Dialog Content</section>
        <footer part="footer">Close</footer>
      `;
    }
  }
// role attribute:
  customElements.define('dialog-box', DialogBox);


    function submitForm() {
    alert('Form submitted!');
  }

  function handleKey(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();  // Prevent scrolling on Space
      submitForm();
    }
  }