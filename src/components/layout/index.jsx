import { Container, Description, Title } from "./index.styled"



function Layout({title,description,children}) {
  return (
    <Container>
        <Title>{title} </Title>
        <Description>{description} </Description>
        {children}
    </Container>
  )
}

export default Layout