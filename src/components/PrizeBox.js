import { styled } from "styled-components";

const Prize = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    background-color: red;
`

const PrizeBox = () => {
    return ( <Prize>
    <h2>You won the prize!!!</h2>
    <p>final instructions to claim prize etc ....</p>
    </Prize> );
}
 
export default PrizeBox;