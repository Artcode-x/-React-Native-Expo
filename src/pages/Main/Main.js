import { useEffect, useState } from "react"
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Keyboard,
  Text,
  TextInput,
  View,
  RefreshControl,
} from "react-native"

import { styles } from "./Main.styles"
import { StatusBar } from "expo-status-bar"

export const Main = () => {
  const [name, setName] = useState()
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)

  const fetchPromise = () => {
    setIsLoading(true)
    fetch("https://api.chucknorris.io/jokes/search?query=fet")
      .then((res) => res.json())
      .then((res) => setData(res.result))
      .catch((err) => alert(err))
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    fetchPromise()
  }, [])

  //   Alert.alert("Ошибка с сервера", "Текст ошибки")

  if (isLoading) {
    return (
      <ActivityIndicator size={"large"} style={{ flex: 1, justifyContent: "center", alignItems: "center" }} />
    )
  }
  return (
    <View style={styles.container}>
      {/* ActivityIndicator - индикатор загрузки */}
      <ActivityIndicator size={"large"} color={"wheat"} />
      {/* Flatlist - используется для вывода контента со скроллом / Предоставляет интерфейс для вывода списков */}
      {/* renderItem - используется аналогично методу map, пишем туда выводимые данные*/}
      <FlatList
        // указываем флаг с пом-ю которого refreshcontrol понимает показывать или нет наши данные
        refreshing={isLoading}
        // далее указываем что будем обновлять:
        onRefresh={fetchPromise}
        data={data}
        renderItem={({ item }) => <Text>{item.value}</Text>}
        keyExtractor={(item) => item.id}
      />

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
