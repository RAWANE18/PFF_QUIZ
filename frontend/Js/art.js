// Définition de l'ensemble de questions pour le quiz
const Qts = [
  {
    num: 1,
    question: "What are the three primary colors in art?",
    correct: "Red, yellow, blue",
    option: [
      "Red, yellow, blue",
      "Green, orange, purple",
      "Black, white, gray",
      "Pink, turquoise, brown",
    ],
  },
  {
    num: 2,
    question:
      "What type of paint commonly used in fine art is the slowest to dry?",
    correct: "Oil",
    option: ["Acrylic", "Watercolor", "Oil", "Spray"],
  },

  {
    num: 3,
    question: "Which country is Pablo Picasso from?",
    correct: "Spain",
    option: ["Italy", "France", "Spain", "Greece"],
  },
  {
    num: 4,
    question: "What is the famous painting by Leonardo da Vinci?",
    correct: "Mona Lisa",
    option: [
      "The Annunciation",
      "Mona Lisa",
      "Madonna of the Rocks",
      " Ginevra de' Benci",
    ],
  },
  {
    num: 5,
    question: "What do artists use to mix and apply colors in their paintings?",
    correct: "Palette",
    option: ["Palette", " Easel", "Canvas", "Brush"],
  },
];
document.getElementById("view-answers-btn-art").onclick = function () {
  window.location.href = "art.html";
};
