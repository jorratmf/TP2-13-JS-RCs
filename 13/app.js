const inputText = document.querySelector('.input-text');
const outputText = document.querySelector('.output-text');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  const text = inputText.value.toUpperCase();
  outputText.textContent = text;
});