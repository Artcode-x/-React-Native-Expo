import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./Joke.styles"

type PageName = "JokeScreen"

export const Joke: React.FC<{ text: string; navigation: any; id: string; title: string }> = ({
  text,
  navigation,
  id,
  title,
}) => {
  const handleOnPress = (pageName: PageName) => {
    navigation.navigate(pageName, { id, title })
  }

  return (
    <TouchableOpacity onPress={() => handleOnPress("JokeScreen")}>
      <View>
        <Text style={styles.joke}> {text}</Text>
      </View>
    </TouchableOpacity>
  )
}
