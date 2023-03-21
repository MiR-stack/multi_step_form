import styled from "styled-components";
import bg from "../../assets/images/bg-sidebar-desktop.svg";
import mobileBg from "../../assets/images/bg-sidebar-mobile.svg";

const Container = styled.div`
  width: 250px;
  border-radius: 10px;
  background: url(${bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 30px;
  text-transform: uppercase;
  padding: 30px;

  @media (max-width: 1200px) {
    width: 200px;
    padding: 20px;
    gap: 25px;
  }

  @media (max-width: 600px) {
    height: unset;
    flex-direction: row;
    height: 30vh;
    width: 100%;
    border-radius: 0;
    justify-content: center;
    background: url(${mobileBg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding-top: 50px;
  }
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
  margin-bottom: 5px;
`;
const Section = styled.p`
  font-weight: 500;
  color: hsl(231, 100%, 99%);
`;

const StepWraper = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
`;

export { Container, NavItem, NavButton, Step, Section, StepWraper };
