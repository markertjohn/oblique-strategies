const strategies = [
  "Use an old idea",
  "Honor thy error as a hidden intention",
  "Cascades are sometimes small",
  "Repetition is a form of change",
  "When is it for? Who is it for?",
  "Look closely at the most embarrassing details and amplify them",
  "Use an unacceptable color",
  "Destroy nothing; destroy the most important thing",
  "Trust in the you of now",
  "Consider different fading systems",
  "Let the silence lead",
  "Move toward the mistake",
  "Collapse the structure",
  "Turn the background into the foreground",
  "Ask the sound what it wants",
  "What to increase? What to reduce?",
  "Gardening not architecture",
  "Don't be frightened to display your talents",
  "Once the search is in progress, something will be found",
  "Gardening not architecture",
  "Use the whole animal",
  "When in doubt, keep it fun"
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
