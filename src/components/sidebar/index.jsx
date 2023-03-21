import { Container, NavButton, NavItem, Section, Step, StepWraper } from "./index.styled";

const StepTitles = ["your info", "select plan", "add-ons", "summary"];

function Sidebar({ handleCustom, step }) {
  return (
    <Container>
      {StepTitles.map((item, index) => (
        <NavItem key={index} onClick={() => handleCustom(index + 1)}>
          <NavButton active={step === index + 1}>{index + 1} </NavButton>
          <StepWraper>
            <Step>step {index + 1} </Step>
            <Section>{item} </Section>
          </StepWraper>
        </NavItem>
      ))}
    </Container>
  );
}

export default Sidebar;
