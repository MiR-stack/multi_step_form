import { Description, Title } from "./index.styled"



function Layout({title,description,children}) {
  return (
    <div>
        <Title>{title} </Title>
        <Description>{description} </Description>
        {children}
    </div>
  )
}

export default Layout