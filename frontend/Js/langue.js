// Définition de l'ensemble de questions pour le quiz
const Qts = [
  {
    num: 1,
    question: "Which language is spoken in Brazil?",
    correct: "Portuguese",
    option: ["Spanish", "French", "Portuguese", "Brazilian"],
  },
  {
    num: 2,
    question: "How do you call a person who masters languages?",
    correct: "Polyglot",
    option: ["Linguist", "Polyglot", "Philologist", "Lexicographer"],
  },

  {
    num: 3,
    question: "What does the expression 'Break a leg' mean in English?",
    correct: "Good luck",
    option: ["Good luck", "Congratulations", "Be careful", "Have fun"],
  },
  {
    num: 4,
    question: "What does ‘gracias’ mean in Spanish?",
    correct: "Thank you",
    option: ["Hello", "Goodbye", "Please", "Thank you"],
  },
  {
    num: 5,
    question:
      "What is the term for a word that is spelled the same forwards and backwards?",
    correct: "Palindrome",
    option: ["Homonym", "Palindrome", "Anagram", "Acronym"],
  },
];
document.getElementById("view-answers-btn-langue").onclick = function () {
  window.location.href = "langue.html";
};
