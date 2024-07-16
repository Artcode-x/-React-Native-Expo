import { NavigationProp, NavigationState } from "@react-navigation/native"
import { TouchableOpacityProps } from "react-native"

export interface INavigationProps {
  navigation: NavigationProp<NavigationState>
}

export interface IButtonProps extends TouchableOpacityProps {
  title: string
  onPress: () => void
}
export interface IData {
  created_at: string
  id: string
}

export interface IRoute {
  route: {
    key: string
    name: string
    path?: string | undefined
    params: {
      id: string
      title: string
    }
  }
}
