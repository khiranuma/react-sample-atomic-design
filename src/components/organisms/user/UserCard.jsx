import styled from "styled-components";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";
export const UserCard = (props) => {
  const { user } = props;
  return (
    <SContainer>
      <UserIconWithName image={user.image} name={user.name} />
      <SDL>
        <SDT>メール</SDT>
        <SDD>{user.email}</SDD>
        <SDT>TEL</SDT>
        <SDD>{user.phone}</SDD>
        <SDT>会社名</SDT>
        <SDD>{user.company.name}</SDD>
        <SDT>WEB</SDT>
        <SDD>{user.website}</SDD>
      </SDL>
    </SContainer>
  );
};

const SDL = styled.dl`
  text-align: left;
`;

const SDT = styled.dt`
  float: left;
`;

const SDD = styled.dd`
  padding-left: 32px;
  padding-bottom: 8px;
  overflow-wrap: break-word;
`;

const SContainer = styled.div`
  background-color: #fff;
  box-shadow: 0 0 4px 2px #ddd;
  border-radius: 8px;
  padding: 16px;
`;
