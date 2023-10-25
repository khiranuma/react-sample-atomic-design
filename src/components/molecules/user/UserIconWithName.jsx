import styled from "styled-components";
export const UserIconWithName = (props) => {
  const { image, name } = props;
  return (
    <SContainer>
      <SImage src={image} alt={name} />
      <SName>{name}</SName>
    </SContainer>
  );
};

const SImage = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;
const SContainer = styled.div`
  text-align: center;
`;
