import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(12).keys()].map((i) => {
  return {
    name: `Cat-${i}`,
    image: "https://source.unsplash.com/silver-tabby-cat-IuJc2qh2TcA",
    email: "test@example.com",
    phone: "000-999-8888",
    company: {
      name: "テスト株式会社"
    },
    website: "https://google.com",
    id: i
  };
});

export const Users = () => {
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <SUserContainer>
        {users.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </SUserContainer>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserContainer = styled.div`
  width: 100%;
  padding: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 20px;
`;
