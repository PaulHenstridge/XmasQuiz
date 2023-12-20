import { useState, useEffect } from "react";

import Question from "./Question";
import { questionsArray } from "../utils/questions";
import PrizeBox from "./PrizeBox";


const QuestionContainer = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [gameCompleted, setGameCompleted] = useState(false);

    const handleCorrectAnswer = () => {
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    };

    useEffect(() => {
        if (currentQuestionIndex === questionsArray.length) {
            setGameCompleted(true);
        }
    }, [currentQuestionIndex]);


    return ( <>
    {questionsArray.slice(0, currentQuestionIndex + 1).map(q => (
        <Question 
            key={q.id}
            question={q.question} 
            correctAnswer={q.answer} 
            image = {q.img}
            onCorrectAnswer={ handleCorrectAnswer}
        />
    ))}
    
   {gameCompleted && <PrizeBox />}

    </> );
}
 
export default QuestionContainer;