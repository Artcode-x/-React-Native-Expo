import { useEffect, useState } from "react"
import { ActivityIndicator, FlatList, Text, TextInput, View, Button, TouchableOpacity } from "react-native"

import { styles } from "./Main.styles"
import { StatusBar } from "expo-status-bar"
import { Joke } from "./components/Joke/Joke"

export const Main = ({ navigation }) => {
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

  if (isLoading) {
    return (
      <ActivityIndicator size={"large"} style={{ flex: 1, justifyContent: "center", alignItems: "center" }} />
    )
  }
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Button
          style={styles.button}
          title="Перейти на страницу о нас"
          onPress={() => navigation.navigate("AboutScreen")}
        />
        <ActivityIndicator size={"large"} color={"wheat"} />
        <FlatList
          refreshing={isLoading}
          onRefresh={fetchPromise}
          keyExtractor={(item) => item.id}
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("JokeScreen", { id: item.id, title: item.created_at })}
            >
              <Joke text={item.value} />
            </TouchableOpacity>
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
        <Button title={"Нажми на меня"} onPress={() => console.log("test")}>
          Нажми на меня
        </Button>
      </View>
    </View>
  )
}
