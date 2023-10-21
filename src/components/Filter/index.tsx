import { Container, FilterStyleProps, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";

interface Props extends TouchableOpacityProps, FilterStyleProps {
  title: string;
}

export function Filter({ title, isActive = false, ...res }: Props) {
  return (
    <Container {...res} isActive={isActive}>
      <Title>{title}</Title>
    </Container>
  );
}
