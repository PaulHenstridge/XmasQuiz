import { useState } from "react";
import styled from 'styled-components';

const AnswerInput = styled.input`
    
    &:disabled {
        background-color: #e0e0e0;
        color: #9e9e9e;
    }
`;

const QuestionBox = styled.article`
    
    background-color: ${props => props.isAnswered ? '#d4edda' : 'white'}; // Change background if answered
`;

const Question = ({question, correctAnswer, onCorrectAnswer, image}) => {

    const [userInput, setUserInput] = useState('');
    const [isAnswered, setIsAnswered] = useState(false);

    const handleChange = (event) => {
        setUserInput(event.target.value);
        if (event.target.value === correctAnswer && !isAnswered) {
            setIsAnswered(true)
            onCorrectAnswer(); // Notify parent component
        }
    }
    return ( 
    <QuestionBox isAnswered={isAnswered}>
        {image && <img src={image} alt="who is this"></img>}
        <h3>{question}</h3>
          <AnswerInput 
            placeholder="answer here"
            value = {userInput}
            onChange={handleChange}
            disabled={isAnswered}
         />
    </QuestionBox> );
}
 
export default Question;