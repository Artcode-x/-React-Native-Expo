import { RouteProp } from "@react-navigation/native"
import { Text, View } from "react-native"
import { IRoute } from "../../interface/interface"

export const JokeScreen = ({ route }: IRoute) => {
  const { id, title } = route.params
  return (
    <View>
      <Text style={{ fontSize: 40 }}>{title}</Text>
      <Text>Это шутка с id {id}</Text>
    </View>
  )
}
