var btn = document.querySelector(".btn");
var answer = document.querySelectorAll(".answer");
var question = document.querySelectorAll(".question");
var score = document.querySelector(".score");
var point = 0;

const Qts = [
  {
    q1: "What is the English translation of the French word 'maison'?",
    correct: "House",
    option: [
      { opt1: "House" },
      { opt2: " Home" },
      { opt3: "Building" },
      { opt4: "Residence" },
      { correct: "House" },
    ],
  },
  {
    q2: "What is the plural form of the English word 'child'?",
    option: [
      { opt1: "Childs" },
      { opt2: "Childs'" },
      { opt3: "Childrens" },
      { opt4: "Children" },
    ],
  },

  { q3: "What does the expression 'Break a leg' mean in English?" },
  { q4: "What is an antonym for the word 'fast'?" },
  { q5: "What is the opposite of the English word 'happy'?" },
];
for (let i = 0; i < answer.length; i++) {
  answer[i].addEventListener("click", () => {
    var selectedOption = answer[i].textContent;
    var correctOption = Qts[0].correct;
    if (selectedOption === correctOption) {
      answer[i].style.backgroundColor = "green";
      answer[i].style.color = "#fff";
      point += 20;
    } else {
      answer[i].style.backgroundColor = "red";
      answer[i].style.color = "#fff";

      for (let j = 0; j < answer.length; j++) {
        if (answer[j].textContent === correctOption) {
          answer[j].style.backgroundColor = "green";
          answer[j].style.color = "#fff";
          break;
        }
      }
    }
    score.textContent = point;
    for (let j = 0; j < answer.length; j++) {
      answer[j].disabled = true;
    }
  });
}

for (let i = 0; i < answer.length; i++) {
  answer[i].addEventListener("click", () => {
    btn.style.display = "block";
  });
}
