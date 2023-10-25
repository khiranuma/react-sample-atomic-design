import { BaseButton } from "./BaseButton";

export const PrimaryButton = (props) => {
  const { children, onClick = () => {} } = props;
  return <BaseButton onClick={onClick}>{children}</BaseButton>;
};
