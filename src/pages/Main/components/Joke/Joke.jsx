import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./Joke.styles"

export const Joke = ({ text, navigation, id }) => {
  return (
    // TouchableOpacity - нужно чтобы делать какие то выводимые данные кликабельными
    <TouchableOpacity onPress={() => navigation.navigate("JokeScreen", { id })}>
      <View>
        <Text style={styles.joke}> {text}</Text>
      </View>
    </TouchableOpacity>
  )
}
