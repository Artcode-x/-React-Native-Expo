import { Text, View } from "react-native"
import { styles } from "./Joke.styles"

export const Joke = ({ text }) => {
  return (
    <View>
      <Text style={styles.joke}> {text}</Text>
    </View>
  )
}
