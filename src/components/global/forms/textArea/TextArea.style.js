import styled from "styled-components";

const TextAreaLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

const TextAreaBox = styled.textarea`
  min-height: 5rem;
  resize: none;
`;

export { TextAreaLabel, TextAreaBox };
