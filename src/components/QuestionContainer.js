import { useState, useEffect } from "react";

import Question from "./Question";
import { questionsArray } from "../utils/questions";

const QuestionContainer = () => {
    const [answeredQuestions, setAnsweredQuestions] = useState({});
    const [gameCompleted, setGameCompleted] = useState(false);

    const handleCorrectAnswer = (questionId) => {
        setAnsweredQuestions(prevState => ({
            ...prevState,
            [questionId]: true
        }));
    };

    useEffect(() => {
        const answeredCount = Object.keys(answeredQuestions).length;
        if (answeredCount === questionsArray.length) {
            setGameCompleted(true);
        }
    }, [answeredQuestions]);


    return ( <>
    <h1>{Object.keys(answeredQuestions)}</h1>
    {questionsArray.map(q => (
        <Question 
            key={q.id}
            question={q.question} 
            correctAnswer={q.answer} 
            onCorrectAnswer={() => handleCorrectAnswer(q.id)}
        />
    ))}
    
    {gameCompleted && <div> You completed the quiz!</div>}

    </> );
}
 
export default QuestionContainer;