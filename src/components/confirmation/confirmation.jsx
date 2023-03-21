import { Container  as container} from "../styles/styles"
import icon from '../../assets/images/icon-thank-you.svg'
import styled from "styled-components"

const Header = styled.h2`
    
    font-weight:700;
    color:hsl(213, 96%, 18%);

`
const Description = styled.p`
    font-size:16px;
    color:hsl(231, 11%, 63%);
    text-align:center;
`

const Icon = styled.img`
    height: 50px;
    width:50px;

`
const Container = styled(container)`
    
    justify-content: center;
    align-items: center;
    gap:10px;

    @media(max-width:600px){
        position: absolute;
        top: 20%;
        height: 40%;
        width: 90%;
        border-radius: 10px;
    }
`

function Confirmation() {
  return (
    <Container>
        <Icon src={icon} alt='icon' />
        <Header>Thank you!</Header>
        <Description>Thanks for confirming your subscirption! we hope you have fun using our platform. if you ever need support, please feel free to email us at support@unicorn.com. </Description>
    </Container>
  )
}

export default Confirmation