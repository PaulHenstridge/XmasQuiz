import { useState } from "react";
import styled from 'styled-components';



const QuestionBox = styled.article`
    background-color: ${props => props.isAnswered ? '#31839A' : '#D9E8EE'}; // Change background if answered
    border: ${props => `4px solid ${props.isAnswered ? 'gold' : 'black'}`};
    padding:4rem 2rem;
    margin: 4rem 2rem;
    color: #170942


`;

const ImageBox = styled.div`
    width:40%;
    aspect-ratio:1;
    overflow:hidden;
    display:flex;
    justify-content: center;
    align-items: center;
    margin: auto;

    & img{
        max-width:100%;
        max-height:100%;
        object-fit: contain;
        /* object-position: center; */
    }
`

const AnswerInput = styled.input`
    border: none;
    border-bottom: 2px solid #170942;
    padding: 0.4rem;
    &:disabled {
        background-color: #e0e0e0;
        color: #9e9e9e;
    }
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
        {image && <ImageBox> <img src={image} alt="who is this"></img></ImageBox> }
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