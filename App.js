import { StatusBar } from "expo-status-bar"
import { Keyboard, Text, TextInput, View } from "react-native"
import { styles } from "./App.css"
import { useState } from "react"

export default function App() {
  const [name, setName] = useState()
  console.log(name)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World!</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder={"Введите Пароль"}
        keyboardType={"numeric"}
      />
      <StatusBar style="auto" />
    </View>
  )
}
