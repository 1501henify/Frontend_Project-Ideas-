// DOM elements
const messageInput = document.getElementById('message');
const designSelector = document.getElementById('design');
const previewButton = document.getElementById('preview-btn');
const cardPreview = document.getElementById('card-preview');
const cardMessage = document.getElementById('card-message');

// Adds an event listener to the "Preview" button
previewButton.addEventListener('click', () => {
  // Gets the user's message and selected design
  const userMessage = messageInput.value.trim();
  const selectedDesign = designSelector.value;

  // Update the card message
  cardMessage.textContent =
    userMessage || 'Your holiday message will appear here!';

  // Clears existing design classes
  cardPreview.classList.remove('design1', 'design2', 'design3');

  // Applies the selected design to the card preview
  cardPreview.classList.add(selectedDesign);
});

// Snowing
for (let i = 0; i < 50; i++) {
  const snowFlake = document.createElement('div');
  snowFlake.className = 'snowflake';
  snowFlake.style.left = `${Math.random() * 100}vw`;
  snowFlake.style.width = `${Math.random() * 5 + 2}px`;
  snowFlake.style.height = snowFlake.style.width;
  snowFlake.style.animationDelay = `${Math.random() * 10}s`;
  document.body.appendChild(snowFlake);
}
