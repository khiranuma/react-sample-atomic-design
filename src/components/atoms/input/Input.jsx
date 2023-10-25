import styled from "styled-components";

export const Input = (props) => {
  const { placeholder } = props;
  return <SInput type="text" placeholder={placeholder} />;
};

const SInput = styled.input`
  border: solid 1px #ddd;
  padding: 8px 16px;
  border-radius: 9999px;
  outline: none;
`;
