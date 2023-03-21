import styled from "styled-components";

const Container = styled.div`
    width: 650px;
    padding: 50px 100px 30px 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width:1200px){
        width: 500px;
        padding: 40px 40px;
    }
    @media (max-width:800px){
        width: 350px;
        padding: 40px 20px;
    }
    
    @media (max-width:600px){
        width: 300px;
        padding:10px;
        width: 100%;
        padding: 20px;
        background: white;
    }
`

const Flex = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export {Container,Flex}