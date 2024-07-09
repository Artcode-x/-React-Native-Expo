import { StatusBar } from "expo-status-bar"
import { FlatList, Keyboard, Text, TextInput, View } from "react-native"
import { styles } from "./App.css"
import { useEffect, useState } from "react"

export default function App() {
  const [name, setName] = useState()
  const [data, setData] = useState()

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/search?query=fet")
      .then((res) => res.json())
      .then((res) => setData(res.result))
  })

  // console.log(data)

  return (
    <View style={styles.container}>
      {/* Flatlist - используется для вывода контента со скроллом / Предоставляет интерфейс для вывода списков */}

      {/* renderItem - используется аналогично методу map, пишем туда выводимые данные*/}
      <FlatList
        data={data}
        renderItem={({ item }) => <Text>{item.value}</Text>}
        keyExtractor={(item) => item.id}
      />

      {/* {data.map((el) => (
        <Text key={el.id} style={styles.container}>
          {el.value}
        </Text>
      ))} */}

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
