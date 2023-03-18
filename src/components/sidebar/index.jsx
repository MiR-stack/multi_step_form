import { Container, NavButton, NavItem, Section, Step } from "./index.styled";

const StepTitles = ["your info", "select plan", "add-ons", "summary"];

function Sidebar({ handleCustom, step }) {
  return (
    <Container>
      {StepTitles.map((item, index) => (
        <NavItem key={index} onClick={() => handleCustom(index + 1)}>
          <NavButton active={step === index + 1}>{index + 1} </NavButton>
          <div>
            <Step>step {index + 1} </Step>
            <Section>{item} </Section>
          </div>
        </NavItem>
      ))}
    </Container>
  );
}

export default Sidebar;
