import { FlatList, Platform, SafeAreaView, Text, View } from "react-native"
import { styles } from "./About.styles"

export const About = () => {
  if (Platform.OS === "android") {
    const container = () => {}

    return (
      // SafeAreaView = чтобы контент не наезжал например на челку айфона
      <SafeAreaView style={styles.container}>
        {/* <FlatList /> */}
        <View style={[styles.box, { flex: 2 }]}>
          <Text>About</Text>
          <Text style={styles.content}> </Text>
        </View>
        <View style={styles.box}>
          <Text>2</Text>
          <Text style={[styles.content, { backgroundColor: "whitesmoke" }]}> </Text>
        </View>
        <View style={[styles.box, { backgroundColor: "yellow" }]}>
          <Text>3</Text>
          <Text style={[styles.content, { backgroundColor: "gray" }]}> </Text>
        </View>
      </SafeAreaView>
    )
  }
}
