import styled from "styled-components";


const Container = styled.div`

@media (max-width:600px){
    position: absolute;
    top:15%;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    width: 90%;
    box-shadow: 4px 4px 20px hsl(229, 24%, 87%);
}
`

const Title = styled.h1`
    font-weight: 700;
    margin-bottom: 10px;
`
const Description = styled.p`
    color: hsl(231, 11%, 63%);
    font-size: 16px;
    margin-bottom: 30px;
`

export {Title,Description,Container}