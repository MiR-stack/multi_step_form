import styled from "styled-components";


const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

const basic = styled.button`
  text-transform: capitalize;
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  font-weight: 500;
  color: hsl(231, 100%, 99%);
  background:none;
`;

const Next = styled(basic)`
  padding: 10px 15px;
  background: hsl(213, 96%, 18%);
  margin-left: auto;

  &:hover {
    background: hsl(243, 100%, 62%);
  }
`;

const Back = styled(basic)`
  color: hsl(231, 11%, 63%);
  &:hover {
    color: hsl(213, 96%, 18%);
  }
`;
const Confirm = styled(basic)`
  background: hsl(243, 100%, 62%);
  padding: 10px 15px;
  &:hover {
    background: hsl(228, 100%, 84%);
  }
`;

export {Container, Next,Back,Confirm}