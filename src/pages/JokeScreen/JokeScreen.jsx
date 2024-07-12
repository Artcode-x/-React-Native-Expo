import { Text, View } from "react-native"

export const JokeScreen = ({ route }) => {
  const { id, title } = route.params
  return (
    <View>
      <Text style={{ fontSize: 40 }}>{title}</Text>
      <Text>Это шутка с id {id}</Text>
    </View>
  )
}
