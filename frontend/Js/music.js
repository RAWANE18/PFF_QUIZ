// Définition de l'ensemble de questions pour le quiz
const Qts = [
  {
    num: 1,
    question:
      "Which song by One Direction became their debut single after finishing third on 'The X Factor' in 2010?",
    correct: "What Makes You Beautiful",
    option: [
      "What Makes You Beautiful",
      "Story of My Life",
      "Best Song Ever",
      "Drag Me Down",
    ],
  },
  {
    num: 2,
    question:
      "Which instrument is often associated with a full-sized keyboard and black and white keys?",
    correct: " Piano",
    option: ["Guitar", " Piano", "Trumpet", "Violin"],
  },

  {
    num: 3,
    question: "Which South Korean boy band released the song 'God's Menu' ?",
    correct: "Stray Kids",
    option: ["EXO", "NCT'", "Stray Kids", "BTS"],
  },
  {
    num: 4,
    question: " Who is known as 'The King of Pop'?",
    correct: "Michael Jackson",
    option: ["Michael Jackson", "Elvis Presley'", "Beyoncé", "Madonna"],
  },
  {
    num: 5,
    question:
      "Which Canadian singer-songwriter released the hit song 'Stitches' in 2015?",
    correct: "Shawn Mendes",
    option: ["Justin Bieber", "Drake'", "Shawn Mendes", "The Weeknd"],
  },
];
document.getElementById("view-answers-btn-music").onclick = function () {
  window.location.href = "music.html";
};
