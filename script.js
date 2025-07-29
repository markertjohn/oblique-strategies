const strategies = [
  "Use an old idea",
  "Honor thy error as a hidden intention",
  "Repetition is a form of change",
  "When in doubt, keep it fun",
  "Use the whole animal"
  // Add your full list here
];

document.getElementById('draw').addEventListener('click', () => {
  const card = strategies[Math.floor(Math.random() * strategies.length)];
  document.getElementById('card').innerText = card;
});

