import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./Joke.styles"

export const Joke = ({ text, navigation, id, title }) => {
  return (
    // TouchableOpacity - нужно чтобы делать какие то выводимые данные кликабельными
    <TouchableOpacity onPress={() => navigation.navigate("JokeScreen", { id, title })}>
      <View>
        <Text style={styles.joke}> {text}</Text>
      </View>
    </TouchableOpacity>
  )
}
