import { TouchableHighlightProps } from "react-native";
import { Container, ButtonTypeStyleProps, Title } from "./styles";

interface Props extends TouchableHighlightProps {
  title: string;
  type?: ButtonTypeStyleProps;
}

export function Button({ title, type = "PRIMARY", ...res }: Props) {
  return (
    <Container {...res} type={type}>
      <Title>{title}</Title>
    </Container>
  );
}
