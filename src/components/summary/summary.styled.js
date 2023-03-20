import styled from "styled-components";
import { Flex } from "../styles/styles";

const List = styled(Flex)`
    flex-direction: column;
    gap:20px;
    border-radius: 10px;
    background:hsl(217, 100%, 97%);
    padding:20px;

`

const ListItem = styled(Flex)`
    justify-content: space-between;
    width:100%;

`
const Header = styled.h3`
    color: hsl(213, 96%, 18%);
    padding-bottom:5px;
`


const Text = styled.p`
    font-size: 16px;
    font-weight: 400;
    color:hsl(231, 11%, 63%);
`
const Link = styled(Text)`
    text-decoration: underline;
    cursor: pointer;
`

const TotalPrice = styled.h2`
    color:hsl(243, 100%, 62%);
    font-weight: 700;
`

const Divider = styled.span`
    border-top: 1px solid hsl(229, 24%, 87%);
    width: 100%;
`
const Wraper = styled(Flex)`
    justify-content: space-between;
    padding: 20px;
    
`

export {List,ListItem,Header,Text,Divider,Wraper,TotalPrice,Link}