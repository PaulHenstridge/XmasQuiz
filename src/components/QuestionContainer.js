import { useState } from "react";

import Question from "./Question";
import { questionsArray } from "../utils/questions";

const QuestionContainer = () => {
    const [answeredQuestions, setAnsweredQuestions] = useState({});

    const handleCorrectAnswer = (questionId) => {
        setAnsweredQuestions({
            ...answeredQuestions,
            [questionId]: true
        });
    };



    return ( <>
    <h1>{Object.keys(answeredQuestions)}</h1>
    {questionsArray.map(q => {
        return <Question 
        key={q.id}
        question={q.question} 
        correctAnswer={q.answer} 
        onCorrectAnswer={() => handleCorrectAnswer(q.id)}
        />
    })}
    </> );
}
 
export default QuestionContainer;