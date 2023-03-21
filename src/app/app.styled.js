import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  background:hsl(229, 24%, 87%);
`;



const Box = styled.div`
  max-width: 1440px;
 min-height:560px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform:translate(-50%,-50%);
  border-radius:10px;
  background-color:hsl(231, 100%, 99%) ;
  padding:10px;
  display: flex;



  @media (max-width:600px){
    height: 100vh;
    width: 100%;
    flex-direction: column;
    padding:0;
    justify-content: space-between;
    align-items: center;
    background: hsl(217, 100%, 97%);
    position: relative;

  }
`;


export {Container,Box}