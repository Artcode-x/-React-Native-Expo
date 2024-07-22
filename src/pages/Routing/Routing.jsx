import { Main } from "../Main/Main"
import { About } from "../About/About"
import { createNativeStackNavigator } from "react-native-screens/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import { JokeScreen } from "../JokeScreen/JokeScreen"

export const Routing = () => {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={"MainScreen"} component={Main} options={{ title: "Главная страница" }} />
        <Stack.Screen name={"AboutScreen"} component={About} options={{ title: "О Нас" }} />
        <Stack.Screen name={"JokeScreen"} component={JokeScreen} options={{ title: "Шутка" }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
