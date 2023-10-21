import { Groups } from "@screens/groups";
import { NewGroup } from "@screens/NewGroup";
import { Players } from "@screens/Players";
import { ThemeProvider } from "styled-components/native";
import theme from "@theme/index";
import { StatusBar } from "react-native";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { Loading } from "@components/Loading";

export default function App() {
  const [fontLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {fontLoaded ? <Players /> : <Loading />}
    </ThemeProvider>
  );
}
