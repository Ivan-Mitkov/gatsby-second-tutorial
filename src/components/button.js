import React from "react";
import styled from "styled-components";

export const ExampleButton = styled.button`
  background-color: #222;
  color: #fff;
  font-size: 1.2rem;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  transition: all 0.4s;
  &:hover {
    background-color: #444;
    transform: scale(1.01);
  }
`;
const Button = ({ children }) => {
  return <ExampleButton>{children}</ExampleButton>;
};

export default Button;
