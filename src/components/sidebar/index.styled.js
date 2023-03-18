import styled from "styled-components";
import bg from '../../assets/images/bg-sidebar-desktop.svg'


const Container = styled.div`
  height: 100%;
  width: 250px;
  border-radius: 10px;
  background: url(${bg});
  padding: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 30px;
  text-transform: uppercase;
  padding:30px;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  cursor: pointer;

`;



const NavButton = styled.button`
  height: 40px;
  width: 40px;
  border: 1px solid hsl(231, 11%, 63%);
  border-radius: 50%;
  font-weight: 700;
  cursor: pointer;


  ${(props) =>
    props.active
      ? `
    background:hsl(206, 94%, 87%);
    color:hsl(243, 100%, 62%);
    border:none;
    `
      : `
    background:transparent;
    color:hsl(231, 100%, 99%);
    `}
`;
const Step = styled.p`
  color: hsl(231, 11%, 63%);
  margin-bottom:5px;
`;
const Section = styled.p`
  font-weight: 500;
  color: hsl(231, 100%, 99%);
`;

export {Container,NavItem,NavButton,Step,Section}
