import styled from "styled-components";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <SHeader>
      <SLink to="/">HOME</SLink>
      <SLink to="/users">USERS</SLink>
    </SHeader>
  );
};

const SHeader = styled.header`
  background-color: #339999;
  padding: 8px 0;
  text-align: center;
`;

const SLink = styled(Link)`
  margin: 0 8px;
`;
