import styled from "styled-components";

export const Footer = () => {
  return <SFooter>&copy;2023 test Inc.</SFooter>;
};

const SFooter = styled.footer`
  background-color: #339999;
  color: #fff;
  padding: 8px 0;
  text-align: center;
  position: fixed;
  width: 100%;
  bottom: 0;
`;
