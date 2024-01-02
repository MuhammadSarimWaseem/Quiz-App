import React from 'react';
import './Router.css'
import { useNavigate } from 'react-router-dom';

function RouterOfRoute() {
  const navigateOfJavascript = useNavigate()
  const navigateOfPython = useNavigate()
  const navigateOfJava = useNavigate()
  const navigateOfPhp = useNavigate()
  const navigateOfSql = useNavigate()

  const goToJavaScript = () => {
    navigateOfJavascript("/JavaScriptComponent/Quiz")
  }

  const goToPython = () => {
    navigateOfPython("/PythonComponent/Quiz")
  }

  const goToJava = () => {
    navigateOfJava("/JavaComponent/Quiz")
  }

  const goToPhp = () => {
    navigateOfPhp("/phpComponent/Quiz")
  }

  const goToSql = () => {
    navigateOfSql("/SqlComponent/Quiz")
  }

  return (
    <div className='container'>
      <h1>❓ QUIZ APP ❓</h1>
      <button className='btn' onClick={goToJavaScript}>JavaScript</button>
      <button className='btn' onClick={goToPython}>Python</button>
      <button className='btn' onClick={goToJava}>Java</button>
      <button className='btn' onClick={goToPhp}>PHP</button>
      <button className='btn' onClick={goToSql}>SQL</button>
    </div>
  );
}

export default RouterOfRoute;