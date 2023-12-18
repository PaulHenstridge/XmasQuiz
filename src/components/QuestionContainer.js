import Question from "./Question";
import { questionsArray } from "../utils/questions";

const QuestionContainer = () => {
    return ( <>
    {questionsArray.map(q => {
        return <Question 
        key={q.id}
        question={q.question} 
        correctAnswer={q.answer} 
        />
    })}
    </> );
}
 
export default QuestionContainer;