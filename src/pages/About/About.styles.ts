import { Platform, StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: 'center',
    flexDirection: "column",
  },
  box: {
    margin: Platform.OS === "android" ? 10 : 5,
    flex: 1,
    backgroundColor: "orange",
    width: "50%",
    // height: 150,
    opacity: 0.9,
    borderWidth: 2,
    borderColor: "red",
    borderStyle: "dotted",
    // top: Platform.OS === "ios" ? 150 : 50,
    // left: 15,
  },
  box2: {},
  box3: {},
  content: {
    flex: 1,
    backgroundColor: "wheat",
  },
})
