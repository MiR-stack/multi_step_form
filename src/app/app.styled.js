import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  background:hsl(231, 11%, 63%);
`;

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
`;


export {Container,Box}