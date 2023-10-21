import { TouchableOpacityProps } from "react-native";
import { Container, ButtonIconTypeStyleProps, Icon } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

interface Props extends TouchableOpacityProps {
  type?: ButtonIconTypeStyleProps;
  icon: keyof typeof MaterialIcons.glyphMap;
}
export function ButtonIcon({ icon, type = "PRIMARY", ...res }: Props) {
  return (
    <Container type={type} {...res}>
      <Icon name={icon} type={type} />
    </Container>
  );
}
