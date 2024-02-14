// Sélection des éléments HTML
var btn = document.querySelector(".btn");
var answer = document.querySelectorAll(".answer");
var answerList = document.querySelector(".answer-list");
var questionShow = document.querySelector(".question-text");
var score = document.querySelector(".score");
var page = document.querySelector(".page");
var point = 0; // Le score du joueur
var numpage = 1; // Le numéro de la page/question actuelle

// Initialisation de la page avec le numéro de la première question
page.textContent = numpage;
// Gestion des clics sur les options de réponse
for (let i = 0; i < answer.length; i++) {
  answer[i].addEventListener("click", () => {
    var selectedOption = answer[i].textContent;
    var correctOption = Qts[numpage - 1].correct;
    if (selectedOption === correctOption) {
      answer[i].style.backgroundColor = "#66bb6a"; // Couleur de fond verte pour une réponse correcte
      answer[i].style.color = "#fff"; // Texte en blanc
      point += 20;
    } else {
      answer[i].style.backgroundColor = "#EF5350"; // Couleur de fond rouge pour une réponse incorrecte
      answer[i].style.color = "#fff";

      for (let j = 0; j < answer.length; j++) {
        if (answer[j].textContent === correctOption) {
          answer[j].style.backgroundColor = "#66bb6a"; // Couleur de fond verte pour la réponse correcte si la réponse sélectionnée est fausse
          answer[j].style.color = "#fff";
          break;
        }
      }
    }
    // Désactivation des options de réponse
    score.textContent = point;
    for (let j = 0; j < answer.length; j++) {
      answer[j].disabled = true;
    }
  });
}
// Affichage du bouton de navigation vers la prochaine question lorsqu'une option de réponse est sélectionnée
for (let i = 0; i < answerList.children.length; i++) {
  answerList.children[i].addEventListener("click", () => {
    btn.style.display = "block";
  });
}
// Gestion du clic sur le bouton de navigation vers la prochaine question
btn.addEventListener("click", () => {
  if (numpage > 0 && numpage <= 5) {
    showquestions(numpage);
    numpage++; // Incrémentation du numéro de la page
    page.textContent = numpage;
  }
  // Réactivation des options de réponse pour la nouvelle question
  for (let j = 0; j < answer.length; j++) {
    answer[j].disabled = false;
  }
  btn.style.display = "none";
});
// Affichage initial de la première question
showquestions(0);
// Fonction pour afficher la question suivante et ses options de réponse
function showquestions(index) {
  questionShow.textContent = `${Qts[index].question}`;
  for (let i = 0; i < answer.length; i++) {
    answer[i].innerHTML = Qts[index].option[i];
    answer[i].style.backgroundColor = "";
    answer[i].style.color = "";
  }
}
