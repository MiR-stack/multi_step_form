import { Container, NavButton, NavItem, Section, Step } from "./index.styled"


const StepTitles = ['your info','select plan','add-ons', 'summary']


function Sidebar({handleNav}) {
  return (
    <Container >
        {StepTitles.map((item,index)=>(
            <NavItem onClick={()=>handleNav(index + 1)}>
                <NavButton>{index + 1} </NavButton>
                <div>
                    <Step>step {index + 1} </Step>
                    <Section>{item} </Section>
                </div>
            </NavItem>
        ))}
    </Container>
  )
}

export default Sidebar