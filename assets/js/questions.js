var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    
  ];
  
console.log(questions[0].choices[1]);

console.log(questions[0].choices.indexOf("alerts"));
console.log(questions[1].choices.indexOf("parentheses"));
 