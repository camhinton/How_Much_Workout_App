import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Image, Text, SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.white}>How Much?</Text>

      <Image style={styles.logo} source={require("./assets/how_much.jpg")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  white: {
    color: "#fff",
  },
  logo: {
    width: 200,
    height: 200,
  },
});
