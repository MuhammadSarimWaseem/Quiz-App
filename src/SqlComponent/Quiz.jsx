import React, { useState, Fragment } from 'react';
import { QuizData } from './Data';
import FinalScore from './FinalScore';

function Sql() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [click, setClick] = useState(0)
  const [score, setScore] = useState(0)
  const [result, setResult] = useState(false)

  const NextQuestion = () => {
    SetQuestion()
    if (currentQuestion < QuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setClick(0)
    } else {
      setResult(true)
    }
  }

  const PreviousQuestion = () => {
    if (currentQuestion !== 0) {
      setCurrentQuestion(currentQuestion - 1)
    } else { }
  }

  const SetQuestion = () => {
    if (click === QuizData[currentQuestion].answer) {
      setScore(score + 1)
    } else { }
  }

  const ResetAll = () => {
    setCurrentQuestion(0)
    setClick(0)
    setScore(0)
    setResult(false)
  }

  return (
    <Fragment>
      {result ? (
        <FinalScore score={score} TotalScore={QuizData.length} TryAgain={ResetAll} />
      ) : (
        <div>
          <h1 className='heading-txt'>❓ Sql ❓</h1>
          <div className='container'>
            <div className='question'>
              <span>{currentQuestion + 1}: </span>
              <span>{QuizData[currentQuestion].question}</span>
            </div>
            <div className='option-container'>
              {QuizData[currentQuestion].options.map((option, i) => {
                return (
                  <button key={i} className={`option-btn ${click === i + 1 ? "checked" : null}`} onClick={() => setClick(i + 1)}>{option}</button>
                )
              })}
            </div>
            <button onClick={PreviousQuestion} className='previous-button' id='previous-button'>Previous</button><br />
            <button onClick={NextQuestion} className='next-button' id='next-button'>Next</button>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default Sql;