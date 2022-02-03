import styled from "styled-components";

export const StyledInput = styled.input`
  width: 340px;
  border: 1px solid;
  border-color: "gray.1000";
  color: gray.1000;
  border-radius: 5px 0px 5px 0px;
  :focus {
    outline: none;
    border: 2px solid #8ec2ec;
  }
  @media (max-width: 479px) {
    width: 220px;
  }
`;

export const StyledTextArea = styled.textarea`
  width: 340px;
  height: 60px;
  border: 1px solid;
  border-color: green.1000;
  color: gray.1000;
  resize: none;
  border-radius: 10px 0px 10px 0px;
  :focus {
    outline: none;
    border: 2px solid #8ec2ec;
  }

  @media (max-width: 479px) {
    width: 220px;
  }
`;
