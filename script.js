const strategies = [
  "Use an old idea",
  "Honor thy error as a hidden intention",
  "Repetition is a form of change",
  "When in doubt, keep it fun",
  "Use the whole animal"
  // Add all 23 here later
];

document.getElementById('draw').addEventListener('click', () => {
  const card = strategies[Math.floor(Math.random() * strategies.length)];
  const cardElement = document.getElementById('card');
  cardElement.classList.remove('show');
  setTimeout(() => {
    cardElement.innerText = card;
    cardElement.classList.add('show');
  }, 300);
});
