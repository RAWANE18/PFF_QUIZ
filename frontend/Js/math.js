// Définition de l'ensemble de questions pour le quiz
const Qts = [
  {
    num: 1,
    question: "What is the result of 25 multiplied by 4, plus 10?",
    correct: "110",
    option: ["100", "110", " 120", "130"],
  },
  {
    num: 2,
    question:
      "What is the perimeter of a rectangle with a length of 8 units and a width of 5 units?",
    correct: "26 units",
    option: [" 10 units", "18 units", "26 units", "40 units"],
  },

  {
    num: 3,
    question: "if 2x−5=11, what is the value of  x?",
    correct: "8",
    option: ["3", "4", "6", "8"],
  },
  {
    num: 4,
    question: "What is the result of 15+3×2?",
    correct: "21",
    option: ["18", "27", "21", " 30"],
  },
  {
    num: 5,
    question: "3y+7=16, what is the value of y?",
    correct: "3",
    option: ["3", "4", "5", "6"],
  },
];
document.getElementById("view-answers-btn-math").onclick = function () {
  window.location.href = "math.html";
};
