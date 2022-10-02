const quizQuestions = [
    {
      question: 
      "What are the three foundational technologies of web development?",
      a: "JavaScript, Node.js, and Web APIs",
      b: "HTML, CSS, and JavaScript",
      c: "VS Code, the terminal, and GitHub",
      d: "None of the above",
      correct: "b",
    },
    {
      question: 
      "What does JavaScript do?",
      a: "Makes a webpage fully interactive",
      b: "Only creates window alerts",
      c: "Define the structure, content, and layout of a webpage",
      d: "Only allows for button clicks",
      correct: "a",
    },
    {
      question: 
      "In coding, what does MVP stand for?",
      a: "Most Valuable Programer",
      b: "Minimal Viable Product",
      c: "Many Valuable Parts",
      d: "My Vast Program",
      correct: "b",
    },
    {
      question: 
      "What would you write before the branch name to create and swtich to a new GitHub branch from the terminal?",
      a: "git push -b",
      b: "git checkout -m",
      c: "git commit -m",
      d: "git checkout -b",
      correct: "d",
    },
    {
      question:
        "In the terminal what does touch do?",
      a: "Creates a new file",
      b: "Creates a new directory",
      c: "Takes you back one level in the directory",
      d: "Saves your work",
      correct: "a",
    },
    {
      question:
        "Each piece of code, separated by semicolons, is known as a(n)?",
      a: "file",
      b: "function",
      c: "expression",
      d: "repository",
      correct: "c",
    },
    {
      question:
        "Information that a user enters into a program is often referred to as?",
      a: "user experience",
      b: "user criteria",
      c: "user response",
      d: "user input",
      correct: "d",
    },
    {
      question: 
      "Which symbol is used in string concatenation?",
      a: "+",
      b: "=",
      c: "-",
      d: "_",
      correct: "a",
    },
    {
      question:
        "What is the purpose of a control flow statement?",
      a: "to execute code from top to bottom",
      b: "to allow code to be conditionally executed",
      c: "to execute code from bottom to top",
      d: "None of the above",
      correct: "b",
    },
    {
      question:
        "Which of the following is an OR opperator?",
      a: "//",
      b: "===",
      c: "||",
      d: "&&",
      correct: "b",
    },
  ];

  var quiz = document.getElementById("quiz");
  var answerEls = document.querySelectorAll(".answer");
  var questionEl = document.getElementById("question");
  var a_text = document.getElementById("a_text");
  var b_text = document.getElementById("b_text");
  var c_text = document.getElementById("c_text");
  var d_text = document.getElementById("d_text");
  var submitBtn = document.getElementById("submit");

  startQuiz();

  function startQuiz() {
    submitBtn.onclick = buttonClick;
    questionEl.innertext = "Welcome to Code Quiz!";
    hideAnswers();
    submitBtn.innerText = "Begin";
  }

  function loadQuestions() {
    deselectAnswers();

    var currentQuizData = quizData[currentQuestion];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
  }

  function hideAnswers() {
    a_text.innerText = "";
    b_text.innerText = "";
    c_text.innerText = "";
    d_text.innerText = "";
    answerEls.forEach((answerElement) => (answerElement.hidden = true));
  }

  function deselectAnswers() {
    answerEls.forEach((answerEl) => {
      answerEl.checked = false;
      if (answerEl.hidden) answerEl.hidden = false
    });
  }

  function answerSelected() {
    var answer;
    answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
        answer = answerEl.id;
      }
    });
    return answer;
  }