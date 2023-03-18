import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  background:hsl(229, 24%, 87%);
`;

const Main = styled.div`
    width: 600px;
    padding: 50px 100px 30px 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Box = styled.div`
  max-width: 1440px;
  height:560px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform:translate(-50%,-50%);
  border-radius:10px;
  background-color:hsl(231, 100%, 99%) ;
  padding:10px;
  display: flex;
`;


export {Container,Main,Box}