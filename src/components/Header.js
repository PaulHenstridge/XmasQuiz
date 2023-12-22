import { styled } from "styled-components";
import { questionsArray } from "../utils/questions";


const HeaderBox = styled.header`
    padding:2rem;

    & h1{
        font-size: 4rem;
        font-family:"Rubik Doodle Shadow";
        color: #31839A;
    }
    & h2 {
        font-size: 2rem;
        color: red;
        margin: 0;
    }
    & p {
        font-size: 1.4rem;
        /* border: 4px solid red; */
        padding:2rem;
        line-height:1.4;
    }
`



const Header = () => {
    return ( <HeaderBox>
    <h1>Brodie's Christmas Challenge!</h1>
    <p><h2>Hi Brodie!</h2> <br></br> I got you a PlayStation voucher for Christmas, but it was just a jumble of numbers and letters,
        so I put them into this program so I wouldn't lose them.
        Then I protected them with {questionsArray.length} security questions so they would be safe!<br></br><br></br>
        But... <br></br> I forgot all the answers🙄 <br></br><br></br>Hope you can
        figure them out!  <br></br><br></br>
        If you dont know an answer you might need to think who around here might be able to help...
    </p>
    </HeaderBox> );
}
 
export default Header;