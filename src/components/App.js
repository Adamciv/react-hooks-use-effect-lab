import React, { useState } from "react";
import Question from "./Question";
import quiz from "../data/quiz";

function App() {
  const [questions, setQuestions] = useState(quiz);
  const [currentQuestionId, setCurrentQuestion] = useState(1);
  const [score, setScore] = useState(0);

  // we rencder currentquestion, we find it by using questions array and currentQuestionId
  // and the first currentQuestionId is set to 1
  //
  const currentQuestion = questions.find((q) => q.id === currentQuestionId);

  // when a qustion is answered, we call this function
  // when the first if is true, we go to the next question, how?
  // we add 1 to currentQuestionId
  // then when currentQuestionId isn't less than the total number of questions, means that we are in the last Q
  // and the function sets currentQuestionId to null
  // and when currentQuestionId is null, currentQuestion is not valid 
  function handleQuestionAnswered(correct) {
    if (currentQuestionId < questions.length) {
      setCurrentQuestion((currentQuestionId) => currentQuestionId + 1);
    } else {
      setCurrentQuestion(null);
    }
    if (correct) {
      setScore((score) => score + 1);
    }
  }

  return (
    <main>
      <section>
        {currentQuestion ? (
          <Question
            question={currentQuestion}
            onAnswered={handleQuestionAnswered}
          />
        ) : (
          <>
            <h1>Game Over</h1>
            <h2>Total Correct: {score}</h2>
          </>
        )}
      </section>
    </main>
  );
}

export default App;
