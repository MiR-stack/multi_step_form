import styled from "styled-components";
import { Flex } from "../styles/styles";

const Box = styled(Flex)`
  flex-direction: column;
  gap: 30px;
`;
const Wraper = styled(Flex)``;

const Card = styled.div`
  border: 1px solid hsl(229, 24%, 87%);
  border-radius: 10px;
  background: hsl(231, 100%, 99%);
  width: 140px;
  padding: 20px 15px;
  cursor: pointer;

  ${(props) =>
    props.active &&
    `
        background:hsl(217, 100%, 97%);
        border:1px solid hsl(213, 96%, 18%);
    `};

  &:hover {
    border: 1px solid hsl(213, 96%, 18%);
    background: hsl(217, 100%, 97%);
  }
`;

const Content = styled.div`
  margin-top: 40px;
`;

const Name = styled.h3`
  font-weight: 700;
  text-transform: capitalize;
  color: hsl(213, 96%, 18%);
`;
const Price = styled.p`
  color: hsl(231, 11%, 63%);
  font-size: 16px;
  padding: 5px 0;
`;

const SwitchBox = styled(Flex)`
  width: 100%;
  background: hsl(217, 100%, 97%);
  justify-content: center;
  color: hsl(231, 11%, 63%);
  font-weight: 700;
  padding: 10px;
  border-radius: 10px;
  text-transform: capitalize;
`;
const Offer = styled.p`
  font-weight: 500;
  color: hsl(213, 96%, 18%);
`;

// switch start here
const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: hsl(213, 96%, 18%);
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;

  ${Input}:checked + &::before {
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px);
  }

  &::before {
    position: absolute;
    content: "";
    height: 14px;
    width: 14px;
    left: 3px;
    bottom: 3px;
    background: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const Text = styled.p`
  color: ${(props) => (props.active ? "hsl(213, 96%, 18%)" : "")};
`;

export {
  Card,
  Content,
  Name,
  Price,
  Box,
  Wraper,
  Offer,
  SwitchBox,
  Switch,
  Text,
  Input,
  Slider,
};
