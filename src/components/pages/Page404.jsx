import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { PrimaryButton } from "../atoms/buttons/PrimaryButton";
export const Page404 = () => {
  const history = useHistory();
  const onClick = () => {
    history.push("/");
  };
  return (
    <SContainer>
      <h2>お探しのページは存在しません</h2>
      <PrimaryButton onClick={onClick}>Topへ戻る</PrimaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
