import { styled } from "styled-components";

const Prize = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    background-color: red;
    & h1 {
        color: white;
    }
`

const PrizeBox = () => {
    return ( <Prize>
    <h2>You won!!!</h2>
    <p>well done!    your voucher code is: <h1>8MR9-PM5G-D247</h1></p>
    </Prize> );
}
 
export default PrizeBox;