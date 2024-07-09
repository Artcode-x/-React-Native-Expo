import { StatusBar } from "expo-status-bar"
import { Text, View } from "react-native"
import { styles } from "./App.css"

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World!</Text>
      <StatusBar style="auto" />
    </View>
  )
}
