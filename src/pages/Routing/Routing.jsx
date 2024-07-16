import { Main } from "../Main/Main"
import { About } from "../About/About"
import { createNativeStackNavigator } from "react-native-screens/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import { JokeScreen } from "../JokeScreen/JokeScreen"

export const Routing = () => {
  // условно stack - это routes
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* название страницы можно менять с пом-ю атрибута option */}
        {/* name - как id/identificator, по которому мы будем обращаться позже, при переходе component - указываем
        без тега - Main. ( не <Main /> ) */}
        <Stack.Screen name={"MainScreen"} component={Main} options={{ title: "Главная страница" }} />
        <Stack.Screen name={"AboutScreen"} component={About} options={{ title: "О Нас" }} />
        <Stack.Screen name={"JokeScreen"} component={JokeScreen} options={{ title: "Шутка" }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
