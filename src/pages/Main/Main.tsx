import { useEffect, useState } from "react"
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Text,
  TextInput,
  View,
  RefreshControl,
  Button,
} from "react-native"

import { styles } from "./Main.styles"
import { StatusBar } from "expo-status-bar"
import { Joke } from "./components/Joke/Joke"
import { IData, INavigationProps } from "../../interface/interface"
// import { NavigationParams } from "@react-navigation/native"

import { NavigationProp } from "@react-navigation/native"

type PageName = "AboutScreen"

export const Main = ({ navigation }: INavigationProps) => {
  const [name, setName] = useState<string>()
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)

  const fetchPromise = () => {
    setIsLoading(true)
    fetch("https://api.chucknorris.io/jokes/search?query=fet")
      .then((res) => res.json())
      .then((res) => setData(res.result))
      .catch((err) => Alert.alert("Ошибка с сервера", "Попробуйте выполнить запрос позднее"))
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    fetchPromise()
  }, [])

  if (isLoading) {
    return (
      <ActivityIndicator size={"large"} style={{ flex: 1, justifyContent: "center", alignItems: "center" }} />
    )
  }
  console.log(data)
  const onPressHandler = (pageName: PageName) => {
    navigation.navigate(pageName)
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Button
          // style={styles.button}
          title="Перейти на страницу о нас"
          //   параметром для перехода указывается атрибут AboutScreen, который мы указали в App при роутинге = какая страница
          onPress={() => onPressHandler("AboutScreen")}
        />
        {/* ActivityIndicator - индикатор загрузки */}
        <ActivityIndicator size={"large"} color={"wheat"} />
        {/* Flatlist - используется для вывода контента со скроллом / Предоставляет интерфейс для вывода списков */}
        {/* renderItem - используется аналогично методу map, пишем туда выводимые данные*/}
        <FlatList
          // указываем флаг с пом-ю которого refreshcontrol понимает показывать или нет наши данные
          refreshing={isLoading}
          // далее указываем что будем обновлять:
          onRefresh={fetchPromise}
          keyExtractor={(item) => item.id}
          data={data}
          renderItem={({ item }) => (
            <Joke text={item.value} navigation={navigation} id={item.id} title={item.created_at} />
          )}
        />
        <Text style={styles.text}>Hello World!</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder={"Введите Пароль"}
          keyboardType={"numeric"}
        />
        <StatusBar style="auto" />
        <Button title="Нажми на меня" onPress={() => console.log("test")} />
      </View>
    </View>
  )
}
