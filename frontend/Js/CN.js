const Qts = [
  {
    num: 1,
    question: "What is the capital city of Australia?",
    correct: "Canberra",
    option: ["Canberra", "Sydney", "Melbourne", "Brisbane"],
  },
  {
    num: 2,
    question:
      "Who is known for the theory of relativity and the equation E=mc^2?",
    correct: "Albert Einstein",
    option: [
      "Isaac Newton",
      "Marie Curie",
      "Galileo Galilei",
      "Albert Einstein",
    ],
  },

  {
    num: 3,
    question: "What is the longest river in the world?",
    correct: "Nile River",
    option: [
      "Nile River",
      "Amazon River'",
      "Yangtze River",
      "Mississippi River",
    ],
  },
  {
    num: 4,
    question: "Who was the first President of the United States?",
    correct: "George Washington",
    option: [
      "Abraham Lincoln",
      "Thomas Jefferson",
      "George Washington",
      " John Adams",
    ],
  },
  {
    num: 5,
    question: "Who is credited with inventing the telephone?",
    correct: "Alexander Graham Bell",
    option: [
      "Thomas Edison",
      "Alexander Graham Bell",
      "Nikola Tesla",
      "Samuel Morse",
    ],
  },
];
document.getElementById("view-answers-btn-CN").onclick = function () {
  window.location.href = "CN.html";
};
