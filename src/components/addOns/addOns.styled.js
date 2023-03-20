import styled from "styled-components";
import { Flex } from "../styles/styles";

const Wraper = styled(Flex)`
    flex-direction: column;
    gap:15px;
`

const Card = styled.label`
    display: flex;
    align-items: center;
    background: hsl(231, 100%, 99%);
    border: 1px solid hsl(229, 24%, 87%);
    border-radius: 5px;
    padding:15px;
    cursor:pointer;
    width: 100%;
    justify-content: space-between;

    ${props => props.active && `
    
    border: 1px solid hsl(243, 100%, 62%);
    background:hsl(217, 100%, 97%);
    `}

    &:hover{
        border:1px solid hsl(243, 100%, 62%);
    }
    
    
`

const Input = styled.input`
   accent-color:hsl(243, 100%, 62%);
   height: 15px;
   width: 15px;
   border-radius:5px;
`

const Content = styled(Flex)`
    gap:15px
`

const Name = styled.h4`
    color: hsl(213, 96%, 18%);
    font-weight: 700;
`
const Feature = styled.p`
    color:hsl(231, 11%, 63%) ;
    font-size:16px;
    margin-top: 5px;
`

const Price = styled.p`
    color:hsl(243, 100%, 62%);
    font-weight: 400;
`

export {Card,Wraper,Input,Content,Name,Feature,Price}