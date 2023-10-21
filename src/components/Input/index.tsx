import { Container } from "./styles";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

export function Input({ ...res }: TextInputProps) {
  const theme = useTheme();
  return <Container {...res} placeholderTextColor={theme.COLORS.GRAY_300} />;
}
