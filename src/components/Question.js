import { useState } from "react";

const Question = ({question, correctAnswer}) => {

    const [userInput, setUserInput] = useState('');

    const handleChange = (event) => {
        setUserInput(event.target.value);
    }
    return ( <>
    <h3>{question}</h3>
          <input 
          placeholder="answer here"
          value = {userInput}
          onChange={handleChange}
          ></input>
    </> );
}
 
export default Question;