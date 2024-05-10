//
document.addEventListener('DOMContentLoaded', (event) => {
    window.toggleCourses = function(element) {
      var categoryList = element.nextElementSibling;
      categoryList.classList.toggle('open');
    }
  });

//
let currentQuestion = 0;
const questions = [
  //1
    {
        question: "What is Artificial Intelligence (AI)?",
        choices: ["The process of improving the hardware of computers.", "The simulation of human intelligence processes by machines.", "The study of mechanical robotics.", "The use of computers to solve human problems."],
        correctAnswer: 2
    },
    //2
    {
        question: "What is Machine Learning (ML), and how does it differ from AI",
        choices: [" A software development technique.", "A subset of AI that involves machines making decisions.", "A subset of AI that enables systems to learn from data and improve.", " The same as AI."],
        correctAnswer: 3
    },
    //3
    {
      question: "Name the three types of Machine Learning.",
      choices: ["Algorithmic, Computational, and Evolutionary.", "Supervised, Unsupervised, and Reinforcement.", "Cognitive, Behavioral, and Dynamic.", "Linear, Non-linear, and Binary."],
      correctAnswer: 2
  },
  //4
  {
    question: "What is a neural network?",
    choices: [" A computing system designed to simulate the way the human brain analyzes and processes information.", " A new generation computer.", "A data structure used to manage information.", "A type of computer virus."],
    correctAnswer: 1
},
//5
{
  question: " What does 'Deep Learning' refer to?",
  choices: ["A technique for teaching computers to read deeply.", "A subset of Machine Learning using multi-layered neural networks.", "A philosophy of education for machines.", "A management style for AI development teams."],
  correctAnswer: 2
},
//6
{
  question: "What is 'training data' in the context of Machine Learning?",
  choices: ["Data that has been cleaned and structured.", "Data used to test the model's accuracy.", "Data used to train an algorithm to understand patterns.", "Data that is used in the final deployment of a model."],
  correctAnswer: 3
},
//7
{
  question: "Define 'overfitting' in Machine Learning.",
  choices: ["When a model is too general and cannot make accurate predictions.", "When a model performs well on new, unseen data.", "When a model performs too well on training data but poorly on new data.", "When a model lacks the data it needs to train."],
  correctAnswer: 3
},
//8
{
  question: "What is a practical application of AI in the real world?",
  choices: [" To develop video games.", "To enhance musical instruments.", "To predict weather accurately.", "All of the above."],
  correctAnswer: 3
}
];

function displayQuestion() {
    const questionObj = questions[currentQuestion];
    const questionText = document.getElementById('question');
    const choicesContainer = document.getElementById('choices-container');

    questionText.textContent = questionObj.question;
    choicesContainer.innerHTML = ''; // Clear previous choices

    questionObj.choices.forEach((choice, index) => {
        const choiceButton = document.createElement('button');
        choiceButton.textContent = choice;
        choiceButton.classList.add('choice-button');
        choiceButton.onclick = function() { checkAnswer(index); };
        choicesContainer.appendChild(choiceButton);
    });
}

function checkAnswer(selectedIndex) {
    const correctIndex = questions[currentQuestion].correctAnswer;
    const feedbackText = document.getElementById('feedback');
    if (selectedIndex === correctIndex) {
        feedbackText.textContent = "Correct!";
        feedbackText.style.color = "green";
        setTimeout(() => {
            if (currentQuestion < questions.length - 1) {
                currentQuestion++;
                displayQuestion();
                feedbackText.textContent = ''; // Clear feedback
            } else {
                document.getElementById('question-container').innerHTML = '<p>Congratulations, you have completed the quiz!</p>'
                ;
            }
        }, 1000); // Move to the next question after 1 second
    } else {
        feedbackText.textContent = "Wrong answer, try again!";
        feedbackText.style.color = "red";
    }
}

function showCompletionScreen() {
  const quizContainer = document.getElementById('question-container');
  quizContainer.innerHTML = `
      <p>Finished! Congratulations on completing the quiz!</p>
  `;
}

window.onload = displayQuestion; // Display the first question on load
