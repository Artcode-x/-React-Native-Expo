import { Main } from "./src/pages/Main/Main"
import { About } from "./src/pages/About/About"
import { createNativeStackNavigator } from "react-native-screens/native-stack"
import { NavigationContainer } from "@react-navigation/native"

export default function App() {
  // условно stack - это routes
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* name - обязательный атрибут, условно наш путь/идентификатор для отображаемого компонента/ возм-но название стр-цы, и рядом указывается сам компонент который будет отображаться */}
        {/* название страницы можно менять с пом-ю атрибута option */}
        <Stack.Screen name={"MainScreen"} component={Main} options={{ title: "Главная страница" }} />
        <Stack.Screen name={"AboutScreen"} component={About} options={{ title: "О Нас" }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
