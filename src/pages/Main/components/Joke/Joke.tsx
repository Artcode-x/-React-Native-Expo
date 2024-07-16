import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./Joke.styles"
import PropTypes from "prop-types"

import { Route, RouteProp } from "@react-navigation/native"
import { INavigationProps } from "../../../../interface/interface"

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
    // TouchableOpacity - нужно чтобы делать какие то выводимые данные кликабельными
    <TouchableOpacity onPress={() => handleOnPress("JokeScreen")}>
      <View>
        <Text style={styles.joke}> {text}</Text>
      </View>
    </TouchableOpacity>
  )
}

// Joke.PropTypes = {
//   text: PropTypes.string.isRequired,
//   navigation: PropTypes.object.isRequired,
//   id: PropTypes.number,
//   title: PropTypes.string,
// }
