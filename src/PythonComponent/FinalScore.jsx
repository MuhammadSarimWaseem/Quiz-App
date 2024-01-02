import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

function FinalScore(props) {
    
  const navigate = useNavigate()
  const goToHome = () => {
    navigate("/")
  }

    return (
        <Fragment>
            <div className='show-score container'>
                Total Score: {props.TotalScore} <br />
                Score: {props.score} <br />
                <button className='try-again' onClick={props.TryAgain}>Try Again</button>
                <button className='try-again' onClick={goToHome}>Home</button>
            </div>
        </Fragment>
    );
}

export default FinalScore;