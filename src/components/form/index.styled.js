import styled from "styled-components";

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const Box = styled.div`
  margin-bottom: 15px;
`;

const Wraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Label = styled.label`
  text-transform: capitalize;
  margin-bottom: 10px;
  font-weight: 400;
`;

const Error = styled.p`
  color: hsl(354, 84%, 57%);
  text-transform: capitalize;
`;

const Input = styled.input`
  padding: 10px 5px;
  font-weight: 700;
  color: hsl(213, 96%, 18%);
  border: 2px solid
    ${(props) => (props.error ? "hsl(354, 84%, 57%)" : "hsl(231, 11%, 63%)")};
  width: 100%;
  border-radius: 5px;
  outline: none;
  &:hover {
    border: ${(props) => !props.error && "2px solid hsl(213, 96%, 18%)"};
  }
  &::placeholder {
    color: hsl(231, 11%, 63%);
  }
`;

export { Form, Box, Wraper, Label, Error, Input };
